<template>
  <div class="my-menu-item" @click="clickMenuItem()">
    <div class="flex">
      <div
        :class="`flex ${
          ['', 'w-4', 'w-8', 'w-12', 'w-16', 'w-20', 'w-24', 'w-28'][level]
        }`"
      ></div>
      <span>{{ itemData.label }}</span>
    </div>
    <div v-if="itemData.children && itemData.children.length > 0">
      <SvgIcon
        :name="
          expand
            ? 'keyboard_arrow_down_FILL0_wght400_GRAD0_opsz48'
            : 'keyboard_arrow_left_FILL0_wght400_GRAD0_opsz48'
        "
        class="w-4 h-4"
      />
    </div>
  </div>

  <div v-if="expand">
    <MenuItem
      v-for="item in itemData.children"
      :key="item.key"
      :item-data="item"
      :level="level + 1"
    />
  </div>
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
  data() {
    return {
      expand: false,
    };
  },
  methods: {
    clickMenuItem() {
      this.expand = !this.expand;
    },
  },
};
</script>
<style lang="postcss" scoped>
.my-menu-item {
  @apply flex items-center justify-between h-12 cursor-pointer hover:bg-blue-100 hover:font-bold active:font-bold active:text-white active:bg-blue-600;
}
</style>
