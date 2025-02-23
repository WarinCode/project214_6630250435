<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ImageCarouselProps } from '@/types/propTypes';
import { ImageObject } from '@/types';

const { images, delay = 5500 } = defineProps<ImageCarouselProps>();
const index = ref<number>(0);
const currentImage = ref<string>(images[0]);
const imageObject = ref<ImageObject>({});

images.forEach((image: string): void => {
    imageObject.value[`bg-[url(${image})]`] = false;
});
const keys: string[] = Object.keys(imageObject.value);

currentImage.value = keys[0];
imageObject.value[currentImage.value] = true;

const changeBackground = (): void => {
    if (index.value === images.length - 1) {
        index.value = 0;
    } else {
        index.value++;
    }


    currentImage.value = keys[index.value];
    keys.forEach((key: string): void => {
        if (key === currentImage.value) {
            imageObject.value[key] = true;
        } else {
            imageObject.value[key] = false;
        }
    })
}

onMounted((): void => {
    setInterval(changeBackground, delay);
});
</script>

<template>
    <div id="image-carousel" class="w-full h-screen bg-no-repeat bg-center" :class="imageObject">
        <slot></slot>
    </div>
</template>

<style scoped>
#image-carousel {
    transition: all 3s ease-in-out;
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