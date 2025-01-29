<script setup lang="ts">
import { AppContainerProps } from '@/types/propTypes';

defineProps<AppContainerProps>();
</script>

<template>
    <main class="w-full h-full" :class="classname">
        <slot></slot>
    </main>
</template>