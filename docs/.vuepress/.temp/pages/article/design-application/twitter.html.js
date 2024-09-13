import comp from "E:/echo/docs/.vuepress/.temp/pages/article/design-application/twitter.html.vue"
const data = JSON.parse("{\"path\":\"/article/design-application/twitter.html\",\"title\":\"设计推特\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"设计推特\",\"description\":\"设计推特\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"article/design-application/twitter.md\",\"excerpt\":\"\"}")
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
