import comp from "E:/echo/docs/.vuepress/.temp/pages/article/design-application/wechat.html.vue"
const data = JSON.parse("{\"path\":\"/article/design-application/wechat.html\",\"title\":\"设计微信\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"设计微信\",\"description\":\"设计微信\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"article/design-application/wechat.md\",\"excerpt\":\"\"}")
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
