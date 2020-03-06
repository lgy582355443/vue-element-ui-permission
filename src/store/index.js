import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import actions from "./actions.js";
import layout from "./modules/layout.js";
import user from "./modules/user.js";
Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    layout,
    user
  }
});
