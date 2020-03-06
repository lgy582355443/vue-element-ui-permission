const layout = {
  state: {
    isCollapse: false
  },
  mutations: {
    SET_COLLAPSE(state, isCollapse) {
      state.isCollapse = isCollapse;
    }
  }
};

export default layout;
