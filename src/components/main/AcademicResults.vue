<script setup lang="ts">
import Container from "../containers/Container.vue";
import CourseProvider from "../providers/CourseProvider.vue";
import Title from "../Title.vue";
import Line from "../Line.vue";
import CourseHeader from "../CourseHeader.vue";
import Courses from "../Courses.vue";
import AddDataForm from "../AddDataForm.vue";
</script>

<template>
    <Container classname="text-tertiary" id="academic-results">
        <CourseProvider>
            <Line classname="my-24" />
            <div>
                <Title title="Academic Results" />
                <p class="font-k2d mb-12">แบบฟอร์มสำหรับเพิ่มผลการเรียน</p>
            </div>
            <AddDataForm />
            <Line classname="my-24" />
            <div>
                <CourseHeader />
                <Courses />
            </div>
        </CourseProvider>
    </Container>
</template>