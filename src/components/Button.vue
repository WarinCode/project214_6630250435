<script setup lang="ts">
import { defineProps } from 'vue';
import { ButtonProps } from '@/types/propTypes';
import { buttonStyled } from '@/constants';

defineProps<ButtonProps>();
</script>

<template>
    <button :className="buttonStyled, classname">
        {{ text }}
    </button>
</template>