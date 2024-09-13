export const themeData = JSON.parse("{\"logo\":\"/hero.png\",\"darkMode\":true,\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"设计基础设施\",\"link\":\"/article/design-infrastructure/\"},{\"text\":\"设计热门应用\",\"link\":\"/article/design-application/\"},{\"text\":\"系统设计算法\",\"link\":\"/article/design-algorithm/\"},{\"text\":\"网站动态\",\"link\":\"/article/timeline/\"}],\"sidebar\":{\"/article/design-application/\":[{\"text\":\"设计热门应用\",\"children\":[\"twitter.md\",\"wechat.md\"]}],\"/article/design-infrastructure/\":[{\"text\":\"设计基础设施\",\"children\":[\"distributed-cache.md\",\"rate-limiting.md\",\"top-k.md\"]}],\"/article/design-algorithm/\":[{\"text\":\"系统设计算法\",\"children\":[\"bloom-filter.md\",\"consistent-hashing.md\"]}],\"/article/timeline/\":[{\"text\":\"网站动态\",\"children\":[\"twitter.md\",\"wechat.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
