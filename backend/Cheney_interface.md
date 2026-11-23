# Cheney_interface.md · 接口记录（追加，禁止覆盖）

> 格式：接口路径 | HTTP 方法 | 请求参数（含示例） | 响应格式（含 JSON 示例） | 修改时间

---

## 接口 1

- 接口路径：/api/db-test
- HTTP 方法：POST
- 请求参数：{ "username": "root", "password": "123456" }
- 响应格式：{ "code": 0, "msg": "数据库连接成功", "data": { "username": "root" } }
  失败示例：{ "code": 1, "msg": "数据库连接失败：...", "data": null }
- 修改时间：2026-11-23 13:40

---

## 接口 2

- 接口路径：/api/news
- HTTP 方法：GET
- 请求参数：无
- 响应格式：{ "code": 0, "msg": "新闻列表获取成功", "data": [ { "Cheney_id": 1, "Cheney_title": "...", "Cheney_summary": "...", "Cheney_source": "...", "Cheney_publish_time": "...", "Cheney_image_url": "..." } ] }
- 修改时间：2026-11-23 13:45

---

## 接口 3

- 接口路径：/api/images
- HTTP 方法：GET
- 请求参数：无
- 响应格式：{ "code": 0, "msg": "图文列表获取成功", "data": [ { "Cheney_id": 1, "Cheney_title": "...", "Cheney_image_url": "...", "Cheney_description": "..." } ] }
- 修改时间：2026-11-23 13:48
