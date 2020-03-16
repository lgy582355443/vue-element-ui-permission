<template>
  <el-card class="event-card-main" shadow="hover">
    <div class="card-title">待处理事务</div>
    <div class="car-content">
      <el-row :gutter="40" v-for="(item, index) in eventList" :key="index">
        <el-col
          :xs="12"
          :sm="12"
          :lg="8"
          v-for="itemc in item"
          :key="itemc.title"
        >
          <div class="event-item">
            <span class="event-title">
              <i class="el-icon-bell"></i>
              {{ itemc.title }}
            </span>
            <el-button type="warning" plain size="mini" class="event-num">{{
              itemc.count
            }}</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "EventCard",
  components: {},
  props: {},
  data() {
    return {
      eventList: [
        [
          {
            title: "待付款订单",
            count: 22454
          },
          {
            title: "已完成订单",
            count: 546
          },
          {
            title: "待确认收货订单",
            count: 8645
          }
        ],
        [
          {
            title: "待发货订单",
            count: 450
          },
          {
            title: "新缺货登记",
            count: 554
          },
          {
            title: "待处理退款申请",
            count: 5454
          }
        ],
        [
          {
            title: "已发货订单",
            count: 511
          },
          {
            title: "待处理退货订单",
            count: 650
          },
          {
            title: "广告位即将到期",
            count: 20
          }
        ]
      ]
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.event-card-main {
  margin: 20px 0;
  width: 100%;
  .card-title {
    color: #606266;
    padding: 15px 10px;
    background: #f2f6fc;
    font-weight: bold;
  }
  .car-content {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    .event-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      border-bottom: $mainBorder;
      .el-icon-bell {
        color: #fac20a;
        font-weight: bold;
      }
    }
  }
}
</style>
