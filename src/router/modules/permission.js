import Layout from "@/layout";

const permissionRouter = {
  path: "/permission",
  name: "Permission",
  component: Layout,
  redirect: "/permission/menu",
  meta: {
    title: "权限管理",
    icon: "el-icon-s-tools"
  },
  children: [
    {
      path: "role",
      name: "RoleAdmin",
      component: () =>
        import(
          /* webpackChunkName: "RoleAdmin" */
          "../../views/permission/RoleAdmin.vue"
        ),
      meta: {
        title: "角色管理"
      }
    },
    {
      path: "user",
      name: "UserAdmin",
      component: () =>
        import(
          /* webpackChunkName: "UserAdmin" */
          "../../views/permission/UserAdmin.vue"
        ),
      meta: {
        title: "用户管理"
      }
    }
  ]
};

export default permissionRouter;
