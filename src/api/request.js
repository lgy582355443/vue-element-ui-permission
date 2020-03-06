import axios from "axios";
import { getToken, setToken, removeToken } from "../utils/auth.js";
import Router from "../router/index";

export const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
});

//请求拦截
service.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

//响应拦截
service.interceptors.response.use(
  response => {
    if (response.data.Token) {
      setToken(response.data.Token);
    }
    if (response.data.code == -1) {
      removeToken();
      Router.push({
        name: "Login"
      });
    }
    return response;
  },
  error => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export function request(config) {
  if (config.method.toLowerCase() === "get") {
    config.params = config.data;
  }
  return service(config);
}
