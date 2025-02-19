<script setup lang="ts">
import { ref, onMounted } from "vue";
import { TypingProps } from "@/types/propTypes";

const { texts, typingSpeed, deletingSpeed, delayBetweenTexts } = withDefaults(defineProps<TypingProps>(), {
    typingSpeed: 100,
    deletingSpeed: 50,
    delayBetweenTexts: 3000,
});
const displayedText = ref("");

onMounted((): void => {
    let textIndex: number = 0;
    let charIndex: number = 0;
    let isDeleting: boolean = false;

    const typeEffect = (): void => {
        if (!isDeleting && charIndex < texts[textIndex].length) {
            displayedText.value += texts[textIndex][charIndex];
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            displayedText.value = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, deletingSpeed);
        } else {
            if (!isDeleting) {
                setTimeout((): void => {
                    isDeleting = true;
                    typeEffect();
                }, delayBetweenTexts);
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeEffect, typingSpeed);
            }
        }
    };

    typeEffect();
});
</script>

<template>
    <div class="inline-block">
        <p class="tracking-widest mb-8 inline" :class="classname">{{ displayedText
            }}<span id="cursor" class="inline-block w-[10px]">|</span></p>
    </div>
</template>


<style scoped>
#cursor {
    animation: blink 0.7s infinite;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}
</style>