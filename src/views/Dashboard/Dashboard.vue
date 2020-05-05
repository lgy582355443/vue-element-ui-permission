<template>
  <div class="dashboard-main">
    <number-card></number-card>
    <event-card></event-card>
    <el-row :gutter="40" class="chart-group">
      <el-col :xs="24" :sm="24" :lg="6" class="chart-col">
        <pie-chart type="ordertype"></pie-chart>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="18" class="chart-col">
        <line-chart></line-chart>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NumberCard from "./components/NumberCard";
import EventCard from "./components/EventCard";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";
export default {
  name: "Dashboard",
  components: {
    NumberCard,
    EventCard,
    PieChart,
    LineChart
  },
  props: {},
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.chart-group {
  height: 300px;
  .chart-col {
    height: 100%;
  }
}
</style>
