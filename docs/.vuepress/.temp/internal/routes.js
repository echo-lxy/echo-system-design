export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"E:/echo/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/echo/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/posts/archive1.html", { loader: () => import(/* webpackChunkName: "posts_archive1.html" */"E:/echo/docs/.vuepress/.temp/pages/posts/archive1.html.js"), meta: {"_blog":{"title":"Archive Article1","author":"","date":"1998-01-01T00:00:00.000Z","category":["History"],"tag":["WWI"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Archive Article1"} }],
  ["/posts/archive2.html", { loader: () => import(/* webpackChunkName: "posts_archive2.html" */"E:/echo/docs/.vuepress/.temp/pages/posts/archive2.html.js"), meta: {"_blog":{"title":"Archive Article2","author":"","date":"1998-01-02T00:00:00.000Z","category":["History"],"tag":["WWII"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Archive Article2"} }],
  ["/posts/article1.html", { loader: () => import(/* webpackChunkName: "posts_article1.html" */"E:/echo/docs/.vuepress/.temp/pages/posts/article1.html.js"), meta: {"_blog":{"title":"Article 1","author":"","date":"2022-01-01T00:00:00.000Z","category":["CategoryA"],"tag":["tag A","tag B"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 1"} }],
  ["/posts/article10.html", { loader: () => import(/* webpackChunkName: "posts_article10.html" */"E:/echo/docs/.vuepress/.temp/pages/posts/article10.html.js"), meta: {"_blog":{"title":"Article 10","author":"","date":"2022-01-10T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag C","tag D"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 10"} }],
  ["/posts/article11.html", { loader: () => import(/* webpackChunkName: "posts_article11.html" */"E:/echo/docs/.vuepress/.temp/pages/posts/article11.html.js"), meta: {"_blog":{"title":"Article 11","author":"","date":"2022-01-11T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag C","tag D"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 11"} }],
  ["/posts/article12.html", { loader: () => import(/* webpackChunkName: "posts_article12.html" */"E:/echo/docs/.vuepress/.temp/pages/posts/article12.html.js"), meta: {"_blog":{"title":"Article 12","author":"","date":"2022-01-12T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag C","tag D"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 12"} }],
  ["/posts/article2.html", { loader: () => import(/* webpackChunkName: "posts_article2.html" */"E:/echo/docs/.vuepress/.temp/pages/posts/article2.html.js"), meta: {"_blog":{"title":"Article 2","author":"","date":"2022-01-02T00:00:00.000Z","category":["CategoryA"],"tag":["tag A","tag B"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 2"} }],
  ["/posts/article3.html", { loader: () => import(/* webpackChunkName: "posts_article3.html" */"E:/echo/docs/.vuepress/.temp/pages/posts/article3.html.js"), meta: {"_blog":{"title":"Article 3","author":"","date":"2022-01-03T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 3"} }],
  ["/posts/article4.html", { loader: () => import(/* webpackChunkName: "posts_article4.html" */"E:/echo/docs/.vuepress/.temp/pages/posts/article4.html.js"), meta: {"_blog":{"title":"Article 4","author":"","date":"2022-01-04T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 4"} }],
  ["/posts/article5.html", { loader: () => import(/* webpackChunkName: "posts_article5.html" */"E:/echo/docs/.vuepress/.temp/pages/posts/article5.html.js"), meta: {"_blog":{"title":"Article 5","author":"","date":"2022-01-05T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 5"} }],
  ["/posts/article6.html", { loader: () => import(/* webpackChunkName: "posts_article6.html" */"E:/echo/docs/.vuepress/.temp/pages/posts/article6.html.js"), meta: {"_blog":{"title":"Article 6","author":"","date":"2022-01-06T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag A","tag B"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 6"} }],
  ["/posts/article7.html", { loader: () => import(/* webpackChunkName: "posts_article7.html" */"E:/echo/docs/.vuepress/.temp/pages/posts/article7.html.js"), meta: {"_blog":{"title":"Article 7","author":"","date":"2022-01-07T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag C","tag D"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 7"} }],
  ["/posts/article8.html", { loader: () => import(/* webpackChunkName: "posts_article8.html" */"E:/echo/docs/.vuepress/.temp/pages/posts/article8.html.js"), meta: {"_blog":{"title":"Article 8","author":"","date":"2022-01-08T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag C","tag D"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 8"} }],
  ["/posts/article9.html", { loader: () => import(/* webpackChunkName: "posts_article9.html" */"E:/echo/docs/.vuepress/.temp/pages/posts/article9.html.js"), meta: {"_blog":{"title":"Article 9","author":"","date":"2022-01-09T00:00:00.000Z","category":["CategoryA","CategoryB"],"tag":["tag C","tag D"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 9"} }],
  ["/posts/sticky.html", { loader: () => import(/* webpackChunkName: "posts_sticky.html" */"E:/echo/docs/.vuepress/.temp/pages/posts/sticky.html.js"), meta: {"_blog":{"title":"Sticky Article","author":"","date":"2021-01-01T00:00:00.000Z","category":["CategoryC"],"tag":["tag E"],"excerpt":"<p>A sticky article demo.</p>"},"title":"Sticky Article"} }],
  ["/posts/sticky2.html", { loader: () => import(/* webpackChunkName: "posts_sticky2.html" */"E:/echo/docs/.vuepress/.temp/pages/posts/sticky2.html.js"), meta: {"_blog":{"title":"Sticky Article with Higher Priority","author":"","date":"2020-01-01T00:00:00.000Z","category":["CategoryC"],"tag":["tag E"],"excerpt":"\n<p>Excerpt information which is added manually.</p>\n"},"title":"Sticky Article with Higher Priority"} }],
  ["/article/design-application/", { loader: () => import(/* webpackChunkName: "article_design-application_index.html" */"E:/echo/docs/.vuepress/.temp/pages/article/design-application/index.html.js"), meta: {"title":"介绍"} }],
  ["/article/design-application/twitter.html", { loader: () => import(/* webpackChunkName: "article_design-application_twitter.html" */"E:/echo/docs/.vuepress/.temp/pages/article/design-application/twitter.html.js"), meta: {"title":"设计推特"} }],
  ["/article/design-application/wechat.html", { loader: () => import(/* webpackChunkName: "article_design-application_wechat.html" */"E:/echo/docs/.vuepress/.temp/pages/article/design-application/wechat.html.js"), meta: {"title":"设计微信"} }],
  ["/article/design-algorithm/bloom-filter.html", { loader: () => import(/* webpackChunkName: "article_design-algorithm_bloom-filter.html" */"E:/echo/docs/.vuepress/.temp/pages/article/design-algorithm/bloom-filter.html.js"), meta: {"title":"布隆过滤"} }],
  ["/article/design-algorithm/consistent-hashing.html", { loader: () => import(/* webpackChunkName: "article_design-algorithm_consistent-hashing.html" */"E:/echo/docs/.vuepress/.temp/pages/article/design-algorithm/consistent-hashing.html.js"), meta: {"title":"一致性哈希"} }],
  ["/article/design-algorithm/", { loader: () => import(/* webpackChunkName: "article_design-algorithm_index.html" */"E:/echo/docs/.vuepress/.temp/pages/article/design-algorithm/index.html.js"), meta: {"title":"介绍"} }],
  ["/article/question/", { loader: () => import(/* webpackChunkName: "article_question_index.html" */"E:/echo/docs/.vuepress/.temp/pages/article/question/index.html.js"), meta: {"title":"介绍"} }],
  ["/article/design-infrastructure/distributed-cache.html", { loader: () => import(/* webpackChunkName: "article_design-infrastructure_distributed-cache.html" */"E:/echo/docs/.vuepress/.temp/pages/article/design-infrastructure/distributed-cache.html.js"), meta: {"title":"分布式缓存"} }],
  ["/article/design-infrastructure/rate-limiting.html", { loader: () => import(/* webpackChunkName: "article_design-infrastructure_rate-limiting.html" */"E:/echo/docs/.vuepress/.temp/pages/article/design-infrastructure/rate-limiting.html.js"), meta: {"title":"限流器"} }],
  ["/article/design-infrastructure/", { loader: () => import(/* webpackChunkName: "article_design-infrastructure_index.html" */"E:/echo/docs/.vuepress/.temp/pages/article/design-infrastructure/index.html.js"), meta: {"title":"介绍"} }],
  ["/article/design-infrastructure/top-k.html", { loader: () => import(/* webpackChunkName: "article_design-infrastructure_top-k.html" */"E:/echo/docs/.vuepress/.temp/pages/article/design-infrastructure/top-k.html.js"), meta: {"title":"热点数据服务"} }],
  ["/article/timeline/", { loader: () => import(/* webpackChunkName: "article_timeline_index.html" */"E:/echo/docs/.vuepress/.temp/pages/article/timeline/index.html.js"), meta: {"title":"介绍"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/echo/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"E:/echo/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/category/history/", { loader: () => import(/* webpackChunkName: "category_history_index.html" */"E:/echo/docs/.vuepress/.temp/pages/category/history/index.html.js"), meta: {"title":"Category History"} }],
  ["/category/categorya/", { loader: () => import(/* webpackChunkName: "category_categorya_index.html" */"E:/echo/docs/.vuepress/.temp/pages/category/categorya/index.html.js"), meta: {"title":"Category CategoryA"} }],
  ["/category/categoryb/", { loader: () => import(/* webpackChunkName: "category_categoryb_index.html" */"E:/echo/docs/.vuepress/.temp/pages/category/categoryb/index.html.js"), meta: {"title":"Category CategoryB"} }],
  ["/category/categoryc/", { loader: () => import(/* webpackChunkName: "category_categoryc_index.html" */"E:/echo/docs/.vuepress/.temp/pages/category/categoryc/index.html.js"), meta: {"title":"Category CategoryC"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"E:/echo/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/tag/wwi/", { loader: () => import(/* webpackChunkName: "tag_wwi_index.html" */"E:/echo/docs/.vuepress/.temp/pages/tag/wwi/index.html.js"), meta: {"title":"Tag WWI"} }],
  ["/tag/wwii/", { loader: () => import(/* webpackChunkName: "tag_wwii_index.html" */"E:/echo/docs/.vuepress/.temp/pages/tag/wwii/index.html.js"), meta: {"title":"Tag WWII"} }],
  ["/tag/tag-a/", { loader: () => import(/* webpackChunkName: "tag_tag-a_index.html" */"E:/echo/docs/.vuepress/.temp/pages/tag/tag-a/index.html.js"), meta: {"title":"Tag tag A"} }],
  ["/tag/tag-b/", { loader: () => import(/* webpackChunkName: "tag_tag-b_index.html" */"E:/echo/docs/.vuepress/.temp/pages/tag/tag-b/index.html.js"), meta: {"title":"Tag tag B"} }],
  ["/tag/tag-c/", { loader: () => import(/* webpackChunkName: "tag_tag-c_index.html" */"E:/echo/docs/.vuepress/.temp/pages/tag/tag-c/index.html.js"), meta: {"title":"Tag tag C"} }],
  ["/tag/tag-d/", { loader: () => import(/* webpackChunkName: "tag_tag-d_index.html" */"E:/echo/docs/.vuepress/.temp/pages/tag/tag-d/index.html.js"), meta: {"title":"Tag tag D"} }],
  ["/tag/tag-e/", { loader: () => import(/* webpackChunkName: "tag_tag-e_index.html" */"E:/echo/docs/.vuepress/.temp/pages/tag/tag-e/index.html.js"), meta: {"title":"Tag tag E"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"E:/echo/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"E:/echo/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
]);
