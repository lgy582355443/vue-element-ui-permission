<template>
  <div class="tags-Breadcrumb-main">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="item in levelList" :key="item.name">
          <a @click.prevent="cutRoute(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "TagsBreadcrumb",
  components: {},
  props: {},
  data() {
    return {
      levelList: null
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  computed: {},
  methods: {
    // 生成面包屑
    getBreadcrumb() {
      // $route.matched一个数组，包含当前路由的所有嵌套路径片段的路由记录 。
      this.levelList = this.$route.matched.filter(
        item => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    },
    cutRoute(item) {
      if (item.redirect == this.$route.path || item.path == this.$route.path) {
        return;
      }
      if (item.redirect) {
        this.$router.push(item.redirect);
        return;
      } else {
        this.$router.push(item.path);
      }
    }
  },
  created() {
    this.getBreadcrumb();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.tags-Breadcrumb-main {
  width: 100%;
  font-size: 15px;
  line-height: 50px;
}
</style>
