<script setup lang="ts">
import { InputFieldProps } from '@/types/propTypes';
import InputWrapper from './InputWrapper.vue';

defineProps<InputFieldProps>();
</script>

<template>
    <InputWrapper>
        <label :for="id" class="block mb-4 text-xl">
            {{ labelName }}
        </label>
        <input :="attributes" v-model="model"
            class="outline-none w-3/4 h-12 border-tertiary border-2 rounded bg-primary ps-2 transition delay-150 ease-linear focus:border-secondary"
            :id="id" required />
    </InputWrapper>
</template>