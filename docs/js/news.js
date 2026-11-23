/*
 * 姓名：于桐彬 | 学号：24003150115 | 时间：2026-11-23 | 大模型：Hy4
 * 新闻列表脚本：优先 fetch /api/news；接口不可用（如 GitHub Pages 静态环境）
 * 时自动降级使用内置静态数据渲染，保证页面始终有内容
 */
(function () {
  var Cheney_list = document.getElementById('Cheney_list');
  if (!Cheney_list) return;

  // 内置静态数据（与 Cheney_news 表测试数据一致，用于无后端环境）
  var Cheney_staticNews = [
    { Cheney_title: '国产大模型参数规模突破万亿，推理效率提升三倍', Cheney_summary: '新一代国产大模型在保持精度的同时大幅降低推理成本，已在多行业落地。', Cheney_source: '科技日报', Cheney_publish_time: '2026-11-18 09:30:00', Cheney_image_url: 'https://picsum.photos/seed/news1/400/260' },
    { Cheney_title: '开源操作系统内核发布长期支持版本', Cheney_summary: '该 LTS 版本将提供长达 6 年的安全更新与企业级支持。', Cheney_source: '开源中国', Cheney_publish_time: '2026-11-17 14:20:00', Cheney_image_url: 'https://picsum.photos/seed/news2/400/260' },
    { Cheney_title: '国内科研团队实现量子计算纠错新突破', Cheney_summary: '表面码纠错阈值获得显著提升，为实用化量子计算机奠定基础。', Cheney_source: '中国科学报', Cheney_publish_time: '2026-11-16 10:05:00', Cheney_image_url: 'https://picsum.photos/seed/news3/400/260' },
    { Cheney_title: 'AI 辅助诊断系统在三甲医院完成临床验证', Cheney_summary: '系统对常见疾病的影像识别准确率达到 96.8%。', Cheney_source: '健康报', Cheney_publish_time: '2026-11-15 08:45:00', Cheney_image_url: 'https://picsum.photos/seed/news4/400/260' },
    { Cheney_title: '新一代动力电池能量密度达到 450Wh/kg', Cheney_summary: '续航里程提升 40%，同时保持良好的安全性能。', Cheney_source: '电池网', Cheney_publish_time: '2026-11-14 16:10:00', Cheney_image_url: 'https://picsum.photos/seed/news5/400/260' },
    { Cheney_title: '低轨卫星互联网完成首批组网发射', Cheney_summary: '首批 12 颗卫星顺利入轨，验证了星间链路通信技术。', Cheney_source: '航天新闻', Cheney_publish_time: '2026-11-13 11:00:00', Cheney_image_url: 'https://picsum.photos/seed/news6/400/260' },
    { Cheney_title: '智能驾驶域控制器算力突破 1000TOPS', Cheney_summary: '新一代域控制器支持多路高清摄像头实时处理。', Cheney_source: '汽车电子', Cheney_publish_time: '2026-11-12 15:30:00', Cheney_image_url: 'https://picsum.photos/seed/news7/400/260' },
    { Cheney_title: '工业软件国产化替代进入加速阶段', Cheney_summary: 'CAD/CAE 等核心工业软件国产化率稳步提升。', Cheney_source: '工业互联网', Cheney_publish_time: '2026-11-11 09:15:00', Cheney_image_url: 'https://picsum.photos/seed/news8/400/260' }
  ];

  function Cheney_render(rows, isStatic) {
    var Cheney_html = '';
    if (isStatic) {
      Cheney_html += '<div class="Cheney_result ok" style="grid-column:1/-1">当前为静态演示数据（未连接后端接口）</div>';
    }
    rows.forEach(function (item) {
      Cheney_html += '<article class="Cheney_item">' +
        '<img src="' + (item.Cheney_image_url || '') + '" alt="" loading="lazy" onerror="this.style.display=\'none\'">' +
        '<div class="Cheney_itemBody">' +
          '<h3>' + item.Cheney_title + '</h3>' +
          '<p>' + (item.Cheney_summary || '') + '</p>' +
          '<div class="Cheney_meta">来源：' + (item.Cheney_source || '-') +
          ' ｜ 发布时间：' + (item.Cheney_publish_time || '-') + '</div>' +
        '</div>' +
      '</article>';
    });
    Cheney_list.innerHTML = Cheney_html;
  }

  fetch('/api/news')
    .then(function (resp) {
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      return resp.json();
    })
    .then(function (res) {
      if (res.code === 0 && res.data && res.data.length) {
        console.log('[Cheney] 新闻接口返回：', res);
        Cheney_render(res.data, false);
      } else {
        throw new Error(res.msg || '接口无数据');
      }
    })
    .catch(function (e) {
      console.warn('[Cheney] 接口不可用，降级为静态数据：', e.message);
      Cheney_render(Cheney_staticNews, true);
    });
})();
