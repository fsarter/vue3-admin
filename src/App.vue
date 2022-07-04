<script setup>
import MainLayout from "./layouts/Main.vue";
</script>

<template>
  <MainLayout>
    <h1 class="underline text-red-500 text-3xl">Main Layout</h1>
  </MainLayout>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
