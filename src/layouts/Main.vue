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
      menuData: [],
    };
  },
  mounted() {
    this.menuData = this.convertRoutesToMenuData(this.$router.options.routes);
  },
  methods: {
    handleMenuClick(menuItemData) {
      if (!menuItemData.children || menuItemData.children.length === 0) {
        this.$router.push(menuItemData.key);
      }
    },
    convertRoutesToMenuData(routes, parentNormalizedPath) {
      const parsedNodes = [];
      for (const route of routes) {
        const normalizedPath = parentNormalizedPath
          ? parentNormalizedPath + '/' + route.path
          : route.path;
        const node = {
          key: normalizedPath,
          label: route.name,
          children: [],
        };
        if (route.children && route.children.length > 0) {
          node.children = this.convertRoutesToMenuData(
            route.children,
            normalizedPath
          );
        }
        parsedNodes.push(node);
      }
      return parsedNodes;
    },
  },
};
</script>
