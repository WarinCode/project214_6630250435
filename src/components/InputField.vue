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
        <input :="attributes" :value="value" @input="onInput"
            class="outline-none w-full h-14 border-tertiary border-2 rounded bg-primary p-2 transition delay-150 ease-linear focus:caret-ocean-green focus:border-ocean-green"
            :class="classname" :id="id" required />
    </InputWrapper>
</template>