<script setup>
import MainLayout from './layouts/Main.vue';
</script>

<template>
  <MainLayout>
    <h1 class="underline text-red-500 text-3xl">Main Layout</h1>
    <SvgIcon
      name="keyboard_arrow_down_FILL0_wght400_GRAD0_opsz48"
      class="text-red-500"
    />
    <router-view></router-view>
  </MainLayout>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
