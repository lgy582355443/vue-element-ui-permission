<template>
  <div class="layout-main">
    <headers></headers>
    <div class="layout-content">
      <sidebar
        :class="[{ isCollapse: isCollapse }, 'layout-sidebar']"
      ></sidebar>
      <div :class="[{ isCollapse: isCollapse }, 'layout-show']">
        <nav-bar class="layout-tags-view"></nav-bar>
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <transition name="fade-transform" mode="out-in">
            <router-view class="show-main" :key="key"></router-view>
          </transition>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from "./components/Headers/Headers.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import NavBar from "./components/NavBar/NavBar.vue";
import { mapGetters } from "vuex";
export default {
  name: "Layout",
  components: {
    Headers,
    Sidebar,
    NavBar,
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapGetters(["isCollapse"]),
    key() {
      return this.$router.path;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "style@/variable.scss";
@import "style@/transition.scss";
.layout-main {
  width: 100%;
  height: 100%;
  .layout-content {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding-top: $headerHeight;
    overflow: hidden;
    .layout-sidebar {
      float: left;
      height: 100%;
      width: $sidebarMax;
      transition: all 0.2s;
      &.isCollapse {
        width: $sidebarMin;
      }
    }
    .layout-show {
      height: 100%;
      margin-left: $sidebarMax;
      transition: all 0.2s;
      &.isCollapse {
        margin-left: $sidebarMin;
      }
      .layout-tags-view {
        margin-left: 0 0 50px;
      }
      .show-main {
        width: 100%;
        box-sizing: border-box;
        padding: 20px;
        overflow: auto;
      }
    }
  }
}
</style>
