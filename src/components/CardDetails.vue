<script setup lang="ts">
import { CardDetailsProps } from '@/types/propTypes';

defineProps<CardDetailsProps>();
</script>

<template>
    <div class="mt-3 leading-7" :class="classname">
        <slot name="card-details"></slot>
    </div>
</template>