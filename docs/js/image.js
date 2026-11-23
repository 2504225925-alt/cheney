/*
 * 姓名：于桐彬 | 学号：24003150115 | 时间：2026-11-23 | 大模型：Hy4
 * 图文列表脚本：优先 fetch /api/images；接口不可用（如 GitHub Pages 静态环境）
 * 时自动降级使用内置静态数据渲染，保证页面始终有内容
 */
(function () {
  var Cheney_list = document.getElementById('Cheney_list');
  if (!Cheney_list) return;

  // 内置静态数据（与 Cheney_image 表测试数据一致，用于无后端环境）
  var Cheney_staticImages = [
    { Cheney_title: '水木清华·校园晨光', Cheney_image_url: 'https://picsum.photos/seed/img1/600/400', Cheney_description: '清晨的校园宁静而充满生机，阳光洒在教学楼上。' },
    { Cheney_title: '夏日海岸·碧海蓝天', Cheney_image_url: 'https://picsum.photos/seed/img2/600/400', Cheney_description: '海天一色，浪花轻拍沙滩，是放松身心的好去处。' },
    { Cheney_title: '山间云海·日出东方', Cheney_image_url: 'https://picsum.photos/seed/img3/600/400', Cheney_description: '云雾缭绕的山峦间，一轮红日冉冉升起。' },
    { Cheney_title: '古都夜色·灯火阑珊', Cheney_image_url: 'https://picsum.photos/seed/img4/600/400', Cheney_description: '古城墙在灯光映衬下更显厚重与沧桑。' },
    { Cheney_title: '春日花海·万物生长', Cheney_image_url: 'https://picsum.photos/seed/img5/600/400', Cheney_description: '各色花卉竞相开放，构成一幅绚丽的春日画卷。' },
    { Cheney_title: '科技展厅·未来之光', Cheney_image_url: 'https://picsum.photos/seed/img6/600/400', Cheney_description: '互动展项让参观者感受到科技的魅力。' },
    { Cheney_title: '古镇小桥·流水人家', Cheney_image_url: 'https://picsum.photos/seed/img7/600/400', Cheney_description: '青石板路与石桥构成了江南水乡的独特韵味。' },
    { Cheney_title: '雪山之巅·纯净世界', Cheney_image_url: 'https://picsum.photos/seed/img8/600/400', Cheney_description: '皑皑白雪覆盖的山峰在阳光下熠熠生辉。' }
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
          '<p>' + (item.Cheney_description || '') + '</p>' +
        '</div>' +
      '</article>';
    });
    Cheney_list.innerHTML = Cheney_html;
  }

  fetch('/api/images')
    .then(function (resp) {
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      return resp.json();
    })
    .then(function (res) {
      if (res.code === 0 && res.data && res.data.length) {
        console.log('[Cheney] 图文接口返回：', res);
        Cheney_render(res.data, false);
      } else {
        throw new Error(res.msg || '接口无数据');
      }
    })
    .catch(function (e) {
      console.warn('[Cheney] 接口不可用，降级为静态数据：', e.message);
      Cheney_render(Cheney_staticImages, true);
    });
})();
