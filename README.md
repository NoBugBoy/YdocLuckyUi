# 基于vue3实现的SwaggerUI

> 这只是一个试用版，还会继续调整ui样式，目前只提供源码包需要install到本地使用，未来会release到maven中央仓库，ui的源代码也会发布。

##### 它目前仅仅是一个皮肤，但是未来会走两条路线，第一条是单纯的ui，另外就是与 [YDoc一款支持Swagger和YApi的文档生成器](https://github.com/NoBugBoy/YDoc) 集成实现更多实用的功能。

不要拦截资源:
/doc.html
/assets/*


## 预览（我这里只展示了黑天模式，还有白天模式）


### 1. 主页（浅色）


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bfeb85f92c4b433bbf8fde84e3fca81e~tplv-k3u1fbpfcp-watermark.image?)

### 2. api侧边栏

父级携带了内部api的数量,内部使用请求类型分组，更直观。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/044029ceef534e39af5ffdc47f0f53e1~tplv-k3u1fbpfcp-watermark.image?)

### 3. 收起侧边栏

收起了侧边栏后，鼠标悬浮依然会弹出api分组，点击打开标签页

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2d93c4c04cd04cda9131fabeb83dd225~tplv-k3u1fbpfcp-watermark.image?)

### 4. 文档页

所有json编辑框都有格式化和折叠功能,方便复制,放大缩小方便观看

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0660bb0694ce443fa0119857b75062bd~tplv-k3u1fbpfcp-watermark.image?)

### 5. 返回值

展开查看返回参数类型和参数描述

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b4be92a5c6a24c02933cd6325c228cd9~tplv-k3u1fbpfcp-watermark.image?)

### 6. 返回值示例

代码已经留了位置，后续会上mock.js

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0291da89e8443969181efb150f913e4~tplv-k3u1fbpfcp-watermark.image?)

### 7.运行（调试）

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4ad2e73b5ed4f79bb40d912cfa64231~tplv-k3u1fbpfcp-watermark.image?)



![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d7ae030a3ab44628af61a0ea10a90cde~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51bf2880298a47329685781d9f4f3bbd~tplv-k3u1fbpfcp-watermark.image?)


### 8. 补一张浅色主题的效果

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ba103b1334ae473492c4d6387420b130~tplv-k3u1fbpfcp-watermark.image?)
