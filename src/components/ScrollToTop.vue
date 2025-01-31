<script setup lang="ts">
import { ref } from "vue";
import useScroll from "@/hooks/useScroll";
import Icon from "../components/Icon.vue";

const isHidden = ref<boolean>(true);

const handleClick = (e: MouseEvent): void => {
    scroll({ top: 0 });
}

const handleScroll = (e: Event): void => {
    const { y } = useScroll();
    isHidden.value = y < 3000;
}

window.onscroll = handleScroll;
</script>

<template>
    <div v-show="!isHidden"
        class="bg-zinc-900 w-[50px] h-[50px] fixed bottom-8 right-8 rounded-xl cursor-pointer p-3 text-center animate-bounce"
        @click="handleClick">
        <Icon icon-path="assets/svgs/chevron-up-solid.svg"
            class="text-tertiary h-3 w-3 transition delay-100 ease-in-out" />
    </div>
</template>