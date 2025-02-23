<script setup lang="ts">
import { ref } from "vue";
import NavLink from './NavLink.vue';
import { NavItemData } from "@/types";
import { navItemData } from '@/constants';
import { MobileMenuProps } from "@/types/propTypes";

const navItems = ref<NavItemData[]>(navItemData);
defineProps<MobileMenuProps>()
</script>

<template>
    <ul class="flex flex-col justi w-full cursor-pointer tracking-wide mt-6" :class="classname">
        <NavLink v-for="item of navItems" :href="item.href" :text="item.text" />
    </ul>
</template>
