<template>
  <div class="line-chart-main">
    <el-button type="primary" size="small" @click="targetCurrent"
      >查看</el-button
    >
    <div id="line-chart"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import echartsTheme from "./theme/westeros.json";

export default {
  name: "LineChart",
  components: {},
  props: {},
  data() {
    return {
      LineChart: null,
      current: false,
      chartdata1: [
        {
          name: "销售总额",
          smooth: true,
          type: "line",
          data: [11330, 87840, 72360, 24665, 73165, 26550, 10165]
          // animationDuration: 2800,
          // animationEasing: "cubicInOut"
        },
        {
          name: "订单量",
          smooth: true,
          type: "line",
          data: [28880, 3160, 58251, 70636, 18445, 2215, 73540]
          // animationDuration: 2800,
          // animationEasing: "cubicInOut"
        },
        {
          name: "收藏量",
          smooth: true,
          type: "line",
          data: [27320, 78321, 24551, 34452, 41485, 65050, 48060]
          // animationDuration: 2800,
          // animationEasing: "quadraticOut"
        }
      ],
      chartdata2: [
        {
          name: "销售总额",
          smooth: true,
          type: "line",
          data: [61330, 27840, 42360, 54665, 13165, 16550, 20165]
          // animationDuration: 2800,
          // animationEasing: "cubicInOut"
        },
        {
          name: "订单量",
          smooth: true,
          type: "line",
          data: [18880, 2160, 18251, 10636, 82445, 9215, 13540]
          // animationDuration: 2800,
          // animationEasing: "cubicInOut"
        },
        {
          name: "收藏量",
          smooth: true,
          type: "line",
          data: [21320, 53321, 14551, 24452, 21485, 15050, 38060]
          // animationDuration: 2800,
          // animationEasing: "quadraticOut"
        }
      ]
    };
  },
  created() {},
  mounted() {
    this.loadChart();
  },
  beforeDestroy() {
    let then = this;
    window.removeEventListener("resize", then.debounce(then.resizeLineChart));
  },
  watch: {},
  computed: {
    currentdata() {
      return this.current ? this.chartdata1 : this.chartdata2;
    }
  },
  methods: {
    targetCurrent() {
      this.current = !this.current;
      this.LineChart.setOption(this.initOption());
    },
    loadChart() {
      this.$nextTick(() => {
        echarts.registerTheme("westeros", echartsTheme);
        this.LineChart = echarts.init(
          document.getElementById("line-chart"),
          "westeros"
        );
        this.LineChart.setOption(this.initOption());
        let then = this;
        window.addEventListener("resize", then.debounce(then.resizeLineChart));
        // window.onresize = this.debounce(this.resizeChart);
      });
    },
    resizeLineChart() {
      this.LineChart.resize();
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
          data: ["销售总额", "收藏量", "订单量"]
        },
        series: this.currentdata
      };
    }
  }
};
</script>
<style lang="scss" scoped>
@import "style@/mixin.scss";
.line-chart-main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @include centenBox;
  #line-chart {
    flex: 1;
    width: 100%;
  }
  .el-button {
    width: 100px;
  }
}
</style>
