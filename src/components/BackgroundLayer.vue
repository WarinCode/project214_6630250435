<script setup lang="ts">
import { BackgroundLayerProps } from '@/types/propTypes';

defineProps<BackgroundLayerProps>();
</script>

<template>
    <div :class="classname"></div>
</template>