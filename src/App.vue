<script setup>
import MainLayout from './layouts/Main.vue';
import BreadCrumb from './components/BreadCrumb.vue';
</script>

<template>
  <MainLayout>
    <div class="flex w-full h-full flex-col p-4 gap-4">
      <BreadCrumb class="font-bold border-b"></BreadCrumb>
      <div class="flex">
        <router-view></router-view>
      </div>
    </div>
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
