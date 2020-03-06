<template>
  <div class="navbar-main">
    <div class="logo">logo</div>
    <div class="user">admin</div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.navbar-main {
  position: fixed;
  left: 0;
  top: 0;
  height: $headerHeight;
  width: 100%;
  border-bottom: 1px solid #dcdfe6;
  .logo {
    float: left;
    font-size: 30px;
    line-height: 50px;
    margin-left: 20px;
    color: aquamarine;
  }
  .user {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    margin-right: 20px;
    line-height: 50px;
    color: aquamarine;
  }
}
</style>
