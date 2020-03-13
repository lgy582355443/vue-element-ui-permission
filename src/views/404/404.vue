<template>
  <div class="_404-main">
    <div>
      <div class="title">404：访问的路径不存在</div>
      <router-link class="btn" :to="{ path: '/' }" tag="div">返回</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page401",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
._404-main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .title {
    font-size: 60px;
    font-weight: bolder;
    color: $titleColor;
  }
  .btn {
    padding: 15px;
    margin: 20px 0;
    font-size: 30px;
    color: white;
    background-color: $titleColor;
    border-radius: 30px;
    text-align: center;
    cursor: pointer;
  }
}
</style>
