<script setup lang="ts">
import { DownloadButtonProps } from '@/types/propTypes';
import { buttonStyled } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps<DownloadButtonProps>();
</script>

<template>
    <button :class="buttonStyled">
        <a :href="to" :download="true" target="_blank" className="flex items-center justify-center">
            <span>
                <FontAwesomeIcon :icon="icon" class="fa text-2xl text-white delay-200 ease-linear transition-colors" />
            </span>
            <span className="ms-2 font-k2d">{{ text }}</span>
        </a>
    </button>
</template>

<style scoped>
button:hover>a span .fa {
    color: black;
}
</style>