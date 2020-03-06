const user = {
  state: {
    userInfo: {}
  },
  mutations: {
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
      window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
  }
};

export default user;
