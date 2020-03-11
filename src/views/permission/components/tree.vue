<template>
  <div class="menu-admin-main">
    <el-tree
      :props="props"
      node-key="name"
      :data="treeData"
      show-checkbox
      ref="tree"
    ></el-tree>
  </div>
</template>

<script>
import asyncRoutes from "@/router/asyncRoutes";
export default {
  name: "MenuAdmin",
  components: {},
  props: {
    checkedKeys: {
      type: Array
    }
  },
  data() {
    return {
      asyncRoutes,
      treeData: null,
      routeKey: null,
      props: {
        children: "children",
        label: data => {
          return data.meta.title;
        }
      }
    };
  },
  watch: {},
  computed: {},
  created() {
    this.getTreeData();
  },
  mounted() {
    console.log(this.checkedKeys);
    this.setCheckedKeys(this.checkedKeys);
  },
  methods: {
    getCheckedKeys() {
      this.routeKey = this.$refs.tree
        .getCheckedKeys()
        .concat(this.$refs.tree.getHalfCheckedKeys());
    },
    setCheckedKeys(keyArr) {
      this.$refs.tree.setCheckedKeys(keyArr);
    },
    //筛选出选中的路由表
    filterAsyncRoutes(routes, treeKey) {
      let treeArr = [...treeKey];
      const res = [];
      routes.forEach(route => {
        const tmp = {
          ...route
        };
        const key = treeArr.find(item => item == route.name);
        if (key) {
          treeArr = treeArr.filter(item => item !== key);
          if (tmp.children) {
            tmp.children = this.filterAsyncRoutes(tmp.children, treeArr);
          }
          res.push(tmp);
        }
      });
      return res;
    },
    getTreeData() {
      this.treeData = this.asyncRoutes.filter(item => {
        if (!item.meta.noRoute) {
          return item;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped></style>
