<template>
  <div class="dashboard-main">
    数据展示页
    <el-button @click="getRole">通过 key 获取</el-button>
  </div>
</template>

<script>
import userApi from "@/api/user/user";
export default {
  name: "Dashboard",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    getRole() {
      userApi.getRoleInfo({ roleName: "eiter" }).then(res => {
        console.log(res);
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped></style>
