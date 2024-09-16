(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{372:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("提出问题是一切智慧的开端")]),t._v(" "),s("ol",[s("li",[t._v("为什么C语言的字符串设计在性能和安全性方面无法满足Redis的需求？")]),t._v(" "),s("li",[t._v("SDS如何通过记录字符串长度，让获取字符串长度操作从O(N)简化为O(1)？")]),t._v(" "),s("li",[t._v("在高并发环境下，频繁的字符串操作会如何影响性能？SDS的“空间预分配”是如何缓解这个问题的？")]),t._v(" "),s("li",[t._v("Redis为什么需要SDS的二进制安全特性？在存储二进制数据时，有哪些传统方法无法解决的问题？")]),t._v(" "),s("li",[t._v("当SDS字符串缩短时，为什么它不立即释放多余的内存？在什么情况下需要手动释放？")]),t._v(" "),s("li",[t._v("SDS的嵌入式字符串如何通过一次性分配内存来减少碎片？它适用于多大长度的字符串？")])])]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("一个好的字符串设计，需要尽量满足以下三个要求：")]),t._v(" "),s("ul",[s("li",[t._v("能支持丰富且高效的字符串操作，比如字符串追加、拷贝、比较、获取长度等")]),t._v(" "),s("li",[t._v("能保存任意的二进制数据，比如图片等")]),t._v(" "),s("li",[t._v("能尽可能地节省内存开销")])]),t._v(" "),s("p",[t._v("Redis 设计了"),s("strong",[t._v("简单动态字符串")]),t._v("（Simple Dynamic String，SDS）的结构，用来表示字符串。相比于 C 语言中的字符串实现，SDS 这种字符串的实现方式，会"),s("strong",[t._v("提升字符串的操作效率，并且可以用来保存二进制数据")])]),t._v(" "),s("p",[t._v("SDS 使用场景")]),t._v(" "),s("ul",[s("li",[t._v("数据库中的字符串值")]),t._v(" "),s("li",[t._v("AOF 模块中的 AOF 缓冲区")]),t._v(" "),s("li",[t._v("客户端状态中的输入缓冲区")]),t._v(" "),s("li",[t._v("等等等等")])]),t._v(" "),s("p",[t._v("可以说 Redis 很多用到了字符串的地方都是使用的 SDS")]),t._v(" "),s("h2",{attrs:{id:"sds-的定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sds-的定义"}},[t._v("#")]),t._v(" SDS 的定义")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("sdshdr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//记录buf数组中已使用的字节数")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//等于SDS所保存的字符串的长度")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 记录buf数组中未使用的字节数")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" free"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//字节数组 用于保存字符串")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" buf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409161814932.png",alt:"image-20240916181440900"}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("SDS遵循C字符串以空字符结尾的惯例，保存空字符的1字节空间不计算在SDS的len属性里面，并且为空字符分配额外的1字节空间，以及添加空字符到字符串末尾等操作，都是由SDS函数自动完成的，所以这个空字符对于SDS的使用者来说是完全透明的。遵循空字符结尾这一惯例的好处是，SDS可以直接重用一部分C字符串函数库里面的函数。")])]),t._v(" "),s("h2",{attrs:{id:"sds-与-c-字符串的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sds-与-c-字符串的区别"}},[t._v("#")]),t._v(" SDS  与 C 字符串的区别")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409161818417.png",alt:"image-20240916181809392"}})]),t._v(" "),s("p",[t._v("C 语言字符串使用长度为 N+1 的字符串数组来存放长度为 N 的字符串，并且字符数组的最后一个元素总是空字符串'\\0'")]),t._v(" "),s("p",[t._v("这种简单的方式，并不能满足 Redis 对字符串在安全性、效率以及功能方面的要求")]),t._v(" "),s("p",[t._v("所以接下来说明 SDS 比 C 字符串更适用于 Redis 的原因")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409161916583.png",alt:"image-20240916191656532"}})]),t._v(" "),s("h3",{attrs:{id:"常数复杂度获取字符串长度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常数复杂度获取字符串长度"}},[t._v("#")]),t._v(" 常数复杂度获取字符串长度")]),t._v(" "),s("p",[s("strong",[t._v("C 字符串并不记录自身的长度信息")]),t._v("，所以为了获取一个C字符串的长度，程序必须遍历整个字符串，对遇到的每个字符进行计数，直到遇到代表字符串结尾的空字符为止，这个操作的复杂度为 "),s("strong",[t._v("O(N)")])]),t._v(" "),s("p",[t._v("SDS 中有 len 属性来存储字符串长度，使得 STRLEN 命令的复杂度仅为 O(1)")]),t._v(" "),s("p",[t._v("len 属性的设置和更新是由 SDS 的 API 在执行的时候自动完成的，我们无需手动设置")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409161823786.png",alt:"image-20240916182314746"}})]),t._v(" "),s("h3",{attrs:{id:"杜绝缓冲区溢出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#杜绝缓冲区溢出"}},[t._v("#")]),t._v(" 杜绝缓冲区溢出")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("strcat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("dest，"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("src"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("C 字符串不记录自身长度，所以当调用 strcat 函数时，系统假定用户为 dest 分配了足够多的内存，可以容纳src字符串中的所有内容，而一旦这个假定不成立，就会产生缓冲区溢出")]),t._v(" "),s("p",[t._v("SDS 的空间分配策略完全杜绝了发生缓冲区溢出的可能性：SDS API需要对SDS进行修改的时候，API会先检查SDS的空间是否满足修改所需的要求，如果不满足的话，API会自动将SDS的空间进行扩容到指定的大小，然后再次执行实际的修改操作，所以SDS既不需要手动扩容，也不会缓冲区溢出")]),t._v(" "),s("h3",{attrs:{id:"减少修改字符串时带来的内存重分配次数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少修改字符串时带来的内存重分配次数"}},[t._v("#")]),t._v(" 减少修改字符串时带来的内存重分配次数")]),t._v(" "),s("p",[t._v("因为C字符串的长度和底层暑促的长度之间存在关联性，所以每次改变字符串长度的时候，程序"),s("strong",[t._v("总要")]),t._v("对保存这个C字符串的数组"),s("strong",[t._v("进行一次内存重分配操作")])]),t._v(" "),s("p",[s("strong",[t._v("内存重分配")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("如果程序执行的是增长字符串的操作，比如拼接操作(append)，那么在执行这个操作之前，程序需要先通过内存重分配来扩展底层数组的空间大小，如果忘了这一步就会产生缓冲区溢出")]),t._v(" "),s("li",[t._v("如果程序执行的是缩短字符串的操作，比如截断操作(trim)，那么在执行这个操作之后，程序需要通过内存重分配来释放字符串不再使用的那部分空间--如果忘了这一步就会产生内存泄漏")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("一般情况下，如果修改字符串长度的情况不常见，那么一般是可以接受内存重分配的")]),t._v(" "),s("p",[t._v("但是Redis作为数据库，为了极致化性能体验，就会尽量避免内存重分配")])]),t._v(" "),s("p",[t._v("所以SDS 通过 free 属性记录未使用字节，从而解除了字符串长度和底层数组长度之间的关联：在SDS中，buf 数组的长度不一定就是字符数量加一，数组里面可以包含未使用的字节")]),t._v(" "),s("p",[t._v("那 "),s("strong",[t._v("free属性 有什么用呢，如何去避免内存重分配呢？")])]),t._v(" "),s("p",[t._v("SDS实现了「空间预分配」和「惰性空间释放」两种优化策略")]),t._v(" "),s("h4",{attrs:{id:"空间预分配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空间预分配"}},[t._v("#")]),t._v(" 空间预分配")]),t._v(" "),s("p",[t._v("「空间预分配」用于"),s("strong",[t._v("优化 SDS 的字符串增长操作")]),t._v("：当 SDS 的 API 对一个 SDS 进行修改，并且需要对 SDS 进行空间扩展的时候，程序不仅会为 SDS 分配修改所必须要的空间，还会为 SDS 分配额外的未使用空间")]),t._v(" "),s("p",[t._v("额外分配的未使用空间数量有以下规则")]),t._v(" "),s("ul",[s("li",[t._v("当对 SDS 进行修改之后，SDS 的 len 属性 小于 1 MB，那么程序分配和 len属性同样大小的未使用空间，这是 SDS len属性的值将和 free属性的值相同")]),t._v(" "),s("li",[t._v("当对 SDS 进行修改之后，SDS 的 len 属性 小于等于 1 MB，那么程序会分配 1MB的使用空间")])]),t._v(" "),s("p",[t._v("通过「空间预分配」策略，Redis 可以减少连续执行字符串增长操作所需的内存重分配次数")]),t._v(" "),s("h4",{attrs:{id:"惰性空间释放"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#惰性空间释放"}},[t._v("#")]),t._v(" 惰性空间释放")]),t._v(" "),s("p",[t._v("「惰性空间释放」用于"),s("strong",[t._v("优化 SDS 的字符串缩短操作")]),t._v("：当SDS的API需要缩短 SDS 保存的字符串时，程序并不立即使用内存重分配来回收缩短后多出来的字节，而是使用free属性将这些字节的数量记录起来，并等待将来使用\n举个例子，sdstrim 函数接受一个SDS和一个C字符串作为参数，移除SDS中所有在C字符串中出现过的字符")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409161845059.png",alt:"image-20240916184518021"}})]),t._v(" "),s("p",[t._v("从图中可以看到，字符数组的最后一个字符是“\\0”，这个字符的作用是什么呢？其实，C 语言在对字符串进行操作时，char* 指针只是指向字符数组的起始位置，而"),s("strong",[t._v("字符数组的结尾位置就用“\\0”表示，意思是指字符串的结束。")])]),t._v(" "),s("p",[t._v("注意，执行sdstrim之后的SDS并没有释放多出来的8字节空间，而是将这8字节空间作为未使用空间保留在了SDS里面，如果将来要对SDS进行增长操作的话，这些未使用空间就可能会派上用场")]),t._v(" "),s("p",[t._v("所以也就避免了缩短字符串时所需的内存重分配操作，并未将来可能有的操作提供了优化")]),t._v(" "),s("p",[t._v("同时，SDS也提供了相应的API，让我们可以在有需要的时候释放SDS的未使用空间，不用担心惰性空间释放策略会造成内存浪费")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("思考题")]),t._v(" "),s("p",[t._v("什么时候 Redis 会去主动释放 SDS 中的未使用空间")])]),t._v(" "),s("h4",{attrs:{id:"二进制安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二进制安全"}},[t._v("#")]),t._v(" 二进制安全")]),t._v(" "),s("p",[t._v("C 字符串中的字符必须符合某种编码，比如ASCII，并且"),s("strong",[t._v("除了字符串的末尾之外，字符串里面不能包含空字符")]),t._v(" "),s("code",[t._v("\\0")]),t._v("，否则最先被程序读入的空字符将被误认为是字符串结尾，这些限制使得C字符串只能保存文本数据，而不能保存像图片、音频、视频、压缩文件这样的二进制数据")]),t._v(" "),s("p",[t._v("虽然数据库一般用于保存文本数据，但使用数据库来保存二进制数据的场景也不少见，因此，为了确保Redis可以适用于各种不同的使用场景，SDS的API都是二进制安全的，所有SDS API都会以处理二进制的方式来处理SDS存放在buf数组里的数据程序不会对其中的数据做任何限制、过滤、或者假设，数据在写入时是什么样的，它被读取时就是什么样")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409161915877.png",alt:"image-20240916191510838"}})]),t._v(" "),s("p",[s("strong",[t._v("通过使用二进制安全的SDS，而不是C字符串，使得Redis不仅可以保存文本数据，还可以保存任意格式的二进制数据")])]),t._v(" "),s("h4",{attrs:{id:"兼容部分-c-字符串函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兼容部分-c-字符串函数"}},[t._v("#")]),t._v(" 兼容部分 C 字符串函数")]),t._v(" "),s("p",[t._v("略")]),t._v(" "),s("h2",{attrs:{id:"sds-的内存友好设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sds-的内存友好设计"}},[t._v("#")]),t._v(" SDS 的内存友好设计")]),t._v(" "),s("p",[t._v("这里我们先做个简单的回顾：SDS 设计了不同类型的结构头，包括 sdshdr8、sdshdr16、sdshdr32 和 sdshdr64。这些不同类型的结构头可以适配不同大小的字符串，从而避免了内存浪费。")]),t._v(" "),s("p",[t._v("不过，SDS 除了使用精巧设计的结构头外，在保存较小字符串时，其实还使用了"),s("strong",[t._v("嵌入式字符串")]),t._v("的设计方法。这种方法避免了给字符串分配额外的空间，而是可以让字符串直接保存在 Redis 的基本数据对象结构体中。")]),t._v(" "),s("p",[t._v("所以这也就是说，要想理解嵌入式字符串的设计与实现，我们就需要先来了解下，Redis 使用的基本数据对象结构体 redisObject 是什么样的")]),t._v(" "),s("h4",{attrs:{id:"redisobject-结构体与位域定义方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redisobject-结构体与位域定义方法"}},[t._v("#")]),t._v(" redisObject 结构体与位域定义方法")]),t._v(" "),s("p",[t._v("redisObject 结构体是在 server.h 文件中定义的，主要功能是用来保存键值对中的"),s("strong",[t._v("值")]),t._v("。这个结构一共定义了 4 个元数据和一个指针。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("type")]),t._v("：redisObject 的数据类型，是应用程序在 Redis 中保存的数据类型，包括 String、List、Hash 等。")]),t._v(" "),s("li",[s("strong",[t._v("encoding")]),t._v("：redisObject 的编码类型，是 Redis 内部实现各种数据类型所用的数据结构。")]),t._v(" "),s("li",[s("strong",[t._v("lru")]),t._v("：redisObject 的 LRU 时间。")]),t._v(" "),s("li",[s("strong",[t._v("refcount")]),t._v("：redisObject 的引用计数。")]),t._v(" "),s("li",[s("strong",[t._v("ptr")]),t._v("：指向值的指针。")])]),t._v(" "),s("p",[t._v("下面的代码展示了 redisObject 结构体的定义：")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("redisObject")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//redisObject的数据类型，4个bits")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//redisObject的编码类型，4个bits")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" lru"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("LRU_BITS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//redisObject的LRU时间，LRU_BITS为24个bits")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" refcount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//redisObject的引用计数，4个字节")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ptr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指向值的指针，8个字节")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" robj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("从代码中我们可以看到，在 type、encoding 和 lru 三个变量后面都有一个冒号，并紧跟着一个数值，表示该元数据占用的比特数。其中，type 和 encoding 分别占 4bits。而 lru 占用的比特数，是由 server.h 中的宏定义 LRU_BITS 决定的，它的默认值是 24bits，如下所示：")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("LRU_BITS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")])])]),t._v("\n")])])]),s("p",[t._v("而这里我想让你学习掌握的，就是这种"),s("strong",[t._v("变量后使用冒号和数值的定义方法")]),t._v("。这实际上是 C 语言中的"),s("strong",[t._v("位域定义方法")]),t._v("，可以用来有效地节省内存开销。")]),t._v(" "),s("p",[t._v("这种方法比较适用的场景是，当一个变量占用不了一个数据类型的所有 bits 时，就可以使用位域定义方法，把一个数据类型中的 bits，划分成多个位域，每个位域占一定的 bit 数。这样一来，一个数据类型的所有 bits 就可以定义多个变量了，从而也就有效节省了内存开销。")]),t._v(" "),s("p",[t._v("此外，你可能还会发现，对于 type、encoding 和 lru 三个变量来说，它们的数据类型都是 unsigned。已知一个 unsigned 类型是 4 字节，但这三个变量，是分别占用了一个 unsigned 类型 4 字节中的 4bits、4bits 和 24bits。因此，相较于三个变量，每个变量用一个 4 字节的 unsigned 类型定义来说，使用位域定义方法可以让三个变量只用 4 字节，最后就能节省 8 字节的开销。")]),t._v(" "),s("p",[t._v("所以，当你在设计开发内存敏感型的软件时，就可以把这种位域定义方法使用起来。")]),t._v(" "),s("p",[t._v("好，了解了 redisObject 结构体和它使用的位域定义方法以后，我们再来看嵌入式字符串是如何实现的。")]),t._v(" "),s("h4",{attrs:{id:"嵌入式字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#嵌入式字符串"}},[t._v("#")]),t._v(" 嵌入式字符串")]),t._v(" "),s("p",[t._v("前面我说过，SDS 在保存比较小的字符串时，会使用嵌入式字符串的设计方法，将字符串直接保存在 redisObject 结构体中。然后在 redisObject 结构体中，存在一个指向值的指针 ptr，而一般来说，这个 ptr 指针会指向值的数据结构。")]),t._v(" "),s("p",[t._v("这里我们就以创建一个 String 类型的值为例，Redis 会调用 "),s("strong",[t._v("createStringObject 函数")]),t._v("，来创建相应的 redisObject，而这个 redisObject 中的 ptr 指针，就会指向 SDS 数据结构，如下图所示。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409161924480.png",alt:"image-20240916192435439"}})]),t._v(" "),s("p",[t._v("在 Redis 源码中，createStringObject 函数会根据要创建的字符串的长度，决定具体调用哪个函数来完成创建。")]),t._v(" "),s("p",[t._v("那么针对这个 createStringObject 函数来说，它的参数是"),s("strong",[t._v("字符串 ptr")]),t._v(" 和"),s("strong",[t._v("字符串长度 len")]),t._v("。当 len 的长度大于 OBJ_ENCODING_EMBSTR_SIZE_LIMIT 这个宏定义时，createStringObject 函数会调用 createRawStringObject 函数，否则就调用 createEmbeddedStringObject 函数。而在我们分析的 Redis 5.0.8 源码版本中，这个 OBJ_ENCODING_EMBSTR_SIZE_LIMIT 默认定义为 44 字节。")]),t._v(" "),s("p",[t._v("这部分代码如下所示：")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("OBJ_ENCODING_EMBSTR_SIZE_LIMIT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("44")])])]),t._v("\nrobj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStringObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ptr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("size_t")]),t._v(" len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建嵌入式字符串，字符串长度小于等于44字节")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("len "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" OBJ_ENCODING_EMBSTR_SIZE_LIMIT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEmbeddedStringObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ptr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建普通字符串，字符串长度大于44字节")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRawStringObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ptr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("现在，我们就来分析一下 createStringObject 函数的源码实现，以此了解大于 44 字节的普通字符串和小于等于 44 字节的嵌入式字符串分别是如何创建的。")]),t._v(" "),s("p",[t._v("首先，对于 "),s("strong",[t._v("createRawStringObject 函数")]),t._v("来说，它在创建 String 类型的值的时候，会调用 createObject 函数。")]),t._v(" "),s("blockquote",[s("p",[t._v("补充：createObject 函数主要是用来创建 Redis 的数据对象的。因为 Redis 的数据对象有很多类型，比如 String、List、Hash 等，所以在 createObject 函数的两个参数中，有一个就是用来表示所要创建的数据对象类型，而另一个是指向数据对象的指针。")])]),t._v(" "),s("p",[t._v("然后，createRawStringObject 函数在调用 createObject 函数时，会传递 OBJ_STRING 类型，表示要创建 String 类型的对象，以及传递指向 SDS 结构的指针，如以下代码所示。这里"),s("strong",[t._v("需要注意")]),t._v("的是，指向 SDS 结构的指针是由 sdsnewlen 函数返回的，而 sdsnewlen 函数正是用来创建 SDS 结构的。")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("robj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRawStringObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ptr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("size_t")]),t._v(" len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OBJ_STRING"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sdsnewlen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ptr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("最后，我们再来进一步看下 "),s("strong",[t._v("createObject 函数")]),t._v("。这个函数会把参数中传入的、指向 SDS 结构体的指针直接赋值给 redisObject 中的 ptr，这部分的代码如下所示：")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("robj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ptr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//给redisObject结构体分配空间")]),t._v("\n    robj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("o "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("zmalloc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置redisObject的类型")]),t._v("\n    o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置redisObject的编码类型，此处是OBJ_ENCODING_RAW，表示常规的SDS")]),t._v("\n    o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("encoding "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" OBJ_ENCODING_RAW"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//直接将传入的指针赋值给redisObject中的指针。")]),t._v("\n    o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("ptr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ptr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("refcount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    …\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("为了方便理解普通字符串创建方法，我画了一张图，你可以看下。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409161925282.png",alt:"image-20240916192525212"}})]),t._v(" "),s("p",[t._v("这也就是说，在创建普通字符串时，Redis 需要分别给 redisObject 和 SDS 分别分配一次内存，这样就既带来了内存分配开销，同时也会导致内存碎片。因此，当字符串小于等于 44 字节时，Redis 就使用了嵌入式字符串的创建方法，以此减少内存分配和内存碎片。")]),t._v(" "),s("p",[t._v("而这个创建方法，就是由我们前面提到的 "),s("strong",[t._v("createEmbeddedStringObject 函数")]),t._v("来完成的，该函数会使用一块连续的内存空间，来同时保存 redisObject 和 SDS 结构。这样一来，内存分配只有一次，而且也避免了内存碎片。")]),t._v(" "),s("p",[t._v("createEmbeddedStringObject 函数的原型定义如下，它的参数就是从 createStringObject 函数参数中获得的字符串指针 ptr，以及字符串长度 len。")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("robj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEmbeddedStringObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ptr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("size_t")]),t._v(" len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("那么下面，我们就来具体看看，createEmbeddedStringObject 函数是如何把 redisObject 和 SDS 放置在一起的。")]),t._v(" "),s("p",[t._v("首先，createEmbeddedStringObject 函数会"),s("strong",[t._v("分配一块连续的内存空间")]),t._v("，这块内存空间的大小等于 redisObject 结构体的大小、SDS 结构头 sdshdr8 的大小和字符串大小的总和，并且再加上 1 字节。注意，这里最后的 1 字节是 SDS 中加在字符串最后的结束字符“\\0”。")]),t._v(" "),s("p",[t._v("这块连续内存空间的分配情况如以下代码所示：")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("robj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("o "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("zmalloc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("robj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("sdshdr8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("len"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("你也可以参考下图，其中展示了这块内存空间的布局。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409161926681.png",alt:"image-20240916192606624"}})]),t._v(" "),s("p",[t._v("好，那么 createEmbeddedStringObject 函数在分配了内存空间之后，就会 "),s("strong",[t._v("创建 SDS 结构的指针 sh，并把 sh 指向这块连续空间中 SDS 结构头所在的位置")]),t._v("，下面的代码显示了这步操作。其中，o 是 redisObject 结构体的变量，o+1 表示将内存地址从变量 o 开始移动一段距离，而移动的距离等于 redisObject 这个结构体的大小。")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("sdshdr8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("经过这步操作后，sh 指向的位置就如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409161926949.png",alt:"image-20240916192644901"}})]),t._v(" "),s("p",[t._v("紧接着，createEmbeddedStringObject 函数会 "),s("strong",[t._v("把 redisObject 中的指针 ptr，指向 SDS 结构中的字符数组")]),t._v("。")]),t._v(" "),s("p",[t._v("如以下代码所示，其中 sh 是刚才介绍的指向 SDS 结构的指针，属于 sdshdr8 类型。而 sh+1 表示把内存地址从 sh 起始地址开始移动一定的大小，移动的距离等于 sdshdr8 结构体的大小。")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("ptr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("这步操作完成后，redisObject 结构体中的指针 ptr 的指向位置就如下图所示，它会指向 SDS 结构头的末尾，同时也是字符数组的起始位置：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409161926642.png",alt:"image-20240916192657577"}})]),t._v(" "),s("p",[t._v("最后，createEmbeddedStringObject 函数会"),s("strong",[t._v("把参数中传入的指针 ptr 指向的字符串，拷贝到 SDS 结构体中的字符数组，并在数组最后添加结束字符")]),t._v("。这部分代码如下所示：")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("memcpy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("buf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ptr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("buf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'\\0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("下面这张图，也展示了 createEmbeddedStringObject 创建嵌入式字符串的过程，你可以再整体来看看。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409161927861.png",alt:"image-20240916192750770"}})]),t._v(" "),s("p",[t._v("总之，你可以记住，Redis 会通过设计实现一块连续的内存空间，把 redisObject 结构体和 SDS 结构体紧凑地放置在一起。这样一来，对于不超过 44 字节的字符串来说，就可以避免内存碎片和两次内存分配的开销了。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ol",[s("li",[t._v("Redis 使用 SDS 的原因")]),t._v(" "),s("li",[t._v("SDS 和 C字符串 的 5 个区别")]),t._v(" "),s("li",[t._v("SDS 的内存友好设计")]),t._v(" "),s("li",[t._v("SDS 在不同的len属性下对应了底层数组的不同行为")])])])}),[],!1,null,null,null);s.default=n.exports}}]);