<template>
  <div class="flex w-48 border flex-col">
    <MenuItem v-for="item in menuData" :key="item.key" :item-data="item" />
  </div>
</template>
<script>
import MenuItem from './MenuItem.vue';
export default {
  components: { MenuItem },
  props: {
    menuData: {
      type: Array,
      default: () => [
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
    },
  },
};
</script>
