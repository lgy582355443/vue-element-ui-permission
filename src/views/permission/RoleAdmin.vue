<template>
  <div class="role-admin-main">
    <el-card class="box-card" shadow="hover">
      <el-button class="add-btn" type="primary" size="small">添加角色</el-button>
      <el-table :data="roleList" border>
        <el-table-column prop="name" label="角色"></el-table-column>
        <el-table-column prop="title" label="角色名称"></el-table-column>
        <el-table-column prop="postscript" label="备注"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              :disabled="scope.row.name == 'admin'"
              @click="showEdit(scope.row)"
            >编辑</el-button>
            <el-button type="danger" :disabled="scope.row.name == 'admin'" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 弹框 -->
    <el-dialog title="编辑" @opened="setCheckedKeys" :visible.sync="editUserVisible">
      <div class="editMenu">修改角色菜单</div>
      <tree ref="roleTree" :checkedKeys="currentRole.menu"></tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editUserVisible = false">取 消</el-button>
        <el-button type="primary" @click="updataRole">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { userMixin } from "@/mixins/user";
import Tree from "./components/tree";
import userApi from "@/api/user/user";
export default {
  name: "RoleAdmin",
  mixins: [userMixin],
  components: {
    Tree
  },
  props: {},
  data() {
    return {
      roleList: null,
      editUserVisible: false,
      currentRole: {
        menu: []
      }
    };
  },
  watch: {},
  computed: {},
  created() {
    this.getRoleList();
  },
  mounted() {},
  methods: {
    //修改角色对应的路由
    updataRole() {
      const checkedKey = this.$refs.roleTree.getCheckedKeys();
      this.currentRole.menu = checkedKey.menu;
      this.currentRole.treeKey = checkedKey.treeKey;
      userApi.updataRole(this.currentRole).then(res => {
        if (res.data.code == 0) {
          //若修改的角色，是当前登录账号对应的角色，修改vueRouter路由表
          if (res.data.roleInfo.name == this.userInfo.role) {
            this.updataPermissions(res.data.roleInfo.menu);
            this.getRoleList();
            this.editUserVisible = false;
            this.$message.success("更改成功");
          } else {
            this.$message.error("更改失败");
          }
        }
      });
    },
    showEdit(role) {
      this.currentRole = role;
      this.editUserVisible = true;
    },
    //通过 keys 设置tree目前勾选的节点
    setCheckedKeys() {
      this.$refs.roleTree.setCheckedKeys(this.currentRole.treeKey);
    },
    //获取角色列表
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
<style lang="scss" scoped>
.add-btn {
  margin: 10px 0;
}
.el-table {
  border-top: 1px solid #ebeef5;
  border-left: 1px solid #ebeef5;
}
</style>
