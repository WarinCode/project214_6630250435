<script setup lang="ts">
import { InputWrapperProps } from '@/types/propTypes';

defineProps<InputWrapperProps>();
</script>

<template>
    <div class="w-full" :class="classname">
        <slot></slot>
    </div>
</template>