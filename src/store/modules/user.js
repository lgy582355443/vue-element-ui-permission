import userApi from "@/api/user/user";
import { resetRouter } from "@/router/index";
import asyncRoutes from "@/router/asyncRoutes";
import { filterAsyncRoutes } from "@/utils/permission";
import router from "@/router";
const user = {
  state: {
    userInfo: {},
    accessRoutes: [],
    roleMenu: null
  },
  mutations: {
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
      window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
    },
    SET_ACCESS_ROUTES(state, accessRoutes) {
      state.accessRoutes = accessRoutes;
    },
    SET_ROLE_MENU(state, roleMenu) {
      state.roleMenu = roleMenu;
    }
  },
  actions: {
    setRoleMenu({ commit }, roleMenu) {
      return commit("SET_ROLE_MENU", roleMenu);
    },
    setUserInfo({ commit }, userInfo) {
      return new Promise((resolve)=>{
        commit("SET_USER_INFO", userInfo);
        resolve()
      })
    },
    setAccessRoutes({ commit }, accessRoutes) {
      return commit("SET_ACCESS_ROUTES", accessRoutes);
    },
    logout({ commit }) {
      commit("SET_ROLE_MENU", null);
      commit("SET_USER_INFO", {});
      window.localStorage.removeItem("Token");
      window.localStorage.removeItem("userInfo");
    },
    //获取权限路由
    updataPermissions({ state,commit }) {
      userApi.getRoleInfo({ roleName:state.userInfo.role }).then(res => {
        if (res.data.code == 0) {
          console.log(res);
          commit("SET_ROLE_MENU", res.data.roleInfo.menu);
          const accessRoutes = filterAsyncRoutes(asyncRoutes, state.roleMenu);
          commit("SET_ACCESS_ROUTES", accessRoutes);
          resetRouter();
          router.addRoutes(accessRoutes);
        }
      });
    }
  }
};

export default user;
