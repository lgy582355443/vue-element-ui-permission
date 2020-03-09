<template>
  <div v-if="!item.hidden" class="siderbar-item-main">
    <el-menu-item v-if="hasOneShowChild(item)" :index="resolvePath(onlyOneChild.path)">
      <i v-if="onlyOneChild.meta.icon" :class="onlyOneChild.meta.icon"></i>
      <span slot="title">{{ onlyOneChild.meta.title }}</span>
    </el-menu-item>

    <el-submenu v-else :index="resolvePath(item.path)">
      <template slot="title">
        <i v-if="item.meta.icon" :class="item.meta.icon"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </template>
      <siderbar-item
        v-for="child in item.children"
        :key="child.name"
        :item="child"
        :base-path="resolvePath(child.path)"
      ></siderbar-item>
    </el-submenu>
  </div>
</template>

<script>
import path from "path";
export default {
  name: "SiderbarItem",
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      onlyOneChild: null
    };
  },
  watch: {},
  computed: {},
  methods: {
    //判断是否只有一个子路由。
    hasOneShowChild(item) {
      if (!item.children) {
        this.onlyOneChild = item;
        return true;
      }
      if (item.children.length == 1) {
        this.onlyOneChild = item.children[0];
        this.onlyOneChild.meta.icon = item.meta.icon;
        return true;
      }
      return false;
    },
    resolvePath(routePath) {
      if (!this.item.children) {
        return this.basePath;
      }
      // node中的path模块用来拼接路径，父路径与当前路径拼接形成绝对路径
      return path.resolve(this.basePath, routePath);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped></style>
