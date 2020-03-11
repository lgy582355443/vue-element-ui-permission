import router from "./router";
import store from "./store/index";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken, getStorage } from "./utils/auth";
import userApi from "./api/user/user";
import asyncRoutes from "./router/asyncRoutes";
import { filterAsyncRoutes } from "@/utils/permission";

NProgress.configure({
  showSpinner: false
});

const whiteList = ["/login", "/404"];

router.beforeEach((to, from, next) => {
  NProgress.start();
  const hasToken = getToken();
  if (hasToken) {
    const roleMenu = store.getters.roleMenu;
    if(roleMenu){
      next()
    }else{
      const { role } = getStorage("userInfo");
      userApi.getRoleInfo({ roleName: role }).then(res => {
        const roleMenu = res.data.roleInfo.menu;
        store.dispatch("setRoleMenu",roleMenu)
        //筛选出角色对应的路由
        const accessRoutes = filterAsyncRoutes(asyncRoutes, roleMenu);
        //动态添加路由
        router.addRoutes(accessRoutes);
        store.dispatch("setAccessRoutes",accessRoutes);
        next({ ...to, replace: true })
      });
    }
  } else {
    if (whiteList.indexOf(to.path) == -1) {
      router.push({
        name: "Login"
      });
      NProgress.done();
    } else {
      next();
    }
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});
