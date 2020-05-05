import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./permission.js";
import "./plugins/element-ui.js";
import "./assets/style/reset.scss";
import "./assets/style/element-ui.scss";
import "./assets/icon/iconfont.css";
import "./mock/index";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
