<template>
  <div class="sidebar-main" ref="sidebarMain">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :router="true"
    >
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/admin/home">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>-->
      <el-menu-item :index="table">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item :index="home">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { layoutMixin } from "../../../mixins/layout.js";
export default {
  name: "Sidebar",
  mixins: [layoutMixin],
  components: {},
  props: {},
  data() {
    return {
      home: "/admin/home",
      table: "/admin/table",
      isa: true
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
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {},
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
