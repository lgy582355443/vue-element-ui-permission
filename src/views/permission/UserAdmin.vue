<template>
  <div class="user-admin-main">
    <el-card class="box-card" shadow="hover">
      <el-button class="add-btn" type="primary" size="small"
        >添加用户</el-button
      >
      <el-table :data="userList" border>
        <el-table-column prop="userName" label="用户名"></el-table-column>
        <el-table-column prop="role" label="对应角色"></el-table-column>
        <el-table-column prop="roleName" label="角色名称"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              :disabled="scope.row.userName == 'admin'"
              size="mini"
              @click="showEdit(scope.row)"
              >编辑</el-button
            >
            <el-button
              type="danger"
              :disabled="scope.row.userName == 'admin'"
              size="mini"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 弹窗 -->
    <el-dialog title="编辑" :visible.sync="editUserVisible">
      <el-form
        :model="currentUser"
        ref="ruleForm"
        label-width="100px"
        class="user-ruleForm"
      >
        <el-form-item label="修改用户角色">
          <el-select v-model="currentUser.role" placeholder="请选择角色">
            <el-option
              v-for="item in roleList"
              :key="item.role"
              :label="item.roleName"
              :value="item.role"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editUserVisible = false">取 消</el-button>
        <el-button type="primary" @click="updataRole">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { userMixin } from "@/mixins/user";
import userApi from "@/api/user/user";
export default {
  name: "UserAdmin",
  mixins: [userMixin],
  components: {},
  props: {},
  data() {
    return {
      userList: null,
      roleList: null,
      editUserVisible: false,
      currentUser: {
        userName: "",
        role: "",
      },
    };
  },
  watch: {},
  computed: {},
  created() {
    this.getUserList();
    this.getRoleList();
  },
  mounted() {},
  methods: {
    showEdit(user) {
      this.currentUser = user;
      this.editUserVisible = true;
    },
    updataRole() {
      userApi.updataUser(this.currentUser).then((res) => {
        if (res.data.code == 0) {
          //若修改的是当前登录的账号，则修改路由
          if (this.currentUser.userName == this.userInfo.userName) {
            this.setUserInfo(res.data.userInfo).then(() => {
              userApi
                .getRoleInfo({ roleName: this.userInfo.role })
                .then((res) => {
                  if (res.data.code == 0) {
                    this.updataPermissions(res.data.roleInfo.menu);
                    this.getUserList();
                    this.editUserVisible = false;
                    this.$message.success("更改成功");
                  }
                });
            });
          } else {
            this.getUserList();
            this.editUserVisible = false;
            this.$message.success("更改成功");
          }
        } else {
          this.$message.error("更改失败");
        }
      });
    },
    getUserList() {
      userApi.getUserList().then((res) => {
        if (res.data.code == 0) {
          console.log("获取用户", res.data.user);
          this.userList = res.data.user;
        } else {
          this.$message.error("获取失败");
        }
      });
    },
    getRoleList() {
      userApi.getRoleList().then((res) => {
        if (res.data.code == 0) {
          this.roleList = res.data.role;
        } else {
          this.$message.error("获取失败");
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "style@/variable.scss";
.add-btn {
  margin: 10px 0;
}
.el-table {
  border-top: 1px solid $borderColor;
  border-left: 1px solid $borderColor;
}
</style>
