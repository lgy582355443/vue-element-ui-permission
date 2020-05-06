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
  let roleInfo = role.find(item => item.role == roleName);
  return {
    roleInfo,
    code: 0
  };
}
//更改用户
function updataUser(params) {
  const newUser = JSON.parse(params.body);
  let userIndex = user.findIndex(item => item.userName == newUser.userName);
  let userInfo = user.find(item => item.userName == newUser.userName);
  let newRole = role.find(item => newUser.role == item.role);
  userInfo = { ...userInfo, ...{ role: newRole.role, roleName: newRole.roleName } }
  user[userIndex] = userInfo
  return {
    userInfo,
    code: 0
  };
}
//修改角色
function updataRole(params) {
  const newRole = JSON.parse(params.body);
  let roleInfo = role.find(item => item.role == newRole.role);
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
