import Mock from "mockjs";
import { user } from "./data/user";
const baseURL = process.env.VUE_APP_BASE_URL;
const Token = "Token";
Mock.setup({
  timeout: 200 - 500
});

Mock.mock(baseURL + "/vue-admin/login", "post", function(data) {
  const params = JSON.parse(data.body);
  const userInfo = user.find(
    item => item.userName == params.userName && item.password == params.password
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
