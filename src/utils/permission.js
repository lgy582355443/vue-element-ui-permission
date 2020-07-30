//根据路由名筛选出的路由表
// routes vue-router路由表
// routeKey 路由表个个路由的name组成的一维数组
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


let routeKey = ["1", "1-1", "1-2", "1-1-1", "2", "2-2"]
let routes = [
  {
    name: "1",
    children: [
      {
        name: "1-1",
        children: [
          {
            name: "1-1-1",
          },
          {
            name: "1-1-2",
          }
        ]
      },
      {
        name: "1-2",
      },
    ]
  },
  {
    name: "2",
    children: [
      {
        name: "2-1",
      },
      {
        name: "2-2",
      }
    ]
  }
]

let acssRoute = filterAsyncRoutes(routes, routeKey)
console.log(acssRoute)