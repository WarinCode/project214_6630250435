<script setup lang="ts">
import { ref } from "vue";
import NavLink from './NavLink.vue';
import { NavItemData } from "@/types";
import { navItemData } from '@/constants';

const navItems = ref<NavItemData[]>(navItemData);
</script>

<template>
    <ul class="flex flex-col justi w-full cursor-pointer tracking-wide mt-6">
        <NavLink v-for="item of navItems" :href="item.href" :text="item.text" />
    </ul>
</template>
