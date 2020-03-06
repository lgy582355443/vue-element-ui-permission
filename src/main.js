import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./permission.js";
import "./plugins/element-ui.js";
import "./assets/style/global.scss";
import "./mock/user";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
