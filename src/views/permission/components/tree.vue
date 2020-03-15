<template>
  <div class="menu-admin-main">
    <el-tree
      :props="props"
      node-key="name"
      :data="asyncRoutes"
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
      routeKey: null,
      props: {
        children: "children",
        label: data => {
          return data.meta.title;
        },
        disabled: data => {
          if (data.meta.disabled) {
            return true;
          } else {
            return false;
          }
        }
      }
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    this.setCheckedKeys(this.checkedKeys);
  },
  methods: {
    //获取目前勾选的节点的key
    getCheckedKeys() {
      //勾选的key
      const treeKey = this.$refs.tree.getCheckedKeys();
      //半勾选的key
      const halfKey = this.$refs.tree.getHalfCheckedKeys();
      const menu = [].concat(treeKey, halfKey);
      return {
        treeKey,
        menu
      };
    },
    //通过 keys 设置目前勾选的节点
    setCheckedKeys(keyArr) {
      this.$refs.tree.setCheckedKeys(keyArr);
    }
  }
};
</script>
<style lang="scss" scoped></style>
