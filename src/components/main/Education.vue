<script setup lang="ts">
import Container from '../containers/Container.vue';
import Line from '../Line.vue';

const data = {
    universityName: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา",
    faculty: "วิทยาศาสตร์ ศรีราชา",
    major: "วิทยาการคอมพิวเตอร์",
    period: "กำลังศึกษาอยู่",
    img: "/assets/imgs/KU-SRC.jpg",
    facebookLink: "https://web.facebook.com/KasetsartUniversity",
    location: "https://maps.app.goo.gl/rtVuC3BGS47hGkJ2A"
}
</script>

<template>
    <Container classname="text-tertiary" id="education">
        <div>
            <Title title="Education" />
            <p class="font-k2d leading-8">
                โรงเรียนที่เรียนจบและสำเร็จการศึกษามาแล้วและมหาลัยที่กำลังศึกษาอยู่ ณ
                ปัจจุบัน
            </p>
        </div>
        <div class="grid grid-cols-2 grid-rows-2 place-items-center gap-y-16 gap-x-4 mt-12">
        
        </div>
    </Container>
</template>