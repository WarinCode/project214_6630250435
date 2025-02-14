<script setup lang="ts">
import { IconProps } from '@/types/propTypes';

defineProps<IconProps>();
</script>

<template>
    <img :src="iconPath" loading="lazy" class="h-4 w-4 inline invert transition ease-linear delay-200 select-none"
        :class="classname" @click="onClick">
</template>