<template>
  <div class="text-gray-500">{{ path }}</div>
</template>
<script>
export default {
  data() {
    return {
      path: '',
    };
  },
  mounted() {
    this.setPath(this.$route);
  },
  watch: {
    $route(to, from) {
      this.setPath(to);
    },
  },
  methods: {
    setPath(route) {
      const labels = route.matched.map((r) => r.name);
      this.path = labels.join('/');
    },
  },
};
</script>
