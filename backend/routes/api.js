/**
 * 姓名：于桐彬 | 学号：24003150115 | 时间：2026-11-23 | 大模型：Hy4
 * 路由：所有接口以 /api/ 为前缀（在 app.js 中统一挂载）
 */
const express = require('express');
const router = express.Router();
const c = require('../controllers/apiController');

router.post('/db-test', c.Cheney_testDb);
router.get('/news', c.Cheney_getNews);
router.get('/images', c.Cheney_getImages);

module.exports = router;
