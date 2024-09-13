import { blogPlugin } from "@vuepress/plugin-blog"
import { defaultTheme } from "@vuepress/theme-default"
import { defineUserConfig } from "vuepress"
import { viteBundler } from "@vuepress/bundler-vite"

export default defineUserConfig({
  title: "Echo 系统设计之美",
  description: "将系统设计技能提升到一个新水平所需的一切",

  theme: defaultTheme({
    logo: "/hero.png",
    darkMode: true,
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "设计基础设施",
        link: "/article/design-infrastructure/",
      },
      {
        text: "设计热门应用",
        link: "/article/design-application/",
      },
      {
        text: "系统设计算法",
        link: "/article/design-algorithm/",
      },
      {
        text: "网站动态",
        link: "/article/timeline/",
      },
    ],
    sidebar: {
      "/article/design-application/": [
        {
          text: "设计热门应用",
          // 相对路径会自动追加子路径前缀
          children: ["twitter.md", "wechat.md"],
        },
      ],
      "/article/design-infrastructure/": [
        {
          text: "设计基础设施",
          // 相对路径会自动追加子路径前缀
          children: ["distributed-cache.md", "rate-limiting.md", "top-k.md"],
        },
      ],
      "/article/design-algorithm/": [
        {
          text: "系统设计算法",
          // 相对路径会自动追加子路径前缀
          children: ["bloom-filter.md", "consistent-hashing.md"],
        },
      ],
      "/article/timeline/": [
        {
          text: "网站动态",
          // 相对路径会自动追加子路径前缀
          children: ["twitter.md", "wechat.md"],
        },
      ],
    },
  }),

  plugins: [
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith("posts/") : false,

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || "",
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === "string"
            ? frontmatter.excerpt
            : data?.excerpt || "",
      }),

      // Generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== "string",

      category: [
        {
          key: "category",
          getter: (page) => page.frontmatter.category || [],
          layout: "Category",
          itemLayout: "Category",
          frontmatter: () => ({
            title: "Categories",
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: "tag",
          getter: (page) => page.frontmatter.tag || [],
          layout: "Tag",
          itemLayout: "Tag",
          frontmatter: () => ({
            title: "Tags",
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: "article",
          // Remove archive articles
          filter: (page) => !page.frontmatter.archive,
          layout: "Article",
          frontmatter: () => ({
            title: "Articles",
            sidebar: false,
          }),
          // Sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
        {
          key: "timeline",
          // Only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: "Timeline",
          frontmatter: () => ({
            title: "Timeline",
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
  ],

  bundler: viteBundler(),
})
