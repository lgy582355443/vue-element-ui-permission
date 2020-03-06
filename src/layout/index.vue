<template>
  <div class="layout-main">
    <navbar></navbar>
    <div class="layout-content">
      <sidebar class="layout-sidebar"></sidebar>
      <div class="layout-show">
        <tags-view class="layout-tags-view"></tags-view>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import TagsView from "./components/TagsView/TagsView.vue";
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
  computed: {},
  methods: {},
  created() {
    console.log('wobeizhixing');
  },
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
    .layout-show {
      flex: 1;
    }
  }
}
</style>
