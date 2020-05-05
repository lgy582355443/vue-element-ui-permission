<template>
  <el-row :gutter="40" class="number-card-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-col">
      <el-card class="number-card-main" shadow="hover">
        <div class="icon-wrapper">
          <i class="iconfont icon-dingdan"></i>
        </div>
        <div class="card-desc">
          <div class="card-text">今日订单总数</div>
          <count-to
            :start-val="0"
            :end-val="1024"
            :duration="2000"
            class="card-num"
          />
        </div>
      </el-card>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-col">
      <el-card class="number-card-main" shadow="hover">
        <div class="icon-wrapper">
          <i class="iconfont icon-jiaoyinzujifangke"></i>
        </div>
        <div class="card-desc">
          <div class="card-text">今日访问量</div>
          <count-to
            :start-val="0"
            :end-val="45247"
            :duration="2000"
            class="card-num"
          />
        </div>
      </el-card>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-col">
      <el-card class="number-card-main" shadow="hover">
        <div class="icon-wrapper">
          <i class="iconfont icon-qian"></i>
        </div>
        <div class="card-desc">
          <div class="card-text">今日销售总额</div>
          <count-to
            :start-val="0"
            :end-val="25232"
            :duration="2000"
            class="card-num"
          />
        </div>
      </el-card>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-col">
      <el-card class="number-card-main" shadow="hover">
        <div class="icon-wrapper">
          <i class="iconfont icon-zongjine"></i>
        </div>
        <div class="card-desc">
          <div class="card-text">昨日销售总额</div>
          <count-to
            :start-val="0"
            :end-val="14243"
            :duration="2000"
            class="card-num"
          />
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from "vue-count-to";
export default {
  name: "NumberCard",
  components: {
    CountTo
  },
  props: {},
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "style@/variable.scss";
.card-col {
  margin: 10px 0;
}
.number-card-main {
  position: relative;
  cursor: pointer;
  .icon-wrapper {
    float: left;
    padding: 16px;
    transition: all 0.38s ease-out;
    border-radius: 6px;
    .iconfont {
      font-size: 50px;
      &.icon-dingdan {
        color: #40c9c6;
      }
      &.icon-zongjine {
        color: #36a3f7;
      }
      &.icon-qian {
        color: #f4516c;
      }
      &.icon-jiaoyinzujifangke {
        color: #40c969;
      }
    }
  }
  .card-desc {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    .card-text {
      line-height: 30px;
      font-weight: bold;
      font-size: 16px;
      color: $baseFont;
    }
    .card-num {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
