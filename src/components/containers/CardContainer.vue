<script setup lang="ts">
import { CardContainerProps } from '@/types/propTypes';

defineProps<CardContainerProps>();
</script>

<template>
    <div :class="classname" data-aos="zoom-in-up">
        <slot></slot>
    </div>
</template>