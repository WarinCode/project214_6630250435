<script setup lang="ts">
import { ref, onMounted, provide, Ref } from "vue";
import axios, { AxiosResponse, AxiosError, HttpStatusCode } from "axios";
import { CourseProviderType } from "@/types";
import CourseModel from "@/types/models/course";
import { GPAXType } from "@/types/models/gpa";
import { getLocalhost } from "@/utils";

const courses = ref<CourseModel[]>([]);
const gpaxObject = ref<GPAXType>({ gpax: 0 });

const fetchData = async <T = any>(url: string, ref: Ref<T>): Promise<void> => {
    try {
        const { status, data }: AxiosResponse<T> = await axios.get<T>(url);

        if (status === HttpStatusCode.Ok) {
            ref.value = data;
            return;
        }

        throw new Error("Something went wrong!");
    } catch (e: unknown) {
        if (e instanceof AxiosError) {
            console.error(e.message);
        }
    }
}

provide<CourseProviderType>("course", { courses, fetchData, gpaxObject });
onMounted(async (): Promise<void> => {
    const url: string = getLocalhost();

    await fetchData<CourseModel[]>(url + "/courses", courses);
    await fetchData<GPAXType>(url + "/gpax", gpaxObject);
});
</script>

<template>
    <slot></slot>
</template>