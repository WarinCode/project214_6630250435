<script setup lang="ts">
import { ref } from 'vue';
import Line from './Line.vue';
import Icon from './Icon.vue';
import { CourseProps } from '@/types/propTypes';

defineProps<CourseProps>();

const isOpen = ref<boolean>(false);

const handleOpen = (): void => {
    isOpen.value = !isOpen.value;
}
</script>

<template>
    <div class="font-k2d text-tertiary w-3/4 bg-zinc-900 rounded-lg mb-8 p-6 shadow ">
        <div>
            <header class="w-full cursor-pointer text-lg translate-y-2 flex items-center justify-between"
                @click="handleOpen">
                <p>{{ courseName }}</p>
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
                <Icon icon-path="assets/svgs/pen-to-square-regular.svg" classname="h-4 w-4 me-4 cursor-pointer" />
                <Icon icon-path="assets/svgs/trash-solid.svg" classname="h-4 w-4 me-4 cursor-pointer" />

                <!-- <AiOutlineEdit
            className="text-2xl me-4 cursor-pointer"
            onClick={handleOpenModal}
          />
          <AiOutlineDelete
            className="text-2xl cursor-pointer"
            onClick={() => handleDelete(id)}
          /> -->
            </div>
        </div>
    </div>
</template>