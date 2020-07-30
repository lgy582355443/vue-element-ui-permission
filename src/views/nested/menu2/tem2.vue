<template>
  <div class="box">
    {{ text }}
    <input type="text" v-model="text" />
  </div>
</template>

<script>
export default {
  name: "tem2",
  components: {},
  props: {},
  data() {
    return {
      text: "",
    };
  },
  created() {
    console.log("create");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeDestroy() {
    console.log("destroy");
  },
  watch: {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
