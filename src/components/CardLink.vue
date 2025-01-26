<script setup lang="ts">
import { CardLinkProps } from '@/types/propTypes';

defineProps<CardLinkProps>();
</script>

<template>
    <a :class="classname" :href="href" target="_blank">
        <FontAwesomeIcon :icon="icon" class="fa text-2xl text-tertiary" />
    </a>
</template>