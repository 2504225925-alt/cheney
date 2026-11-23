/*
 * 姓名：于桐彬 | 学号：24003150115 | 时间：2026-11-23 | 大模型：Hy4
 * 图文列表脚本：fetch /api/images 并渲染，数据输出到控制台
 */
(function () {
  var Cheney_list = document.getElementById('Cheney_list');
  if (!Cheney_list) return;

  fetch('/api/images')
    .then(function (resp) { return resp.json(); })
    .then(function (res) {
      console.log('[Cheney] 图文接口返回：', res);
      if (res.code !== 0) {
        console.error('[Cheney] 图文加载失败：', res.msg);
        Cheney_list.innerHTML = '<div class="Cheney_result err">' + res.msg + '</div>';
        return;
      }
      var Cheney_html = '';
      res.data.forEach(function (item) {
        Cheney_html += '<article class="Cheney_item">' +
          '<img src="' + (item.Cheney_image_url || '') + '" alt="" onerror="this.style.display=\'none\'">' +
          '<div class="Cheney_itemBody">' +
            '<h3>' + item.Cheney_title + '</h3>' +
            '<p>' + (item.Cheney_description || '') + '</p>' +
          '</div>' +
        '</article>';
      });
      Cheney_list.innerHTML = Cheney_html;
    })
    .catch(function (e) {
      console.error('[Cheney] 请求异常：', e);
      Cheney_list.innerHTML = '<div class="Cheney_result err">请求异常：' + e.message + '</div>';
    });
})();
