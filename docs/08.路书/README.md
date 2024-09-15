---
title: 路书
date: 2024-09-15 04:17:21
permalink: /pages/e6dc90/
sidebar: auto
---

不熟悉系统设计？

首先，你需要对一般性原则有一个基本的认识，知道它们是什么，怎样使用以及利弊。

## 第一步：一般性原则

#### 可扩展性

[哈佛大学可扩展性讲座](https://www.youtube.com/watch?v=-W9F__D3oY4)

- 主题涵盖
  - 垂直扩展（Vertical scaling）
  - 水平扩展（Horizontal scaling）
  - 缓存
  - 负载均衡
  - 数据库复制
  - 数据库分区
- [可扩展性](http://www.lecloud.net/tagged/scalability/chrono)
  - 主题涵盖
    - [Clones](http://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)
    - [数据库](http://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database)
    - [缓存](http://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache)
    - [异步](http://www.lecloud.net/post/9699762917/scalability-for-dummies-part-4-asynchronism)

接下来，我们将看看高阶的权衡和取舍:

- **性能**与**可扩展性**
- **延迟**与**吞吐量**
- **可用性**与**一致性**

记住**每个方面都面临取舍和权衡**。

然后，我们将深入更具体的主题，如 DNS、CDN 和负载均衡器。

#### 性能与可扩展性

如果服务**性能**的增长与资源的增加是成比例的，服务就是可扩展的。通常，提高性能意味着服务于更多的工作单元，另一方面，当数据集增长时，同样也可以处理更大的工作单位。

另一个角度来看待性能与可扩展性:

- 如果你的系统有**性能**问题，对于单个用户来说是缓慢的。
- 如果你的系统有**可扩展性**问题，单个用户较快但在高负载下会变慢。

**来源及延伸阅读**

- [简单谈谈可扩展性](http://www.allthingsdistributed.com/2006/03/a_word_on_scalability.html)
- [可扩展性，可用性，稳定性和模式](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)

#### 延迟与吞吐量

**延迟**是执行操作或运算结果所花费的时间。

**吞吐量**是单位时间内（执行）此类操作或运算的数量。

通常，你应该以**可接受级延迟**下**最大化吞吐量**为目标。

**来源及延伸阅读**

- [理解延迟与吞吐量](https://community.cadence.com/cadence_blogs_8/b/sd/archive/2010/09/13/understanding-latency-vs-throughput)

#### 可用性与一致性

* CAP 理论
  * 在一个分布式计算系统中，只能同时满足下列的两点:
    - **一致性** ─ 每次访问都能获得最新数据但可能会收到错误响应
    - **可用性** ─ 每次访问都能收到非错响应，但不保证获取到最新数据
    - **分区容错性** ─ 在任意分区网络故障的情况下系统仍能继续运行
* Base 理论

**来源及延伸阅读**

- [再看 CAP 理论](http://robertgreiner.com/2014/08/cap-theorem-revisited/)
- [通俗易懂地介绍 CAP 理论](http://ksat.me/a-plain-english-introduction-to-cap-theorem/)
- [CAP FAQ](https://github.com/henryr/cap-faq)

#### 一致性模式

有同一份数据的多份副本，我们面临着怎样同步它们的选择，以便让客户端有一致的显示数据。回想 [CAP 理论](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#cap-理论)中的一致性定义 ─ 每次访问都能获得最新数据但可能会收到错误响应

* 弱一致性
  * 在写入之后，访问可能看到，也可能看不到（写入数据）。尽力优化之让其能访问最新数据。
  * 这种方式可以 memcached 等系统中看到。弱一致性在 VoIP，视频聊天和实时多人游戏等真实用例中表现不错。打个比方，如果你在通话中丢失信号几秒钟时间，当重新连接时你是听不到这几秒钟所说的话的。
* 最终一致性
  * 在写入后，访问最终能看到写入数据（通常在数毫秒内）。数据被异步复制。
  * DNS 和 email 等系统使用的是此种方式。最终一致性在高可用性系统中效果不错。
* 强一致性
  * 在写入后，访问立即可见。数据被同步复制。
  * 文件系统和关系型数据库（RDBMS）中使用的是此种方式。强一致性在需要记录的系统中运作良好。

**来源及延伸阅读**

- [Transactions across data centers](http://snarfed.org/transactions_across_datacenters_io.html)

#### 可用性模式

有两种支持高可用性的模式: **故障切换（fail-over）和复制（replication）**。

* 故障切换
  * 工作到备用切换（Active-passive）
    * 关于工作到备用的故障切换流程是，工作服务器发送周期信号给待机中的备用服务器。如果周期信号中断，备用服务器切换成工作服务器的 IP 地址并恢复服务。
    * 宕机时间取决于备用服务器处于“热”待机状态还是需要从“冷”待机状态进行启动。只有工作服务器处理流量。
    * 工作到备用的故障切换也被称为主从切换。
  * 双工作切换（Active-active）
    * 在双工作切换中，双方都在管控流量，在它们之间分散负载。
    * 如果是外网服务器，DNS 将需要对两方都了解。如果是内网服务器，应用程序逻辑将需要对两方都了解。
    * 双工作切换也可以称为主主切换。
  * 缺陷：故障切换
    * 故障切换需要添加额外硬件并增加复杂性。
    * 如果新写入数据在能被复制到备用系统之前，工作系统出现了故障，则有可能会丢失数据。
* 复制
  * 主─从复制
  * 主─主复制

这个主题进一步探讨了[数据库](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#数据库)部分:

- [主─从复制](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#主从复制)
- [主─主复制](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#主主复制)

## 第二步：通用组件

### 域名系统

![img](https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409151051669.jpeg)

域名系统是把 [www.example.com](http://www.example.com/) 等域名转换成 IP 地址。

域名系统是分层次的，一些 DNS 服务器位于顶层。当查询（域名） IP 时，路由或 ISP 提供连接 DNS 服务器的信息。较底层的 DNS 服务器缓存映射，它可能会因为 DNS 传播延时而失效。DNS 结果可以缓存在浏览器或操作系统中一段时间，时间长短取决于[存活时间 TTL](https://en.wikipedia.org/wiki/Time_to_live)。

- **NS 记录（域名服务）** ─ 指定解析域名或子域名的 DNS 服务器。
- **MX 记录（邮件交换）** ─ 指定接收信息的邮件服务器。
- **A 记录（地址）** ─ 指定域名对应的 IP 地址记录。
- **CNAME（规范）** ─ 一个域名映射到另一个域名或 `CNAME` 记录（ example.com 指向 [www.example.com](http://www.example.com/) ）或映射到一个 `A` 记录。

[CloudFlare](https://www.cloudflare.com/dns/) 和 [Route 53](https://aws.amazon.com/route53/) 等平台提供管理 DNS 的功能。某些 DNS 服务通过集中方式来路由流量:

- 加权轮询调度
  - 防止流量进入维护中的服务器
  - 在不同大小集群间负载均衡
  - A/B 测试
- 基于延迟路由
- 基于地理位置路由

#### 缺陷:DNS

- 虽说缓存可以减轻 DNS 延迟，但连接 DNS 服务器还是带来了轻微的延迟。
- 虽然它们通常由[政府，网络服务提供商和大公司](http://superuser.com/questions/472695/who-controls-the-dns-servers/472729)管理，但 DNS 服务管理仍可能是复杂的。
- DNS 服务最近遭受 [DDoS 攻击](http://dyn.com/blog/dyn-analysis-summary-of-friday-october-21-attack/)，阻止不知道 Twitter IP 地址的用户访问 Twitter。

#### 来源及延伸阅读

- [DNS 架构](https://technet.microsoft.com/en-us/library/dd197427(v=ws.10).aspx)
- [Wikipedia](https://en.wikipedia.org/wiki/Domain_Name_System)
- [关于 DNS 的文章](https://support.dnsimple.com/categories/dns/)

### 内容分发网络（CDN）

![img](https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409151050537.jpeg)

内容分发网络（CDN）是一个全球性的代理服务器分布式网络，它从靠近用户的位置提供内容。通常，HTML/CSS/JS，图片和视频等静态内容由 CDN 提供，虽然亚马逊 CloudFront 等也支持动态内容。CDN 的 DNS 解析会告知客户端连接哪台服务器。

将内容存储在 CDN 上可以从两个方面来提供性能:

- 从靠近用户的数据中心提供资源
- 通过 CDN 你的服务器不必真的处理请求

#### CDN 推送（push）

当你服务器上内容发生变动时，推送 CDN 接受新内容。直接推送给 CDN 并重写 URL 地址以指向你的内容的 CDN 地址。你可以配置内容到期时间及何时更新。内容只有在更改或新增是才推送，流量最小化，但储存最大化。

#### CDN 拉取（pull）

CDN 拉取是当第一个用户请求该资源时，从服务器上拉取资源。你将内容留在自己的服务器上并重写 URL 指向 CDN 地址。直到内容被缓存在 CDN 上为止，这样请求只会更慢，

[存活时间（TTL）](https://en.wikipedia.org/wiki/Time_to_live)决定缓存多久时间。CDN 拉取方式最小化 CDN 上的储存空间，但如果过期文件并在实际更改之前被拉取，则会导致冗余的流量。

高流量站点使用 CDN 拉取效果不错，因为只有最近请求的内容保存在 CDN 中，流量才能更平衡地分散。

#### 缺陷：CDN

- CDN 成本可能因流量而异，可能在权衡之后你将不会使用 CDN。
- 如果在 TTL 过期之前更新内容，CDN 缓存内容可能会过时。
- CDN 需要更改静态内容的 URL 地址以指向 CDN。

#### 来源及延伸阅读

- [全球性内容分发网络](http://repository.cmu.edu/cgi/viewcontent.cgi?article=2112&context=compsci)
- [CDN 拉取和 CDN 推送的区别](http://www.travelblogadvice.com/technical/the-differences-between-push-and-pull-cdns/)
- [Wikipedia](https://en.wikipedia.org/wiki/Content_delivery_network)

### 负载均衡器

![img](https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409151050055.png)

负载均衡器将传入的请求分发到应用服务器和数据库等计算资源。无论哪种情况，负载均衡器将从计算资源来的响应返回给恰当的客户端。负载均衡器的效用在于:

- 防止请求进入不好的服务器
- 防止资源过载
- 帮助消除单一的故障点

负载均衡器可以通过硬件（昂贵）或 HAProxy 等软件来实现。 增加的好处包括:

- SSL 终结

  ─ 解密传入的请求并加密服务器响应，这样的话后端服务器就不必再执行这些潜在高消耗运算了。

  - 不需要再每台服务器上安装 [X.509 证书](https://en.wikipedia.org/wiki/X.509)。

- **Session 留存** ─ 如果 Web 应用程序不追踪会话，发出 cookie 并将特定客户端的请求路由到同一实例。

通常会设置采用[工作─备用](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#工作到备用切换active-passive) 或 [双工作](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#双工作切换active-active) 模式的多个负载均衡器，以免发生故障。

负载均衡器能基于多种方式来路由流量:

- 随机
- 最少负载
- Session/cookie
- [轮询调度或加权轮询调度算法](http://g33kinfo.com/info/archives/2657)
- [四层负载均衡](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#四层负载均衡)
- [七层负载均衡](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#七层负载均衡)

#### 四层负载均衡

四层负载均衡根据监看[传输层](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#通讯)的信息来决定如何分发请求。通常，这会涉及来源，目标 IP 地址和请求头中的端口，但不包括数据包（报文）内容。四层负载均衡执行[网络地址转换（NAT）](https://www.nginx.com/resources/glossary/layer-4-load-balancing/)来向上游服务器转发网络数据包。

#### 七层负载均衡器

七层负载均衡器根据监控[应用层](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#通讯)来决定怎样分发请求。这会涉及请求头的内容，消息和 cookie。七层负载均衡器终结网络流量，读取消息，做出负载均衡判定，然后传送给特定服务器。比如，一个七层负载均衡器能直接将视频流量连接到托管视频的服务器，同时将更敏感的用户账单流量引导到安全性更强的服务器。

以损失灵活性为代价，四层负载均衡比七层负载均衡花费更少时间和计算资源，虽然这对现代商用硬件的性能影响甚微。

#### 水平扩展

负载均衡器还能帮助水平扩展，提高性能和可用性。使用商业硬件的性价比更高，并且比在单台硬件上**垂直扩展**更贵的硬件具有更高的可用性。相比招聘特定企业系统人才，招聘商业硬件方面的人才更加容易。

#### 缺陷：水平扩展

- 水平扩展引入了复杂度并涉及服务器复制
  - 服务器应该是无状态的:它们也不该包含像 session 或资料图片等与用户关联的数据。
  - session 可以集中存储在数据库或持久化[缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#缓存)（Redis、Memcached）的数据存储区中。
- 缓存和数据库等下游服务器需要随着上游服务器进行扩展，以处理更多的并发连接。

#### 缺陷：负载均衡器

- 如果没有足够的资源配置或配置错误，负载均衡器会变成一个性能瓶颈。
- 引入负载均衡器以帮助消除单点故障但导致了额外的复杂性。
- 单个负载均衡器会导致单点故障，但配置多个负载均衡器会进一步增加复杂性。

#### 来源及延伸阅读

- [NGINX 架构](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)
- [HAProxy 架构指南](http://www.haproxy.org/download/1.2/doc/architecture.txt)
- [可扩展性](http://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)
- [Wikipedia](https://en.wikipedia.org/wiki/Load_balancing_(computing))
- [四层负载平衡](https://www.nginx.com/resources/glossary/layer-4-load-balancing/)
- [七层负载平衡](https://www.nginx.com/resources/glossary/layer-7-load-balancing/)
- [ELB 监听器配置](http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html)

### 反向代理（web 服务器）

![](https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409151050923.png)



## 第三步：核心系统

### 应用层

![img](https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409151053763.png)

将 Web 服务层与应用层（也被称作平台层）分离，可以独立缩放和配置这两层。添加新的 API 只需要添加应用服务器，而不必添加额外的 web 服务器。

**单一职责原则**提倡小型的，自治的服务共同合作。小团队通过提供小型的服务，可以更激进地计划增长。

应用层中的工作进程也有可以实现[异步化](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#异步)。

#### 微服务

与此讨论相关的话题是 [微服务](https://en.wikipedia.org/wiki/Microservices)，可以被描述为一系列可以独立部署的小型的，模块化服务。每个服务运行在一个独立的线程中，通过明确定义的轻量级机制通讯，共同实现业务目标。[1](https://smartbear.com/learn/api-design/what-are-microservices)

例如，Pinterest 可能有这些微服务： 用户资料、关注者、Feed 流、搜索、照片上传等。

#### 服务发现

像 [Consul](https://www.consul.io/docs/index.html)，[Etcd](https://coreos.com/etcd/docs/latest) 和 [Zookeeper](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper) 这样的系统可以通过追踪注册名、地址、端口等信息来帮助服务互相发现对方。[Health checks](https://www.consul.io/intro/getting-started/checks.html) 可以帮助确认服务的完整性和是否经常使用一个 [HTTP](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#超文本传输协议http) 路径。Consul 和 Etcd 都有一个内建的 [key-value 存储](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#键-值存储) 用来存储配置信息和其他的共享信息。

#### 不利之处：应用层

- 添加由多个松耦合服务组成的应用层，从架构、运营、流程等层面来讲将非常不同（相对于单体系统）。
- 微服务会增加部署和运营的复杂度。

#### 来源及延伸阅读

- [可缩放系统构架介绍](http://lethain.com/introduction-to-architecting-systems-for-scale)
- [破解系统设计面试](http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview)
- [面向服务架构](https://en.wikipedia.org/wiki/Service-oriented_architecture)
- [Zookeeper 介绍](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper)
- [构建微服务，你所需要知道的一切](https://cloudncode.wordpress.com/2016/07/22/msa-getting-started/)

### 数据库

![img](https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409151054318.png)

#### 关系型数据库管理系统（RDBMS）

* 主从复制

  * 主库同时负责读取和写入操作，并复制写入到一个或多个从库中，从库只负责读操作。树状形式的从库再将写入复制到更多的从库中去。如果主库离线，系统可以以只读模式运行，直到某个从库被提升为主库或有新的主库出现。
  * 缺点
    * 将从库提升为主库需要额外的逻辑
    * 参考[不利之处：复制](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#不利之处复制)中，主从复制和主主复制**共同**的问题。

* 主主复制

  * 两个主库都负责读操作和写操作，写入操作时互相协调。如果其中一个主库挂机，系统可以继续读取和写入。
  * 缺点：
    * 你需要添加负载均衡器或者在应用逻辑中做改动，来确定写入哪一个数据库。
    * 多数主-主系统要么不能保证一致性（违反 ACID），要么因为同步产生了写入延迟。
    * 随着更多写入节点的加入和延迟的提高，如何解决冲突显得越发重要。
    * 参考[不利之处：复制](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#不利之处复制)中，主从复制和主主复制**共同**的问题

* 不利之处：复制

  * 如果主库在将新写入的数据复制到其他节点前挂掉，则有数据丢失的可能。
  * 写入会被重放到负责读取操作的副本。副本可能因为过多写操作阻塞住，导致读取功能异常。
  * 读取从库越多，需要复制的写入数据就越多，导致更严重的复制延迟。
  * 在某些数据库系统中，写入主库的操作可以用多个线程并行写入，但读取副本只支持单线程顺序地写入。
  * 复制意味着更多的硬件和额外的复杂度。

* 联合

  * 联合（或按功能划分）将数据库按对应功能分割。例如，你可以有三个数据库：**论坛**、**用户**和**产品**，而不仅是一个单体数据库，从而减少每个数据库的读取和写入流量，减少复制延迟。较小的数据库意味着更多适合放入内存的数据，进而意味着更高的缓存命中几率。没有只能串行写入的中心化主库，你可以并行写入，提高负载能力。
  * 缺点
    * 如果你的数据库模式需要大量的功能和数据表，联合的效率并不好。
    * 你需要更新应用程序的逻辑来确定要读取和写入哪个数据库。
    * 用 [server link](http://stackoverflow.com/questions/5145637/querying-data-by-joining-two-tables-in-two-database-on-different-servers) 从两个库联结数据更复杂。
    * 联合需要更多的硬件和额外的复杂度。

* 分片

  * 分片将数据分配在不同的数据库上，使得每个数据库仅管理整个数据集的一个子集。以用户数据库为例，随着用户数量的增加，越来越多的分片会被添加到集群中。

    类似[联合](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#联合)的优点，分片可以减少读取和写入流量，减少复制并提高缓存命中率。也减少了索引，通常意味着查询更快，性能更好。如果一个分片出问题，其他的仍能运行，你可以使用某种形式的冗余来防止数据丢失。类似联合，没有只能串行写入的中心化主库，你可以并行写入，提高负载能力。

    常见的做法是用户姓氏的首字母或者用户的地理位置来分隔用户表。

  * 缺点

    * 你需要修改应用程序的逻辑来实现分片，这会带来复杂的 SQL 查询。
    * 分片不合理可能导致数据负载不均衡。例如，被频繁访问的用户数据会导致其所在分片的负载相对其他分片高。
      - 再平衡会引入额外的复杂度。基于[一致性哈希](http://www.paperplanes.de/2011/12/9/the-magic-of-consistent-hashing.html)的分片算法可以减少这种情况。
    * 联结多个分片的数据操作更复杂。
    * 分片需要更多的硬件和额外的复杂度。

* 非规范化

  * 非规范化试图以写入性能为代价来换取读取性能。在多个表中冗余数据副本，以避免高成本的联结操作。一些关系型数据库，比如 [PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL) 和 Oracle 支持[物化视图](https://en.wikipedia.org/wiki/Materialized_view)，可以处理冗余信息存储和保证冗余副本一致。

    当数据使用诸如[联合](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#联合)和[分片](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#分片)等技术被分割，进一步提高了处理跨数据中心的联结操作复杂度。非规范化可以规避这种复杂的联结操作。

    在多数系统中，读取操作的频率远高于写入操作，比例可达到 100:1，甚至 1000:1。需要复杂的数据库联结的读取操作成本非常高，在磁盘操作上消耗了大量时间。

  * 缺点

    * 数据会冗余。
    * 约束可以帮助冗余的信息副本保持同步，但这样会增加数据库设计的复杂度。
    * 非规范化的数据库在高写入负载下性能可能比规范化的数据库差。

* SQL 调优

  * SQL 调优是一个范围很广的话题，有很多相关的[书](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=sql+tuning)可以作为参考。

    利用**基准测试**和**性能分析**来模拟和发现系统瓶颈很重要。

    - **基准测试** - 用 [ab](http://httpd.apache.org/docs/2.2/programs/ab.html) 等工具模拟高负载情况。
    - **性能分析** - 通过启用如[慢查询日志](http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html)等工具来辅助追踪性能问题。

    基准测试和性能分析可能会指引你到以下优化方案。

  * 使用正确的索引

  * 避免高成本的联结操作

  * 分割数据表

  * 调优查询缓存

#### NoSQL

NoSQL 是**键-值数据库**、**文档型数据库**、**列型数据库**或**图数据库**的统称。数据库是非规范化的，表联结大多在应用程序代码中完成。大多数 NoSQL 无法实现真正符合 ACID 的事务，支持[最终一致](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#最终一致性)。

**BASE** 通常被用于描述 NoSQL 数据库的特性。相比 [CAP 理论](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#cap-理论)，BASE 强调可用性超过一致性。

- **基本可用** - 系统保证可用性。
- **软状态** - 即使没有输入，系统状态也可能随着时间变化。
- **最终一致性** - 经过一段时间之后，系统最终会变一致，因为系统在此期间没有收到任何输入。

除了在 [SQL 还是 NoSQL](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#sql-还是-nosql) 之间做选择，了解哪种类型的 NoSQL 数据库最适合你的用例也是非常有帮助的。我们将在下一节中快速了解下 **键-值存储**、**文档型存储**、**列型存储**和**图存储**数据库。



**键-值存储**

> 抽象模型：哈希表

键-值存储通常可以实现 O(1) 时间读写，用内存或 SSD 存储数据。数据存储可以按[字典顺序](https://en.wikipedia.org/wiki/Lexicographical_order)维护键，从而实现键的高效检索。键-值存储可以用于存储元数据。

键-值存储性能很高，通常用于存储简单数据模型或频繁修改的数据，如存放在内存中的缓存。键-值存储提供的操作有限，如果需要更多操作，复杂度将转嫁到应用程序层面。

键-值存储是如文档存储，在某些情况下，甚至是图存储等更复杂的存储系统的基础。



**文档类型存储**

>  抽象模型：将文档作为值的键-值存储

文档类型存储以文档（XML、JSON、二进制文件等）为中心，文档存储了指定对象的全部信息。文档存储根据文档自身的内部结构提供 API 或查询语句来实现查询。请注意，许多键-值存储数据库有用值存储元数据的特性，这也模糊了这两种存储类型的界限。

基于底层实现，文档可以根据集合、标签、元数据或者文件夹组织。尽管不同文档可以被组织在一起或者分成一组，但相互之间可能具有完全不同的字段。

MongoDB 和 CouchDB 等一些文档类型存储还提供了类似 SQL 语言的查询语句来实现复杂查询。DynamoDB 同时支持键-值存储和文档类型存储。

文档类型存储具备高度的灵活性，常用于处理偶尔变化的数据。



**图数据库**

在图数据库中，一个节点对应一条记录，一个弧对应两个节点之间的关系。图数据库被优化用于表示外键繁多的复杂关系或多对多关系。

图数据库为存储复杂关系的数据模型，如社交网络，提供了很高的性能。它们相对较新，尚未广泛应用，查找开发工具或者资源相对较难。许多图只能通过 [REST API](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#表述性状态转移rest) 访问。



#### SQL 还是 NoSQL

选取 **SQL** 的原因:

- 结构化数据
- 严格的模式
- 关系型数据
- 需要复杂的联结操作
- 事务
- 清晰的扩展模式
- 既有资源更丰富：开发者、社区、代码库、工具等
- 通过索引进行查询非常快

选取 **NoSQL** 的原因：

- 半结构化数据
- 动态或灵活的模式
- 非关系型数据
- 不需要复杂的联结操作
- 存储 TB （甚至 PB）级别的数据
- 高数据密集的工作负载
- IOPS 高吞吐量

适合 NoSQL 的示例数据：

- 埋点数据和日志数据
- 排行榜或者得分数据
- 临时数据，如购物车
- 频繁访问的（“热”）表
- 元数据／查找表

### 缓存

缓存可以提高页面加载速度，并可以减少服务器和数据库的负载。在这个模型中，分发器先查看请求之前是否被响应过，如果有则将之前的结果直接返回，来省掉真正的处理。

数据库分片均匀分布的读取是最好的。但是热门数据会让读取分布不均匀，这样就会造成瓶颈，如果在数据库前加个缓存，就会抹平不均匀的负载和突发流量对数据库的影响。

缓存类型

* 客户端缓存
* CDN 缓存
* Web 服务器缓存（Nginx）
* 数据库缓存
* 应用缓存（Redis）

缓存相关

* 数据库查询级别的缓存
* 对象级别的缓存
* 缓存的模式：https://javaguide.cn/database/redis/3-commonly-used-cache-read-and-write-strategies.html

### 异步

![img](https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409151107255.png)



异步工作流有助于减少那些原本顺序执行的请求时间。它们可以通过提前进行一些耗时的工作来帮助减少请求时间，比如定期汇总数据。

* 消息队列：

  * 消息队列接收，保留和传递消息。如果按顺序执行操作太慢的话，你可以使用有以下工作流的消息队列：

    - 应用程序将作业发布到队列，然后通知用户作业状态
    - 一个 worker 从队列中取出该作业，对其进行处理，然后显示该作业完成

    不去阻塞用户操作，作业在后台处理。在此期间，客户端可能会进行一些处理使得看上去像是任务已经完成了。例如，如果要发送一条推文，推文可能会马上出现在你的时间线上，但是可能需要一些时间才能将你的推文推送到你的所有关注者那里去。

    **Redis** 是一个令人满意的简单的消息代理，但是消息有可能会丢失。

    **RabbitMQ** 很受欢迎但是要求你适应「AMQP」协议并且管理你自己的节点。

    **Amazon SQS** 是被托管的，但可能具有高延迟，并且消息可能会被传送两次。

* 任务队列

  * 任务队列接收任务及其相关数据，运行它们，然后传递其结果。 它们可以支持调度，并可用于在后台运行计算密集型作业。

* 背压

  * 如果队列开始明显增长，那么队列大小可能会超过内存大小，导致高速缓存未命中，磁盘读取，甚至性能更慢。[背压](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html)可以通过限制队列大小来帮助我们，从而为队列中的作业保持高吞吐率和良好的响应时间。一旦队列填满，客户端将得到服务器忙或者 HTTP 503 状态码，以便稍后重试。客户端可以在稍后时间重试该请求，也许是[指数退避](https://en.wikipedia.org/wiki/Exponential_backoff)。

* 异步的缺点

  * 简单的计算和实时工作流等用例可能更适用于同步操作，因为引入队列可能会增加延迟和复杂性。

### 通讯

* 超文本传输协议（HTTP）
* 传输控制协议（TCP）
* 用户数据报协议（UDP）
* 远程过程调用协议（RPC）
* 表述性状态转移（REST）
* RPC 与 REST 比较

### 安全

这一部分需要更多内容。[一起来吧](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#贡献)！

安全是一个宽泛的话题。除非你有相当的经验、安全方面背景或者正在申请的职位要求安全知识，你不需要了解安全基础知识以外的内容：

- 在运输和等待过程中加密
- 对所有的用户输入和从用户那里发来的参数进行处理以防止 [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) 和 [SQL 注入](https://en.wikipedia.org/wiki/SQL_injection)。
- 使用参数化的查询来防止 SQL 注入。
- 使用[最小权限原则](https://en.wikipedia.org/wiki/Principle_of_least_privilege)。

## 附录

### 其它的系统设计面试题

常见的系统设计面试问题，给出了如何解决的方案链接

| **问题**                               | **引用**                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 设计类似于 Dropbox 的文件同步服务      | [youtube.com](https://www.youtube.com/watch?v=PE4gwstWhmc)                                                                                                                                                                                                                                                                                                                                                                                        |
| 设计类似于 Google 的搜索引擎           | [queue.acm.org](http://queue.acm.org/detail.cfm?id=988407)[stackexchange.com](http://programmers.stackexchange.com/questions/38324/interview-question-how-would-you-implement-google-search)[ardendertat.com](http://www.ardendertat.com/2012/01/11/implementing-search-engines/)[stanford.edu](http://infolab.stanford.edu/~backrub/google.html)                                                                                                 |
| 设计类似于 Google 的可扩展网络爬虫     | [quora.com](https://www.quora.com/How-can-I-build-a-web-crawler-from-scratch)                                                                                                                                                                                                                                                                                                                                                                     |
| 设计 Google 文档                       | [code.google.com](https://code.google.com/p/google-mobwrite/)[neil.fraser.name](https://neil.fraser.name/writing/sync/)                                                                                                                                                                                                                                                                                                                           |
| 设计类似 Redis 的键值存储              | [slideshare.net](http://www.slideshare.net/dvirsky/introduction-to-redis)                                                                                                                                                                                                                                                                                                                                                                         |
| 设计类似 Memcached 的缓存系统          | [slideshare.net](http://www.slideshare.net/oemebamo/introduction-to-memcached)                                                                                                                                                                                                                                                                                                                                                                    |
| 设计类似亚马逊的推荐系统               | [hulu.com](http://tech.hulu.com/blog/2011/09/19/recommendation-system.html)[ijcai13.org](http://ijcai13.org/files/tutorial_slides/td3.pdf)                                                                                                                                                                                                                                                                                                        |
| 设计类似 Bitly 的短链接系统            | [n00tc0d3r.blogspot.com](http://n00tc0d3r.blogspot.com/)                                                                                                                                                                                                                                                                                                                                                                                          |
| 设计类似 WhatsApp 的聊天应用           | [highscalability.com](http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html)                                                                                                                                                                                                                                                                                                                    |
| 设计类似 Instagram 的图片分享系统      | [highscalability.com](http://highscalability.com/flickr-architecture)[highscalability.com](http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html)                                                                                                                                                                                                                                            |
| 设计 Facebook 的新闻推荐方法           | [quora.com](http://www.quora.com/What-are-best-practices-for-building-something-like-a-News-Feed)[quora.com](http://www.quora.com/Activity-Streams/What-are-the-scaling-issues-to-keep-in-mind-while-developing-a-social-network-feed)[slideshare.net](http://www.slideshare.net/danmckinley/etsy-activity-feeds-architecture)                                                                                                                    |
| 设计 Facebook 的时间线系统             | [facebook.com](https://www.facebook.com/note.php?note_id=10150468255628920)[highscalability.com](http://highscalability.com/blog/2012/1/23/facebook-timeline-brought-to-you-by-the-power-of-denormaliza.html)                                                                                                                                                                                                                                     |
| 设计 Facebook 的聊天系统               | [erlang-factory.com](http://www.erlang-factory.com/upload/presentations/31/EugeneLetuchy-ErlangatFacebook.pdf)[facebook.com](https://www.facebook.com/note.php?note_id=14218138919&id=9445547199&index=0)                                                                                                                                                                                                                                         |
| 设计类似 Facebook 的图表搜索系统       | [facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-building-out-the-infrastructure-for-graph-search/10151347573598920)[facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-indexing-and-ranking-in-graph-search/10151361720763920)[facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-the-natural-language-interface-of-graph-search/10151432733048920) |
| 设计类似 CloudFlare 的内容传递网络     | [cmu.edu](http://repository.cmu.edu/cgi/viewcontent.cgi?article=2112&context=compsci)                                                                                                                                                                                                                                                                                                                                                             |
| 设计类似 Twitter 的热门话题系统        | [michael-noll.com](http://www.michael-noll.com/blog/2013/01/18/implementing-real-time-trending-topics-in-storm/)[snikolov .wordpress.com](http://snikolov.wordpress.com/2012/11/14/early-detection-of-twitter-trends/)                                                                                                                                                                                                                            |
| 设计一个随机 ID 生成系统               | [blog.twitter.com](https://blog.twitter.com/2010/announcing-snowflake)[github.com](https://github.com/twitter/snowflake/)                                                                                                                                                                                                                                                                                                                         |
| 返回一定时间段内次数前 k 高的请求      | [ucsb.edu](https://icmi.cs.ucsb.edu/research/tech_reports/reports/2005-23.pdf)[wpi.edu](http://davis.wpi.edu/xmdv/docs/EDBT11-diyang.pdf)                                                                                                                                                                                                                                                                                                         |
| 设计一个数据源于多个数据中心的服务系统 | [highscalability.com](http://highscalability.com/blog/2009/8/24/how-google-serves-data-from-multiple-datacenters.html)                                                                                                                                                                                                                                                                                                                            |
| 设计一个多人网络卡牌游戏               | [indieflashblog.com](https://web.archive.org/web/20180929181117/http://www.indieflashblog.com/how-to-create-an-asynchronous-multiplayer-game.html)[buildnewgames.com](http://buildnewgames.com/real-time-multiplayer/)                                                                                                                                                                                                                            |
| 设计一个垃圾回收系统                   | [stuffwithstuff.com](http://journal.stuffwithstuff.com/2013/12/08/babys-first-garbage-collector/)[washington.edu](http://courses.cs.washington.edu/courses/csep521/07wi/prj/rick.pdf)                                                                                                                                                                                                                                                             |
| 添加更多的系统设计问题                 | [贡献](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#贡献)                                                                                                                                                                                                                                                                                                                                                    |

### 真实架构

关于现实中真实的系统是怎么设计的文章。

[![img](https://echo798.oss-cn-shenzhen.aliyuncs.com/img/202409150430883.png)](https://github.com/donnemartin/system-design-primer/blob/master/images/TcUo2fw.png)[**Source: Twitter timelines at scale**](https://www.infoq.com/presentations/Twitter-Timeline-Scalability)

**不要专注于以下文章的细节，专注于以下方面：**

- 发现这些文章中的共同的原则、技术和模式。
- 学习每个组件解决哪些问题，什么情况下使用，什么情况下不适用
- 复习学过的文章

| **类型**        | **系统**                                               | **引用**                                                                                                                                       |
| --------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Data processing | **MapReduce** - Google 的分布式数据处理                | [research.google.com](http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/mapreduce-osdi04.pdf)                     |
| Data processing | **Spark** - Databricks 的分布式数据处理                | [slideshare.net](http://www.slideshare.net/AGrishchenko/apache-spark-architecture)                                                             |
| Data processing | **Storm** - Twitter 的分布式数据处理                   | [slideshare.net](http://www.slideshare.net/previa/storm-16094009)                                                                              |
|                 |                                                        |                                                                                                                                                |
| Data store      | **Bigtable** - Google 的列式数据库                     | [harvard.edu](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf)                                                    |
| Data store      | **HBase** - Bigtable 的开源实现                        | [slideshare.net](http://www.slideshare.net/alexbaranau/intro-to-hbase)                                                                         |
| Data store      | **Cassandra** - Facebook 的列式数据库                  | [slideshare.net](http://www.slideshare.net/planetcassandra/cassandra-introduction-features-30103666)                                           |
| Data store      | **DynamoDB** - Amazon 的文档数据库                     | [harvard.edu](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/decandia07dynamo.pdf)                                                   |
| Data store      | **MongoDB** - 文档数据库                               | [slideshare.net](http://www.slideshare.net/mdirolf/introduction-to-mongodb)                                                                    |
| Data store      | **Spanner** - Google 的全球分布数据库                  | [research.google.com](http://research.google.com/archive/spanner-osdi2012.pdf)                                                                 |
| Data store      | **Memcached** - 分布式内存缓存系统                     | [slideshare.net](http://www.slideshare.net/oemebamo/introduction-to-memcached)                                                                 |
| Data store      | **Redis** - 能够持久化及具有值类型的分布式内存缓存系统 | [slideshare.net](http://www.slideshare.net/dvirsky/introduction-to-redis)                                                                      |
|                 |                                                        |                                                                                                                                                |
| File system     | **Google File System (GFS)** - 分布式文件系统          | [research.google.com](http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/gfs-sosp2003.pdf)                         |
| File system     | **Hadoop File System (HDFS)** - GFS 的开源实现         | [apache.org](https://hadoop.apache.org/docs/r1.2.1/hdfs_design.html)                                                                           |
|                 |                                                        |                                                                                                                                                |
| Misc            | **Chubby** - Google 的分布式系统的低耦合锁服务         | [research.google.com](http://static.googleusercontent.com/external_content/untrusted_dlcp/research.google.com/en/us/archive/chubby-osdi06.pdf) |
| Misc            | **Dapper** - 分布式系统跟踪基础设施                    | [research.google.com](http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/36356.pdf)                                |
| Misc            | **Kafka** - LinkedIn 的发布订阅消息系统                | [slideshare.net](http://www.slideshare.net/mumrah/kafka-talk-tri-hug)                                                                          |
| Misc            | **Zookeeper** - 集中的基础架构和协调服务               | [slideshare.net](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper)                                                       |
|                 | 添加更多                                               | [贡献](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#贡献)                                                 |

### 公司的系统架构

| **Company**    | **Reference(s)**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Amazon         | [Amazon 的架构](http://highscalability.com/amazon-architecture)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Cinchcast      | [每天产生 1500 小时的音频](http://highscalability.com/blog/2012/7/16/cinchcast-architecture-producing-1500-hours-of-audio-every-d.html)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| DataSift       | [每秒实时挖掘 120000 条 tweet](http://highscalability.com/blog/2011/11/29/datasift-architecture-realtime-datamining-at-120000-tweets-p.html)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| DropBox        | [我们如何缩放 Dropbox](https://www.youtube.com/watch?v=PE4gwstWhmc)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ESPN           | [每秒操作 100000 次](http://highscalability.com/blog/2013/11/4/espns-architecture-at-scale-operating-at-100000-duh-nuh-nuhs.html)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Google         | [Google 的架构](http://highscalability.com/google-architecture)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Instagram      | [1400 万用户，达到兆级别的照片存储](http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html)[是什么在驱动 Instagram](http://instagram-engineering.tumblr.com/post/13649370142/what-powers-instagram-hundreds-of-instances)                                                                                                                                                                                                                                                                                                                                                                              |
| Justin.tv      | [Justin.Tv 的直播广播架构](http://highscalability.com/blog/2010/3/16/justintvs-live-video-broadcasting-architecture.html)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Facebook       | [Facebook 的可扩展 memcached](https://cs.uwaterloo.ca/~brecht/courses/854-Emerging-2014/readings/key-value/fb-memcached-nsdi-2013.pdf)[TAO: Facebook 社交图的分布式数据存储](https://cs.uwaterloo.ca/~brecht/courses/854-Emerging-2014/readings/data-store/tao-facebook-distributed-datastore-atc-2013.pdf)[Facebook 的图片存储](https://www.usenix.org/legacy/event/osdi10/tech/full_papers/Beaver.pdf)                                                                                                                                                                                                                                                   |
| Flickr         | [Flickr 的架构](http://highscalability.com/flickr-architecture)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Mailbox        | [在 6 周内从 0 到 100 万用户](http://highscalability.com/blog/2013/6/18/scaling-mailbox-from-0-to-one-million-users-in-6-weeks-and-1.html)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Pinterest      | [从零到每月数十亿的浏览量](http://highscalability.com/blog/2013/4/15/scaling-pinterest-from-0-to-10s-of-billions-of-page-views-a.html)[1800 万访问用户，10 倍增长，12 名员工](http://highscalability.com/blog/2012/5/21/pinterest-architecture-update-18-million-visitors-10x-growth.html)                                                                                                                                                                                                                                                                                                                                                                 |
| Playfish       | [月用户量 5000 万并在不断增长](http://highscalability.com/blog/2010/9/21/playfishs-social-gaming-architecture-50-million-monthly-user.html)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| PlentyOfFish   | [PlentyOfFish 的架构](http://highscalability.com/plentyoffish-architecture)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Salesforce     | [他们每天如何处理 13 亿笔交易](http://highscalability.com/blog/2013/9/23/salesforce-architecture-how-they-handle-13-billion-transacti.html)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Stack Overflow | [Stack Overflow 的架构](http://highscalability.com/blog/2009/8/5/stack-overflow-architecture.html)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| TripAdvisor    | [40M 访问者，200M 页面浏览量，30TB 数据](http://highscalability.com/blog/2011/6/27/tripadvisor-architecture-40m-visitors-200m-dynamic-page-view.html)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Tumblr         | [每月 150 亿的浏览量](http://highscalability.com/blog/2012/2/13/tumblr-architecture-15-billion-page-views-a-month-and-harder.html)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Twitter        | [Making Twitter 10000 percent faster](http://highscalability.com/scaling-twitter-making-twitter-10000-percent-faster)[每天使用 MySQL 存储 2.5 亿条 tweet](http://highscalability.com/blog/2011/12/19/how-twitter-stores-250-million-tweets-a-day-using-mysql.html)[150M 活跃用户，300K QPS，22 MB/S 的防火墙](http://highscalability.com/blog/2013/7/8/the-architecture-twitter-uses-to-deal-with-150m-active-users.html)[可扩展时间表](https://www.infoq.com/presentations/Twitter-Timeline-Scalability)[Twitter 的大小数据](https://www.youtube.com/watch?v=5cKTP36HVgI)[Twitter 的行为：规模超过 1 亿用户](https://www.youtube.com/watch?v=z8LU0Cj6BOU) |
| Uber           | [Uber 如何扩展自己的实时化市场](http://highscalability.com/blog/2015/9/14/how-uber-scales-their-real-time-market-platform.html)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| WhatsApp       | [Facebook 用 190 亿美元购买 WhatsApp 的架构](http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| YouTube        | [YouTube 的可扩展性](https://www.youtube.com/watch?v=w5WVu624fY8)[YouTube 的架构](http://highscalability.com/youtube-architecture)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### 公司工程博客

你即将面试的公司的架构

你面对的问题可能就来自于同样领域

- [Airbnb Engineering](http://nerds.airbnb.com/)
- [Atlassian Developers](https://developer.atlassian.com/blog/)
- [Autodesk Engineering](http://cloudengineering.autodesk.com/blog/)
- [AWS Blog](https://aws.amazon.com/blogs/aws/)
- [Bitly Engineering Blog](http://word.bitly.com/)
- [Box Blogs](https://www.box.com/blog/engineering/)
- [Cloudera Developer Blog](http://blog.cloudera.com/blog/)
- [Dropbox Tech Blog](https://tech.dropbox.com/)
- [Engineering at Quora](http://engineering.quora.com/)
- [Ebay Tech Blog](http://www.ebaytechblog.com/)
- [Evernote Tech Blog](https://blog.evernote.com/tech/)
- [Etsy Code as Craft](http://codeascraft.com/)
- [Facebook Engineering](https://www.facebook.com/Engineering)
- [Flickr Code](http://code.flickr.net/)
- [Foursquare Engineering Blog](http://engineering.foursquare.com/)
- [GitHub Engineering Blog](https://github.blog/category/engineering)
- [Google Research Blog](http://googleresearch.blogspot.com/)
- [Groupon Engineering Blog](https://engineering.groupon.com/)
- [Heroku Engineering Blog](https://engineering.heroku.com/)
- [Hubspot Engineering Blog](http://product.hubspot.com/blog/topic/engineering)
- [High Scalability](http://highscalability.com/)
- [Instagram Engineering](http://instagram-engineering.tumblr.com/)
- [Intel Software Blog](https://software.intel.com/en-us/blogs/)
- [Jane Street Tech Blog](https://blogs.janestreet.com/category/ocaml/)
- [LinkedIn Engineering](http://engineering.linkedin.com/blog)
- [Microsoft Engineering](https://engineering.microsoft.com/)
- [Microsoft Python Engineering](https://blogs.msdn.microsoft.com/pythonengineering/)
- [Netflix Tech Blog](http://techblog.netflix.com/)
- [Paypal Developer Blog](https://devblog.paypal.com/category/engineering/)
- [Pinterest Engineering Blog](http://engineering.pinterest.com/)
- [Quora Engineering](https://engineering.quora.com/)
- [Reddit Blog](http://www.redditblog.com/)
- [Salesforce Engineering Blog](https://developer.salesforce.com/blogs/engineering/)
- [Slack Engineering Blog](https://slack.engineering/)
- [Spotify Labs](https://labs.spotify.com/)
- [Twilio Engineering Blog](http://www.twilio.com/engineering)
- [Twitter Engineering](https://engineering.twitter.com/)
- [Uber Engineering Blog](http://eng.uber.com/)
- [Yahoo Engineering Blog](http://yahooeng.tumblr.com/)
- [Yelp Engineering Blog](http://engineeringblog.yelp.com/)
- [Zynga Engineering Blog](https://www.zynga.com/blogs/engineering)

#### 来源及延伸阅读

- [kilimchoi/engineering-blogs](https://github.com/kilimchoi/engineering-blogs)

## 参考文献

- 原文地址：[github.com/donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer)
- 译文出自：[掘金翻译计划](https://github.com/xitu/gold-miner)
