<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios, { AxiosError } from "axios";
import FormContainer from './containers/FormContainer.vue';
import InputField from './InputField.vue';
import SelectField from './SelectField.vue';
import ActionButton from './ActionButton.vue';
import CourseModel, { CourseRef } from '@/types/models/course';
import { grades, credits } from '@/constants';

// const course: CourseModel = {
//     id: "",
//     courseName: "",
//     courseCode: "",
//     grade: "",
//     credit: 0
// }

const course: CourseRef = {
    id: ref<string>(""),
    courseName: ref<string>(""),
    courseCode: ref<string>(""),
    grade: ref<string>(""),
    credit: ref<number>(0)
}

const handleInput = (key: keyof CourseRef, e: Event): void => {
    const { value } = <HTMLInputElement | HTMLSelectElement>e.target;
    if (key === "credit") {
        course["credit"].value = parseInt(value);
    } else {
        course[key].value = value;
    }
}

const handleSubmit = async (): Promise<void> => {
    // const payload = course;

    try {
        // const { data } = await axios.post("", payload);
    } catch(e: unknown){
        if(e instanceof AxiosError){
            console.error(e.message);
        }
    }
}

</script>

<template>
    <FormContainer :on-submit="handleSubmit"
        class="mt-8 grid grid-cols-2 grid-rows-3 place-items-center text-tertiary font-k2d gap-y-12">
        <InputField id="courseName" label-name="ชื่อวิชา" :on-input="(e: Event): void => handleInput('courseName', e)"
            :attributes="{
                type: 'text',
                minlength: 4,
                maxlength: 50,
            }" />
        <InputField id="courseCode" label-name="รหัสวิชา" :on-input="(e: Event): void => handleInput('courseCode', e)"
            :attributes="{
                type: 'text',
                minlength: 1,
                maxlength: 8,
            }" />
        <SelectField id="grade" label-name="เกรด" :option-list="grades"
            :on-input="(e: Event): void => handleInput('grade', e)" />
        <SelectField id="credit" label-name="หน่วยกิต" :option-list="credits"
            :on-input="(e: Event): void => handleInput('credit', e)" />
        <ActionButton text="บันทึก" classname="col-span-2 mt-4 w-[250px]" type="submit"
            icon-path="assets/svgs/plus-solid.svg" icon-class-name="h-[18px] w-[18px]" />
    </FormContainer>
</template>