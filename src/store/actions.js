const actions = {
  //layout
  setCollapse: ({ commit }, isCollapse) => {
    return commit("SET_COLLAPSE", isCollapse);
  },
  //user
  setUserInfo: ({ commit }, userInfo) => {
    return commit("SET_USER_INFO", userInfo);
  }
};
export default actions;
