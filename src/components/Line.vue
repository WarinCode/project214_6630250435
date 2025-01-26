<script setup lang="ts">
import { LineProps } from '@/types/propTypes';

defineProps<LineProps>();
</script>

<template>
    <div class="bg-[#C6C6C6] w-full h-[0.5px] opacity-30 my-24" :class="classname"></div>
</template>