<template>
  <div class="sidebar-main">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        class="el-menu-vertical"
        :collapse="isCollapse"
        :collapse-transition="false"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
      >
        <siderbar-item
          v-for="item in accessRoutes"
          :key="item.path"
          :item="item"
          :base-path="item.path"
        ></siderbar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SiderbarItem from "./SidebarItem";
import { layoutMixin } from "../../../mixins/layout.js";
import { userMixin } from "../../../mixins/user.js";
export default {
  name: "Sidebar",
  mixins: [layoutMixin, userMixin],
  components: {
    SiderbarItem
  },
  data() {
    return {};
  },
  computed: {
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "style@/variable.scss";
.sidebar-main {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: $menuBg;
}
</style>
