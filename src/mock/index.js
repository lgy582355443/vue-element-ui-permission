import Mock from "mockjs";
import userApi from "./user";

const baseURL = process.env.VUE_APP_BASE_URL;
Mock.setup({
  timeout: 300 - 500
});
// ------------user相关------------------------
//登录
Mock.mock(baseURL + "/vue-admin/login", "post", userApi.login);
//用户列表
Mock.mock(baseURL + "/vue-admin/userList", "get", userApi.userList);
//角色列表
Mock.mock(baseURL + "/vue-admin/roleList", "get", userApi.roleList);
//获取角色信息
Mock.mock(
  RegExp(baseURL + "/vue-admin/roleInfo" + ".*"),
  "get",
  userApi.roleInfo
);
//更改用户对应的角色
Mock.mock(baseURL + "/vue-admin/updataUser", "post", userApi.updataUser);
//修改角色对应的菜单
Mock.mock(baseURL + "/vue-admin/updataRole", "post", userApi.updataRole);

//---------------表格数据--------------
