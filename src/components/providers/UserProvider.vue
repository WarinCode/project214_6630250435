<script setup lang="ts">
import axios, { AxiosResponse, AxiosError, HttpStatusCode } from "axios";
import { ref, provide, onMounted } from "vue";
import UserModel from "@/types/models/user";
import { getLocalhost } from "@/utils";
import { UserProviderType } from "@/types";

const user = ref<UserModel | null>(null);
const isError = ref<boolean>(false);

const fetchUser = async (): Promise<void> => {
    try {
        const { data, status }: AxiosResponse<UserModel> = await axios.get(getLocalhost() + "/user");

        if(status === HttpStatusCode.Ok){
            user.value = data;
            return;
        } 

        throw new Error("Somethin went wrong!");
    } catch(err: unknown){
        if(err instanceof AxiosError){
            isError.value = true;
            console.error(err.message);
        }
    }
}

provide<UserProviderType>("user", { user, isError });
onMounted(fetchUser);
</script>

<template>
    <slot></slot>
</template>