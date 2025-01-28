<script setup lang="ts">
import Container from '../containers/Container.vue';
import Title from "../Title.vue";
import Line from "../Line.vue";
import SkillItem from "../SkillItem.vue";
import { skills } from '@/constants';

</script>

<template>
    <Container classname="text-tertiary" id="skills">
        <Line classname="my-24" />
        <div>
            <Title title="Skills" />
            <p class="font-k2d leading-8">
                Programming Languages, Frameworks, Libraries, IDEs และ Tools
                ทั้งหมดที่ใช้งานเป็น
            </p>
        </div>
        <div class="grid grid-cols-6 grid-flow-row place-items-center mt-10 gap-y-6">
            <SkillItem v-for="skill in skills" :path="skill.path" :name="skill.name" />
        </div>
    </Container>
</template>
