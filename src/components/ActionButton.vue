<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ActionButtonProps } from '@/types/propTypes';
import { buttonStyled } from '@/constants';

defineProps<ActionButtonProps>();
</script>

<template>
    <button class="flex items-center justify-center" :class="buttonStyled" :type="type" @click="onClick">
        <span>
            <FontAwesomeIcon :icon="icon" class="fa text-2xl text-white delay-200 ease-linear transition-colors" />
            <span class="capitalize ms-2">{{ text }}</span>
        </span>
    </button>
</template>

<style scoped>
button:hover>span .fa {
    color: black;
}
</style>