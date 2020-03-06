import { request } from "../request";

function login(data) {
  return request({
    url: "/vue-admin/login",
    method: "post",
    data
  });
}
export default {
  login
};
