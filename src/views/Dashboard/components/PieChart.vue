<template>
  <div class="PieChart-main">
    <div id="pieChart"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import echartsTheme from "./theme/westeros.json";
export default {
  name: "PieChart",
  components: {},
  props: {
    type: {
      type: String
    }
  },
  data() {
    return {
      PieChart: null
    };
  },
  created() {},
  mounted() {
    this.loadChart();
  },
  destroyed() {
    let then = this;
    window.removeEventListener("resize", then.debounce(then.resizePieChart));
  },
  watch: {
    type: v => {
      this.initOption(v);
    }
  },
  computed: {},
  methods: {
    loadChart() {
      this.$nextTick(() => {
        echarts.registerTheme("westeros", echartsTheme);
        this.PieChart = echarts.init(
          document.getElementById("pieChart"),
          "westeros"
        );
        this.PieChart.setOption(this.initOption(this.type));
        let then = this;
        window.onresize = then.debounce(then.resizePieChart);
      });
    },
    resizePieChart() {
      this.PieChart.resize();
    },
    debounce(func) {
      let timeout = null;
      return function() {
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          func.apply(this, arguments);
        }, 300);
      };
    },
    initOption(type) {
      let text, legend_data, series_data;
      if (type == "ordertype") {
        text = "商品销售情况";
        legend_data = ["饼干", "糕点", "饮料", "坚果", "肉干"];
        series_data = [
          { value: 335, name: "饼干" },
          { value: 310, name: "糕点" },
          { value: 234, name: "饮料" },
          { value: 135, name: "坚果" },
          { value: 148, name: "肉干" }
        ];
      } else {
        text = "顾客所在区域";
        legend_data = [
          "华东区",
          "华南区",
          "华中区",
          "华北区",
          "西南区",
          "东北区",
          "台港澳"
        ];
        series_data = [
          { value: 335, name: "华东区" },
          { value: 310, name: "华南区" },
          { value: 234, name: "华中区" },
          { value: 835, name: "华北区" },
          { value: 1548, name: "西南区" },
          { value: 335, name: "东北区" },
          { value: 454, name: "台港澳" }
        ];
      }
      let data = {
        title: {
          text: text,
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: legend_data
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            // roseType: "angle",
            radius: [0, 90],
            center: ["50%", "60%"],
            data: series_data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      return data;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "style@/mixin.scss";
.PieChart-main {
  width: 100%;
  height: 100%;
  @include centenBox;
  #pieChart {
    width: 100%;
    height: 100%;
  }
}
</style>
