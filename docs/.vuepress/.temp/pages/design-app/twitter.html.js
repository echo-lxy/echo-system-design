import comp from "E:/echo-blog/vuepress-starter/docs/.vuepress/.temp/pages/design-app/twitter.html.vue"
const data = JSON.parse("{\"path\":\"/design-app/twitter.html\",\"title\":\"设计推特\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"设计推特\",\"description\":\"设计推特\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"design-app/twitter.md\",\"excerpt\":\"\"}")
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
