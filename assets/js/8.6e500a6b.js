(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{341:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("提出问题是一切智慧的开端")]),t._v(" "),s("ol",[s("li",[t._v("在面对亿级数据流时，如何在不占用过多内存的情况下，实时统计某个元素的出现频率？")]),t._v(" "),s("li",[t._v("为什么在大数据场景下，使用普通的哈希表（HashMap）进行频率统计往往不可行？")]),t._v(" "),s("li",[t._v("Count-Min Sketch 是如何通过牺牲部分准确性，换取高效的频率查询能力的？")]),t._v(" "),s("li",[t._v("你如何在 Count-Min Sketch 中确保低频数据的计数不受哈希冲突影响，保证统计结果的合理性？")]),t._v(" "),s("li",[t._v("如何根据允许的误差范围和冲突概率，优化 Count-Min Sketch 的哈希函数数量和内存空间配置？")]),t._v(" "),s("li",[t._v("在什么场景下 Count-Mean-Min Sketch 能有效改善 CMS 在处理长尾数据时的准确性？")]),t._v(" "),s("li",[t._v("如果你正在构建一个需要实时统计用户访问频率的系统，如何在内存和准确性之间权衡选择 Count-Min Sketch？")])])]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[s("strong",[t._v("问题：")]),t._v(" 如果老板让你"),s("strong",[t._v("统计一个实时的数据流中元素出现的频率")]),t._v("，并且准备随时回答某个元素出现的频率，不需要的精确的计数，那该怎么办？")]),t._v(" "),s("h4",{attrs:{id:"hashmap-解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-解决"}},[t._v("#")]),t._v(" hashmap 解决")]),t._v(" "),s("p",[t._v("在大数据场景下，比如网页的 TopK 问题，爬虫的是否访问过的问题，都是一种出现频次相关的问题，那么在系统设计的时候，如何选择策略和数据结构去存储相关的数据是最高效合适的呢？")]),t._v(" "),s("p",[t._v("计算元素的出现频次，如果出现与普通的场景下，简单的方案就是用 hashmap 来记录元素出现的次数：")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用HashMap存储元素及其频率")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" freq "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 统计频率")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" elements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("freq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("containsKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \tfreq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \tfreq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" freq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("但是这种方式在大量数据流的情况下，如果存在大量唯一元素的情况下，会占用大量的内存，导致其"),s("strong",[t._v("无法应对大数据场景")]),t._v("，因此在”时间换空间” 的策略选择中，这里就需要考虑通过时间，或者准确率等其他的因素来换空间。")]),t._v(" "),s("p",[t._v("通常来说，针对大数据场景，会无限扩张的数据结构显然是不适用的，所以希望能用固定的空间来进行计数的管理，同时希望尽量不要影响到运行的时间，换言之，可以"),s("strong",[t._v("牺牲掉一定的准确性，来实现节省空间的效果")]),t._v("。")]),t._v(" "),s("p",[t._v("基于上述需求，我们可以想到 Hash 算法：将无限大的空间映射到固定的 size 的输出上；而大数据场景下的 Hash 会遇到冲突会被无限放大的问题")]),t._v(" "),s("p",[t._v("如何解决冲突是最核心的问题")]),t._v(" "),s("ul",[s("li",[t._v("基于概率数据结构实现的 Bloom Filter 算法采取多 Hash 的方法来减少冲突")]),t._v(" "),s("li",[t._v("而其衍生出来的 CMS 算法以同样的思想，基于不同的设计，更为适应这种计数场景\n下面介绍该方法的具体实现")])]),t._v(" "),s("h2",{attrs:{id:"cms简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cms简介"}},[t._v("#")]),t._v(" CMS简介")]),t._v(" "),s("p",[t._v("Count-min Sketch 算法是一个可以用来计数的算法，在数据大小非常大时，一种高效的计数算法，通过牺牲准确性提高的效率。")]),t._v(" "),s("ul",[s("li",[t._v("是一个概率数据机构")])]),t._v(" "),s("ul",[s("li",[t._v("算法效率高")]),t._v(" "),s("li",[t._v("提供计数上线")])]),t._v(" "),s("p",[t._v("其中，重要参数包括")]),t._v(" "),s("ul",[s("li",[t._v("Hash 哈希函数的数量： k")]),t._v(" "),s("li",[t._v("计数表格列的数量： m")]),t._v(" "),s("li",[t._v("内存中用空间： "),s("code",[t._v("k x m x size of counter")])])]),t._v(" "),s("h4",{attrs:{id:"举个栗子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#举个栗子"}},[t._v("#")]),t._v(" 举个栗子")]),t._v(" "),s("p",[t._v("我们规定一个 m=5，k=3 的Count-min Sketch，用来计数，其中所有hash函数如下")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409141337953.png",alt:"image-20240914133757906"}})]),t._v(" "),s("p",[t._v("注意，所有hash函数的结果需 mod m")]),t._v(" "),s("p",[t._v("下面开始填表，首先初始状态为")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409141338285.webp",alt:"img"}})]),t._v(" "),s("p",[t._v("首先，向里面添加字母B，其ASCII码为66，求hash函数的结果为")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409141338670.png",alt:"image-20240914133847651"}})]),t._v(" "),s("p",[t._v("因此，表格变为")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409141339026.webp",alt:"img"}})]),t._v(" "),s("p",[t._v("接下来，我们查询字母"),s("strong",[t._v("A")]),t._v("，其ASCII码为65，求hash函数的结果为")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409141339556.png",alt:"image-20240914133917531"}})]),t._v(" "),s("p",[t._v("用这个结果去读表，发现其对应位置均为0，因此字母A最多出现0次，这个值是准确的。")]),t._v(" "),s("p",[t._v("然后，我们在查询字母G，其ASCII码为71，求hash函数的结果为")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409141339755.png",alt:"image-20240914133933732"}})]),t._v(" "),s("p",[t._v("用这个结果去读表，发现其对应位置均为1，因此字母G最多出现1次；**出错了！**我们从未向里面添加过字母G，这就是一次collision。Count-min Sketch的确会有这种问题，因为这个模型是从Bloom Filter衍生过来的。所以说Count-min Sketch是一个概率模型，返回的结果是一个上限值（upper-bound）。")]),t._v(" "),s("h2",{attrs:{id:"cms-的具体实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cms-的具体实现"}},[t._v("#")]),t._v(" CMS 的具体实现")]),t._v(" "),s("p",[t._v("首先第一点，通过 hash 来实现数值空间的转换，通过哈希函数 H 将输入元素 x 映射到一维数组上，通过该 index 的值来判断元素的 Count（是否存在）")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" input_element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tidx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tarray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("实际上这就是 Bloom Filter 的基础思想，然而无论是定长数组的”有限”还是 Hash 函数本身，都需要考虑冲突问题（两个元素被映射到同一个 index 上），冲突会导致 Count 比真实的大。")]),t._v(" "),s("p",[t._v("于是接下来面临的问题就是：**如何降低冲突的概率？**如何提高计数的准确性（实际上也包含在降低冲突的概率中）")]),t._v(" "),s("p",[t._v("可以参考 Bloom Filter 的策略，其通过"),s("strong",[t._v("多个 Hash 函数")]),t._v("来映射同一个数，从而来降低元素的冲突概率（未考虑超大数据场景），进而也能提高计数的准确性，那么我们看一下 bloom filter 方法：")]),t._v(" "),s("blockquote",[s("p",[t._v("Bloom Filter 算法解决的是"),s("strong",[t._v("存在性问题")]),t._v("，因此只需要一个 01 向量，当且仅当所有 Hash 计算出来的 index 的值都为 1 的时候，这个元素才可能存在；")])]),t._v(" "),s("p",[t._v("考虑将该方法向 Count 问题上迁移：")]),t._v(" "),s("ul",[s("li",[t._v("计数过程中：使用 n 个 Hash 函数计算 idx{1~n} ，然后 "),s("code",[t._v("vec[idx[i]] += 1")]),t._v(" 对count+1")]),t._v(" "),s("li",[t._v("查询过程中：使用 n 个 Hash 函数计算 idx{1~n}，然后取 "),s("code",[t._v("vec[idx[i]]")]),t._v(" 的最小值，考虑冲突场景可知，这个最小值>=实际的 count。")])]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" query_count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INT_MAX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size_t i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" function_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" idx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" tmp_count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" count_set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tquery_count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp_count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" query_count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" tmp_count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" query_count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("实际上"),s("strong",[t._v("取多个 hash 的最小值")]),t._v("就是 Count-Min Sketch 的核心，但如果仅是如此很明显有个问题，就是多个 hash 函数算出的多个 idx 会进一步的“污染”计数，得不偿失，导致 Count 更加不准确。")]),t._v(" "),s("p",[t._v("实际上很容易想到，为了通过多个 hash 来减少冲突，并使得多 hash 的索引更加的唯一，最好的办法就是使得每个 hash 对应的计数空间是独立的，也就是将我们的计数空间在拓展成二维数组,其 size 为 "),s("em",[t._v("depth × width")]),t._v(" 其中 depth 就代表 hash 函数的个数。")]),t._v(" "),s("p",[t._v("那么假设每个 Hash 函数的冲突概率是 p~i~ 那么优化后的冲突概率就从 min(P~i~) 减小到")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409141407648.png",alt:"image-20240914140713619"}})]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size_t i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("function_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" idx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" tmp_count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" count_set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tquery_count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp_count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" query_count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" tmp_count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" query_count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("结合了这个二维数组就是完整的 CMS 算法了，最终求得的 count 是实际 Count 的近似值（上界）。")]),t._v(" "),s("h2",{attrs:{id:"cms-的参数选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cms-的参数选择"}},[t._v("#")]),t._v(" CMS 的参数选择")]),t._v(" "),s("p",[t._v("如果确定使用 CMS，接下来面对的就是计数的精度问题，那么如何选择这个数组的 shape 才能尽可能的减少误差呢？（很明显都是越大越好，那么怎么样是最优/达标的呢）")]),t._v(" "),s("p",[t._v("确定一些变量参数：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409141408570.png",alt:"image-20240914140817544"}})]),t._v(" "),s("p",[t._v("设定误差范围：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409141408107.png",alt:"image-20240914140829086"}})]),t._v(" "),s("p",[t._v("以及结果在这个范围内的概率为:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409141408686.png",alt:"image-20240914140839662"}})]),t._v(" "),s("p",[t._v("那么可以计算出：e 是自然常数")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409141408847.png",alt:"image-20240914140852823"}})]),t._v(" "),s("p",[t._v("计算公式来自论文，有效性分析也可以从论文中阅读")]),t._v(" "),s("blockquote",[s("p",[t._v("添加一个新哈希函数以指数级别迅速降低超出边界异常数据的概率；当然，增加矩阵的宽度也可以增加减少冲突的概率，但这个只是线性级别。")])]),t._v(" "),s("h2",{attrs:{id:"count-mean-min-sketch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#count-mean-min-sketch"}},[t._v("#")]),t._v(" Count-Mean-Min-Sketch")]),t._v(" "),s("p",[t._v("由于 Hash 的冲突，"),s("strong",[t._v("CMS 对于低频的元素误差还是太大了")]),t._v("，引入噪音对于高频元素可以接受（topk）但是对于低频长尾来说太不准确了，因此有了以下的改进：")]),t._v(" "),s("ul",[s("li",[t._v("首先按照 CMS 的流程取出 d 个 sketch")]),t._v(" "),s("li",[t._v("对于每个 hash 估计出一个噪音，噪音为该行的所有整数（除了被查询元素）的平均值")]),t._v(" "),s("li",[t._v("该行的 sketch 减去该行的噪音，作为真正的 sketch")]),t._v(" "),s("li",[t._v("返回 d 个 sketch 的中位数")])]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CountMeanMinSketch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initialization and addition procedures as in CountMinSketch")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// n is total number of added elements")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("estimateFrequency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            sketchCounter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" estimators"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            noiseEstimation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" sketchCounter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sketchCounter – noiseEstimator\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("median")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("该算法显著改善了在长尾数据上的精确度。")]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/369981005",target:"_blank",rel:"noopener noreferrer"}},[t._v("Count-min Sketch 算法 - 知乎 (zhihu.com)"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://aikenh.cn/cn/CountMinSketch/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Count_Min Sketch算法 - AikenH Blogs"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);