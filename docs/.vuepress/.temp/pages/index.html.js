import comp from "E:/echo/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/hero.png\",\"actions\":[{\"text\":\"快速开始 ->\",\"link\":\"/article/design-infrastructure/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"设计基础设施\",\"details\":\"你可以跟随我一起去设计后端核心基础设施，并深入了解其原理\"},{\"title\":\"设计热门应用\",\"details\":\"你可以跟随我一起去设计当下最热门的应用，并深入了解其原理\"},{\"title\":\"系统设计算法\",\"details\":\"你可以在这里充分了解我们后端开发所必备的系统设计算法，算法是必需品\"},{\"title\":\"设计理论\",\"details\":\"对系统设计的相关概念理论进行详细讲解，良药苦口\"},{\"title\":\"问答归档\",\"details\":\"对系统设计的常见问题进行汇总、归档，定期对所有常见问题进行归档\"},{\"title\":\"学习路线\",\"details\":\"记录一些比较优质的学习方法与路线，别走弯路\"}]},\"headers\":[],\"git\":{\"updatedTime\":1726228565000,\"contributors\":[{\"name\":\"echo-lxy\",\"email\":\"lixinyang200205@163.com\",\"commits\":2}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
