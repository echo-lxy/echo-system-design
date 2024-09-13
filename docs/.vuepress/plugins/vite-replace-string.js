// docs/.vuepress/plugins/vite-replace-string.js
export default function replaceStringPlugin(options = {}) {
  // 设置默认选项
  const { search, replace, include = /\.(js|vue|html|md)$/ } = options

  return {
    name: "vite-replace-string-plugin",
    enforce: "post", // 确保在其他插件之后执行
    apply: "build", // 只在构建时应用这个插件
    transform(code, id) {
      // 检查文件是否匹配 include 选项的正则
      if (include.test(id)) {
        // 打印调试信息
        console.log(`Transforming ${id}`)
        // 替换指定的字符串
        return code.replace(new RegExp(search, "g"), replace)
      }
      return code
    },
  }
}
