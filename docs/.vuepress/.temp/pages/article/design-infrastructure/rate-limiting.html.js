import comp from "E:/echo/docs/.vuepress/.temp/pages/article/design-infrastructure/rate-limiting.html.vue"
const data = JSON.parse("{\"path\":\"/article/design-infrastructure/rate-limiting.html\",\"title\":\"限流器\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"限流器\",\"description\":\"设计限流器\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"article/design-infrastructure/rate-limiting.md\",\"excerpt\":\"\"}")
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
