<template>
  <div v-if="!item.meta.hidden" class="siderbar-item-main">
    <!-- 当只有一级菜单时 -->
    <el-menu-item v-if="hasOneShowChild(item)" :index="resolvePath(item.path)">
      <i v-if="item.meta.icon" :class="item.meta.icon"></i>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>

    <!-- 多级菜单时，嵌套循环组件 -->
    <template v-else>
      <el-submenu :index="resolvePath(item.path)" popper-append-to-body>
        <template slot="title">
          <i v-if="item.meta.icon" :class="item.meta.icon"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </template>
        <!-- 调用自身组件（相当于递归）实现多级菜单嵌套 -->
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
        // this.menuItem = item;
        return true;
      }
      // if (item.children.length == 1) {
      // this.menuItem = item.children[0];
      // this.menuItem.meta.icon = item.meta.icon;
      // this.hasOneShowChild(this.menuItem);
      // return true;
      // }
      // this.menuItem = item;
      return false;
    },
    // getMenuItem(item) {
    //   let menuItem = {};
    //   if (!item.children) {
    //     menuItem = item;
    //     return menuItem;
    //   }
    //   if (item.children.length == 1) {
    //     menuItem = item.children[0];
    //     menuItem.meta.icon = item.meta.icon;
    //   }
    //   menuItem = item;
    //   return menuItem;
    // },
    resolvePath(routePath) {
      if (!this.item.children) {
        return this.basePath;
      }
      // node中的path模块用来拼接路径，父路径与当前路径拼接形成绝对路径
      return path.resolve(this.basePath, routePath);
    }
  },
  created() {
    // this.menuItem = this.getMenuItem(this.item);
  },
  mounted() {}
};
</script>
<style lang="scss" scoped></style>
