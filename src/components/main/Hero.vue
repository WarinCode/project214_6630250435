<script setup lang="ts">
import { ref, onMounted } from "vue";
import Container from "../containers/Container.vue";
import Typing from "../Typing.vue";

const i = ref(1);
const texts = ref<string[]>(["ความสำเร็จคือผลรวมของการพัฒนาตัวเองในทุกๆ วัน",
  "ถ้าอยากไปให้ไกล ต้องเริ่มก้าวตั้งแต่วันนี้",
  "ความล้มเหลวไม่ใช่จุดจบ แต่เป็นบทเรียนสำหรับก้าวต่อไป"])

const changeBackground = (): void => {
  if (i.value == 4) {
    i.value = 1;
  } else {
    i.value++;
  }
}

onMounted((): void => {
  setInterval(changeBackground, 5500);
});
</script>

<template>
  <Container id="hero" classname="px-[0px] w-full h-screen">
    <div class="w-full h-screen bg-no-repeat bg-center object-cover" :class="{
      'bg-[url(assets/imgs/hero.jpg)]': i == 1,
      'bg-[url(assets/imgs/hero2.jpg)]': i == 2,
      'bg-[url(assets/imgs/hero3.jpg)]': i == 3,
      'bg-[url(assets/imgs/hero4.jpg)]': i == 4
    }">
      <div
        class="w-full h-full bg-gradient-to-t from-black via-[#000000bb] to-transparent flex flex-col justify-center items-start px-28 font-k2d">
        <Typing :texts="texts" classname="text-4xl font-k2d text-secondary" />
        <div class="text-tertiary w-9/12 leading-8 font-k2d tracking-wider mt-8">
          <p>การพัฒนาความรู้ด้านการเขียนโปรแกรมเป็นกระบวนการที่ต่อเนื่อง ไม่ว่าคุณจะเป็นมือใหม่หรือมีผู้มีประสบการณ์แล้ว
            การเรียนรู้สิ่งใหม่ๆ และ การฝึกฝนทักษะอย่างสม่ำเสมอจะช่วยให้คุณเติบโตเป็นนักพัฒนาที่ดียิ่งขึ้น</p>
          <p>จงอย่าลืมว่าการพัฒนาทักษะด้านนี้ต้องใช้เวลาและความเพียรพยายาม ความผิดพลาดคือบทเรียนที่ทำให้คุณแข็งแกร่งขึ้น
            จงอย่าหยุดที่จะเรียนรู้จากมันและก้าวต่อไปข้างหน้าอย่างมั่นใจ</p>
        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped>
#hero>div {
  transition: all 2300ms ease-in-out;
  animation: fade 1s;
}


@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>