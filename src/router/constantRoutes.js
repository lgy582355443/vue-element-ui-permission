//不需要权限的路由
const constantRoutes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(
        /* webpackChunkName: "Login" */
        "../views/Login/Login.vue"
      ),
    meta: {
      hidden: true,
      disabled: true,
      title: "登录"
    }
  },

  {
    path: "/404",
    name: "404",
    component: () =>
      import(
        /* webpackChunkName: "404" */
        "../views/404/404.vue"
      ),
    meta: {
      hidden: true,
      disabled: true,
      title: "404"
    }
  }
];

export default constantRoutes;
