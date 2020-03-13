//根据路由名筛选出的路由表
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
