<script setup lang="ts">
import { TextAreaFieldProps } from '@/types/propTypes';
import InputWrapper from './InputWrapper.vue';

defineProps<TextAreaFieldProps>();
</script>

<template>
    <InputWrapper :classname="classname">
        <label :for="id" class="block mb-4 text-xl text-start">{{ labelName }}</label>
        <textarea :id="id" @input="onInput"
            class="resize-none outline-none w-full h-[180px] border-tertiary border-2 rounded bg-primary p-2 transition delay-150 ease-linear focus:border-ocean-green focus:caret-ocean-green overflow-auto"></textarea>
    </InputWrapper>
</template>