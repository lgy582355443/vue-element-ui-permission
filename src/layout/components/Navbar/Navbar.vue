<template>
  <div class="tags-view-main">
    <div
      :class="[{ isClose: isCollapse }, 'icon', 'navbar-switch']"
      @click="closeNav"
    >
      <i class="el-icon-s-fold"></i>
    </div>
    <nav-breadcrumb></nav-breadcrumb>
  </div>
</template>

<script>
import { layoutMixin } from "../../../mixins/layout.js";
import NavBreadcrumb from "./NavBreadcrumb";
export default {
  name: "NavBar",
  mixins: [layoutMixin],
  components: {
    NavBreadcrumb
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    closeNav() {
      this.setCollapse(!this.isCollapse);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.tags-view-main {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dcdfe6;
  .navbar-switch {
    float: left;
    font-size: 20px;
    line-height: 50px;
    margin: 0 10px;
    transition: all 0.6s;
    &.isClose {
      transform: rotate(180deg);
    }
  }
}
</style>
