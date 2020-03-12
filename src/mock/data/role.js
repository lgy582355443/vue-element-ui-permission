export const role = [
  {
    name: "admin",
    title: "超级管理员",
    postscript: "管理所有菜单",
    menu: [
      "Main",
      "Dashboard",
      "Permission",
      "MenuAdmin",
      "RoleAdmin",
      "UserAdmin",
      "Student",
      "Personnel",
      "Class",
      "Drom",
      "Nested",
      "Menu1",
      "Menu1-1",
      "Menu1-2",
      "Menu1-2-1",
      "Menu1-2-2",
      "Menu1-3",
      "Menu2",
      "redirect404"
    ]
  },
  {
    name: "editer",
    title: "编辑",
    postscript: "学生管理",
    menu: ["Main", "Dashboard", "Student", "Personnel", "Class", "Drom",
    "redirect404"]
  },
  {
    name: "visitor",
    title: "游客",
    postscript: "Nested",
    menu: [
      "Main",
      "Dashboard",
      "Nested",
      "Menu1",
      "Menu1-1",
      "Menu1-2",
      "Menu1-2-1",
      "Menu1-2-2",
      "Menu1-3",
      "Menu2",
      "redirect404"
    ]
  }
];
