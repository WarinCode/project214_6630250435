<script setup lang="ts">
import { inject } from 'vue';
import Container from '../containers/Container.vue';
import Line from '../Line.vue';
import { UserProviderType } from '@/types';

const { user } = inject<UserProviderType>("user") as UserProviderType;
const year: number = new Date().getFullYear() + 543;
</script>

<template>
    <Container classname="my-8 max-[430px]:px-12" id="footer">
        <Line classname="mt-8 mb-8 max-[430px]:mt-20" />
        <footer class="font-k2d text-tertiary text-center text-sm max-[430px]:text-xs">
            @Copyright {{ year }} | เขียนโค้ด และ ออกแบบโดย นาย {{ user?.fullname }}
        </footer>
    </Container>
</template>