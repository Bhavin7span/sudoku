<script setup>
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <NavBar />
  <RouterView class="my-[84px]" />
  <FooterComponent />
</template>
