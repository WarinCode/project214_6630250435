<script setup lang="ts">
import { CardBodyProps } from '@/types/propTypes';

defineProps<CardBodyProps>();
</script>

<template>
    <div class="py-4 font-k2d" :class="classname">
        <slot name="card-body"></slot>
    </div>
</template>