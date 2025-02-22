<script setup lang="ts">
import { CardImageTopProps } from '@/types/propTypes';

defineProps<CardImageTopProps>();
</script>

<template>
    <div class="overflow-hidden rounded-md" :class="classname">
        <img :src="src" :alt="alt" loading="lazy"
            class="w-full h-[230px] bg-cover rounded-md transition delay-200 ease-linear hover:scale-150 max-[430px]:h-[200px]" />
    </div>
</template>