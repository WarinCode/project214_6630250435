<script setup lang="ts">
import { CardTitleProps } from '@/types/propTypes';

defineProps < CardTitleProps > ();
</script>

<template>
    <h3 class="text-lg text-secondary" :class="classname">
        {{ title }}
    </h3>
</template>