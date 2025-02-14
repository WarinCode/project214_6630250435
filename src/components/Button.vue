<script setup lang="ts">
import { ButtonProps } from '@/types/propTypes';
import { buttonStyled } from '@/constants';

defineProps<ButtonProps>();
</script>

<template>
    <button :class="buttonStyled, classname">
        {{ text }}
    </button>
</template>