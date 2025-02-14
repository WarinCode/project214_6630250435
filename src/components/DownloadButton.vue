<script setup lang="ts">
import Icon from "./Icon.vue";
import { DownloadButtonProps } from '@/types/propTypes';
import { buttonStyled } from '@/constants';

defineProps<DownloadButtonProps>();
</script>

<template>
    <button :class="buttonStyled">
        <a :href="to" :download="true" target="_blank" class="flex items-center justify-center">
            <span>
                <Icon :icon-path="iconPath"/>
            </span>
            <span className="ms-2 font-k2d">{{ text }}</span>
        </a>
    </button>
</template>

<style scoped>
button:hover>a span img {
    filter: invert(0);
}
</style>