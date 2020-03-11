const getters = {
  //layout
  isCollapse: state => state.layout.isCollapse,
  //user
  userInfo: state => state.user.userInfo,
  accessRoutes: state => state.user.accessRoutes,
  roleMenu: state => state.user.roleMenu
};
export default getters;
