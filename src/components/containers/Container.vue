<script setup lang="ts">
import { defineProps } from 'vue';
import { ContainerProps } from '@/types/propTypes';

defineProps<ContainerProps>();
</script>

<template>
    <section :id="id" class="px-28" :class="classname">
        <slot></slot>
    </section>
</template>