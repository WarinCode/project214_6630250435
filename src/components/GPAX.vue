<script setup lang="ts">
import { GPAXProps } from '@/types/propTypes';

defineProps<GPAXProps>();
</script>

<template>
    <span class="font-k2d">- เกรดเฉลี่ยสะสม <span className='text-lg font-bold'>{{ gpax }}</span></span>
</template>