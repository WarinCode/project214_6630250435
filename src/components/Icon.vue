<script setup lang="ts">
import { IconProps } from '@/types/propTypes';

defineProps<IconProps>();
</script>

<template>
    <img :src="iconPath" loading="lazy" class="h-5 w-5 inline invert transition ease-linear delay-200" :class="classname">
</template>