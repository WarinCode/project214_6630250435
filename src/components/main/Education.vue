<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Container from '../containers/Container.vue';
import Title from '../Title.vue';
import Line from '../Line.vue';
import UniversityCard from '../UniversityCard.vue';
import SchoolCard from '../SchoolCard.vue';
import { Schools } from '@/types/models/school';
import UniversityModel from '@/types/models/university';
import { getApiUrl } from '@/utils';
import useFetchAll from '@/hooks/useFetchAll';

const schools = ref<Schools>([]);
const university = ref<UniversityModel | null>(null);
const isError = ref<boolean>(false);

onMounted((): void => {
    (async (): Promise<void> => {
        try {
            await useFetchAll<Schools | UniversityModel | null>(
                [getApiUrl() + "/schools", getApiUrl() + "/university"],
                [schools, university]
            );
            isError.value = false;
        } catch (e: unknown) {
            if (e instanceof Error) {
                console.error(e);
                isError.value = true;
            }
        }
    })();
});

</script>

<template>
    <Container classname="text-tertiary max-[430px]:px-12" id="education">
        <Line />
        <di data-aos="fade-right">
            <Title title="Education" />
            <p class="font-k2d leading-8">
                โรงเรียนที่เรียนจบและสำเร็จการศึกษามาแล้วและมหาลัยที่กำลังศึกษาอยู่ ณ
                ปัจจุบัน
            </p>
        </di>
        <div class="grid grid-cols-2 grid-rows-2 place-items-center gap-y-16 gap-x-4 mt-12 max-[430px]:grid-cols-1 max-[430px]:grid-flow-row">
            <template v-if="isError"></template>
            <template v-else>
                <SchoolCard v-for="school in schools" :data="school" />
                <div v-if="university === null"></div>
                <UniversityCard v-else :data="university" />
            </template>
        </div>
    </Container>
</template>