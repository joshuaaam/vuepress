module.exports = {
  title: "impermanence",
  description: "Just playing around",

  themeConfig: {
    sidebar: [
      {
        title: "typescript", // 必要的
        path: "/ts/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          {
            title: "常见类型",
            path: "/ts/interface",
          },
          {
            title: "类型别名",
            path: "/ts/type",
          }
        ]
      },
      {
        title: "react", // 必要的
        path: "/react/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          {
            title: "常见类型",
          },
          {
            title: "类型别名",
          }
        ]
      },
    ]
  }
};
