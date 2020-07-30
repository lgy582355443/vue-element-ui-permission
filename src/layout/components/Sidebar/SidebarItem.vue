<template>
  <div v-if="!item.meta.hidden" class="siderbar-item-main">
    <!-- 当只有一级菜单时 -->
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
          (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
          !item.meta.alwaysShow
      "
    >
      <sidebar-link :to="resolvePath(onlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(item.path)"
          class="submenu-title-noDropdown"
        >
          <i v-if="item.meta.icon" :class="item.meta.icon"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </sidebar-link>
    </template>
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
          :key="child.path"
          :item="child"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        ></siderbar-item>
      </el-submenu>
    </template>
  </div>
</template>

<script>
import path from "path";
import { isExternal } from "@/utils/validate";
import SidebarLink from "./SidebarLink";
export default {
  name: "SiderbarItem",
  components: {
    SidebarLink
  },
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
    this.onlyOneChild = null;
    return {
      menuItem: null
    };
  },
  watch: {
    // $route(){
    // }
  },
  computed: {},
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.meta.hidden) {
          return false;
        } else {
          // this.onlyOneChild等于最后一项子路由
          this.onlyOneChild = item;
          return true;
        }
      });
      // 当只有一个子路由器时，默认显示子路由器
      if (showingChildren.length === 1) {
        return true;
      }
      // 如果没有要显示的子路由器，则显示父路由器
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }
      return false;
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      // node中的path模块用来拼接路径，父路径与当前路径拼接形成绝对路径
      return path.resolve(this.basePath, routePath);
    }
  }
};
</script>
<style lang="scss" scoped></style>
