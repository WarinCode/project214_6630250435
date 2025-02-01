<script setup lang="ts">
import { defineProps } from "vue";
import { NavLinkProps } from "../types/propTypes";

defineProps<NavLinkProps>();
</script>

<template>
  <li class="nav-link text-tertiary transition-colors ease-in delay-200 hover:text-ocean-green">
    <a :href="href">{{ text }}</a>
  </li>
</template>