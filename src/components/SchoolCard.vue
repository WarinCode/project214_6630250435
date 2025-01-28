<script setup lang="ts">
import CardContainer from './containers/CardContainer.vue';
import CardImageTop from './CardImageTop.vue';
import CardHeader from './CardHeader.vue';
import CardTitle from './CardTitle.vue';
import CardBody from './CardBody.vue';
import CardDetails from './CardDetails.vue';
import CardLink from './CardLink.vue';
import { SchoolCardProps } from '@/types/propTypes';

defineProps<SchoolCardProps>();
</script>

<template>
    <CardContainer classname="bg-primary w-[450px] h-[420px] overflow-hidden">
        <CardImageTop :src="data.img" :alt="data.schoolName" />
        <CardBody>
            <template #card-body>
                <CardHeader>
                    <template #card-header>
                        <CardTitle :title="data.schoolName" classname="text-base" />
                        <span class="absolute right-4 text-secondary">
                            <CardLink :href="data.location" icon-path="/assets/svgs/location-dot-solid.svg"
                                classname="text-xl cursor-pointer" />
                            <CardLink :href="data.facebookLink"
                                icon-path="/assets/svgs/arrow-up-right-from-square-solid.svg"
                                classname="text-xl cursor-pointer ms-4" />
                        </span>
                    </template>
                </CardHeader>
                <CardDetails>
                    <template #card-details>
                        <p>สาย: {{ data.studyPlan }}</p>
                        <p>ระยะเวลา: {{ data.period }}</p>
                    </template>
                </CardDetails>
            </template>
        </CardBody>
    </CardContainer>
</template>