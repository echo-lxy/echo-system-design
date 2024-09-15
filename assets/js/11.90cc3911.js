(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{346:function(v,_,s){"use strict";s.r(_);var t=s(4),a=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("div",{staticClass:"custom-block danger"},[_("p",{staticClass:"custom-block-title"},[v._v("提出问题是一切智慧的开端")]),v._v(" "),_("ol",[_("li",[v._v("如何在超大规模数据集合中快速判断某个元素是否存在，同时避免耗费大量内存？")]),v._v(" "),_("li",[v._v("你知道为什么布隆过滤器可以在不存储元素本身的情况下，提供高效的存在性查询吗？")]),v._v(" "),_("li",[v._v("为什么布隆过滤器在一些应用场景中会产生误判，但仍然被广泛使用？")]),v._v(" "),_("li",[v._v("布隆过滤器是如何通过节省空间来解决Redis缓存穿透问题的？")]),v._v(" "),_("li",[v._v("如何根据预期的元素数量和允许的错误率，计算布隆过滤器的最佳大小和哈希函数个数？")]),v._v(" "),_("li",[v._v('布隆过滤器在数据查询中如何做到 "一定不存在或可能存在" 的判定？')]),v._v(" "),_("li",[v._v("为什么删除元素对于布隆过滤器来说是个挑战，是否有改进的方法？")])])]),v._v(" "),_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),_("p",[v._v("布隆过滤器（Bloom Filter）是1970年由布隆提出的。它实际上是 "),_("strong",[v._v("一个很长的二进制向量")]),v._v(" 和 "),_("strong",[v._v("一系列随机映射函数")]),v._v("。布隆过滤器可以用于 "),_("strong",[v._v("检索一个元素是否在一个集合中")]),v._v("。")]),v._v(" "),_("p",[v._v("如果还是不太好理解的话，就可以把布隆过滤器理解为一个 "),_("code",[v._v("set")]),v._v(" 集合，我们可以通过 "),_("code",[v._v("add")]),v._v(" 往里面添加元素，通过 "),_("code",[v._v("contains")]),v._v(" 来判断是否包含某个元素")]),v._v(" "),_("h3",{attrs:{id:"优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[v._v("#")]),v._v(" 优点")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("时间复杂度低")]),v._v("，增加和查询元素的时间复杂为 O(N)，（N 为哈希函数的个数，通常情况比较小）")]),v._v(" "),_("li",[_("strong",[v._v("保密性强")]),v._v("，布隆过滤器不存储元素本身")]),v._v(" "),_("li",[_("strong",[v._v("存储空间小")]),v._v("，如果允许存在一定的误判，布隆过滤器是非常节省空间的（相比其他数据结构如Set集合）")])]),v._v(" "),_("h3",{attrs:{id:"缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[v._v("#")]),v._v(" 缺点")]),v._v(" "),_("ul",[_("li",[v._v("有点一定的"),_("strong",[v._v("误判率")]),v._v("，但是可以通过调整参数来降低")]),v._v(" "),_("li",[_("strong",[v._v("无法获取元素本身")])]),v._v(" "),_("li",[v._v("很"),_("strong",[v._v("难删除")]),v._v("元素")])]),v._v(" "),_("h3",{attrs:{id:"使用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[v._v("#")]),v._v(" 使用场景")]),v._v(" "),_("p",[v._v("布隆过滤器可以告诉我们 “某样东西"),_("strong",[v._v("一定不存在或者可能存在")]),v._v("”，也就是说布隆过滤器说这个数"),_("strong",[v._v("不存在则一定不存")]),v._v("，布隆过滤器说这个数"),_("strong",[v._v("存在则可能不存在")]),v._v("（误判，后续会讲），利用这个判断是否存在的特点可以做很多有趣的事情。")]),v._v(" "),_("ul",[_("li",[v._v("解决 Redis 缓存穿透问题（面试重点）")]),v._v(" "),_("li",[v._v("邮件过滤，使用布隆过滤器来做邮件黑名单过滤")]),v._v(" "),_("li",[v._v("对爬虫网址进行过滤，爬过的不再爬")]),v._v(" "),_("li",[v._v("解决新闻推荐过的不再推荐(类似抖音刷过的往下滑动不再刷到)")]),v._v(" "),_("li",[v._v("HBase RocksDB LevelDB 等数据库内置布隆过滤器，用于判断数据是否存在，可以减少数据库的IO请求")])]),v._v(" "),_("h2",{attrs:{id:"布隆过滤器的原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#布隆过滤器的原理"}},[v._v("#")]),v._v(" 布隆过滤器的原理")]),v._v(" "),_("h3",{attrs:{id:"数据结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[v._v("#")]),v._v(" 数据结构")]),v._v(" "),_("p",[v._v("布隆过滤器它实际上是 "),_("strong",[v._v("一个很长的二进制向量")]),v._v(" 和 "),_("strong",[v._v("一系列随机映射函数")]),v._v("。以Redis中的布隆过滤器实现为例，Redis 中的布隆过滤器底层是一个大型位数组（二进制数组）+多个无偏hash函数。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409141132367.png",alt:"img"}})]),v._v(" "),_("p",[v._v("多个无偏hash函数")]),v._v(" "),_("p",[v._v("无偏hash函数就是能把元素的hash值计算的 "),_("strong",[v._v("比较均匀")]),v._v(" 的hash函数，能使得计算后的元素下标比较均匀的映射到位数组中。能有效减少误差。")]),v._v(" "),_("p",[v._v("如下就是一个简单的布隆过滤器示意图，其中 k1、k2 代表增加的元素，a、b、c即为无偏hash函数，最下层则为二进制数组。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409141132401.png",alt:"img"}})]),v._v(" "),_("h3",{attrs:{id:"空间计算"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#空间计算"}},[v._v("#")]),v._v(" 空间计算")]),v._v(" "),_("p",[v._v("在布隆过滤器增加元素之前，首先需要初始化布隆过滤器的空间，也就是上面说的二进制数组，除此之外还需要计算无偏hash函数的个数。")]),v._v(" "),_("p",[v._v("布隆过滤器提供了两个参数，分别是预计加入元素的大小 n，运行的错误率 p。")]),v._v(" "),_("p",[v._v("布隆过滤器中有算法根据这两个参数会计算出二进制数组的大小 m，以及无偏hash函数的个数 k。")]),v._v(" "),_("p",[v._v("它们之间的关系比较简单：")]),v._v(" "),_("p",[v._v("如下地址是一个免费的在线布隆过滤器在线计算的网址：")]),v._v(" "),_("blockquote",[_("p",[v._v("https://krisives.github.io/bloom-calculator/")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409141132411.png",alt:"img"}})]),v._v(" "),_("h3",{attrs:{id:"增加元素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#增加元素"}},[v._v("#")]),v._v(" 增加元素")]),v._v(" "),_("p",[v._v("往布隆过滤器增加元素，添加的key需要根据"),_("code",[v._v("k")]),v._v("个无偏hash函数计算得到多个hash值，然后对数组长度进行取模得到数组下标的位置，然后将对应数组下标的位置的值置为1")]),v._v(" "),_("ul",[_("li",[v._v("通过k个无偏hash函数计算得到k个hash值")]),v._v(" "),_("li",[v._v("依次取模数组长度，得到数组索引")]),v._v(" "),_("li",[v._v("将计算得到的数组索引下标位置数据修改为1")])]),v._v(" "),_("p",[v._v("例如，"),_("code",[v._v("key = Liziba")]),v._v("，无偏"),_("code",[v._v("hash")]),v._v("函数的个数"),_("code",[v._v("k=3")]),v._v("，分别为hash1、hash2、hash3。三个hash函数计算后得到三个数组下标值，并将其值修改为1.")]),v._v(" "),_("p",[v._v("如图所示")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409141132392.png",alt:"img"}})]),v._v(" "),_("h3",{attrs:{id:"查询元素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查询元素"}},[v._v("#")]),v._v(" 查询元素")]),v._v(" "),_("p",[v._v("布隆过滤器最大的用处就在于判断某样东西一定不存在或者可能存在，而这个就是查询元素的结果。其查询元素的过程如下：")]),v._v(" "),_("ul",[_("li",[v._v("通过 k 个无偏hash函数计算得到 k 个hash值")]),v._v(" "),_("li",[v._v("依次取模数组长度，得到数组索引")]),v._v(" "),_("li",[v._v("判断索引处的值是否全部为 1，如果全部为 1 则存在（这种存在可能是误判），如果存在一个 0 则必定不存在")])]),v._v(" "),_("p",[v._v("关于误判，其实非常好理解，hash函数再怎么牛逼，也无法完全避免hash冲突，也就是说可能会存在多个元素计算的hash值是相同的，那么它们取模数组长度后的到的数组索引也是相同的，这就是误判的原因。例如李子捌和李子柒的hash值取模后得到的数组索引都是1，但其实这里只有李子捌，如果此时判断李子柒在不在这里，误判就出现啦！因此布隆过滤器最大的缺点误判只要知道其判断元素是否存在的原理就很容易明白了！")]),v._v(" "),_("h3",{attrs:{id:"修改元素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#修改元素"}},[v._v("#")]),v._v(" 修改元素")]),v._v(" "),_("p",[v._v("不允许修改")]),v._v(" "),_("h3",{attrs:{id:"删除元素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#删除元素"}},[v._v("#")]),v._v(" 删除元素")]),v._v(" "),_("p",[v._v("布隆过滤器对元素的删除不太支持，目前有一些变形的特定布隆过滤器支持元素的删除！关于为什么对删除不太支持，其实也非常好理解，hash冲突必然存在，删除肯定是很苦难的！你将 A 的数组下标置为 0，那可能 B 也为受到影响")]),v._v(" "),_("h2",{attrs:{id:"redis-中的-布隆过滤器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis-中的-布隆过滤器"}},[v._v("#")]),v._v(" Redis 中的 布隆过滤器")]),v._v(" "),_("h2",{attrs:{id:"参考文献"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[v._v("#")]),v._v(" 参考文献")]),v._v(" "),_("p",[_("a",{attrs:{href:"https://blog.csdn.net/qq_41125219/article/details/119982158",target:"_blank",rel:"noopener noreferrer"}},[v._v("布隆(Bloom Filter)过滤器——全面讲解，建议收藏-CSDN博客"),_("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=a.exports}}]);