<script setup lang="ts">
import { ref, inject } from 'vue';
import axios, { AxiosError, HttpStatusCode } from 'axios';
import { useModal, ModalsContainer } from 'vue-final-modal';
import Swal from 'sweetalert2';
import Line from './Line.vue';
import Icon from './Icon.vue';
import { CourseProps } from '@/types/propTypes';
import { CourseProviderType } from '@/types';
import { getApiUrl } from '@/utils';
import CourseModel from '@/types/models/course';
import EditDataForm from './EditDataForm.vue';

const course = defineProps<CourseProps>();
const { courses, fetching } = inject<CourseProviderType>("course") as CourseProviderType;
const isOpen = ref<boolean>(false);

const { open, close } = useModal({
    component: EditDataForm,
    attrs: {
        title: "กำลังแก้ไขข้อมูล",
        ...course,
        onConfirm(): void {
            close();
        },
    }
})

const handleOpen = (): void => {
    isOpen.value = !isOpen.value;
}

const handleDelete = async (): Promise<void> => {
    const { isConfirmed } = await Swal.fire({
        title: `ลบวิชา`,
        text: `คุณต้องการลบวิชา ${course.courseName} ใช่หรือไม่`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "ใช่",
        cancelButtonText: "ไม่"
    })

    if (!isConfirmed) {
        return;
    }

    const url: string = `${getApiUrl()}/courses`;
    try {
        const { status, data } = await axios.delete<CourseModel>(url + `/${course.id}`);

        if (status === HttpStatusCode.Ok) {
            await fetching<CourseModel[]>(url, courses);
            await Swal.fire({
                title: "สำเร็จ",
                text: `ลบรายวิชา ${data.courseName} สำเร็จ`,
                icon: "success",
                showConfirmButton: false,
                timer: 2000
            });
            return;
        }

        throw new Error("ไม่สามารถลบรายวิชาได้!");
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
</script>

<template>
    <ModalsContainer />
    <div data-aos="flip-down"
        class="font-k2d text-tertiary w-3/4 bg-zinc-900 rounded-lg mb-8 p-6 shadow max-[430px]:w-full" :id="id">
        <div>
            <header class="w-full cursor-pointer text-lg translate-y-2 flex items-center justify-between"
                @click="handleOpen">
                <p class="max-[430px]:text-base">{{ courseName }}</p>
                <Icon v-if="!isOpen" icon-path="assets/svgs/chevron-up-solid.svg" classname="h-3 w-3" />
                <Icon v-else icon-path="assets/svgs/chevron-down-solid.svg" classname="h-3 w-3" />
            </header>
            <div class="transition-all ease-linear delay-100"
                :class="{ 'h-[80px] opacity-100': isOpen, 'h-0 opacity-0': !isOpen }">
                <Line classname="mt-8 mb-6" />
                <p className="text-sm">รหัสวิชา: {{ courseCode }}</p>
                <p className="text-sm my-2">
                    เกรด: <span className="font-bold">{{ grade }}</span>
                </p>
                <p className="text-sm">หน่วยกิต: {{ credit }}</p>
            </div>
            <div class="flex items-center justify-end transition-all ease-linear delay-100"
                :class="{ 'h-[40px] opacity-100': isOpen, 'h-0 opacity-0': !isOpen }">
                <Icon icon-path="assets/svgs/pen-to-square-regular.svg" classname="h-4 w-4 me-4 cursor-pointer"
                    :on-click="open" />
                <Icon icon-path="assets/svgs/trash-solid.svg" classname="h-4 w-4 me-4 cursor-pointer"
                    :on-click="handleDelete" />
            </div>
        </div>
    </div>
</template>