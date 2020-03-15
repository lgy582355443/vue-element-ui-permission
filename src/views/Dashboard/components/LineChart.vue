<template>
  <el-card shadow="hover" class="line-chart-main">
    <div id="line-chart"></div>
  </el-card>
</template>

<script>
import echarts from "echarts";
import echartsTheme from "./theme/westeros.json";
let lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
};
export default {
  name: "LineChart",
  components: {},
  props: {},
  data() {
    return {
      myChart: null
    };
  },
  created() {},
  mounted() {
    this.loadChart();
  },
  watch: {},
  computed: {},
  methods: {
    loadChart() {
      this.$nextTick(() => {
        echarts.registerTheme("westeros", echartsTheme);
        this.myChart = echarts.init(
          document.getElementById("line-chart"),
          "westeros"
        );
        this.myChart.setOption(this.initOption());
      });
    },
    initOption() {
      return {
        xAxis: {
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ["销售总额", "收藏量","订单量"]
        },
        series: [
          {
            name: "销售总额",
            smooth: true,
            type: "line",
            data: [61330, 27840, 42360, 54665, 13165, 16550, 20165],
            // animationDuration: 2800,
            // animationEasing: "cubicInOut"
          },
          {
            name: "订单量",
            smooth: true,
            type: "line",
            data:  [18880, 2160, 18251, 10636, 82445, 9215, 13540],
            // animationDuration: 2800,
            // animationEasing: "cubicInOut"
          },
          {
            name: "收藏量",
            smooth: true,
            type: "line",
            data:  [21320, 53321, 14551, 24452, 21485, 15050, 38060],
            // animationDuration: 2800,
            // animationEasing: "quadraticOut"
          }
        ]
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.line-chart-main {
  width: 100%;
  height: 100%;
  #line-chart {
    width: 100%;
    height: 100%;
  }
}
</style>