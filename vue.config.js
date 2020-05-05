const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const cdn = {
  dev: {
    css: [],
    js: []
  },
  build: {
    css: ["https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css"],
    js: [
      "https://cdn.bootcss.com/vue/2.6.11/vue.min.js",
      "https://cdn.bootcss.com/vuex/3.1.2/vuex.min.js",
      "https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js",
      "https://cdn.bootcss.com/axios/0.19.2/axios.min.js",
      "https://cdn.bootcss.com/Mock.js/1.0.1-beta3/mock-min.js",
      "https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js",
      "https://cdn.bootcss.com/echarts/4.6.0/echarts.min.js"
    ]
  }
};

module.exports = {
  publicPath: "./",
  lintOnSave: process.env.NODE_ENV === "production" ? false : true, // 关闭eslint
  // 打包时不生成.map文件
  productionSourceMap: false,
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       //引入全局样式
  //       // data：`@import "~@/assets/variable.scss";` v7之前使用 的是data，现在改成了prependData
  //       prependData: `@import "~@/assets/style/global.scss";`
  //     }
  //   }
  // },
  chainWebpack: config => {
    // // 移除 prefetch 插件
    // config.plugins.delete("prefetch");
    // // 移除 preload 插件
    // config.plugins.delete("preload");
    // 添加CDN参数到htmlWebpackPlugin配置中
    config.plugin("html").tap(args => {
      if (process.env.NODE_ENV === "production") {
        args[0].cdn = cdn.build;
      }
      if (process.env.NODE_ENV === "development") {
        args[0].cdn = cdn.dev;
      }
      return args;
    });
    config.resolve.alias
      .set("@", path.resolve(__dirname, "./src"))
      .set("style@", path.resolve(__dirname, "./src/assets/style"));
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "development") {
      // 为开发环境修改配置...
      config.devtool = "cheap-module-eval-source-map";
    } else {
      // 为生产环境修改配置...
      // 忽略生产环境打包的文件
      config.externals = {
        vue: "Vue",
        "vue-router": "VueRouter",
        vuex: "Vuex",
        axios: "axios",
        echarts: "echarts",
        mockjs: "Mock",
        nprogress: "NProgress"
      };
      config.optimization = {
        minimizer: [
          new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true, // Must be set to true if using source-maps in production
            terserOptions: {
              compress: {
                warnings: false,
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ["console.log"]
              }
            }
          })
        ]
      };
    }
  }
};
