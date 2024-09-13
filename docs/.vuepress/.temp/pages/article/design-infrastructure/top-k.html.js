import comp from "E:/echo/docs/.vuepress/.temp/pages/article/design-infrastructure/top-k.html.vue"
const data = JSON.parse("{\"path\":\"/article/design-infrastructure/top-k.html\",\"title\":\"热点数据服务\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"热点数据服务\",\"description\":\"热点数据服务Calculate top 100 list for last\"},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"前置知识\",\"slug\":\"前置知识\",\"link\":\"#前置知识\",\"children\":[]},{\"level\":2,\"title\":\"需求\",\"slug\":\"需求\",\"link\":\"#需求\",\"children\":[]},{\"level\":2,\"title\":\"渐进设计\",\"slug\":\"渐进设计\",\"link\":\"#渐进设计\",\"children\":[{\"level\":3,\"title\":\"哈希表+单主机\",\"slug\":\"哈希表-单主机\",\"link\":\"#哈希表-单主机\",\"children\":[]},{\"level\":3,\"title\":\"哈希表+多主机\",\"slug\":\"哈希表-多主机\",\"link\":\"#哈希表-多主机\",\"children\":[]},{\"level\":3,\"title\":\"哈希表+多主机+分区\",\"slug\":\"哈希表-多主机-分区\",\"link\":\"#哈希表-多主机-分区\",\"children\":[]},{\"level\":3,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}]},{\"level\":2,\"title\":\"高层架构\",\"slug\":\"高层架构\",\"link\":\"#高层架构\",\"children\":[]},{\"level\":2,\"title\":\"客户端检索数据\",\"slug\":\"客户端检索数据\",\"link\":\"#客户端检索数据\",\"children\":[]},{\"level\":2,\"title\":\"解答疑惑\",\"slug\":\"解答疑惑\",\"link\":\"#解答疑惑\",\"children\":[]},{\"level\":2,\"title\":\"参考资料\",\"slug\":\"参考资料\",\"link\":\"#参考资料\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"article/design-infrastructure/top-k.md\",\"excerpt\":\"<h2>概述</h2>\\n<p>Top k 问题解决方案的各种应用（Google/Twitter/YouTube 趋势、热门产品、波动性股票、DDoS 攻击预防）。</p>\\n<p>在这样的规模下，数据库或分布式缓存不是一个选项。我们可能正在处理 1M RPS。如果我们使用 DB 来跟踪视图计数，首先写入/更新会非常慢，然后找到前 K 项需要扫描整个数据集。</p>\\n<p>也许 <strong>MapReduce</strong> 可以提供帮助。但这还不够。我们需要尽可能接近实时地返回重磅统计数据。</p>\\n<p>例如：</p>\\n<ul>\\n<li>Calculate top 100 list for last</li>\\n<li>1 min, 5 min, 15 mins, 60 mins etc.</li>\\n</ul>\"}")
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
