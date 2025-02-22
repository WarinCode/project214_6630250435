<script setup lang="ts">
import { CircleIconProps } from '@/types/propTypes';

const { text } = defineProps<CircleIconProps>();
const isLine: boolean = text === "line"
</script>

<template>
    <a v-if="isLine" class="w-14 h-14 p-2 rounded-full border-2 border-tertiary cursor-pointer bg-transparent max-[430px]:w-13 max-[430px]:h-13"
        :class="classname" @click="onClick">
        <img :src="iconPath" class="w-6 h-6 mx-auto mt-[6px] invert max-[430px]:w-5 max-[430px]:h-5 max-[430px]:mt-2">
    </a>
    <a v-else class="w-14 h-14 p-2 rounded-full border-2 border-tertiary cursor-pointer bg-transparent max-[430px]:w-13 max-[430px]:h-13"
        :class="classname" :href="href" target="_blank">
        <img :src="iconPath" class="w-6 h-6 mx-auto mt-[6px] invert max-[430px]:w-5 max-[430px]:h-5 max-[430px]:mt-2">
    </a>
</template>

<style scoped>
a,
img {
    transition: all 200ms linear;
}

img {
    opacity: 0.8;
}

a:hover {
    border-color: #42b883;
    background: #42b883;

    >img {
        filter: invert(0);
        opacity: 1;
    }
}
</style>