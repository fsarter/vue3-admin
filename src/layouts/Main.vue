<template>
  <NavBar />
  <div class="flex h-full">
    <Menu @click-menu="handleMenuClick" :menu-data="menuData" />
    <div class="flex w-full justify-center items-center border">
      <slot />
    </div>
  </div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import Menu from '../components/Menu.vue';
export default {
  components: { NavBar, Menu },
  data() {
    return {
      menuData: [
        {
          key: 'Item.1',
          label: 'Item.1',
          children: [
            { key: 'Item.1.1', label: 'Item.1.1', children: [] },
            {
              key: 'Item.1.2',
              label: 'Item.1.2',
              children: [
                { key: 'Item.1.2.1', label: 'Item.1.2.1', children: [] },
                { key: 'Item.1.2.2', label: 'Item.1.2.2', children: [] },
              ],
            },
          ],
        },
        {
          key: 'Item.2',
          label: 'Item.2',
          children: [
            { key: 'Item.2.1', label: 'Item.2.1', children: [] },
            {
              key: 'Item.2.2',
              label: 'Item.2.2',
              children: [
                { key: 'Item.2.2.1', label: 'Item.2.2.1', children: [] },
                { key: 'Item.2.2.2', label: 'Item.2.2.2', children: [] },
              ],
            },
          ],
        },
        { key: 'Item.3', label: 'Item.3', children: [] },
        { key: 'Item.4', label: 'Item.4', children: [] },
      ],
    };
  },
  methods: {
    handleMenuClick(menuItemData) {
      console.log('menuItemData===>', menuItemData);
    },
  },
};
</script>
