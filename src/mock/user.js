import Mock from "mockjs";
import {
  user
} from "./data/user";
import {
  role
} from "./data/role";

const baseURL = process.env.VUE_APP_BASE_URL;
const Token = "Token";
Mock.setup({
  timeout: 200 - 500
});
//登录
Mock.mock(baseURL + "/vue-admin/login", "post", function (params) {
  const data = JSON.parse(params.body);
  const userInfo = user.find(
    item => item.userName == data.userName && item.password == data.password
  );
  if (userInfo) {
    return {
      userInfo,
      Token,
      code: 0,
      msg: "登录成功"
    };
  } else {
    return {
      code: 1,
      msg: "登录失败"
    };
  }
});
//用户列表
Mock.mock(baseURL + "/vue-admin/userList", "get", {
  user,
  code: 0
});
//角色列表
Mock.mock(baseURL + "/vue-admin/roleList", "get", {
  role,
  code: 0
});
//获取角色信息
Mock.mock(RegExp(baseURL + "/vue-admin/roleInfo" + ".*"), "get", function (
  params
) {
  const {
    roleName
  } = JSON.parse(params.body);
  let roleInfo = role.find(item => item.name == roleName);
  return {
    roleInfo,
    code: 0
  };
});
//更改用户对应的角色
Mock.mock(baseURL + "/vue-admin/updataUser", "post", function (params) {
  const data = JSON.parse(params.body);
  let userInfo = user.find(item => item.userName == data.userName);
  userInfo.role = data.role;
  return {
    userInfo,
    code: 0
  };
});
//修改角色对应的菜单
Mock.mock(baseURL + "/vue-admin/updataRole", "post", function (params) {
  const { name, menu } = JSON.parse(params.body);
  let roleInfo = role.find(item => item.name == name);
  roleInfo.menu = menu;
  return {
    roleInfo,
    code: 0
  }
})