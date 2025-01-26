<script setup lang="ts">
import Container from '../containers/Container.vue';
import Line from '../Line.vue';

const year: number = new Date().getFullYear() + 543;
</script>

<template>
    <Container classname="my-8" id="footer">
        <Line classname="mt-24 mb-8" />
        <footer class="font-k2d text-tertiary text-center text-sm">
            @Copyright {{ year }} | เขียนโค้ด และ ออกแบบโดย นาย {user?.fullname}
        </footer>
    </Container>
</template>