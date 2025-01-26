<script setup lang="ts">
import { defineProps } from "vue";
import { NavLinkProps } from "../types/propTypes";

defineProps<NavLinkProps>();
</script>

<template>
  <li class="nav-link text-tertiary">
    <a :href="href">{{ text }}</a>
  </li>
</template>