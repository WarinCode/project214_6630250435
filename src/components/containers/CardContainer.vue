<script setup lang="ts">
import { CardContainerProps } from '@/types/propTypes';

defineProps<CardContainerProps>();
</script>

<template>
    <div :class="classname">
        <slot></slot>
    </div>
</template>