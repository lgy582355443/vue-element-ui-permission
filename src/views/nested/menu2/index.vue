<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 2" />
    <keep-alive include="tem2">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import tem1 from "./tem1";
import tem2 from "./tem2";
export default {
  components: {
    tem1,
    tem2,
  },
};
</script>
