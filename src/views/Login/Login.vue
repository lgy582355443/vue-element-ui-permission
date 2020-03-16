<template>
  <div class="login-main">
    <div class="login-box">
      <el-form
        :model="loginForm"
        status-icon
        :rules="loginFormRules"
        ref="loginForm"
        class="login-form"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="loginForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="login">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import userApi from "../../api/user/user.js";
import { userMixin } from "../../mixins/user.js";
export default {
  name: "Login",
  mixins: [userMixin],
  components: {},
  props: {},
  data() {
    return {
      loginForm: {
        userName: "lisi",
        password: "123456"
      },
      loginFormRules: {
        userName: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    resetForm() {
      this.$refs.loginForm.resetFields();
    },
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          userApi.login(this.loginForm).then(res => {
            if (res.data.code == 0) {
              this.$message.success("登录成功");
              this.setUserInfo(res.data.userInfo);
              this.$router.push({
                path: "/"
              });
            } else {
              this.$message.error("用户名或密码不正确");
            }
          });
        } else {
          this.$message.error("请填写正确格式");
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.login-main {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: $baseBg;
  .login-box {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 300px;
    width: 500px;
    padding: 30px;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    background-color: #fff;
    .login-form {
      width: 100%;
    }
  }
}
</style>
