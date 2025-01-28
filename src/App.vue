<script setup lang="ts">
import AppContainer from './components/containers/AppContainer.vue';
import Navbar from './components/main/Navbar.vue';
import About from './components/main/About.vue';
import Education from './components/main/Education.vue';
import Skills from "./components/main/Skills.vue";
import Contact from './components/main/Contact.vue';
import Footer from './components/main/Footer.vue';

</script>

<template>
  <AppContainer>
    <Navbar />
    <About />
    <Education/>
    <Skills />
    <Contact/>
    <Footer />
  </AppContainer>
</template>