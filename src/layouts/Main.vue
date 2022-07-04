<template>
  <NavBar />
  <div class="flex h-full">
    <Menu />
    <div class="flex w-full justify-center items-center border">
      <slot />
    </div>
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import Menu from "../components/Menu.vue";
export default {
  components: { NavBar, Menu },
};
</script>