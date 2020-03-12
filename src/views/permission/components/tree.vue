<template>
  <div class="menu-admin-main">
    <el-tree :props="props" node-key="name" :data="treeData" show-checkbox ref="tree"></el-tree>
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
    this.setCheckedKeys(this.checkedKeys);
  },
  methods: {
    //获取目前勾选的节点的key
    getCheckedKeys() {
      const routeKey = this.$refs.tree
        .getCheckedKeys()
        .concat(this.$refs.tree.getHalfCheckedKeys());
        this.routeKey = routeKey;
        return routeKey;
    },
    //通过 keys 设置目前勾选的节点
    setCheckedKeys(keyArr) {
      this.$refs.tree.setCheckedKeys(keyArr);
    },
    //筛选出渲染tree组件的数据
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
