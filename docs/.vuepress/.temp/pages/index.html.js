import comp from "E:/echo/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/hero.png\",\"actions\":[{\"text\":\"快速开始\",\"link\":\"/getting-started.html\",\"type\":\"primary\"}],\"features\":[{\"title\":\"设计基础设施\",\"details\":\"对后端常见的基础设施，例如常用中间件等进行设计\"},{\"title\":\"设计热门应用\",\"details\":\"对热门的应用进行简单的设计\"},{\"title\":\"系统设计算法\",\"details\":\"介绍了系统设计相关的算法\"},{\"title\":\"设计理论\",\"details\":\"对系统设计的相关概念理论进行详细讲解\"},{\"title\":\"问答归档\",\"details\":\"对系统设计的常见问题进行汇总、归档\"},{\"title\":\"学习路线\",\"details\":\"记录一些比较优质的学习方法与路线\"}]},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
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
