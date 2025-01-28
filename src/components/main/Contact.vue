<script setup lang="ts">
import Container from '../containers/Container.vue';
import Title from "../Title.vue";
import Line from "../Line.vue";
import ContactButton from '../ContactButton.vue';
import { contactButtons } from '@/constants';
</script>

<template>
    <Container classname="text-tertiary" id="contact">
        <Line />
        <Title title="Contact" />
        <div class="mb-8">
            <p class="font-k2d">ช่องทางการติดต่อทั้งหมด</p>
        </div>
        <div className="flex flex-wrap items-center justify-between">
            <ContactButton v-for="cb in contactButtons" :text="cb.text" :icon-path="cb.iconPath" :href="cb.href"
                :on-click="cb.onClick" />
        </div>
    </Container>
</template>