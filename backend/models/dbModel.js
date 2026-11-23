/**
 * 姓名：于桐彬 | 学号：24003150115 | 时间：2026-11-23 | 大模型：Hy4
 * 数据库初始化模型：负责建库、建表、插入测试数据
 * 所有建表/INSERT SQL 同步追加到 Cheney_database.md
 */
const { Cheney_pool } = require('../config/db');

const Cheney_databaseName = 'cheney_fullstack';

async function Cheney_initDatabase() {
  const conn = await Cheney_pool.getConnection();
  try {
    await conn.query('CREATE DATABASE IF NOT EXISTS `' + Cheney_databaseName + '` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci');
    await conn.query('USE `' + Cheney_databaseName + '`');

    // 科技新闻表
    await conn.query(`
      CREATE TABLE IF NOT EXISTS Cheney_news (
        Cheney_id INT AUTO_INCREMENT PRIMARY KEY,
        Cheney_title VARCHAR(200) NOT NULL,
        Cheney_summary VARCHAR(500),
        Cheney_source VARCHAR(100),
        Cheney_publish_time DATETIME,
        Cheney_image_url VARCHAR(500),
        Cheney_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    `);

    // 图文列表表
    await conn.query(`
      CREATE TABLE IF NOT EXISTS Cheney_image (
        Cheney_id INT AUTO_INCREMENT PRIMARY KEY,
        Cheney_title VARCHAR(200) NOT NULL,
        Cheney_image_url VARCHAR(500),
        Cheney_description VARCHAR(500),
        Cheney_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    `);

    // 科技新闻测试数据（至少 8 条）
    const Cheney_newsCount = await conn.query('SELECT COUNT(*) AS n FROM Cheney_news');
    if (Cheney_newsCount[0][0].n === 0) {
      const Cheney_newsRows = [
        ['国产大模型参数规模突破万亿，推理效率提升三倍', '新一代国产大模型在保持精度的同时大幅降低推理成本，已在多行业落地。', '科技日报', '2026-11-18 09:30:00', 'https://picsum.photos/seed/news1/400/260'],
        '开源操作系统内核发布长期支持版本',
        '国内科研团队实现量子计算纠错新突破',
        'AI 辅助诊断系统在三甲医院完成临床验证',
        '新一代动力电池能量密度达到 450Wh/kg',
        '低轨卫星互联网完成首批组网发射',
        '智能驾驶域控制器算力突破 1000TOPS',
        '工业软件国产化替代进入加速阶段'
      ];
      // 补齐为完整二维数组
      Cheney_newsRows[1] = ['开源操作系统内核发布长期支持版本', '该 LTS 版本将提供长达 6 年的安全更新与企业级支持。', '开源中国', '2026-11-17 14:20:00', 'https://picsum.photos/seed/news2/400/260'];
      Cheney_newsRows[2] = ['国内科研团队实现量子计算纠错新突破', '表面码纠错阈值获得显著提升，为实用化量子计算机奠定基础。', '中国科学报', '2026-11-16 10:05:00', 'https://picsum.photos/seed/news3/400/260'];
      Cheney_newsRows[3] = ['AI 辅助诊断系统在三甲医院完成临床验证', '系统对常见疾病的影像识别准确率达到 96.8%。', '健康报', '2026-11-15 08:45:00', 'https://picsum.photos/seed/news4/400/260'];
      Cheney_newsRows[4] = ['新一代动力电池能量密度达到 450Wh/kg', '续航里程提升 40%，同时保持了良好的安全性能。', '电池网', '2026-11-14 16:10:00', 'https://picsum.photos/seed/news5/400/260'];
      Cheney_newsRows[5] = ['低轨卫星互联网完成首批组网发射', '首批 12 颗卫星顺利入轨，验证了星间链路通信技术。', '航天新闻', '2026-11-13 11:00:00', 'https://picsum.photos/seed/news6/400/260'];
      Cheney_newsRows[6] = ['智能驾驶域控制器算力突破 1000TOPS', '新一代域控制器支持多路高清摄像头实时处理。', '汽车电子', '2026-11-12 15:30:00', 'https://picsum.photos/seed/news7/400/260'];
      Cheney_newsRows[7] = ['工业软件国产化替代进入加速阶段', 'CAD/CAE 等核心工业软件国产化率稳步提升。', '工业互联网', '2026-11-11 09:15:00', 'https://picsum.photos/seed/news8/400/260'];
      const Cheney_sql = 'INSERT INTO Cheney_news (Cheney_title, Cheney_summary, Cheney_source, Cheney_publish_time, Cheney_image_url) VALUES ?';
      await conn.query(Cheney_sql, [Cheney_newsRows]);
    }

    // 图文列表测试数据（至少 8 条）
    const Cheney_imageCount = await conn.query('SELECT COUNT(*) AS n FROM Cheney_image');
    if (Cheney_imageCount[0][0].n === 0) {
      const Cheney_imageRows = [
        ['水木清华·校园晨光', 'https://picsum.photos/seed/img1/600/400', '清晨的校园宁静而充满生机，阳光洒在教学楼上。'],
        ['夏日海岸·碧海蓝天', 'https://picsum.photos/seed/img2/600/400', '海天一色，浪花轻拍沙滩，是放松身心的好去处。'],
        ['山间云海·日出东方', 'https://picsum.photos/seed/img3/600/400', '云雾缭绕的山峦间，一轮红日冉冉升起。'],
        ['古都夜色·灯火阑珊', 'https://picsum.photos/seed/img4/600/400', '古城墙在灯光映衬下更显厚重与沧桑。'],
        ['春日花海·万物生长', 'https://picsum.photos/seed/img5/600/400', '各色花卉竞相开放，构成一幅绚丽的春日画卷。'],
        ['科技展厅·未来之光', 'https://picsum.photos/seed/img6/600/400', '互动展项让参观者感受到科技的魅力。'],
        ['古镇小桥·流水人家', 'https://picsum.photos/seed/img7/600/400', '青石板路与石桥构成了江南水乡的独特韵味。'],
        ['雪山之巅·纯净世界', 'https://picsum.photos/seed/img8/600/400', '皑皑白雪覆盖的山峰在阳光下熠熠生辉。']
      ];
      const Cheney_sql = 'INSERT INTO Cheney_image (Cheney_title, Cheney_image_url, Cheney_description) VALUES ?';
      await conn.query(Cheney_sql, [Cheney_imageRows]);
    }

    return true;
  } finally {
    conn.release();
  }
}

async function Cheney_query(sql, params) {
  const conn = await Cheney_pool.getConnection();
  try {
    await conn.query('USE `' + Cheney_databaseName + '`');
    const result = await conn.query(sql, params || []);
    return result[0];
  } finally {
    conn.release();
  }
}

module.exports = { Cheney_initDatabase, Cheney_query, Cheney_databaseName };
