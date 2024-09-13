import comp from "E:/echo/docs/.vuepress/.temp/pages/article/design-algorithm/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/design-algorithm/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"article/design-algorithm/readme.md\",\"excerpt\":\"<p>请点击右侧目录！</p>\\n\"}")
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
