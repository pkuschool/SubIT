# SubIT 社团2021新官网（未完成）

这里是 SubIT 新官网的代码库。
放在这里是为了开发+白嫖 GitHub。

- 本地调试开发用

```
npm run dev
```

## 设计准则

- 静态，不用动态交互
- 简单，易于了解
    - 用户不会在这里停留太久的

## 维护指南

推上来之前 **必须** 在本地测试！
- 关于react请看[中文官网](https://https://react.docschina.org/)
- 关于nextjs请看[翻译不全的中文官网](https://nextjs.cn)
- 关于***的material-ui也是看[官网](https://material-ui.com)


- news: 所有新闻推送的存放处
- pages: 所有页面的存放处
- components: 所有非页面的组件的存放处
- public: 所有图片的存放处
- styles: 所有全局样式的存放处
- lib: 存放纯js文件

### 博客系统

- 使用gray-matter解析news文件夹中的markdown，
- 当然了日后补充个读取html的轮子也可以。
- markdown格式见示例新闻，具体的解析轮子还得改改

### 框架

- react、next.js和***的material-ui。
- 除了global.css外**所有样式全部**采用css-in-js的写法。
