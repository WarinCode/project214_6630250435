<script setup lang="ts">
import { ref, inject } from "vue";
import axios, { HttpStatusCode, AxiosError } from "axios";
import Swal from "sweetalert2";
import FormContainer from './containers/FormContainer.vue';
import InputField from './InputField.vue';
import SelectField from './SelectField.vue';
import ActionButton from './ActionButton.vue';
import { CourseProviderType } from "@/types";
import CourseModel, { CourseRef } from '@/types/models/course';
import { grades, credits } from '@/constants';
import { getRefValues, getCurrentId, formValidation, getApiUrl, getAxiosConfigs } from "@/utils";

const { courses, fetching } = inject<CourseProviderType>("course") as CourseProviderType;

const course: CourseRef = {
    id: ref<string>(""),
    courseName: ref<string>(""),
    courseCode: ref<string>(""),
    grade: ref<string>(""),
    credit: ref<number>(0)
}

const clearInputs = (): void => {
    course.courseName.value = "";
    course.courseCode.value = "";
    course.grade.value = "";
    course.credit.value = 0;

    document.querySelector<HTMLInputElement>("#courseName")!.value = "";
    document.querySelector<HTMLInputElement>("#courseCode")!.value = "";
    document.querySelector<HTMLSelectElement>("#grade")!.value = "";
    document.querySelector<HTMLSelectElement>("#credit")!.value = "";
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
    const payload: CourseModel = {
        ...getRefValues(course),
        id: getCurrentId(courses.value)
    };

    try {
        formValidation(payload, courses.value);

        const url: string = getApiUrl() + "/courses";
        const { status } = await axios.post<CourseModel>(url + "/create", payload, getAxiosConfigs());

        if (status === HttpStatusCode.Created) {
            await fetching<CourseModel[]>(url, courses);
            await Swal.fire({
                title: "สำเร็จ",
                text: "เพิ่มรายวิชาใหม่สำเร็จ",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
            })
            return;
        }

        throw new Error("ไม่สามารถเพิ่มรายวิชาได้!");
    } catch (e: unknown) {
        if (e instanceof AxiosError || e instanceof Error) {
            Swal.fire({
                title: "เกิดข้อผิดพลาดขึ้น",
                text: e.message,
                icon: "error",
            })
        }
    } finally {
        clearInputs();
    }
}
</script>

<template>
    <FormContainer :on-submit="handleSubmit"
        classname="mt-8 grid grid-cols-2 grid-rows-3 place-items-center text-tertiary font-k2d gap-y-12 gap-x-32 max-[430px]:gap-0 max-[430px]:flex max-[430px]:flex-col max-[430px]:items-center">
        <InputField id="courseName" label-name="ชื่อวิชา" :on-input="(e: Event): void => handleInput('courseName', e)"
            :attributes="{
                type: 'text',
                minlength: 4,
                maxlength: 50,
            }" classname="max-[430px]:mb-4" />
        <InputField id="courseCode" label-name="รหัสวิชา" :on-input="(e: Event): void => handleInput('courseCode', e)"
            :attributes="{
                type: 'text',
                minlength: 1,
                maxlength: 8,
            }" classname="max-[430px]:mb-4" />
        <SelectField id="grade" label-name="เกรด" :option-list="grades"
            :on-input="(e: Event): void => handleInput('grade', e)" classname="max-[430px]:mb-4" />
        <SelectField id="credit" label-name="หน่วยกิต" :option-list="credits"
            :on-input="(e: Event): void => handleInput('credit', e)" classname="max-[430px]:mb-8" />
        <ActionButton text="บันทึก" classname="col-span-2 mt-4 w-[250px] max-[430px]:w-full" type="submit"
            icon-path="assets/svgs/plus-solid.svg" icon-class-name="h-[18px] w-[18px]" />
    </FormContainer>
</template>