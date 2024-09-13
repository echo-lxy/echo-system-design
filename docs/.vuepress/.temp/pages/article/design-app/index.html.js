import comp from "E:/echo-blog/vuepress-starter/docs/.vuepress/.temp/pages/article/design-app/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/design-app/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"article/design-app/README.md\",\"excerpt\":\"<p>hhhh</p>\\n\"}")
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
