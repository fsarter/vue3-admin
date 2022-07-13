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
          key: 'home',
          label: 'Home',
          children: [],
        },
        {
          key: 'dashboard',
          label: 'Dashboard',
          children: [],
        },
        {
          key: 'settings',
          label: 'Settings',
          children: [
            { key: 'account', label: 'Account', children: [] },
            { key: 'Notification', label: 'Notification', children: [] },
          ],
        },
      ],
    };
  },
  mounted() {
    this.convertRoutesToMenuData();
  },
  methods: {
    handleMenuClick(menuItemData) {
      console.log('menuItemData===>', menuItemData);
    },
    convertRoutesToMenuData() {
      const parsedNodes = {};
      const parse = (routes, parentNode) => {
        for (const route of routes) {
          const flatPath = parentNode.key
            ? parentNode.key + '/' + route.path
            : route.path;
          if (!parsedNodes[flatPath]) {
            const node = {
              key: flatPath,
              label: route.name,
              children: [],
            };
            if (route.children && route.children.length > 0) {
              parse(route.children, node);
              console.log('node===>', node, route.children);
            }
            parsedNodes[flatPath] = node;
            parentNode.children.push(node);
          } else {
            parentNode.children.push(parsedNodes[flatPath]);
          }
        }
      };
      const roots = { children: [] };
      console.log('===>routes===>', this.$router.routes);
      parse(this.$router.getRoutes(), roots);
      console.log('===>', parsedNodes, roots);
    },
  },
};
</script>
