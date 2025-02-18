<script setup lang="ts">
import { ref, onMounted, provide } from "vue";
import { CourseProviderType } from "@/types";
import CourseModel from "@/types/models/course";
import { GPAXType } from "@/types/models/gpa";
import { getApiUrl } from "@/utils";
import useFetch from "@/hooks/useFetch";

const courses = ref<CourseModel[]>([]);
const gpaxObject = ref<GPAXType>({ gpax: 0 });

provide<CourseProviderType>("course", { courses, fetching: useFetch , gpaxObject });
onMounted(async (): Promise<void> => {
    const url: string = getApiUrl();

    await useFetch<CourseModel[]>(url + "/courses", courses);
    await useFetch<GPAXType>(url + "/gpax", gpaxObject);
});
</script>

<template>
    <slot></slot>
</template>