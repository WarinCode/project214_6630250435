<script setup lang="ts">
import { inject } from 'vue';
import Container from '../containers/Container.vue';
import Title from '../Title.vue';
import DownloadButton from '../DownloadButton.vue';
import BackgroundLayer from '../BackgroundLayer.vue';
import { UserProviderType } from '@/types';

const { user } = inject<UserProviderType>("user") as UserProviderType;
</script>

<template>
    <Container classname="h-max mb-12 pt-12" id="about">
        <div class="flex items-start justify-between">
            <div class="pt-12 w-1/2">
                <Title title="About" />
                <p class="font-k2d leading-8 w-full text-wrap text-tertiary">
                    สวัสดีเราชื่อ {{ user?.fullname }} รหัสนิสิต {{ user?.studentId }}
                    นิสิตชั้นปีที่ {{ user?.sophomore }} คณะ {{ user?.faculty }} สาขา
                    {{ user?.major }} (CS27) {{ user?.university }} (KU83) อายุ {{ user?.age }} ปี
                    เวลาว่าง {{ user?.hobbies }} เป้าหมายหลักในอนาคตต้องการเป็น Full Stack
                    Developer
                </p>
                <div class="mt-8">
                    <DownloadButton text="ดาวโหลด์ CV" to="/assets/cv/resume.pdf"
                        icon-path="assets/svgs/file-lines-solid.svg" />
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