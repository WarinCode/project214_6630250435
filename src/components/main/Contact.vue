<script setup lang="ts">
import Container from '../containers/Container.vue';
import Title from "../Title.vue";
import Line from "../Line.vue";
// import ContactButton from '../ContactButton.vue';
import ContactForm from '../ContactForm.vue';
// import { contactButtons } from '@/constants';
</script>

<template>
    <Container classname="text-tertiary max-[840px]:px-20 max-[430px]:px-12" id="contact">
        <Line />
        <div data-aos="fade-right">
            <Title title="Contact" />
        </div>
        <div class="mb-8" data-aos="fade-right">
            <p class="font-k2d">ติดต่อผ่านแบบฟอร์มข้อมูลที่ติดต่อมาจะแจ้งเตือนผ่านอีเมลเรา</p>
        </div>
        <ContactForm />
        <!-- <div class="mb-8">
            <p class="font-k2d">ช่องทางการติดต่ออื่นๆ</p>
        </div> -->
        <!-- <div className="flex flex-wrap items-center justify-between">
            <ContactButton v-for="cb in contactButtons" :text="cb.text" :icon-path="cb.iconPath" :href="cb.href"
                :on-click="cb.onClick" />
        </div> -->
    </Container>
</template>