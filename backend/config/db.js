/**
 * 姓名：于桐彬 | 学号：24003150115 | 时间：2026-11-23 | 大模型：Hy4
 * 数据库连接池配置（凭据仅从 .env 读取，不写入代码）
 */
const mysql = require('mysql2/promise');
const path = require('path');
const fs = require('fs');

// 手动解析 .env（避免额外依赖）
const envPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf8').split(/\r?\n/).forEach(function (line) {
    var trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    var pos = trimmed.indexOf('=');
    if (pos > 0) {
      var key = trimmed.slice(0, pos).trim();
      var val = trimmed.slice(pos + 1).trim();
      if (!process.env[key]) process.env[key] = val;
    }
  });
}

const Cheney_pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '123456',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function Cheney_testConnection() {
  try {
    const conn = await Cheney_pool.getConnection();
    await conn.query('SELECT 1 AS Cheney_ok');
    conn.release();
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = { Cheney_pool, Cheney_testConnection };
