<script setup lang="ts">
import { SkillProps } from '@/types/propTypes';

defineProps<SkillProps>();
</script>

<template>
    <div class="skill w-32 h-32 cursor-pointer select-none" data-aos="flip-up">
        <img :src="path" :alt="name" loading="lazy" class="mx-auto w-16 h-16 transition-all delay-100 ease-in-out" />
        <p class="text-base text-center text-tertiary mt-3 transition-all delay-200 ease-in">
            {{ name }}
        </p>
    </div>
</template>

<style scoped>
div:hover {
    >img {
        scale: 1.1;
    }

    >p {
        color: #42b883;
    }
}
</style>