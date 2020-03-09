import Layout from "@/layout";

const dashboardRouter = {
  path: "/main",
  name: "Main",
  redirect: "/main/dashboard",
  component: Layout,
  meta: {
    title: "主面板",
    icon: "el-icon-user-solid"
  },
  children: [
    {
      path: "dashboard",
      name: "Dashboard",
      component: () =>
        import(
          /* webpackChunkName: "Dashboard" */
          "../../views/Dashboard/Dashboard.vue"
        ),
      meta: {
        title: "数据展示"
      }
    }
  ]
};

export default dashboardRouter;
