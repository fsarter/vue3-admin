<template>
  <div class="flex">
    <div
      :class="`flex ${
        ['', 'w-4', 'w-8', 'w-12', 'w-16', 'w-20', 'w-24', 'w-28'][level]
      }`"
    ></div>
    <span>{{ itemData.label }}</span>
  </div>
  <MenuItem
    v-for="item in itemData.children"
    :key="item.key"
    :item-data="item"
    :level="level + 1"
  />
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    itemData: {
      type: Object,
      default: () => {
        return { key: 'default-key', label: 'Not Set', children: [] };
      },
    },
    level: {
      type: Number,
      default: 0,
    },
  },
};
</script>
