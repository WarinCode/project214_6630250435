<script setup lang="ts">
import { LineProps } from '@/types/propTypes';

defineProps<LineProps>();
</script>

<template>
    <div class="bg-line w-full h-[0.5px] opacity-10 my-24" :class="classname"></div>
</template>