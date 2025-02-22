<script setup lang="ts">
import { CardHeaderProps } from '@/types/propTypes';

defineProps<CardHeaderProps>();
</script>

<template>
    <header class="flex items-center relative max-[430px]:static max-[430px]:flex-col max-[430px]:items-start" :class="classname">
        <slot name="card-header"></slot>
    </header>
</template>