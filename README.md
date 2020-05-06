# element-ui-admin
### 项目功能
1. 根据vue-router填写的路由，动态生成侧边栏
2. 动态渲染面包屑
3. 根据vue-router填写的路由，动态生成Tree组件
4. 根据登录用户的角色，动态追加相应的权限路由
5. 修改角色或修改用户，重置vue-router,并重新渲染侧边栏。
6. 使用的是Mock.js,功能比较简单，但主要思路都有了。

体验地址：http://112.74.164.251/element-admin

## 项目流程

1. 登录，获取到用户信息

2. 前端拿到用户对应的角色，角色去请求角色对应的路由key数组

   - 路由的key，这里我写的是路由name

   ```javascript
   // route.js 写的路由数组
   {
       path: "/",
       name: "Main",  // 把它当作路由的key
       redirect: "/dashboard",
       component: Layout,
       meta: {
         title: "首页",
         icon: "el-icon-s-data"
       },
   ```

   ```javascript
   // 后台返回的字段，menu就是路由的key, treeKey是用来渲染tree组件的。
   {
       role: "editer",
       roleName: "编辑",
       postscript: "学生管理",
       treeKey: ["Main", "Permission", "Student", "redirect404"],
       menu: [
         "Main",
         "Dashboard",
         "Student",
         "Permission",
         "RoleAdmin",
         "UserAdmin",
         "Personnel",
         "Class",
         "Drom",
         "redirect404"
       ]
     },
   ```

3. 前端拿到路由key,再从路由表中筛选出对应的路由，使用addrouter动态添加到vue-router。

   - 把路由分为了两个文件，asyncRoutes.js里放的是需要权限的路由，constanRoutes.js里放的是不需要权限的路由
   - 有路由key去匹配asyncRoutes的路由

   ```javascript
   //根据路由名筛选出的路由表 
   // routes传asyncRoutes,routeKey传路由key数组。
   export function filterAsyncRoutes(routes, routeKey) {
     let keyArr = [...routeKey];
     const res = [];
     routes.forEach(route => {
       const tmp = { ...route };
       const key = keyArr.find(item => item == route.name);
       if (key) {
         keyArr = keyArr.filter(item => item !== key);
         if (tmp.children) {
           tmp.children = filterAsyncRoutes(tmp.children, keyArr);
         }
         res.push(tmp);
       }
     });
     return res;
   }
   ```

   - 筛选出权限路由accessRoutes后，使用router.addRoutes(accessRoutes)添加到vue-router。这一步我是再beforEach（）导航守卫里做的。

   ```javascript
   //路由白名单
   const whiteList = ["/login", "/404"];
   
   router.beforeEach((to, from, next) => {
     NProgress.start();
     const hasToken = getToken();
     //判断是否有token
     if (hasToken) {
       const roleMenu = store.getters.roleMenu;
       //判断是否有角色对应的路由名数组
       if (roleMenu) {
         next();
       } else {
         let userInfo = getStorage("userInfo");
         store.dispatch("setUserInfo", userInfo);
         userApi
           .getRoleInfo({
             roleName: userInfo.role
           })
           .then(res => {
             const roleMenu = res.data.roleInfo.menu;
             store.dispatch("setRoleMenu", roleMenu);
             //筛选出角色对应的路由
             const accessRoutes = filterAsyncRoutes(asyncRoutes, roleMenu);
             //动态添加路由
             router.addRoutes(accessRoutes);
             store.dispatch("setAccessRoutes", accessRoutes);
             next({
               ...to,
               replace: true
             });
           });
       }
     } else {
       if (whiteList.indexOf(to.path) == -1) {
         router.push({
           name: "Login"
         });
         NProgress.done();
       } else {
         next();
       }
     }
   });
   ```

   

   



## 安装依赖

```
npm install
```

### 启动服务
```
npm run serve
```

### 打包
```
npm run build
```

### 修正书写规范
```
npm run lint --fix
```

