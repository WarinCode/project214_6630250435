<script setup lang="ts">
import Container from '../containers/Container.vue';
import Title from "../Title.vue";
import Line from "../Line.vue";
import SkillItem from "../SkillItem.vue";
import { skills } from '@/constants';

</script>

<template>
    <Container classname="text-tertiary max-[430px]:px-12" id="skills">
        <Line classname="my-24" />
        <div data-aos="fade-right">
            <Title title="Skills" />
            <p class="font-k2d leading-8">
                Programming Languages, Frameworks, Libraries, IDEs และ Tools
                ทั้งหมดที่ใช้งานเป็น
            </p>
        </div>
        <div class="grid grid-cols-6 grid-flow-row place-items-center mt-10 gap-y-6 max-[430px]:grid-cols-3 max-[430px]:gap-y-8 max-[430px]:gap-x-6">
            <SkillItem v-for="skill in skills" :path="skill.path" :name="skill.name" />
        </div>
    </Container>
</template>
