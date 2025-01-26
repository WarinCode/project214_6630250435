<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ContactButtonProps } from '@/types/propTypes';
import { buttonStyled } from '@/constants';

defineProps<ContactButtonProps>();
</script>

<template>
    <button :className="buttonStyled">
        <a v-if="text === 'line'" href="#contact" @click="onClick"
            className="flex items-center justify-center w-full h-full">
            <FontAwesomeIcon :icon="icon" class="fa text-2xl text-white delay-200 ease-linear transition-colors" />
            <span className="capitalize ms-2">{{ text }}</span>
        </a>
        <a v-else>
            <FontAwesomeIcon :icon="icon" class="fa text-2xl text-white delay-200 ease-linear transition-colors" />
            <span className="capitalize ms-2">{{ text }}</span>
        </a>
    </button>
</template>

<style scoped>
button:hover>a .fa {
    color: black;
}
</style>