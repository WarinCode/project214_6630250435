<script setup lang="ts">
import Container from "../containers/Container.vue";
import Typing from "../Typing.vue";
import ImageCarousel from "../ImageCarousel.vue";
import { typingTexts, images } from "@/constants";
</script>

<template>
  <Container id="hero" classname="px-[0px] w-full h-screen">
    <ImageCarousel :images="images">
      <div
        class="w-full h-full bg-gradient-to-t from-black via-[#000000bb] to-transparent flex flex-col justify-center items-start px-28 font-k2d max-[430px]:px-12">
        <Typing :texts="typingTexts" classname="text-4xl font-k2d text-secondary max-[430px]:text-2xl" />
        <div class="text-tertiary w-9/12 leading-8 font-k2d tracking-wider mt-8 text-base max-[430px]:text-sm">
          <p>การพัฒนาความรู้ด้านการเขียนโปรแกรมเป็นกระบวนการที่ต่อเนื่อง ไม่ว่าคุณจะเป็นมือใหม่หรือมีผู้มีประสบการณ์แล้ว
            การเรียนรู้สิ่งใหม่ๆ และ การฝึกฝนทักษะอย่างสม่ำเสมอจะช่วยให้คุณเติบโตเป็นนักพัฒนาที่ดียิ่งขึ้น</p>
          <p>จงอย่าลืมว่าการพัฒนาทักษะด้านนี้ต้องใช้เวลาและความเพียรพยายาม ความผิดพลาดคือบทเรียนที่ทำให้คุณแข็งแกร่งขึ้น
            จงอย่าหยุดที่จะเรียนรู้จากมันและก้าวต่อไปข้างหน้าอย่างมั่นใจ</p>
        </div>
      </div>
    </ImageCarousel>
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
