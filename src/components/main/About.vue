<script setup lang="ts">
import { inject, ref } from 'vue';
import { useModal } from 'vue-final-modal';
import Container from '../containers/Container.vue';
import Title from '../Title.vue';
import ActionButton from "../ActionButton.vue";
import DownloadButton from '../DownloadButton.vue';
import BackgroundLayer from '../BackgroundLayer.vue';
import CircleIcon from '../CircleIcon.vue';
import Typing from '../Typing.vue';
import { UserProviderType } from '@/types';
import { contactButtons } from '@/constants';
import EditUserForm from '../EditUserForm.vue';

const { user } = inject<UserProviderType>("user") as UserProviderType;
const texts = ref<string[]>(["Frontend Developer", "Backend Developer", "Full Stack Developer"]);

const { open, close } = useModal({
    component: EditUserForm,
    attrs: {
        title: "กำลังแก้ไขข้อมูล",
        onConfirm(): void {
            close();
        },
    }
})
</script>

<template>
    <Container classname="h-max mb-12 pt-12 max-[430px]:px-12" id="about">
        <div class="flex items-start justify-between max-[430px]:flex-col-reverse max-[430px]:items-center">
            <div class="pt-8 w-1/2 max-[430px]:w-full" data-aos="fade-right">
                <Title title="About" />
                <p class="font-k2d leading-8 w-full text-wrap text-tertiary">
                    สวัสดีเราชื่อ {{ user?.fullname }} รหัสนิสิต {{ user?.studentId }}
                    นิสิตชั้นปีที่ {{ user?.sophomore }} คณะ {{ user?.faculty }} สาขา
                    {{ user?.major }} (CS27) {{ user?.university }} (KU83) อายุ {{ user?.age }} ปี
                    เวลาว่าง {{ user?.hobbies }} เป้าหมายหลักในอนาคตต้องการเป็น
                    <Typing :texts="texts" classname="text-ocean-green font-k2d ms-1 font-bold" :typing-speed="50"
                        :deleting-speed="30" />
                </p>
                <div class="w-1/2 flex items-center justify-between mt-4 max-[430px]:w-full max-[430px]:mt-6">
                    <CircleIcon v-for="icon in contactButtons" :icon-path="icon.iconPath" :text="icon.text"
                        :href="icon.href" :on-click="icon.onClick" />
                </div>
                <div class="mt-8 max-[430px]:flex max-[430px]:justify-center">
                    <DownloadButton text="ดาวโหลด์ CV" to="/assets/cv/resume.pdf"
                        icon-path="assets/svgs/file-lines-solid.svg" />
                </div>
            </div>
            <div class="relative w-1/2 max-[430px]:w-full" data-aos="fade-left">
                <img src="/assets/imgs/profile.jpg" alt="user-img"
                    class="w-[270px] h-[380px] z-10 border-8 border-transparent mx-auto" loading="lazy" />
                <BackgroundLayer
                    classname="absolute shadow-lg w-[270px] h-[380px] z-[-1] bg-zinc-900 opacity-40 top-6 right-28 border-8 border-transparent max-[430px]:hidden" />
                <BackgroundLayer
                    classname="absolute shadow-lg w-[270px] h-[380px] z-[-2] bg-zinc-900 opacity-20 top-12 right-20 max-[430px]:hidden" />
            </div>
        </div>
        <div
            class="mt-20 flex flex-row-reverse items-start justify-between max-[430px]:flex-col-reverse max-[430px]:items-center">
            <div class="pt-8 w-1/2 max-[430px]:w-full" data-aos="fade-left">
                <p class="font-k2d leading-8 w-full text-wrap text-tertiary">
                    ประวัติโดยย่อของเรา เราเป็นคนที่ชื่นชอบในการเขียนโปรแกรม เขียนโค้ดเป็นอย่างมาก ชื่นชอบที่จะ สร้าง,
                    ออกแบบ และ พัฒนาเว็บไซต์เป็นของตัวเอง แล้วนำไปใช้งานจริง หรือ แก้ไขปัญหาได้
                    เราจึงได้ตัดใจเลือกเรียนสาขา {{ user?.major }} {{ user?.university }} เพื่อศึกษาหาความรู้
                    เพิ่มทักษะความรู้ความสามารถในการเขียนโปรแกรมของตนเองให้เก่งยิ่งขึ้นกว่านี้
                    เพื่อพร้อมสำหรับการที่เราจะไปทำงานจริง สิ่งที่สำคัญที่สุดของการเป็น Developer คือ
                    <q class="italic text-yellow-200">
                        ต้องเรียนรู้ผึกสนพัฒนาตัวเองอยู่ตลอดเวลา
                        ให้ทันต่อเทคโนโลยีในโลกปัจจุบัน และ ต้องมีใจรักกับสิ่งที่ทำ
                    </q>
                </p>
                <div class="mt-10">
                    <ActionButton text="แก้ไขข้อมูล" classname="font-k2d mx-auto"
                        icon-path="assets/svgs/pen-to-square-regular.svg" type="button" :on-click="open" />
                </div>
            </div>
            <div class="relative w-1/2 max-[430px]:w-full" data-aos="fade-right">
                <img src="/assets/imgs/profile2.jpg" alt="user-img"
                    class="w-[270px] h-[380px] z-10 border-8 border-transparent mx-auto" loading="lazy" />
                <BackgroundLayer
                    classname="absolute shadow-lg w-[270px] h-[380px] z-[-1] bg-zinc-900 opacity-40 top-6 left-28 border-8 border-transparent max-[430px]:hidden" />
                <BackgroundLayer
                    classname="absolute shadow-lg w-[270px] h-[380px] z-[-2] bg-zinc-900 opacity-20 top-12 left-20 max-[430px]:hidden" />
            </div>
        </div>
    </Container>
</template>