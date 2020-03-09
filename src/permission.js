// import router from "./router";
// import store from "./store/index";
// import NProgress from "nprogress"; // progress bar
// import "nprogress/nprogress.css"; // progress bar style
// import { getToken } from "./utils/auth";

// NProgress.configure({
//   showSpinner: false
// });

// const whiteList = ["/login", "/404"];

// router.beforeEach((to, from, next) => {
//   NProgress.start();
//   const hasToken = getToken();
//   if (hasToken) {
//     next();
//   } else {
//     if (whiteList.indexOf(to.path) == -1) {
//       router.push({
//         name: "Login"
//       });
//       NProgress.done();
//     } else {
//       next();
//     }
//   }
//   next();
// });

// router.afterEach(() => {
//   NProgress.done();
// });
