<script setup lang="ts">
import { CardHeaderProps } from '@/types/propTypes';

defineProps<CardHeaderProps>();
</script>

<template>
    <header class="flex items-center relative" :class="classname">
        <slot name="card-header"></slot>
    </header>
</template>