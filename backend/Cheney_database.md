# Cheney_database.md · 数据库重建记录（追加，禁止覆盖）

> 按执行顺序记录建表、改表、INSERT 的 SQL；仅凭本文件即可在新机器完整重建数据库。

---

## 1. 创建数据库

```sql
CREATE DATABASE IF NOT EXISTS `cheney_fullstack`
  DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `cheney_fullstack`;
```

## 2. 创建科技新闻表 Cheney_news

```sql
CREATE TABLE IF NOT EXISTS Cheney_news (
  Cheney_id INT AUTO_INCREMENT PRIMARY KEY,
  Cheney_title VARCHAR(200) NOT NULL,
  Cheney_summary VARCHAR(500),
  Cheney_source VARCHAR(100),
  Cheney_publish_time DATETIME,
  Cheney_image_url VARCHAR(500),
  Cheney_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

## 3. 插入科技新闻测试数据（8 条）

```sql
INSERT INTO Cheney_news (Cheney_title, Cheney_summary, Cheney_source, Cheney_publish_time, Cheney_image_url) VALUES
('国产大模型参数规模突破万亿，推理效率提升三倍','新一代国产大模型在保持精度的同时大幅降低推理成本。','科技日报','2026-11-18 09:30:00','https://picsum.photos/seed/news1/400/260'),
('开源操作系统内核发布长期支持版本','该 LTS 版本将提供长达 6 年的安全更新与企业级支持。','开源中国','2026-11-17 14:20:00','https://picsum.photos/seed/news2/400/260'),
('国内科研团队实现量子计算纠错新突破','表面码纠错阈值获得显著提升，为实用化量子计算机奠定基础。','中国科学报','2026-11-16 10:05:00','https://picsum.photos/seed/news3/400/260'),
('AI 辅助诊断系统在三甲医院完成临床验证','系统对常见疾病的影像识别准确率达到 96.8%。','健康报','2026-11-15 08:45:00','https://picsum.photos/seed/news4/400/260'),
('新一代动力电池能量密度达到 450Wh/kg','续航里程提升 40%，同时保持良好的安全性能。','电池网','2026-11-14 16:10:00','https://picsum.photos/seed/news5/400/260'),
('低轨卫星互联网完成首批组网发射','首批 12 颗卫星顺利入轨，验证了星间链路通信技术。','航天新闻','2026-11-13 11:00:00','https://picsum.photos/seed/news6/400/260'),
('智能驾驶域控制器算力突破 1000TOPS','新一代域控制器支持多路高清摄像头实时处理。','汽车电子','2026-11-12 15:30:00','https://picsum.photos/seed/news7/400/260'),
('工业软件国产化替代进入加速阶段','CAD/CAE 等核心工业软件国产化率稳步提升。','工业互联网','2026-11-11 09:15:00','https://picsum.photos/seed/news8/400/260');
```

## 4. 创建图文表 Cheney_image

```sql
CREATE TABLE IF NOT EXISTS Cheney_image (
  Cheney_id INT AUTO_INCREMENT PRIMARY KEY,
  Cheney_title VARCHAR(200) NOT NULL,
  Cheney_image_url VARCHAR(500),
  Cheney_description VARCHAR(500),
  Cheney_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

## 5. 插入图文测试数据（8 条）

```sql
INSERT INTO Cheney_image (Cheney_title, Cheney_image_url, Cheney_description) VALUES
('水木清华·校园晨光','https://picsum.photos/seed/img1/600/400','清晨的校园宁静而充满生机。'),
('夏日海岸·碧海蓝天','https://picsum.photos/seed/img2/600/400','海天一色，是放松身心的好去处。'),
('山间云海·日出东方','https://picsum.photos/seed/img3/600/400','云雾缭绕的山峦间红日冉冉升起。'),
('古都夜色·灯火阑珊','https://picsum.photos/seed/img4/600/400','古城墙在灯光映衬下更显厚重。'),
('春日花海·万物生长','https://picsum.photos/seed/img5/600/400','各色花卉竞相开放构成绚丽画卷。'),
('科技展厅·未来之光','https://picsum.photos/seed/img6/600/400','互动展项让参观者感受科技魅力。'),
('古镇小桥·流水人家','https://picsum.photos/seed/img7/600/400','青石板路与石桥构成江南水乡韵味。'),
('雪山之巅·纯净世界','https://picsum.photos/seed/img8/600/400','皑皑白雪覆盖的山峰熠熠生辉。');
```
