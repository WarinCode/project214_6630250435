<script setup lang="ts">
import { ref, inject, watchEffect } from "vue";
import { VueFinalModal } from 'vue-final-modal';
import axios, { AxiosError, HttpStatusCode } from "axios";
import Swal from "sweetalert2";
import FormContainer from './containers/FormContainer.vue';
import InputField from './InputField.vue';
import SelectField from './SelectField.vue';
import ActionButton from './ActionButton.vue';
import Icon from "./Icon.vue";
import Line from "./Line.vue";
import { EditDataFormProps } from '@/types/propTypes';
import { grades, credits } from '@/constants';
import { CourseRef } from "@/types/models/course";
import { getRefValues, formValidation, getLocalhost } from "@/utils";
import CourseModel from "@/types/models/course";
import { CourseProviderType } from "@/types";

const { courses, fetchData } = inject<CourseProviderType>("course") as CourseProviderType;
const { id, courseName, courseCode, grade, credit } = defineProps<EditDataFormProps>();
const emit = defineEmits<{
    (e: 'confirm'): void
}>();

const defaultValue = ref<CourseModel>({ id, courseName, courseCode, grade, credit });

const course: CourseRef = {
    id: ref<string>(id),
    courseName: ref<string>(courseName),
    courseCode: ref<string>(courseCode),
    grade: ref<string>(grade),
    credit: ref<number>(credit)
}

const handleInput = (key: keyof CourseRef, e: Event): void => {
    const { value } = <HTMLInputElement | HTMLSelectElement>e.target;
    if (key === "credit") {
        course["credit"].value = parseInt(value);
    } else {
        course[key].value = value;
    }
}

const handleClose = async (): Promise<void> => {
    emit("confirm");
}

const handleEdit = async (): Promise<void> => {
    const payload: CourseModel = getRefValues(course);
    const url: string = `${getLocalhost()}/courses`;

    try {
        formValidation(payload, courses.value);

        const { status, data } = await axios.put<CourseModel>(url + `/${id}`, payload);

        if (status === HttpStatusCode.Ok) {
            await fetchData<CourseModel[]>(url, courses);
            await Swal.fire({
                title: "สำเร็จ",
                text: `แก้ไขรายวิชา ${data.courseName} สำเร็จ`,
                icon: "success",
                showConfirmButton: false,
                timer: 2000
            })
            defaultValue.value = data;
            await handleClose();
            return;
        }

        throw new Error("ไม่สามารถแก้ไขรายวิชาได้");
    } catch (e: unknown) {
        if (e instanceof AxiosError || e instanceof Error) {
            Swal.fire({
                title: "เกิดข้อผิดพลาดขึ้น",
                text: e.message,
                icon: "error",
            })
        }
    }
}

watchEffect((): void => {
    const filtered = courses.value.filter((item: CourseModel): boolean => item.id === id);
    defaultValue.value = filtered[0];
})
</script>

<template>
    <VueFinalModal class="flex justify-center items-center"
        content-class="flex flex-col justify-center mx-4 p-6 bg-primary border rounded-lg w-[700px] space-y-5"
        overlay-transition="vfm-fade" content-transition="vfm-fade">
        <header class="flex items-center justify-between">
            <span class="text-xl font-k2d text-tertiary">
                {{ title }}
            </span>
            <Icon icon-path="assets/svgs/xmark-solid.svg" classname="w-5 h-5 cursor-pointer" :on-click="handleClose" />
        </header>
        <Line />
        <FormContainer :on-submit="handleEdit"
            classname="grid grid-cols-2 grid-rows-3 place-items-center text-tertiary font-k2d gap-x-6 gap-y-8">
            <InputField id="courseName2" label-name="ชื่อวิชา"
                :on-input="(e: Event): void => handleInput('courseName', e)" :attributes="{
                    type: 'text',
                    minlength: 4,
                    maxlength: 50,
                }" classname="w-full" :value="defaultValue.courseName" />
            <InputField id="courseCode2" label-name="รหัสวิชา"
                :on-input="(e: Event): void => handleInput('courseCode', e)" :attributes="{
                    type: 'text',
                    minlength: 1,
                    maxlength: 8,
                }" classname="w-full" :value="defaultValue.courseCode" />
            <SelectField id="grade2" label-name="เกรด" :option-list="grades"
                :on-input="(e: Event): void => handleInput('grade', e)" :value="defaultValue.grade"
                classname="w-full" />
            <SelectField id="credit2" label-name="หน่วยกิต" :option-list="credits"
                :on-input="(e: Event): void => handleInput('credit', e)" :value="defaultValue.credit"
                classname="w-full" />
            <ActionButton text="แก้ไข" classname="col-span-2 mt-4 w-[250px]" type="submit"
                icon-path="assets/svgs/pen-to-square-regular.svg" icon-class-name="h-[18px] w-[18px]" />
        </FormContainer>
    </VueFinalModal>
</template>