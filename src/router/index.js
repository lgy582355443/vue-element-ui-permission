import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// import asyncRoutes from "./asyncRoutes";
import constantRoutes from "./constantRoutes";

const routes = [
  ...constantRoutes
  // ...asyncRoutes,
  // {
  //   path: "*",
  //   redirect: "/404"
  // }
];

const createRouter = () =>
  new VueRouter({
    routes
  });
const router = createRouter();

//重置路由表
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
