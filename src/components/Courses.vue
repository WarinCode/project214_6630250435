<script setup lang="ts">
import { inject } from 'vue';
import { CourseProviderType } from '@/types';
import Course from './Course.vue';

const { courses } = inject<CourseProviderType>("course") as CourseProviderType;
</script>

<template>
    <div class="grid grid-cols-2 grid-flow-row place-items-center items-baseline gap-y-8">
        <Course v-for="course in courses" :id="course.id" :course-code="course.courseCode"
            :course-name="course.courseName" :grade="course.grade" :credit="course.credit" />
    </div>
</template>