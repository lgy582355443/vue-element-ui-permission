<template>
  <div class="tags-view-main">
    <div class="icon navbar-switch" @click="closeNav">
      <i class="el-icon-s-fold"></i>
    </div>
  </div>
</template>

<script>
import { layoutMixin } from "../../../mixins/layout.js";
export default {
  name: "TagsView",
  mixins: [layoutMixin],
  components: {},
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
  }
}
</style>
