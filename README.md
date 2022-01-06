# 基于vue3实现的SwaggerUI


> release-1.0.1 是一个比较完整的体验版


##### 它目前仅仅是一个皮肤，但是未来会走两条路线，第一条是单纯的ui，另外就是与 [YDoc一款支持Swagger和YApi的文档生成器](https://github.com/NoBugBoy/YDoc) 集成实现更多实用的功能。

不要拦截如下资源:
1. /doc.html
2. /assets/*

使用时感觉不适可以提issues，每天都会看，看到会解决。

---

#### 引入如下依赖，替换swagger-ui或swagger-bootstrap-ui即可 
```xml
  <dependency>
         <groupId>com.github.nobugboy</groupId>
         <artifactId>lucky-ui</artifactId>
         <version>release-1.0.1</version>
  </dependency>
```

## github
https://github.com/NoBugBoy/YdocLuckyUi
## 哔哩哔哩
https://www.bilibili.com/video/BV1SM4y1c7fE/

## 预览（我这里只展示了黑天模式，还有白天模式）

又改了一版，快ok了

### 1. 主页（深色）



![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f7e2f872a3404d0f9d63a0929ea26c0c~tplv-k3u1fbpfcp-watermark.image?)

### 2. api侧边栏

**1. 父级携带了内部api的数量,内部使用请求类型分组，更直观。**

**2. 标题过长，鼠标浮动上会展示全部内容**

**3. 分组的http method加了渐变色并区分颜色，比灰色更容易识别**



![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6c7ef19ba1304cb9a3658ab2bde99587~tplv-k3u1fbpfcp-watermark.image?)

**4. 父级标题过长会挡住显示数量的组件，本来是想放左边但是太丑，就给渲染到了弹出后的组件里**

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f569ed2df9454cbca48e1d4de0f1d808~tplv-k3u1fbpfcp-watermark.image?)
### 3. 收起侧边栏

**收起了侧边栏后，鼠标悬浮依然会弹出api分组，点击打开标签页**


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bf515d01e70641fea70b5fd1f476ffb8~tplv-k3u1fbpfcp-watermark.image?)
### 4. 文档页

**所有json编辑框都有格式化和折叠功能,方便复制,放大缩小方便观看**


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e779d2c034f4c499d71e58754709298~tplv-k3u1fbpfcp-watermark.image?)


### 5. 返回值

**类型高亮，如果字段名包含id,Id会被高亮显示为红色，新增了快速复制字段名的按钮（节省手动复制时间0.8秒）**


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f94f7d4685574134aeefc8c24f854618~tplv-k3u1fbpfcp-watermark.image?)

### 6. 返回值示例

**自动展开到二级json，剩下需要手动点，防止展开太多看着累，代码已经留了位置，后续会上mock.js**


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/53bddba94c1f488fb066b4a54a2a8396~tplv-k3u1fbpfcp-watermark.image?)

### 7.运行（调试）


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68481eeccc514e208a750481cb6f95da~tplv-k3u1fbpfcp-watermark.image?)



![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d7ae030a3ab44628af61a0ea10a90cde~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51bf2880298a47329685781d9f4f3bbd~tplv-k3u1fbpfcp-watermark.image?)

### 8. 保存请求用例

**1. 这个功能主要是记录当时的请求参数（含request body），并选择返回状态标签，记录到本地缓存中，方便下次自动使用该参数**

**2. 出问题的请求直接记录，等后端通知你改好后 直接选择刚才的请求用例再次查看结果**


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7515ad82bb7744f78e75354d2c5cccb8~tplv-k3u1fbpfcp-watermark.image?)

**3. 弹出抽屉保存本次请求用例**


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/28156a018f2545dd8626da3a55d2b223~tplv-k3u1fbpfcp-watermark.image?)


### 9. 使用请求用例

**1.开启选择请求用例按钮后，会弹出一个下拉选择框，该下拉框内为该api对应保存的请求用例**


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ed4855c581584d838a0a1aebae310f34~tplv-k3u1fbpfcp-watermark.image?)

**2. 选择刚才保存的用例，选择前参数是空的**


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3a0eb252a6974a5d9542ce1566e450b2~tplv-k3u1fbpfcp-watermark.image?)

**3. 选择完成后自动覆盖参数，会有message提示我就没截图**


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1dc56dd9de0f4a80b80590b575fb8166~tplv-k3u1fbpfcp-watermark.image?)


### 10. 管理请求用例

**1.点击管理请求用例就会进到管理页面主要是可以直接复制json格式的param和body参数，也是删除请求用例的地方**


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/922ed4e52e6d4a588c20e8034c708390~tplv-k3u1fbpfcp-watermark.image?)

**2. 防止太多用例一个一个删太麻烦 我还提供了一个 [ *优雅的* ] 快速清理方案**


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4d6790916ec74962972ed1a16acb9044~tplv-k3u1fbpfcp-watermark.image?)

**3. 没有请求用例时**


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c91a50ba0d794213965b18535bb9c3a5~tplv-k3u1fbpfcp-watermark.image?)


**4. 分享、编辑 md格式离线文档**

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/07257c209beb477f89f73c4b8e58cf34~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9fa931e7b037438e94158f6bda5f6cef~tplv-k3u1fbpfcp-watermark.image?)

### 10. 补一张浅色主题的效果




![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e32277e83974ece8b9d716873985364~tplv-k3u1fbpfcp-watermark.image?)
