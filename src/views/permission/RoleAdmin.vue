<template>
  <div class="role-admin-main">
    <el-card class="box-card">
      <el-table :data="roleList" border stripe>
        <el-table-column prop="name" label="角色"></el-table-column>
        <el-table-column prop="title" label="角色名称"></el-table-column>
        <el-table-column prop="postscript" label="备注"></el-table-column>
        <el-table-column label="操作">
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
    <el-dialog
      title="编辑"
      @opened="setCheckedKeys"
      :visible.sync="editUserVisible"
    >
      <div class="editMenu">修改角色菜单</div>
      <tree ref="roleTree" :checkedKeys="currentRole.menu"></tree>
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
import Tree from "./components/tree";
import userApi from "@/api/user/user";
export default {
  name: "RoleAdmin",
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
    getRoleList() {
      userApi.getRoleList().then(res => {
        if (res.data.code == 0) {
          this.roleList = res.data.role;
        } else {
          this.$Message.error("获取失败");
        }
      });
    },
    showEdit(role) {
      this.currentRole = role;
      this.editUserVisible = true;
    },
    setCheckedKeys() {
      this.$refs.roleTree.setCheckedKeys(this.currentRole.menu);
    }
  }
};
</script>
<style lang="scss" scoped>
.editMenu {
  font-size: 16px;
  padding: 10px 0;
}
</style>
