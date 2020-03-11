const layout = {
  state: {
    isCollapse: false
  },
  mutations: {
    SET_COLLAPSE(state, isCollapse) {
      state.isCollapse = isCollapse;
    }
  },
  actions: {
    setCollapse: ({ commit }, isCollapse) => {
      return commit("SET_COLLAPSE", isCollapse);
    }
  }
};

export default layout;
