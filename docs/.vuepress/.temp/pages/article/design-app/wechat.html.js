import comp from "E:/echo-blog/vuepress-starter/docs/.vuepress/.temp/pages/article/design-app/wechat.html.vue"
const data = JSON.parse("{\"path\":\"/article/design-app/wechat.html\",\"title\":\"设计微信\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"设计微信\",\"description\":\"设计微信\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"article/design-app/wechat.md\",\"excerpt\":\"\"}")
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
