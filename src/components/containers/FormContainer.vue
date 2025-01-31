<script setup lang="ts">
import { FormContainerProps } from '@/types/propTypes';

defineProps<FormContainerProps>();
</script>

<template>
    <form :class="classname" @submit.prevent="onSubmit">
        <slot></slot>
    </form>
</template>