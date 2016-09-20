### 仿 haoduoshipin.com

#### 具体部署步骤

- npm run build 生成bundle.js
- 将打包的项目（index.html,dist目录）放到public下
- 创建server.js，配置简单的路由服务，主要实现的就是get任何路径，都返回index.html，这样也就可以用browserHistory了，哈哈
- node server.js 启动express服务，实际显示的任然是index.html，bundle.js
- 收工完成，cool，不需要启动webpack-dev-server
