<template>
  <div
    :class="`my-menu-item ${active ? 'active' : ''}`"
    @click="clickMenuItem()"
  >
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
  inject: ['onClickMenuItem', 'currentClickMenu'],
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
  computed: {
    active() {
      return (
        this.currentClickMenu &&
        this.currentClickMenu.key === this.itemData.key &&
        (this.itemData.children || []).length === 0
      );
    },
  },
  methods: {
    clickMenuItem() {
      this.expand = !this.expand;
      this.onClickMenuItem(this.itemData);
    },
  },
};
</script>
<style lang="postcss" scoped>
.my-menu-item {
  @apply flex items-center justify-between h-12 cursor-pointer hover:bg-blue-100 hover:font-bold;
}
.my-menu-item.active {
  @apply font-bold text-white bg-blue-600;
}
</style>
