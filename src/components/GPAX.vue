<script setup lang="ts">
import { GPAXProps } from '@/types/propTypes';

defineProps<GPAXProps>();
</script>

<template>
    <span class="font-k2d">- เกรดเฉลี่ยสะสม <span class='text-lg font-bold text-ocean-green'>{{ gpax }}</span></span>
</template>