/**
 * 姓名：于桐彬 | 学号：24003150115 | 时间：2026-11-23 | 大模型：Hy4
 * 项目入口：Express 后端，端口 8325，RESTful + MVC，托管 frontend/
 */
const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRouter = require('./routes/api');
const { Cheney_initDatabase } = require('./models/dbModel');

const app = express();
const PORT = 8325;

app.use(cors());                       // 支持所有跨域访问
app.use(express.json());               // 解析 JSON 请求体
app.use(express.urlencoded({ extended: true }));

// 静态托管前端目录
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// 统一接口前缀 /api/
app.use('/api', apiRouter);

// 启动时初始化数据库（建库 / 建表 / 插入测试数据）
Cheney_initDatabase().then(function () {
  console.log('[Cheney] 数据库初始化完成');
}).catch(function (e) {
  console.error('[Cheney] 数据库初始化失败：', e.message);
  console.error('[Cheney] 请检查 backend/.env 中的数据库账号密码是否正确');
});

app.listen(PORT, function () {
  console.log('[Cheney] 服务已启动：http://localhost:' + PORT);
});
