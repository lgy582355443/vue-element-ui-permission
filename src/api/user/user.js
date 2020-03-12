import { request } from "../request";

function login(data) {
  return request({
    url: "/vue-admin/login",
    method: "post",
    data
  });
}

function getUserList() {
  return request({
    url: "/vue-admin/userList",
    method: "get"
  });
}

function getRoleList() {
  return request({
    url: "/vue-admin/roleList",
    method: "get"
  });
}

function getRoleInfo(data) {
  return request({
    url: "/vue-admin/roleInfo",
    method: "get",
    data
  });
}

function updataUser(data) {
  return request({
    url: "/vue-admin/updataUser",
    method: "post",
    data
  });
}

function updataRole(data) {
  return request({
    url: "/vue-admin/updataRole",
    method: "post",
    data
  });
}
export default {
  login,
  getUserList,
  getRoleList,
  getRoleInfo,
  updataUser,
  updataRole
};
