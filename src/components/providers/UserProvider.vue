<script setup lang="ts">
import { ref, provide, onMounted } from "vue";
import UserModel from "@/types/models/user";
import { getApiUrl } from "@/utils";
import { UserProviderType } from "@/types";
import useFetch from "@/hooks/useFetch";

const user = ref<UserModel | null>(null);
const isError = ref<boolean>(false);

provide<UserProviderType>("user", { user, fetching: useFetch, isError });
onMounted((): void => {
    (async (): Promise<void> => {
        try {
            await useFetch<UserModel | null>(getApiUrl() + "/user", user);
            isError.value = false;
        } catch (e: unknown) {
            isError.value = true;
        }
    })();
});
</script>

<template>
    <slot></slot>
</template>