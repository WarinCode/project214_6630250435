<script setup lang="ts">
    import { TitleProps } from '../types/propTypes';

    defineProps<TitleProps>();
</script>

<template>
    <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent inline-block mb-8 max-[450px]:text-3xl max-[360px]:text-3xl">
        < {{ title }} />
    </h1>
</template>