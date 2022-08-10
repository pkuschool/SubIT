# SubIT 社团官网

这里是 SubIT 官网的代码库。放在这里是为了做存档+白嫖 GitHub Pages。

## 设计准则

- 静态，不用动态交互
- 简单，易于了解
  - 用户不会在这里停留太久的

## 维护指南

推上来之前 **必须** 在本地测试！Jekyll 相关请看其[文档](https://jekyllrb.com/)。

必须使用 Jekyll < 4.0.0 进行测试，直到 GitHub Pages 本身更改版本为止。若GHP更新到 4.0.0 以上，请删掉所有 `{{site.url}}` 前面的 `{{site.baseurl}}`。

- _data
  - member.json - 社员的 collection，每年一定要更新
  - nav.json - 顶部导航设定
  - overview.yml - index 中部的两个 badge
- _layouts
  - showcase - 标准展示页面
  - article - 文章专用
  - default - 开发之外压根不用

### label-badge

定义需要这么用：

```
{% assign cursor = site.data.overview %} // data
{% assign badge-align = 'center' %} // flex layout justify-content value
{% include label-badge.html %}
```

### 博客系统

参照 `_posts/` 已有项目操作即可。

### 框架

可以使用 [Pure.css](https://purecss.io/)，但鼓励自己手工写类 / 用已经写好的类。

图标建议用 [iconsvg](https://iconsvg.xyz/)，用的不多，设置为 24px, 1.5px, currentColor, round, round

## 维护 TODO

详见：[TODO.md](todo.md)