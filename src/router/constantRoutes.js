//不需要权限的路由
const constantRoutes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(
        /* webpackChunkName: "Login" */
        "../views/Login/Login.vue"
      )
  },
  {
    path: "/404",
    name: "404",
    component: () =>
      import(
        /* webpackChunkName: "404" */
        "../views/404/404.vue"
      )
  }
];

export default constantRoutes;
