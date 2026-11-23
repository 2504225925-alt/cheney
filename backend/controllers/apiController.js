/**
 * 姓名：于桐彬 | 学号：24003150115 | 时间：2026-11-23 | 大模型：Hy4
 * 控制器：处理各接口业务逻辑，统一返回 { code, msg, data }
 */
const { Cheney_testConnection } = require('../config/db');
const { Cheney_query } = require('../models/dbModel');

// 统一响应辅助
function Cheney_ok(res, data, msg) {
  return res.json({ code: 0, msg: msg || 'success', data: data });
}
function Cheney_fail(res, msg, code) {
  return res.json({ code: code || 1, msg: msg, data: null });
}

// 测试数据库连接（支持传入自定义账号密码）
async function Cheney_testDb(req, res) {
  const Cheney_user = req.body && req.body.username ? req.body.username : 'root';
  const Cheney_password = req.body && req.body.password !== undefined ? req.body.password : 'root';
  const mysql = require('mysql2/promise');
  let Cheney_conn;
  try {
    Cheney_conn = await mysql.createConnection({
      host: '127.0.0.1', port: 3306,
      user: Cheney_user, password: Cheney_password
    });
    await Cheney_conn.query('SELECT 1 AS Cheney_ok');
    return Cheney_ok(res, { username: Cheney_user }, '数据库连接成功');
  } catch (e) {
    return Cheney_fail(res, '数据库连接失败：' + e.message);
  } finally {
    if (Cheney_conn) try { await Cheney_conn.end(); } catch (e) {}
  }
}

// 科技新闻列表
async function Cheney_getNews(req, res) {
  try {
    const rows = await Cheney_query('SELECT * FROM Cheney_news ORDER BY Cheney_publish_time DESC');
    return Cheney_ok(res, rows, '新闻列表获取成功');
  } catch (e) {
    console.error('[Cheney_getNews]', e);
    return Cheney_fail(res, '新闻列表获取失败：' + e.message);
  }
}

// 图文列表
async function Cheney_getImages(req, res) {
  try {
    const rows = await Cheney_query('SELECT * FROM Cheney_image ORDER BY Cheney_id DESC');
    return Cheney_ok(res, rows, '图文列表获取成功');
  } catch (e) {
    console.error('[Cheney_getImages]', e);
    return Cheney_fail(res, '图文列表获取失败：' + e.message);
  }
}

module.exports = {
  Cheney_testDb,
  Cheney_getNews,
  Cheney_getImages
};
