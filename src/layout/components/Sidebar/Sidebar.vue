<template>
  <div class="sidebar-main">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        class="el-menu-vertical"
        :default-active="activeMenu"
        :collapse="isCollapse"
        :collapse-transition="false"
        :router="true"
      >
        <siderbar-item
          v-for="item in accessRoutes"
          :key="item.name"
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
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    }
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.sidebar-main {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
