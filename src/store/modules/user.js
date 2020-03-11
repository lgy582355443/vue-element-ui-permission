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
    },
  },
  actions: {
    setRoleMenu({ commit }, roleMenu) {
      return commit("SET_ROLE_MENU", roleMenu);
    },
    setUserInfo({ commit }, userInfo) {
      return commit("SET_USER_INFO", userInfo);
    },
    setAccessRoutes({ commit }, accessRoutes){
      return commit("SET_ACCESS_ROUTES", accessRoutes);
    },
    logout({commit}){
      commit("SET_ROLE_MENU",null );
      commit("SET_USER_INFO", {});
      window.localStorage.removeItem("Token");
      window.localStorage.removeItem("userInfo");
    }
  }
};

export default user;
