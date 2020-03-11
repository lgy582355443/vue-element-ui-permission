import Layout from "../layout/index.vue";
import studentRouter from "./modules/student";
import nestedRouter from "./modules/nested";
import permissionRouter from "./modules/permission";
// import dashboardRouter from "./modules/dashboard";

//存放的是需要权限的路由
const asyncRoutes = [
  {
    path: "/",
    name: "Main",
    redirect: "/dashboard",
    component: Layout,
    meta: {
      title: "主面板",
      icon: "el-icon-s-data"
    },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () =>
          import(
            /* webpackChunkName: "Dashboard" */
            "../views/Dashboard/Dashboard.vue"
          ),
        meta: {
          title: "数据展示"
        }
      }
    ]
  },
  // dashboardRouter,
  permissionRouter,
  studentRouter,
  nestedRouter,
  {
    path: "*",
    redirect: "/404",
    hidden: true,
    meta: {
      noRoute: true
    }
  }
];

export default asyncRoutes;
