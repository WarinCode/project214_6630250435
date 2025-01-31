<script setup lang="ts">
import Icon from './Icon.vue';
import { ActionButtonProps } from '@/types/propTypes';
import { buttonStyled } from '@/constants';

defineProps<ActionButtonProps>();
</script>

<template>
    <button class="flex items-center justify-center" :class="buttonStyled, classname" :type="type" @click="onClick">
        <span>
            <Icon :icon-path="iconPath" :classname="iconClassName" />
            <span class="capitalize ms-2">{{ text }}</span>
        </span>
    </button>
</template>

<style scoped>
button:hover>span img {
    filter: invert(0);
}
</style>