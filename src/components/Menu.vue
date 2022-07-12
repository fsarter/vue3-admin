<template>
  <div class="flex w-48 border flex-col">
    <MenuItem v-for="item in menuData" :key="item.key" :item-data="item" />
  </div>
</template>
<script>
import { computed } from 'vue';
import MenuItem from './MenuItem.vue';
export default {
  components: { MenuItem },
  props: {
    menuData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentClickMenu: null,
    };
  },
  emits: ['clickMenu'],
  provide() {
    return {
      onClickMenuItem: (e) => {
        this.currentClickMenu = e;
        this.$emit('clickMenu', e); // emit clickMenu event
      },
      currentClickMenu: computed(() => this.currentClickMenu),
    };
  },
};
</script>
