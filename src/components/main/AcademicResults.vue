<script setup lang="ts">
import { ref, onMounted, Ref } from "vue";
import axios, { AxiosResponse, AxiosError, HttpStatusCode } from "axios";
import Container from "../containers/Container.vue";
import Title from "../Title.vue";
import Line from "../Line.vue";
import Courses from "../Courses.vue";
import GPAX from "../GPAX.vue";
import CourseModel from "@/types/models/course";
import { getLocalhost } from "@/utils";
import { GPAXType } from "@/types/models/gpa";

const courses = ref<CourseModel[]>([]);
const gpax = ref<GPAXType>({ gpax: 0 });

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

onMounted(async (): Promise<void> => {
    const url: string = getLocalhost();

    await fetchData<CourseModel[]>(url + "/courses", courses);
    await fetchData<GPAXType>(url + "/gpax", gpax);
});
</script>

<template>
    <Container classname="text-tertiary" id="academic-results">
        <Line classname="my-24" />
        <div>
            <Title title="Academic Results" />
            <p class="font-k2d mb-12">แบบฟอร์มสำหรับเพิ่มผลการเรียน</p>
        </div>
        <!-- <AddDataForm /> -->
        <Line classname="my-24" />
        <div>
            <p v-if="courses.length === 0" class="font-k2d mb-12 text-center">
                ยังไม่มีรายวิชาที่นำมาแสดงในตอนนี้โปรดเพิ่มรายวิชาก่อน
            </p>
            <div v-else class="flex items-center justify-between mb-12">
                <p class="font-k2d">ผลการเรียนทั้งหมด</p>
                <GPAX :gpax="gpax.gpax" />
            </div>
            <Courses :courses="courses" />
        </div>
    </Container>
</template>