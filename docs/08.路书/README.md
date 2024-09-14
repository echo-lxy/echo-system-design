---
title: 路书
date: 2024-09-15 04:17:21
permalink: /pages/e6dc90/
sidebar: auto
---

> - 原文地址：[github.com/donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer)
> - 译文出自：[掘金翻译计划](https://github.com/xitu/gold-miner)

# 系统设计入门

## 学习指引

面试会很宽泛的展开并在几个领域深入。这会帮助你了解一些关于系统设计的不同的主题。基于你的时间线，经验，面试的职位和面试的公司对下面的指导做出适当的调整。

- **短期** - 以系统设计主题的**广度**为目标。通过解决**一些**面试题来练习。
- **中期** - 以系统设计主题的**广度**和**初级深度**为目标。通过解决**很多**面试题来练习。
- **长期** - 以系统设计主题的**广度**和**高级深度**为目标。通过解决**大部分**面试题来练习。

|                                                                                                                                                                  | **短期** | **中期** | **长期** |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | -------- |
| 阅读 [系统设计主题](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#系统设计主题的索引) 以获得一个关于系统如何工作的宽泛的认识 | 👍       | 👍       | 👍       |
| 阅读一些你要面试的[公司工程博客](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#公司工程博客)的文章                           | 👍       | 👍       | 👍       |
| 阅读 [真实架构](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#真实架构)                                                      | 👍       | 👍       | 👍       |
| 复习 [如何处理一个系统设计面试题](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#如何处理一个系统设计面试题)                  | 👍       | 👍       | 👍       |
| 完成 [系统设计的面试题和解答](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#系统设计的面试题和解答)                          | 一些     | 很多     | 大部分   |
| 完成 [面向对象设计的面试题和解答](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#面向对象设计的面试问题及解答)                | 一些     | 很多     | 大部分   |
| 复习 [其它的系统设计面试题](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#其它的系统设计面试题)                              | 一些     | 很多     | 大部分   |

## 系统设计的面试题和解答

普通的系统设计面试题和相关事例的论述，代码和图表。

与内容有关的解答在 `solutions/` 文件夹中。

| **问题**                                              |                                                                                                                            |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 设计 Pastebin.com (或者 Bit.ly)                       | [解答](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README-zh-Hans.md) |
| 设计 Twitter 时间线和搜索 (或者 Facebook feed 和搜索) | [解答](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/twitter/README.md)          |
| 设计一个网页爬虫                                      | [解答](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/web_crawler/README.md)      |
| 设计 Mint.com                                         | [解答](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/mint/README.md)             |
| 为一个社交网络设计数据结构                            | [解答](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/social_graph/README.md)     |
| 为搜索引擎设计一个 key-value 储存                     | [解答](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/query_cache/README.md)      |
| 通过分类特性设计 Amazon 的销售排名                    | [解答](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/sales_rank/README.md)       |
| 在 AWS 上设计一个百万用户级别的系统                   | [解答](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/scaling_aws/README.md)      |
| 添加一个系统设计问题                                  | [贡献](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#贡献)                             |

### 设计 Pastebin.com (或者 Bit.ly)

[查看实践与解答](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md)

### 设计 Twitter 时间线和搜索 (或者 Facebook feed 和搜索)

[查看实践与解答](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/twitter/README.md)

### 设计一个网页爬虫

[查看实践与解答](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/web_crawler/README.md)

### 设计 Mint.com

[查看实践与解答](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/mint/README.md)

### 为一个社交网络设计数据结构

[查看实践与解答](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/social_graph/README.md)

### 为搜索引擎设计一个 key-value 储存

[查看实践与解答](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/query_cache/README.md)

### 设计按类别分类的 Amazon 销售排名

[查看实践与解答](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/sales_rank/README.md)

### 在 AWS 上设计一个百万用户级别的系统

[查看实践与解答](https://github.com/donnemartin/system-design-primer/blob/master/images/jj3A5N8.png)

## 面向对象设计的面试问题及解答

常见面向对象设计面试问题及实例讨论，代码和图表演示。

与内容相关的解决方案在 `solutions/` 文件夹中。

**注：此节还在完善中**

| **问题**                 |                                                                                                                                                |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 设计 hash map            | [解决方案](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/hash_table/hash_map.ipynb)         |
| 设计 LRU 缓存            | [解决方案](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/lru_cache/lru_cache.ipynb)         |
| 设计一个呼叫中心         | [解决方案](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/call_center/call_center.ipynb)     |
| 设计一副牌               | [解决方案](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/deck_of_cards/deck_of_cards.ipynb) |
| 设计一个停车场           | [解决方案](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/parking_lot/parking_lot.ipynb)     |
| 设计一个聊天服务         | [解决方案](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/online_chat/online_chat.ipynb)     |
| 设计一个环形数组         | [待解决](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#贡献)                                               |
| 添加一个面向对象设计问题 | [待解决](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#贡献)                                               |

## 学习路线

- 系统设计主题：从这里开始
  - [第一步：回顾可扩展性的视频讲座](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#第一步回顾可扩展性scalability的视频讲座)
  - [第二步：回顾可扩展性的文章](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#第二步回顾可扩展性文章)
  - [接下来的步骤](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#接下来的步骤)
- [性能与拓展性](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#性能与可扩展性)
- [延迟与吞吐量](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#延迟与吞吐量)
- 可用性与一致性
  - CAP 理论
    - [CP - 一致性和分区容错性](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#cp--一致性和分区容错性)
    - [AP - 可用性和分区容错性](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#ap--可用性与分区容错性)
- 一致模式
  - [弱一致性](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#弱一致性)
  - [最终一致性](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#最终一致性)
  - [强一致性](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#强一致性)
- 可用模式
  - [故障切换](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#故障切换)
  - [复制](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#复制)
- [域名系统](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#域名系统)
- CDN CDN （中文版）
  - [CDN 推送](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#cdn-推送push)
  - [CDN 拉取](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#cdn-拉取pull)
- 负载均衡器
  - [工作到备用切换（Active-passive）](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#工作到备用切换active-passive)
  - [双工作切换（Active-active）](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#双工作切换active-active)
  - [四层负载均衡](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#四层负载均衡)
  - [七层负载均衡](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#七层负载均衡器)
  - [水平扩展](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#水平扩展)
- 反向代理（web 服务器）
  - [负载均衡与反向代理](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#负载均衡器与反向代理)
- 应用层
  - [微服务](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#微服务)
  - [服务发现](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#服务发现)
- 数据库
  - 关系型数据库管理系统（RDBMS）
    - [Master-slave 复制集](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#主从复制)
    - [Master-master 复制集](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#主主复制)
    - [联合](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#联合)
    - [分片](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#分片)
    - [非规范化](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#非规范化)
    - [SQL 调优](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#sql-调优)
  - NoSQL 无 SQL
    - [Key-value 存储](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#键-值存储)
    - [文档存储](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#文档类型存储)
    - [宽列存储](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#列型存储)
    - [图数据库](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#图数据库)
  - [SQL 还是 NoSQL](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#sql-还是-nosql)
- 缓存
  - [客户端缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#客户端缓存)
  - [CDN 缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#cdn-缓存)
  - [Web 服务器缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#web-服务器缓存)
  - [数据库缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#数据库缓存)
  - [应用缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#应用缓存)
  - [数据库查询级别的缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#数据库查询级别的缓存)
  - [对象级别的缓存](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#对象级别的缓存)
  - 何时更新缓存
    - [缓存模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#缓存模式)
    - [直写模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#直写模式)
    - [回写模式](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#回写模式)
    - [刷新](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#刷新)
- 异步
  - [消息队列](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#消息队列)
  - [任务队列](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#任务队列)
  - [背压机制](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#背压)
- 通讯
  - [传输控制协议（TCP）](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#传输控制协议tcp)
  - [用户数据报协议（UDP）](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#用户数据报协议udp)
  - [远程控制调用协议（RPC）](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#远程过程调用协议rpc)
  - [表述性状态转移（REST）](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#表述性状态转移rest)
- [安全](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#安全)

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
