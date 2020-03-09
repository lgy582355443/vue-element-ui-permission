import Layout from "@/layout";

const studentRouter = {
  path: "/student",
  name: "Student",
  redirect: "/student/personnel",
  component: Layout,
  meta: {
    title: "学生管理",
    icon: "el-icon-user-solid"
  },
  children: [
    {
      path: "personnel",
      name: "Personnel",
      component: () =>
        import(
          /* webpackChunkName: "Personnel" */
          "../../views/Student/Personnel.vue"
        ),
      meta: {
        title: "学员管理"
      }
    },
    {
      path: "class",
      name: "Class",
      component: () =>
        import(
          /* webpackChunkName: "Class" */
          "../../views/Student/Class.vue"
        ),
      meta: {
        title: "班级管理"
      }
    },
    {
      path: "drom",
      name: "Drom",
      component: () =>
        import(
          /* webpackChunkName: "Drom" */
          "../../views/Student/Drom.vue"
        ),
      meta: {
        title: "宿舍管理"
      }
    }
  ]
};

export default studentRouter;
