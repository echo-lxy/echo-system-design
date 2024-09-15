(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{340:function(t,e,_){"use strict";_.r(e);var r=_(4),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("本专栏大量引用了")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://time.geekbang.org/column/intro/100084301?utm_campaign=geektime_search&utm_content=geektime_search&utm_medium=geektime_search&utm_source=geektime_search&utm_term=geektime_search",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis源码剖析与实战_Redis_Redis源码_数据结构_主从复制_缓存_集群_分布式数据库_键值数据库_事件驱动框架-极客时间 (geekbang.org)"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://book.douban.com/subject/25900156/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis设计与实现 (豆瓣) (douban.com)"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/redis/redis/blob/5.0/src/ae.c",target:"_blank",rel:"noopener noreferrer"}},[t._v("redis/src/ae.c at 5.0 · redis/redis (github.com)"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"如何学习"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何学习"}},[t._v("#")]),t._v(" 如何学习")]),t._v(" "),e("p",[t._v("希望你从头看到尾！")]),t._v(" "),e("h2",{attrs:{id:"前置知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前置知识"}},[t._v("#")]),t._v(" 前置知识")]),t._v(" "),e("ul",[e("li",[t._v("常用数据结构：数组、链表、哈希表、跳表")]),t._v(" "),e("li",[t._v("网络协议：TCP 协议")]),t._v(" "),e("li",[t._v("网络 IO 模型：IO 多路复用、非阻塞 IO、Reactor 网络模型")]),t._v(" "),e("li",[t._v("操作系统：写时复制（Copy On Write）、常见系统调用、磁盘 IO 机制")]),t._v(" "),e("li",[t._v("C 语言基础：循环、分支、结构体、指针")])]),t._v(" "),e("h2",{attrs:{id:"目录简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录简介"}},[t._v("#")]),t._v(" 目录简介")]),t._v(" "),e("h3",{attrs:{id:"伪码蓝图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#伪码蓝图"}},[t._v("#")]),t._v(" 伪码蓝图")]),t._v(" "),e("p",[e("strong",[t._v("特别重要！务必反复观看")])]),t._v(" "),e("h3",{attrs:{id:"基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),e("p",[e("strong",[t._v("这些基础模块就相当于一座大厦的地基，地基打好了，才能做到高楼耸立。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409160249936.png",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"主线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主线"}},[t._v("#")]),t._v(" 主线")]),t._v(" "),e("p",[t._v("接着，掌握了数据结构模块之后，这时我们的重点就需要放在「"),e("strong",[t._v("核心主线")]),t._v("」上来了。")]),t._v(" "),e("p",[t._v("在这个阶段，我们需要找到一个明确的目标，以这个目标为主线去读代码。因为读源码一个很常见的需求，就是为了了解这个项目最「核心功能」的实现细节，我们只有以此为目标，找到这条主线去读代码，才能达到最终目的。")]),t._v(" "),e("p",[t._v("那么在读 Redis 源码时，什么才是它的核心主线呢？这里我分享一个非常好用的技巧，就是根据「"),e("strong",[t._v("Redis 究竟是怎么处理客户端发来的命令的？")]),t._v("」为主线来梳理。")]),t._v(" "),e("p",[t._v("举个例子，当我们在执行 SET testkey testval EX 60 这样一条命令时，就需要搞清楚 Redis 是怎么执行这条命令的。")]),t._v(" "),e("p",[t._v("也就是要明确，"),e("strong",[t._v("Redis 从收到客户端请求，到把数据存到 Redis 中、设置过期时间，最后把响应结果返回给客户端")]),t._v("，整个过程的每一个环节，到底是如何处理的。")]),t._v(" "),e("p",[t._v("有了这条主线，我们就有了非常明确的目标，而且沿着这条主线去读代码，我们还可以很清晰地把多个模块「串联」起来。比如从前面的例子中，我们会看到一条命令的执行，主要包含了这样几个阶段。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Redis Server 初始化")]),t._v("：加载配置、监听端口、注册连接建立事件、启动事件循环（server.c、anet.c）。")]),t._v(" "),e("li",[e("strong",[t._v("接收、解析客户端请求")]),t._v("：初始化 client、注册读事件、读客户端 socket（networking.c）。")]),t._v(" "),e("li",[e("strong",[t._v("处理具体的命令")]),t._v("：找到对应的命令函数、执行命令（server.c、t_string.c、t_list.c、t_hash.c、t_set.c、t_zset.c）。")]),t._v(" "),e("li",[e("strong",[t._v("返回响应给客户端")]),t._v("：写客户端缓冲区、注册写事件、写客户端 socket（networking.c）。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://kaito-blog-1253469779.cos.ap-beijing.myqcloud.com/2021/09/16323108140155.jpg",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409160249039.jpeg",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("沿着这条主线去读代码，我们就可以掌握一条命令的执行全过程。")]),t._v(" "),e("p",[t._v("而且，由于这条主线的代码逻辑，已经覆盖了「所有命令」的执行流程，我们下次再去读其它命令时，比如 SADD，就只需要关注「处理命令」部分的逻辑即可，其它逻辑有 80% 都是相同的。")]),t._v(" "),e("h3",{attrs:{id:"支线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支线"}},[t._v("#")]),t._v(" 支线")]),t._v(" "),e("p",[t._v("不过，在攻打主线的过程中，我们肯定还会遇到各种「支线」逻辑，比如"),e("strong",[t._v("数据过期、替换淘汰、持久化、主从复制")]),t._v("等。")]),t._v(" "),e("p",[t._v("其实，在阅读主线逻辑的时候，我们并不需要去重点关注这些支线，而当整个主线逻辑「清晰」起来之后，我们再去读这些支线模块，就会容易很多了。")]),t._v(" "),e("p",[t._v("这时，我们就可以从这些支线中，选取下一个「目标」，带着这个目标去阅读，比如说：")]),t._v(" "),e("ul",[e("li",[t._v("过期策略是怎么实现的？（expire.c、lazyfree.c）")]),t._v(" "),e("li",[t._v("淘汰策略是如何实现的？（evict.c）")]),t._v(" "),e("li",[t._v("持久化 RDB、AOF 是怎么做的？（rdb.c、aof.c）")]),t._v(" "),e("li",[t._v("主从复制是怎么做的？（replication.c）")]),t._v(" "),e("li",[t._v("哨兵如何完成故障自动切换？（sentinel.c）")]),t._v(" "),e("li",[t._v("分片逻辑如何实现？（cluster.c）")]),t._v(" "),e("li",[t._v("…")])]),t._v(" "),e("p",[t._v("有了新的支线目标后，我们依旧可以采用前面提到的「先整体后细节」的思路阅读相关模块，这样下来，整个项目的每个模块，就可以被「逐一击破」了。")])])}),[],!1,null,null,null);e.default=s.exports}}]);