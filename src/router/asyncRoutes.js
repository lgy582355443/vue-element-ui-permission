import Layout from "../layout/index.vue";
import studentRouter from "./modules/student";
import nestedRouter from "./modules/nested";
import permissionRouter from "./modules/permission";

/*
meta里面的属性说明：
hidden:true         不动态渲染在侧边栏显示
disabled: true      tree组件里不可选
*/

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
  permissionRouter,
  studentRouter,
  nestedRouter,
  {
    path: "*",
    name: "redirect404",
    redirect: "/404",
    meta: {
      hidden: true,
      disabled: true,
      title: "重定向404"
    }
  }
];

export default asyncRoutes;
