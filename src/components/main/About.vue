<script setup lang="ts">
import Container from '../containers/Container.vue';
import Title from '../Title.vue';
import DownloadButton from '../DownloadButton.vue';
import BackgroundLayer from '../BackgroundLayer.vue';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
    <Container classname="h-max mb-12 pt-12" id="about">
        <div class="flex items-start justify-between">
            <div class="pt-12 w-1/2">
                <Title title="About" />
                <p class="font-k2d leading-8 w-full text-wrap text-tertiary">
                    สวัสดีเราชื่อ วรินทร์ สายปัญญา รหัสนิสิต 6630250435 นิสิตชั้นปีที่ 2 คณะ วิทยาศาสตร์ ศรีราชา สาขา
                    วิทยาการคอมพิวเตอร์ (CS27) มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา (KU83) อายุ 20 ปี เวลาว่าง
                    ชอบเขียนโค้ดและอ่านหนังสือภาษาโปรแกรม เป้าหมายหลักในอนาคตต้องการเป็น Full Stack Developer
                </p>
                <div class="mt-8">
                    <DownloadButton text="ดาวโหลด์ CV" to="/assets/cv/resume.pdf" :icon="faFilePdf" />
                </div>
            </div>
            <div class="relative w-1/2">
                <img src="/assets/imgs/profile.jpg" alt="user-img"
                    class="w-[270px] h-[380px] z-10 border-8 border-transparent mx-auto" loading="lazy" />
                <BackgroundLayer
                    class="absolute shadow-lg w-[270px] h-[380px] z-[-1] bg-zinc-900 opacity-40 top-6 right-28 border-8 border-transparent" />
                <BackgroundLayer
                    class="absolute shadow-lg w-[270px] h-[380px] z-[-2] bg-zinc-900 opacity-20 top-12 right-20" />
            </div>
        </div>
    </Container>
</template>