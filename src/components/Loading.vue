<script lang="ts" setup>
</script>

<template>
    <div class="spinner"></div>
</template>

<style scoped>
.spinner {
    width: 120px;
    height: 120px;
    display: grid;
    animation: spinner-plncf9 4s infinite;
}

.spinner::before,
.spinner::after {
    content: "";
    grid-area: 1/1;
    border: 11.5px solid;
    border-radius: 50%;
    border-color: #42b883 #42b883 #0000 #0000;
    mix-blend-mode: darken;
    animation: spinner-plncf9 1s infinite linear;
}

.spinner::after {
    border-color: #0000 #0000 #35495e #35495e;
    animation-direction: reverse;
}

@keyframes spinner-plncf9 {
    100% {
        transform: rotate(1turn);
    }
}
</style>