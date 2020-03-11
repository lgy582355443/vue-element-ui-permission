//根据路由名筛选出的路由表
export function filterAsyncRoutes(routes, treeKey) {
  let treeArr = [...treeKey];
  const res = [];
  routes.forEach(route => {
    const tmp = {
      ...route
    };
    const key = treeArr.find(item => item == route.name);
    if (key) {
      treeArr = treeArr.filter(item => item !== key);
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, treeArr);
      }
      res.push(tmp);
    }
  });
  return res;
}
