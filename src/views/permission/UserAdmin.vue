<template>
  <div class="user-admin-main">
    <el-card class="box-card">
      <el-table :data="userList" border stripe>
        <el-table-column
          prop="userName"
          label="用户名"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="role"
          label="对应角色"
          width="400"
        ></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="small"
              @click="showEdit(scope.row)"
              >编辑</el-button
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
              :key="item.name"
              :label="item.title"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editUserVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUserVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import userApi from "@/api/user/user";
export default {
  name: "UserAdmin",
  components: {},
  props: {},
  data() {
    return {
      userList: null,
      roleList: null,
      editUserVisible: false,
      currentUser: {
        userName: "",
        role: ""
      }
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
    getUserList() {
      userApi.getUserList().then(res => {
        if (res.data.code == 0) {
          this.userList = res.data.user;
        } else {
          this.$message.error("获取失败");
        }
      });
    },
    getRoleList() {
      userApi.getRoleList().then(res => {
        if (res.data.code == 0) {
          this.roleList = res.data.role;
        } else {
          this.$Message.error("获取失败");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped></style>
