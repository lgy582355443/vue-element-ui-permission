<template>
  <div class="sidebar-main" ref="sidebarMain">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      :collapse="isCollapse"
      :collapse-transition="false"
      :router="true"
    >
      <siderbar-item
        v-for="item in asyncRoutes"
        :key="item.name"
        :item="item"
        :base-path="item.path"
      ></siderbar-item>
    </el-menu>
  </div>
</template>

<script>
import SiderbarItem from "./SidebarItem";
import { layoutMixin } from "../../../mixins/layout.js";
import asyncRoutes from "../../../router/asyncRoutes.js";
export default {
  name: "Sidebar",
  mixins: [layoutMixin],
  components: {
    SiderbarItem
  },
  props: {},
  data() {
    return {
      asyncRoutes: asyncRoutes
    };
  },
  watch: {
    isCollapse(newData) {
      if (newData) {
        this.$refs.sidebarMain.style.width = "60px";
      } else {
        this.$refs.sidebarMain.style.width = "200px";
      }
    }
  },
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath, "------------------------");
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath, "-------------------");
    },
    handleSelect(index, indexPath) {
      console.log("index:", index, "indexPath", indexPath);
    }
  },
  created() {
    console.log(this.asyncRoutes);
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.sidebar-main {
  height: 100%;
  width: $sidebarMax;
  border: 1px solid #dcdfe6;
  overflow: hidden;
  transition: all 0.2s;
}
.el-menu-vertical-demo {
  height: 100%;
  border: none;
}
</style>
