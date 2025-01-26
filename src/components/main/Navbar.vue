<script setup lang="ts">
import { ref } from "vue";
import NavLink from "../NavLink.vue";
import { navItemData } from "@/constants";
import { NavItemData } from "@/types";

const navItems = ref<NavItemData[]>(navItemData);
</script>

<template>
    <nav
        class="flex flex-col p-6 w-full sticky -top-1 h-20 z-50 px-28 backdrop-blur-lg transition-[height] ease-linear delay-100">
        <div class="flex items-center justify-between">
            <div class="flex items-center w-1/2 cursor-default">
                <img src="/assets/logo.svg" alt="vue-logo" class="w-12 h-12 transition delay-100 ease-in-out" />
                <h4 class="capitalize ms-3 text-2xl text-secondary">
                    vue portfolio
                </h4>
            </div>
            <ul class="flex items-center justify-evenly w-1/2 cursor-pointer">
                <NavLink v-for="item of navItems" :href="item.href" :text="item.text" />
            </ul>
        </div>
    </nav>
</template>