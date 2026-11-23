# 全栈项目：科技资讯图文平台

姓名：于桐彬 ｜ 学号：24003150115 ｜ 项目类别：模仿

## 技术栈
- 前端：原生 HTML / CSS / JavaScript（无第三方库）
- 后端：Node.js + Express（RESTful + MVC），端口 8325，接口前缀 /api/
- 数据库：MySQL 8.0，凭据存于 backend/.env（不入库）

## 运行方式
1. 双击根目录「启动项目.bat」，或在 backend/ 目录执行 `node app.js`
2. 浏览器访问 http://localhost:8325

## 目录结构
- frontend/：前端页面（index.html 为导航首页）、css/、js/、fonts/、images/
- backend/：app.js 入口、config/ 数据库配置、models/ 数据层、controllers/ 控制器、routes/ 路由
- AGENTS.md：项目开发规则（全栈开发提示词）
