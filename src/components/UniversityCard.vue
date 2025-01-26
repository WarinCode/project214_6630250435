<script setup lang="ts">
import CardContainer from './containers/CardContainer.vue';
import CardImageTop from './CardImageTop.vue';
import CardHeader from './CardHeader.vue';
import CardTitle from './CardTitle.vue';
import CardBody from './CardBody.vue';
import CardDetails from './CardDetails.vue';
import CardLink from './CardLink.vue';
import { UniversityCardProps } from '@/types/propTypes';

defineProps<UniversityCardProps>();
</script>

<template>
    <CardContainer>
        <CardImageTop :src="data.img" :alt="data.universityName" />
        <CardBody>
            <template #card-body>
                <CardHeader>
                    <template #card-header>
                        <CardTitle :title="data.universityName" classname="text-base" />
                        <span class="absolute right-4 text-secondary">
                            <CardLink :href="data.location" icon="" classname="text-xl cursor-pointer" />
                            />
                            <CardLink :href="data.facebookLink" icon="" classname="text-xl cursor-pointer ms-4" />
                            />
                        </span>
                    </template>
                </CardHeader>
                <CardDetails>
                    <template #card-details>
                        <p>คณะ: {{ data.faculty }}</p>
                        <p>สาขา: {{ data.major }}</p>
                        <p>ระยะเวลา: {{ data.period }}</p>
                    </template>
                </CardDetails>
            </template>
        </CardBody>
    </CardContainer>
</template>