<template>
  <div class="navbar-main">
    <div class="logo">logo</div>

    <el-dropdown placement="bottom" class="user" trigger="click">
      <span class="el-dropdown-link">
        {{ userInfo.userName }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">个人信息</el-dropdown-item>
        <el-dropdown-item @click.native="doLogout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { userMixin } from "@/mixins/user.js";
import { resetRouter } from "@/router/index.js";
export default {
  name: "Navbar",
  mixins: [userMixin],
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    doLogout() {
      this.logout();
      //重置vue-router
      resetRouter();
      this.$router.push({ name: "Login" });
    }
  },
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
    color: #0e5fbb;
    font-weight: bolder;
  }
  .user {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    margin-right: 20px;
    line-height: 50px;
    font-size: 18px;
    color: #0e5fbb;
    cursor: pointer;
  }
}
</style>
