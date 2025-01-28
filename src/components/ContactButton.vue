<script setup lang="ts">
import Icon from './Icon.vue';
import { ContactButtonProps } from '@/types/propTypes';
import { buttonStyled } from '@/constants';

defineProps<ContactButtonProps>();
</script>

<template>
    <button :className="buttonStyled">
        <a v-if="text === 'line'" href="#contact" @click="onClick"
            className="flex items-center justify-center w-full h-full">
            <Icon :iconPath="iconPath" />
            <span className="capitalize ms-2">{{ text }}</span>
        </a>
        <a v-else :href="href" target="_blank">
            <Icon :iconPath="iconPath" />
            <span className="capitalize ms-2">{{ text }}</span>
        </a>
    </button>
</template>

<style scoped>
button:hover>a img {
    filter: invert(0);
}
</style>