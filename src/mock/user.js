import { user } from "./data/user";
import { role } from "./data/role";
const Token = "Token";
//登录login
function login(params) {
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
}
//用户列表
function userList() {
  return {
    user,
    code: 0
  };
}
//角色列表
function roleList() {
  return {
    role,
    code: 0
  };
}
//获取角色信息
function roleInfo(params) {
  const { roleName } = JSON.parse(params.body);
  console.log(params);
  let roleInfo = role.find(item => item.name == roleName);
  return {
    roleInfo,
    code: 0
  };
}
//更改用户
function updataUser(params) {
  const newUser = JSON.parse(params.body);
  let userInfo = user.find(item => item.userName == newUser.userName);
  userInfo.role = newUser.role; //这样写是为了同时修改 /mock/data 文件夹里的数据
  return {
    userInfo,
    code: 0
  };
}
//修改角色
function updataRole(params) {
  const newRole = JSON.parse(params.body);
  let roleInfo = role.find(item => item.name == newRole.name);
  roleInfo.menu = newRole.menu;
  roleInfo.treeKey = newRole.treeKey;
  return {
    roleInfo,
    code: 0
  };
}

export default {
  login,
  userList,
  roleList,
  roleInfo,
  updataUser,
  updataRole
};
