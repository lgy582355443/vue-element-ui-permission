<template>
  <div v-if="!item.meta.hidden" class="siderbar-item-main">
    <el-menu-item v-if="hasOneShowChild(menuItem)" :index="resolvePath(menuItem.path)">
      <i v-if="menuItem.meta.icon" :class="menuItem.meta.icon"></i>
      <span slot="title">{{ menuItem.meta.title }}</span>
    </el-menu-item>

    <template v-else>
      <el-submenu :index="resolvePath(item.path)" popper-append-to-body>
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
    </template>
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
      menuItem: null
    };
  },
  watch: {},
  computed: {},
  methods: {
    //判断是否只有一个子路由。
    hasOneShowChild(item) {
      if (!item.children) {
        return true;
      }
      if (item.children.length == 1) {
        return true;
      }
      return false;
    },
    getMenuItem() {
      if (!this.item.children) {
        this.menuItem = this.item;
        return
      }
      if (this.item.children.length == 1) {
        this.menuItem = this.item.children[0];
        this.menuItem.meta.icon = this.item.meta.icon;
        return
      }
      this.menuItem = this.item;
      return
    },
    resolvePath(routePath) {
      if (!this.item.children) {
        return this.basePath;
      }
      // node中的path模块用来拼接路径，父路径与当前路径拼接形成绝对路径
      return path.resolve(this.basePath, routePath);
    }
  },
  created() {
    this.getMenuItem();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped></style>
