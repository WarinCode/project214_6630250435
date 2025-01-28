<script setup lang="ts">
import { CardLinkProps } from '@/types/propTypes';
import Icon from "./Icon.vue";

defineProps<CardLinkProps>();
</script>

<template>
    <a :class="classname" :href="href" target="_blank">
        <Icon :icon-path="iconPath" classname="h-4 w-4"/>
    </a>
</template>