<template>
  <div class="layout-main">
    <navbar></navbar>
    <div class="layout-content">
      <sidebar :class="[{ isCollapse: isCollapse }, 'layout-sidebar']"></sidebar>
      <div class="layout-show">
        <tags-view class="layout-tags-view"></tags-view>
        <!-- <el-scrollbar class="show-main"> -->
          <transition name="fade-transform" mode="out-in">
            <router-view class="show-main"></router-view>
          </transition>
        <!-- </el-scrollbar> -->
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import TagsView from "./components/TagsView/TagsView.vue";
import { mapGetters } from "vuex";
export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    TagsView
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapGetters(["isCollapse"])
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.layout-main {
  width: 100%;
  height: 100%;
  .layout-content {
    display: flex;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding-top: $headerHeight;
    overflow: hidden;
    .layout-sidebar {
      height: 100%;
      flex: 0 0 $sidebarMax;
      border: $mainBorder;
      transition: all 0.2s;
      &.isCollapse {
        flex: 0 0 $sidebarMin;
      }
    }
    .layout-show {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      .layout-tags-view {
        flex: 0 0 50px;
      }
      .show-main {
        flex: 1;
        box-sizing: border-box;
        padding: 20px;
        // overflow: auto;
      }
    }
  }
}
</style>
