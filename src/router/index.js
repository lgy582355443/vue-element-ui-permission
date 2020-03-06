import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    redirect: "/admin/home"
  },
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
  },
  {
    path: "/admin",
    name: "Admin",
    redirect: "/admin/table",
    component: () =>
      import(
        /* webpackChunkName: "Login" */
        "../layout/index.vue"
      ),
    children: [{
      path: "table",
      name: "Table",
      component: () =>
        import(
          /* webpackChunkName: "Table" */
          "../views/Table/table.vue"
        )
    }]
  },
  {
    path: "/admin",
    name: "Admin",
    redirect: "/admin/home",
    component: () =>
      import(
        /* webpackChunkName: "Login" */
        "../layout/index.vue"
      ),
    children: [{
      path: "home",
      name: "Home",
      component: () =>
        import(
          /* webpackChunkName: "Home" */
          "../views/Home/Home.vue"
        )
    }, ]
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  routes
});

export default router;