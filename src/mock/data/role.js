export const role = [
  {
    name: "admin",
    title: "超级管理员",
    postscript: "管理所有菜单",
    treeKey: ["Main", "Permission", "Student", "Nested", "redirect404"],
    menu: [
      "Main",
      "Dashboard",
      "Permission",
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
  {
    name: "visitor",
    title: "游客",
    postscript: "Nested",
    treeKey: ["Main", "Permission", "Nested", "redirect404"],
    menu: [
      "Main",
      "Dashboard",
      "Permission",
      "RoleAdmin",
      "UserAdmin",
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
