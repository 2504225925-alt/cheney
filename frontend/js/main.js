/*
 * 姓名：于桐彬 | 学号：24003150115 | 时间：2026-11-23 | 大模型：Hy4
 * 首页 canvas 背景动画：流动粒子连线
 */
(function () {
  var Cheney_canvas = document.getElementById('Cheney_canvas');
  if (!Cheney_canvas) return;
  var Cheney_ctx = Cheney_canvas.getContext('2d');
  var Cheney_particles = [];
  var Cheney_count = 70;

  function Cheney_resize() {
    Cheney_canvas.width = window.innerWidth;
    Cheney_canvas.height = window.innerHeight;
  }
  Cheney_resize();
  window.addEventListener('resize', Cheney_resize);

  function Cheney_Particle() {
    this.x = Math.random() * Cheney_canvas.width;
    this.y = Math.random() * Cheney_canvas.height;
    this.vx = (Math.random() - 0.5) * 0.6;
    this.vy = (Math.random() - 0.5) * 0.6;
    this.r = Math.random() * 2 + 1;
  }
  for (var i = 0; i < Cheney_count; i++) Cheney_particles.push(new Cheney_Particle());

  function Cheney_draw() {
    Cheney_ctx.clearRect(0, 0, Cheney_canvas.width, Cheney_canvas.height);
    var j, k, Cheney_p, Cheney_q, Cheney_dist;
    for (j = 0; j < Cheney_particles.length; j++) {
      Cheney_p = Cheney_particles[j];
      Cheney_p.x += Cheney_p.vx;
      Cheney_p.y += Cheney_p.vy;
      if (Cheney_p.x < 0 || Cheney_p.x > Cheney_canvas.width) Cheney_p.vx *= -1;
      if (Cheney_p.y < 0 || Cheney_p.y > Cheney_canvas.height) Cheney_p.vy *= -1;
      Cheney_ctx.beginPath();
      Cheney_ctx.arc(Cheney_p.x, Cheney_p.y, Cheney_p.r, 0, Math.PI * 2);
      Cheney_ctx.fillStyle = 'rgba(147,197,253,.8)';
      Cheney_ctx.fill();
      for (k = j + 1; k < Cheney_particles.length; k++) {
        Cheney_q = Cheney_particles[k];
        Cheney_dist = Math.hypot(Cheney_p.x - Cheney_q.x, Cheney_p.y - Cheney_q.y);
        if (Cheney_dist < 120) {
          Cheney_ctx.beginPath();
          Cheney_ctx.moveTo(Cheney_p.x, Cheney_p.y);
          Cheney_ctx.lineTo(Cheney_q.x, Cheney_q.y);
          Cheney_ctx.strokeStyle = 'rgba(96,165,250,' + (0.25 * (1 - Cheney_dist / 120)) + ')';
          Cheney_ctx.lineWidth = 1;
          Cheney_ctx.stroke();
        }
      }
    }
    requestAnimationFrame(Cheney_draw);
  }
  Cheney_draw();
})();
