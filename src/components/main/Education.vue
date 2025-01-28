<script setup lang="ts">
import { ref, onMounted, Ref } from 'vue';
import axios, { AxiosResponse, AxiosError, HttpStatusCode } from "axios";
import Container from '../containers/Container.vue';
import Title from '../Title.vue';
import Line from '../Line.vue';
import UniversityCard from '../UniversityCard.vue';
import SchoolCard from '../SchoolCard.vue';
import { Schools } from '@/types/models/school';
import UniversityModel from '@/types/models/university';
import { getLocalhost } from '@/utils';
import { SomeValue } from '@/types';

const schools = ref<Schools>([]);
const university = ref<UniversityModel | null>(null);
const isError = ref<boolean>(false);

const fetchEducation = async (): Promise<void> => {
    const url: string = getLocalhost();

    try {
        const responses: [Promise<AxiosResponse<Schools>>, Promise<AxiosResponse<UniversityModel>>] = [
            axios.get<Schools>(url + "/schools"),
            axios.get<UniversityModel>(url + "/university")
        ]
        const refs: [Ref<Schools>, Ref<UniversityModel | null>] = [schools, university];
        let i: number = 0;

        for await (const { data, status } of responses) {
            if (status === HttpStatusCode.Ok) {
                refs[i].value = <SomeValue<UniversityModel | Schools | null>>data;
            }
            i++;
        }
    } catch (e: unknown) {
        if (e instanceof AxiosError) {
            isError.value = true;
            console.error(e);
        }
    }
}

onMounted(fetchEducation);

</script>

<template>
    <Container classname="text-tertiary" id="education">
        <Line />
        <div>
            <Title title="Education" />
            <p class="font-k2d leading-8">
                โรงเรียนที่เรียนจบและสำเร็จการศึกษามาแล้วและมหาลัยที่กำลังศึกษาอยู่ ณ
                ปัจจุบัน
            </p>
        </div>
        <div class="grid grid-cols-2 grid-rows-2 place-items-center gap-y-16 gap-x-4 mt-12">
            <template v-if="isError"></template>
            <template v-else>
                <SchoolCard v-for="school in schools" :data="school" />
                <div v-if="university === null"></div>
                <UniversityCard v-else :data="university" />
            </template>
        </div>
    </Container>
</template>