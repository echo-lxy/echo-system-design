(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{392:function(v,t,s){"use strict";s.r(t);var _=s(4),a=Object(_.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[v._v("提出问题是一切智慧的开端")]),v._v(" "),t("ol",[t("li",[v._v("为什么 Redis 早期的 SYNC 操作在断线重连时效率低下？")]),v._v(" "),t("li",[v._v("如何通过 replication offset 和 replication backlog 实现高效的部分重同步？")]),v._v(" "),t("li",[v._v("运行ID在主从断线重连时如何帮助确定同步方式？")]),v._v(" "),t("li",[v._v("PSYNC 如何优化断线后重连时的主从复制效率？")]),v._v(" "),t("li",[v._v("为什么即使有 TCP 传输，Redis 仍需通过心跳机制确保数据一致？")])])]),v._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409171946902.png",alt:"image-20240916215426114"}})]),v._v(" "),t("p",[v._v("在 Redis 中，用户可以通过 "),t("em",[v._v("SLAVEOF")]),v._v(" 命令或设置 "),t("code",[v._v("slaveof")]),v._v(" 选项，让一个 Redis 服务器复制另一个 Redis 服务器。我们称它们分别为从服务器（slave）和主服务器（master）。")]),v._v(" "),t("p",[v._v("在开始之前，我假设你已经了解主从复制功能的基本使用方法。")]),v._v(" "),t("h2",{attrs:{id:"旧版复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#旧版复制"}},[v._v("#")]),v._v(" 旧版复制")]),v._v(" "),t("p",[v._v("Redis 的复制功能分为两个阶段：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("同步")]),v._v("：用于将从服务器的数据库状态更新至主服务器的当前状态。")]),v._v(" "),t("li",[t("strong",[v._v("命令传播")]),v._v("：用于在主服务器状态被修改时，实时将修改命令告知从服务器。")])]),v._v(" "),t("h3",{attrs:{id:"第一步-同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一步-同步"}},[v._v("#")]),v._v(" 第一步：同步")]),v._v(" "),t("p",[v._v("当从服务器首次发送 "),t("code",[v._v("SLAVEOF")]),v._v(" 命令来复制主服务器时，必须执行同步（SYNC）操作。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409171931514.png",alt:"image-20240916230021699"}})]),v._v(" "),t("p",[v._v("执行步骤如下：")]),v._v(" "),t("ol",[t("li",[v._v("从服务器向主服务器发送 SYNC 命令。")]),v._v(" "),t("li",[v._v("主服务器收到 SYNC 命令后，执行 BGSAVE 命令，并开始记录从当前时刻起的所有写命令到缓冲区中。")]),v._v(" "),t("li",[v._v("BGSAVE 执行完毕后，主服务器将生成的 RDB 文件发送给从服务器。")]),v._v(" "),t("li",[v._v("从服务器接收并载入该 RDB 文件。")]),v._v(" "),t("li",[v._v("主服务器将缓冲区中所有的写命令发送给从服务器，从服务器执行这些命令后，状态与主服务器保持一致。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409171946966.png",alt:"image-20240916223511189"}})]),v._v(" "),t("h3",{attrs:{id:"第二步-命令传播"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二步-命令传播"}},[v._v("#")]),v._v(" 第二步：命令传播")]),v._v(" "),t("p",[v._v("同步完成后，主服务器的状态如果发生变化，它会实时向从服务器发送写命令，确保从服务器的状态与主服务器保持一致。")]),v._v(" "),t("h3",{attrs:{id:"旧版的缺陷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#旧版的缺陷"}},[v._v("#")]),v._v(" 旧版的缺陷")]),v._v(" "),t("p",[v._v("在同步过程中，可能会遇到以下两种情况：")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("初次复制")]),v._v("：从服务器首次复制某个主服务器的全部数据。")]),v._v(" "),t("li",[t("strong",[v._v("断线后重复制")]),v._v("：处于命令传播阶段的从服务器与主服务器断开连接后，再次自动连接上主服务器并继续复制。")])]),v._v(" "),t("p",[v._v("对于断线后的重复制来说，没必要再次同步整个 RDB 文件，只需同步断线期间缺失的命令即可。")]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("SYNC 命令是一个非常耗费资源的操作：")]),v._v(" "),t("ol",[t("li",[v._v("主服务器需要执行 BGSAVE 命令来生成 RDB 文件，这会消耗大量的 CPU、内存和磁盘 I/O 资源。")]),v._v(" "),t("li",[v._v("主服务器需要将生成的 RDB 文件发送给从服务器，传输过程会占用大量网络资源，并影响主服务器响应其他命令请求的时间。")]),v._v(" "),t("li",[v._v("从服务器在接收到 RDB 文件后，需要加载该文件，在加载期间从服务器将无法处理任何命令请求。")])]),v._v(" "),t("p",[v._v("由于 SYNC 操作的高资源消耗，Redis 需要确保只在必要时执行 SYNC 操作。 :::")]),v._v(" "),t("h2",{attrs:{id:"新版复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新版复制"}},[v._v("#")]),v._v(" 新版复制")]),v._v(" "),t("p",[v._v("新版复制引入的目的是解决旧版复制在断线后重新同步时的效率低下问题。")]),v._v(" "),t("p",[v._v("自 Redis 2.8 起，使用 PSYNC 命令取代 SYNC 命令来执行复制操作。")]),v._v(" "),t("p",[v._v("PSYNC 具有两种模式：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("完整重同步")]),v._v("：处理初次复制的情况，其执行步骤与 SYNC 命令类似。")]),v._v(" "),t("li",[t("strong",[v._v("部分重同步")]),v._v("：用于处理断线后重复制的情况。当从服务器在断线后重新连接到主服务器时，如果条件允许，主服务器可以仅将断线期间的写命令发送给从服务器，从服务器执行这些命令后即可与主服务器保持一致。")])]),v._v(" "),t("p",[v._v("PSYNC 的部分重同步模式有效解决了旧版复制在处理断线后重复制时的低效问题。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409171946921.png",alt:"image-20240916230006676"}})]),v._v(" "),t("h3",{attrs:{id:"部分重同步的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部分重同步的实现"}},[v._v("#")]),v._v(" 部分重同步的实现")]),v._v(" "),t("p",[v._v("部分重同步的实现依赖以下三个关键组件：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("replication offset")]),v._v("：主服务器和从服务器的复制偏移量。")]),v._v(" "),t("li",[t("strong",[v._v("replication backlog")]),v._v("：主服务器的复制积压缓冲区。")]),v._v(" "),t("li",[t("strong",[v._v("run ID")]),v._v("：主服务器的运行 ID。")])]),v._v(" "),t("h4",{attrs:{id:"复制偏移量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制偏移量"}},[v._v("#")]),v._v(" 复制偏移量")]),v._v(" "),t("p",[v._v("复制的双方都会维护各自的「复制偏移量」：")]),v._v(" "),t("ul",[t("li",[v._v("主服务器每次向从服务器传播 N 字节的数据时，会将自身的「复制偏移量」加上 N。")]),v._v(" "),t("li",[v._v("从服务器每次收到 N 字节的数据时，也会将自身的「复制偏移量」加上 N。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409171946932.png",alt:"image-20240916230453157"}})]),v._v(" "),t("p",[v._v("通过比较主从服务器的复制偏移量，可以轻松判断两者是否一致：")]),v._v(" "),t("ul",[t("li",[v._v("如果两者的复制偏移量相同，则主从服务器处于一致状态。")]),v._v(" "),t("li",[v._v("如果复制偏移量不同，则主从服务器处于不一致状态。")])]),v._v(" "),t("h4",{attrs:{id:"复制积压缓冲区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制积压缓冲区"}},[v._v("#")]),v._v(" 复制积压缓冲区")]),v._v(" "),t("p",[v._v("「复制积压缓冲区」是由主服务器维护的一个固定大小的环形缓冲区，默认大小为 1MB。缓冲区使用先进先出（FIFO）策略，当数据超过缓冲区大小时，最旧的数据会被覆盖。")]),v._v(" "),t("p",[v._v("主服务器在进行命令传播时，除了将写命令发送给所有从服务器，还会将命令存入复制积压缓冲区。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409171946941.png",alt:"image-20240916231101419"}})]),v._v(" "),t("p",[v._v("缓冲区会保存最近传播的写命令，并为每个字节记录对应的复制偏移量。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409171946148.png",alt:"image-20240916231138657"}})]),v._v(" "),t("p",[v._v("当从服务器重新连接主服务器时，会通过 PSYNC 命令将自身的复制偏移量发送给主服务器，主服务器根据偏移量决定同步方式：")]),v._v(" "),t("ul",[t("li",[v._v("如果偏移量之后的数据仍然存在于「复制积压缓冲区」中，则主服务器执行部分重同步操作。")]),v._v(" "),t("li",[v._v("如果偏移量之后的数据已不在缓冲区中，则主服务器执行完整重同步操作。")])]),v._v(" "),t("p",[v._v("回到断线重连的例子：")]),v._v(" "),t("ol",[t("li",[v._v("当从服务器 A 断线后重新连接主服务器时，发送 PSYNC 命令并报告自身的复制偏移量为 10086。")]),v._v(" "),t("li",[v._v("主服务器检查「复制积压缓冲区」中的数据，确认偏移量 10086 之后的数据仍然存在，因此向从服务器返回 "),t("em",[v._v("+CONTINUE")]),v._v("，表示可以进行部分重同步")]),v._v(" "),t("li",[v._v("主服务器将偏移量 10086 之后的数据（偏移量 10087 至 10119）发送给从服务器")]),v._v(" "),t("li",[v._v("从服务器接收这 33 字节的数据后，与主服务器的状态保持一致")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409171946550.png",alt:"image-20240916231429983"}})]),v._v(" "),t("h4",{attrs:{id:"服务器运行-id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器运行-id"}},[v._v("#")]),v._v(" 服务器运行 ID")]),v._v(" "),t("p",[v._v("除复制偏移量和复制积压缓冲区外，部分重同步还依赖于「服务器运行 ID」")]),v._v(" "),t("ul",[t("li",[v._v("每个 Redis 服务器（无论是主服务器还是从服务器）都有一个唯一的运行 ID，由 40 个随机的十六进制字符组成，例如："),t("code",[v._v("53b9b28df8042fdc9ab5e3fcbbbabff1d5dce2b3")])])]),v._v(" "),t("p",[v._v("运行 ID 的使用流程如下：")]),v._v(" "),t("ol",[t("li",[v._v("当从服务器首次复制主服务器时，主服务器会将自己的运行 ID 发送给从服务器，从服务器保存该运行 ID")]),v._v(" "),t("li",[v._v("当从服务器断线并重新连接到主服务器时，会发送之前保存的运行 ID 给当前连接的主服务器：\n"),t("ul",[t("li",[v._v("如果两者的运行 ID 相同，说明从服务器之前复制的就是该主服务器，主服务器可以执行部分重同步操作")]),v._v(" "),t("li",[v._v("如果运行 ID 不同，说明从服务器之前复制的主服务器与当前连接的主服务器不同，主服务器需要执行完整重同步操作")])])])]),v._v(" "),t("h3",{attrs:{id:"深入了解-psync-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深入了解-psync-命令"}},[v._v("#")]),v._v(" 深入了解 PSYNC 命令")]),v._v(" "),t("p",[v._v("我们已经学习了 "),t("em",[v._v("replication offset")]),v._v("、"),t("em",[v._v("replication backlog")]),v._v(" 和 "),t("em",[v._v("run ID")]),v._v("。接下来，我们将深入探讨 "),t("em",[v._v("PSYNC")]),v._v(" 命令的完整细节。")]),v._v(" "),t("p",[t("em",[v._v("PSYNC")]),v._v(" 命令的调用方法有两种：")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("从服务器的初次复制")]),v._v("：如果从服务器以前没有复制过任何主服务器，或者之前执行过 "),t("code",[v._v("SLAVEOF no one")]),v._v(" 命令，那么从服务器在开始新的复制时将向主服务器发送 "),t("code",[v._v("PSYNC ? -1")]),v._v(" 命令，主动请求主服务器进行完整重同步（因为此时不可能执行部分重同步）。")]),v._v(" "),t("li",[t("strong",[v._v("从服务器的再次复制")]),v._v("：如果从服务器已经复制过某个主服务器，那么从服务器在开始新的复制时将向主服务器发送 "),t("code",[v._v("PSYNC <runid> <offset>")]),v._v(" 命令，其中 "),t("code",[v._v("runid")]),v._v(" 是上一次复制的主服务器的运行 ID，而 "),t("code",[v._v("offset")]),v._v(" 则是从服务器当前的复制偏移量。接收到这个命令的主服务器会通过这两个参数判断应该对从服务器执行哪种同步操作。")])]),v._v(" "),t("p",[v._v("根据情况，接收到 "),t("em",[v._v("PSYNC")]),v._v(" 命令的主服务器会向从服务器返回以下三种回复之一：")]),v._v(" "),t("ol",[t("li",[v._v("如果主服务器返回 "),t("code",[v._v("+FULLRESYNC <runid> <offset>")]),v._v(" 回复，则表示主服务器将与从服务器执行完整重同步操作。"),t("code",[v._v("runid")]),v._v(" 是该主服务器的运行 ID，从服务器会将该 ID 保存起来，以便在下一次发送 "),t("em",[v._v("PSYNC")]),v._v(" 命令时使用；"),t("code",[v._v("offset")]),v._v(" 是主服务器当前的复制偏移量，从服务器会将该值作为自己的初始化偏移量。")]),v._v(" "),t("li",[v._v("如果主服务器返回 "),t("code",[v._v("+CONTINUE")]),v._v(" 回复，则表示主服务器将与从服务器执行部分重同步操作。从服务器只需等待主服务器将缺少的数据发送过来即可。")]),v._v(" "),t("li",[v._v("如果主服务器返回 "),t("code",[v._v("-ERR")]),v._v(" 回复，则表示主服务器的版本低于 Redis 2.8，无法识别 "),t("code",[v._v("PSYNC")]),v._v(" 命令。在这种情况下，从服务器将退回到发送 "),t("code",[v._v("SYNC")]),v._v(" 命令，并与主服务器执行完整同步操作。这种降级兼容性处理确保了主从复制在旧版本环境下仍然可以正常进行。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409171950582.png",alt:"PSYNC 命令流程图"}})]),v._v(" "),t("h2",{attrs:{id:"复制流程详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制流程详解"}},[v._v("#")]),v._v(" 复制流程详解")]),v._v(" "),t("p",[v._v("我们之前讲述了新旧版本的复制细节，现在将整个复制流程串联到 Redis 主线中。")]),v._v(" "),t("h4",{attrs:{id:"步骤-1-设置主服务器的地址和端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤-1-设置主服务器的地址和端口"}},[v._v("#")]),v._v(" 步骤 1：设置主服务器的地址和端口")]),v._v(" "),t("p",[v._v("当客户端向从服务器发送 "),t("code",[v._v("SLAVEOF 127.0.0.1 6379")]),v._v(" 命令时：")]),v._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("struct")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[v._v("redisServer")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 主服务器的地址")]),v._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("char")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("*")]),v._v("masterhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 主服务器的端口")]),v._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("int")]),v._v(" masterport"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n")])])]),t("p",[v._v("从服务器在 "),t("code",[v._v("redisServer")]),v._v(" 结构体中设置主服务器的地址和端口。")]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[t("code",[v._v("SLAVEOF")]),v._v(" 命令是一个异步命令。在完成 "),t("code",[v._v("masterhost")]),v._v(" 属性和 "),t("code",[v._v("masterport")]),v._v(" 属性的设置工作后，从服务器将向发送 "),t("code",[v._v("SLAVEOF")]),v._v(" 命令的客户端返回 "),t("code",[v._v("OK")]),v._v("，表示复制指令已经被接收，而实际的复制工作将在 "),t("code",[v._v("OK")]),v._v(" 返回之后才真正开始执行。")])])]),v._v(" "),t("h4",{attrs:{id:"步骤-2-建立套接字连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤-2-建立套接字连接"}},[v._v("#")]),v._v(" 步骤 2：建立套接字连接")]),v._v(" "),t("p",[v._v("在 "),t("code",[v._v("SLAVEOF")]),v._v(" 命令执行之后，从服务器将根据命令所设置的 IP 地址和端口，创建与主服务器的套接字连接。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409171950603.png",alt:"建立套接字连接"}})]),v._v(" "),t("p",[v._v("如果从服务器创建的套接字成功连接到主服务器，则从服务器将为该套接字关联一个专门用于处理复制工作的文件事件处理器，该处理器负责执行后续的复制工作，比如接收 RDB 文件，以及接收主服务器传播来的写命令等。")]),v._v(" "),t("p",[v._v("主服务器在接受从服务器的套接字连接后，将为该套接字创建相应的客户端状态，并将从服务器视作一个连接到主服务器的客户端。这时，从服务器同时具有服务器（server）和客户端（client）两个身份：从服务器可以向主服务器发送命令请求，而主服务器则会向从服务器返回命令回复。")]),v._v(" "),t("h4",{attrs:{id:"步骤-3-发送-ping-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤-3-发送-ping-命令"}},[v._v("#")]),v._v(" 步骤 3：发送 PING 命令")]),v._v(" "),t("p",[t("strong",[v._v("一图胜千言")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409171950594.png",alt:"发送 PING 命令"}})]),v._v(" "),t("h4",{attrs:{id:"步骤-4-身份验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤-4-身份验证"}},[v._v("#")]),v._v(" 步骤 4：身份验证")]),v._v(" "),t("p",[v._v('从服务器在收到主服务器返回的 "PONG" 回复之后，下一步是决定是否进行身份验证：')]),v._v(" "),t("ul",[t("li",[v._v("如果从服务器设置了 "),t("code",[v._v("masterauth")]),v._v(" 选项，则进行身份验证。")]),v._v(" "),t("li",[v._v("如果从服务器没有设置 "),t("code",[v._v("masterauth")]),v._v(" 选项，则不进行身份验证。")])]),v._v(" "),t("p",[v._v("在需要进行身份验证的情况下，从服务器"),t("strong",[v._v("主动")]),v._v("向主服务器发送 "),t("code",[v._v("AUTH")]),v._v(" 命令，命令的参数为从服务器 "),t("code",[v._v("masterauth")]),v._v(" 选项的值。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409171950608.png",alt:"身份验证"}})]),v._v(" "),t("p",[v._v("整个流程如下所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409171950620.png",alt:"身份验证流程"}})]),v._v(" "),t("h4",{attrs:{id:"步骤-5-发送端口信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤-5-发送端口信息"}},[v._v("#")]),v._v(" 步骤 5：发送端口信息")]),v._v(" "),t("p",[v._v("在身份验证步骤之后，从服务器将执行命令 "),t("code",[v._v("REPLCONF listening-port <port-number>")]),v._v("，向主服务器"),t("strong",[v._v("发送从服务器的监听端口号")]),v._v("。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409171950546.png",alt:"发送端口信息"}})]),v._v(" "),t("p",[v._v("主服务器在接收到该命令后，会将端口号记录在从服务器所对应的客户端状态的 "),t("code",[v._v("slave listening port")]),v._v(" 属性中：")]),v._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("typedef")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("struct")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[v._v("redisClient")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 从服务器的监听端口号")]),v._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("int")]),v._v(" slave_listening_port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v(" redisClient"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n")])])]),t("blockquote",[t("p",[t("code",[v._v("slave_listening_port")]),v._v(" 属性目前唯一的作用是在主服务器执行 "),t("code",[v._v("INFO replication")]),v._v(" 命令时打印出从服务器的端口号。")])]),v._v(" "),t("h4",{attrs:{id:"步骤-6-同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤-6-同步"}},[v._v("#")]),v._v(" 步骤 6：同步")]),v._v(" "),t("p",[v._v("在这一步，从服务器将向主服务器发送 "),t("code",[v._v("PSYNC")]),v._v(" 命令，执行同步操作，并将自己的数据库更新至主服务器数据库当前所处的状态。值得一提的是，在同步操作执行之前，只有从服务器是主服务器的客户端；但在执行同步操作之后，主服务器也会成为从服务器的客户端。")]),v._v(" "),t("ul",[t("li",[v._v("如果 "),t("code",[v._v("PSYNC")]),v._v(" 命令执行的是完整重同步操作，那么主服务器需要成为从服务器的客户端，才能将保存在缓冲区中的写命令发送给从服务器执行。")]),v._v(" "),t("li",[v._v("如果 "),t("code",[v._v("PSYNC")]),v._v(" 命令执行的是部分重同步操作，那么主服务器需要成为从服务器的客户端，才能向从服务器发送保存在复制积压缓冲区中的写命令。")])]),v._v(" "),t("p",[v._v("因此，在同步操作执行之后，"),t("strong",[v._v("主从服务器双方都是对方的客户端")]),v._v("，它们可以互相发送命令请求或返回命令回复。")]),v._v(" "),t("p",[t("strong",[v._v("正因为主服务器成为了从服务器的客户端")]),v._v("，主服务器才能通过发送写命令来改变从服务器的数据库状态。这不仅在同步操作中需要用到，也是主服务器对从服务器执行命令传播的基础操作。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409171950024.png",alt:"同步操作"}})]),v._v(" "),t("h4",{attrs:{id:"步骤-7-命令传播"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤-7-命令传播"}},[v._v("#")]),v._v(" 步骤 7：命令传播")]),v._v(" "),t("p",[v._v("完成同步后，主从服务器将进入命令传播阶段。此时，主服务器将持续将其执行的写命令发送给从服务器，而从服务器则持续接收并执行主服务器发来的写命令，以保持主从服务器的一致性。")]),v._v(" "),t("h2",{attrs:{id:"心跳检测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#心跳检测"}},[v._v("#")]),v._v(" 心跳检测")]),v._v(" "),t("p",[v._v("在命令传播阶段，从服务器默认以每秒一次的频率，向主服务器发送 "),t("code",[v._v("REPLCONF ACK <replication offset>")]),v._v(" 命令，其中 "),t("code",[v._v("replication offset")]),v._v(" 是从服务器当前的复制偏移量。")]),v._v(" "),t("p",[v._v("发送 "),t("code",[v._v("REPLCONF ACK")]),v._v(" 命令对于主从服务器有三个作用：")]),v._v(" "),t("ol",[t("li",[t("p",[t("strong",[v._v("检测主从服务器的网络连接状态")]),v._v("：主从服务器通过发送和接收 "),t("code",[v._v("REPLCONF ACK")]),v._v(" 命令检查网络连接是否正常，同时监测网络延迟。主服务器通过监测从服务器的复制偏移量，可以快速感知网络抖动和数据同步状态，从而及时识别和处理可能的数据丢失或延迟问题。心跳机制的及时响应有助于主服务器快速感知与从服务器的连接状态，当心跳丢失时，主服务器可以立即采取措施，保证数据的一致性和可靠性。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("辅助实现 "),t("code",[v._v("min-slaves")]),v._v(" 配置选项")]),v._v("：Redis 的 "),t("code",[v._v("min-slaves-to-write")]),v._v(" 和 "),t("code",[v._v("min-slaves-max-lag")]),v._v(" 两个选项可以防止主服务器在不安全的情况下执行写命令。例如，如果设置了以下选项：")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("min-slaves-to-write 3")])]),v._v(" "),t("li",[t("code",[v._v("min-slaves-max-lag 10")])])]),v._v(" "),t("p",[v._v("那么在从服务器数量少于 3 个，或者三个从服务器的延迟值都大于或等于 10 秒时，主服务器将拒绝执行写命令。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("检测命令丢失")]),v._v("：如果因为网络故障，主服务器传播给从服务器的写命令在途中丢失，那么从服务器需要通过不断增加的偏移量来告知主服务器，主服务器将检查其复制积压缓冲区，补发丢失的写命令。")])])]),v._v(" "),t("p",[t("strong",[v._v("已经使用 TCP 了，为什么还要保证消息可靠传达?")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409171932661.png",alt:"有了TCP为什么还要保证可靠性传达"}})]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("ul",[t("li",[v._v("在传输层，TCP的三次握手保证了双方通讯的可靠性，稳定性。简而言之，用户发送的消息， 在忽视应用层的情况下，无论如何都会从自身主机的 “发送缓冲区” 抵达对方主机的 “接收缓冲区”")]),v._v(" "),t("li",[v._v("在应用层，数据包有可能因为用户突然的切后台或者是弱网状态导致没法从操作系统内核抵达应用层，反之也是如此, 为此,我们需要在应用层做好可靠传输协议的保证，防止数据丢失的情况")])])]),v._v(" "),t("p",[v._v("所以，尽管 TCP 能保证传输层的数据可靠性，但在应用层，数据包有可能因为网络不稳定等因素导致丢失。因此，Redis 使用 "),t("code",[v._v("REPLCONF ACK")]),v._v(" 命令来在应用层增加传输可靠性。"),t("code",[v._v("REPLCONF ACK")]),v._v(" 命令不仅可以检测网络延迟，还能通过主服务器监控从服务器的复制偏移量，及时重传丢失的数据，确保数据的一致性。")]),v._v(" "),t("h2",{attrs:{id:"主从复制的触发时机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主从复制的触发时机"}},[v._v("#")]),v._v(" 主从复制的触发时机")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("从节点首次启动或重新连接时")]),v._v("：从节点连接到主节点后，触发全量或增量同步。")]),v._v(" "),t("li",[t("strong",[v._v("主节点有数据更新时")]),v._v("：主节点每次执行写操作后，增量数据会实时同步给从节点。")]),v._v(" "),t("li",[t("strong",[v._v("主节点的手动或自动备份操作")]),v._v("：执行 "),t("code",[v._v("BGSAVE")]),v._v("、"),t("code",[v._v("BGREWRITEAOF")]),v._v(" 等命令时，可能触发主从数据同步。")]),v._v(" "),t("li",[t("strong",[v._v("主从配置变更或故障转移时")]),v._v("：如通过 Sentinel 或集群模式进行故障转移，或者手动执行 "),t("code",[v._v("SLAVEOF")]),v._v(" 命令时，从节点会重新与新的主节点同步。")]),v._v(" "),t("li",[t("strong",[v._v("从节点主动请求同步")]),v._v("：从节点落后于主节点的数据或出现不一致时，会主动请求主节点重新同步。")]),v._v(" "),t("li",[t("strong",[v._v("复制积压缓冲区溢出")]),v._v("：如果从节点长时间未同步，主节点的缓冲区溢出，触发全量同步。")]),v._v(" "),t("li",[t("strong",[v._v("集群模式下的主从复制")]),v._v("：在 Redis 集群模式中，当集群分片中的某个主节点故障时，集群会通过选举机制选择一个新的主节点。被选中的从节点会与其他从节点进行主从复制，保持数据一致性。")]),v._v(" "),t("li",[t("strong",[v._v("Sentinel 模式的主从复制")]),v._v("：在 Sentinel 模式下，Sentinel 负责监控主从节点的健康状态。当主节点故障时，Sentinel 会自动将某个从节点提升为新的主节点，并通知其他从节点与新的主节点进行同步。")])]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("ul",[t("li",[v._v("Redis 2.8 以前的复制功能不能高效地处理断线后重复制情况，但Redis 2.8新添加的部分重同步功能可以解决这个问题。")]),v._v(" "),t("li",[v._v("部分重同步通过复制偏移量、复制积压缓冲区、服务器运行ID三个部分来实现")]),v._v(" "),t("li",[v._v("在复制操作刚开始的时候，从服务器会成为主服务器的客户端，并通过向主服务器发送命令请求来执行复制步骤，而在复制操作的后期，主从服务器会互相成为对方的客户端。")]),v._v(" "),t("li",[v._v("主服务器通过向从服务器传播命令来更新从服务器的状态，保持主从服务器一致而从服务器则通过向主服务器发送命令来进行心跳检测，以及命令丢失检测。")])]),v._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[v._v("#")]),v._v(" 参考文献")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/cooffeeli/p/redis_master_slave.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("彻底搞懂Redis主从复制原理及实战 - cooffeeli - 博客园 (cnblogs.com)"),t("OutboundLink")],1)]),v._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/kismetv/p/9236731.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("深入学习Redis（3）：主从复制 - 编程迷思 - 博客园 (cnblogs.com)"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);