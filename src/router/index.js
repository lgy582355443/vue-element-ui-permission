import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import asyncRoutes from "./asyncRoutes";
import constantRoutes from "./constantRoutes";

const routes = [
  ...constantRoutes,
  ...asyncRoutes,
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  routes
});

export default router;
