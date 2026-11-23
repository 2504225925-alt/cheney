/*
 * 姓名：于桐彬 | 学号：24003150115 | 时间：2026-11-23 | 大模型：Hy4
 * 数据库测试页脚本：fetch 调用 /api/db-test，结果与错误输出到控制台
 */
(function () {
  var Cheney_btn = document.getElementById('Cheney_btn');
  var Cheney_result = document.getElementById('Cheney_result');
  if (!Cheney_btn) return;

  Cheney_btn.addEventListener('click', function () {
    var Cheney_user = document.getElementById('Cheney_user').value;
    var Cheney_pass = document.getElementById('Cheney_pass').value;
    Cheney_result.innerHTML = '<p class="Cheney_loading">正在连接...</p>';

    fetch('/api/db-test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: Cheney_user, password: Cheney_pass })
    })
    .then(function (resp) { return resp.json(); })
    .then(function (res) {
      console.log('[Cheney] 接口返回：', res);
      if (res.code === 0) {
        Cheney_result.innerHTML = '<div class="Cheney_result ok">✅ ' + res.msg + '（用户：' + res.data.username + '）</div>';
      } else {
        console.error('[Cheney] 连接失败：', res.msg);
        Cheney_result.innerHTML = '<div class="Cheney_result err">❌ ' + res.msg + '</div>';
      }
      Cheney_result.innerHTML += '<pre class="Cheney_json">' + JSON.stringify(res, null, 2) + '</pre>';
    })
    .catch(function (e) {
      console.error('[Cheney] 请求异常：', e);
      Cheney_result.innerHTML = '<div class="Cheney_result err">请求异常：' + e.message + '</div>';
    });
  });
})();
