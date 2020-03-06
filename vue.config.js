module.exports = {
  css: {
    loaderOptions: {
      sass: {
        //引入全局样式
        // data：`@import "~@/assets/variable.scss";` v7之前使用 的是data，现在改成了prependData
        prependData: `@import "~@/assets/style/global.scss";`
      }
    }
  }
};
