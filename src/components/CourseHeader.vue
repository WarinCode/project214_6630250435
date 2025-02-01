<script setup lang="ts">
import { inject } from 'vue';
import GPAX from './GPAX.vue';
import { CourseProviderType } from '@/types';

const { courses, gpaxObject } = inject<CourseProviderType>("course") as CourseProviderType;
</script>

<template>
    <p v-if="courses.length === 0" class="font-k2d mb-12 text-center">
        ยังไม่มีรายวิชาที่นำมาแสดงในตอนนี้โปรดเพิ่มรายวิชาก่อน
    </p>
    <div v-else class="flex items-center justify-between mb-12">
        <p class="font-k2d">ผลการเรียนทั้งหมด</p>
        <GPAX :gpax="gpaxObject.gpax" />
    </div>
</template>