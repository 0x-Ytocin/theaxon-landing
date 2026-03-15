/* ============================================
   THE AXON — Landing Page Script

   Reads CONFIG from config.js and wires up
   the page content, theme, modal, and effects.
   ============================================ */

(function () {
  'use strict';

  /* ─── Helpers ──────────────────────────────── */
  var $ = function (id) { return document.getElementById(id); };

  /* ─── Initialise ───────────────────────────── */
  function init() {
    applyTheme();
    applyContent();
    buildSocialLinks();
    applyEffects();
    setupModal();
    startVHSClock();
    startHourglass();
    startNeuronField();
  }

  /* ─── Theme (CSS custom properties) ────────── */
  function applyTheme() {
    var s = document.documentElement.style;
    s.setProperty('--color-primary',       CONFIG.colorPrimary);
    s.setProperty('--color-secondary',     CONFIG.colorSecondary);
    s.setProperty('--color-bg',            CONFIG.colorBackground);
    s.setProperty('--color-text',          CONFIG.colorText);
    s.setProperty('--color-dim',           CONFIG.colorDimText);
    s.setProperty('--color-window',        CONFIG.colorWindow);
    s.setProperty('--color-window-border', CONFIG.colorWindowBorder);
    s.setProperty('--color-title-bar',     CONFIG.colorTitleBar);
    document.body.style.background = CONFIG.colorBackground;
  }

  /* ─── Content ──────────────────────────────── */
  function applyContent() {
    // Title
    var title = $('siteTitle');
    title.textContent = CONFIG.siteName;
    title.setAttribute('data-text', CONFIG.siteName);
    document.title = CONFIG.siteName;

    $('siteTagline').textContent = CONFIG.tagline;
    $('siteQuote').textContent   = CONFIG.headerQuote;

    // Blog link
    var blog = $('blogLink');
    blog.href = CONFIG.blogUrl;
    blog.textContent = CONFIG.blogButtonText;

    // Profile
    $('profileName').textContent   = CONFIG.profileName;
    $('profileHandle').textContent = CONFIG.profileHandle;
    $('profileBio').textContent    = CONFIG.profileBio;
    $('avatarFallback').textContent = CONFIG.profileInitials;

    if (CONFIG.profileAvatar) {
      var avatar = $('profileAvatar');
      avatar.style.backgroundImage = 'url(' + CONFIG.profileAvatar + ')';
      avatar.classList.add('has-image');
    }

    // Extras
    $('footerText').textContent   = CONFIG.footerMessage;
  }

  /* ─── Social Links ─────────────────────────── */
  function buildSocialLinks() {
    var container = $('socialLinks');
    CONFIG.socialLinks.forEach(function (link) {
      var a = document.createElement('a');
      a.href      = link.url;
      a.className = 'social-link';
      a.target    = '_blank';
      a.rel       = 'noopener noreferrer';
      a.innerHTML = '<span class="social-icon">' + link.icon + '</span>' + link.name;
      container.appendChild(a);
    });
  }

  /* ─── Effects Toggles ──────────────────────── */
  function applyEffects() {
    if (!CONFIG.enableScanlines) {
      var sl = document.querySelector('.scanlines');
      if (sl) sl.style.display = 'none';
    }
    if (!CONFIG.enableGlitch) {
      $('siteTitle').classList.remove('glitch');
    }
    if (!CONFIG.enableSignalPulse) {
      var sig = document.querySelector('.signal-line');
      if (sig) sig.style.display = 'none';
    }
    if (!CONFIG.enableCRTVignette) {
      document.querySelector('.scanlines').classList.add('no-vignette');
    }
  }

  /* ─── Modal ────────────────────────────────── */
  function setupModal() {
    var modal    = $('modal');
    var openBtn  = $('aboutBtn');
    var closeBtn = $('modalCloseBtn');
    var closeDot = $('modalClose');

    function open() {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    closeDot.addEventListener('click', close);

    modal.addEventListener('click', function (e) {
      if (e.target === modal) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  /* ─── VHS Clock ────────────────────────────── */
  function startVHSClock() {
    function tick() {
      var now  = new Date();
      var h    = now.getHours();
      var m    = String(now.getMinutes()).padStart(2, '0');
      var ampm = h >= 12 ? 'PM' : 'AM';
      $('vhsTime').textContent = ampm + ' ' + (h % 12 || 12) + ':' + m;
    }
    tick();
    setInterval(tick, 10000);
  }

  /* ─── Hourglass Animation ───────────────────── */
  function buildFrame(a, b, c, d, e, f) {
    function ctr(s, w) {
      var gap = w - s.length;
      var l = Math.floor(gap / 2);
      return ' '.repeat(l) + s + ' '.repeat(gap - l);
    }
    return [
      '  \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557  ',
      '  \u2551 ' + ctr(a, 10) + ' \u2551  ',
      '  \u255a\u2550\u2557 ' + ctr(b, 6) + ' \u2554\u2550\u255d  ',
      '    \u2551  ' + ctr(c, 4) + '  \u2551    ',
      '    \u2551   ' + ctr(d, 2) + '   \u2551    ',
      '  \u2554\u2550\u255d ' + ctr(e, 6) + ' \u255a\u2550\u2557  ',
      '  \u2551 ' + ctr(f, 10) + ' \u2551  ',
      '  \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d  '
    ].join('\n');
  }

  var HGLASS = [
    buildFrame('\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593','\u2593\u2593\u2593\u2593\u2593\u2593','\u2593\u2593\u2593\u2593','\u2593\u2593','',''),
    buildFrame('\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593','\u2593\u2593\u2593\u2593\u2593\u2593','\u2593\u2593\u2593\u2593','\u2591\u2591','','\u2593\u2593'),
    buildFrame('\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593','\u2593\u2593\u2593\u2593\u2593\u2593','','\u2591\u2591','\u2593\u2593','\u2593\u2593\u2593\u2593'),
    buildFrame('\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593','','','\u2591\u2591','\u2593\u2593\u2593\u2593','\u2593\u2593\u2593\u2593\u2593\u2593'),
    buildFrame('\u2593\u2593\u2593\u2593\u2593\u2593','','','\u2591\u2591','\u2593\u2593\u2593\u2593\u2593\u2593','\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593'),
    buildFrame('','','','\u2591\u2591','\u2593\u2593\u2593\u2593\u2593\u2593','\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593'),
    buildFrame('','','','','\u2593\u2593\u2593\u2593\u2593\u2593','\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593')
  ];

  function startHourglass() {
    var el = $('hourglassArt');
    if (!el) return;
    var i = 0;
    function tick() {
      el.textContent = HGLASS[i];
      var isLast = (i === HGLASS.length - 1);
      i = isLast ? 0 : i + 1;
      setTimeout(tick, isLast ? 2000 : 700);
    }
    tick();
  }

  /* ─── Neuron Background (Brian's Brain) ────── */
  function startNeuronField() {
    if (!CONFIG.enableNeuronBg) return;
    if (window.innerWidth < 900) return;

    var canvas = $('neuronCanvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var cellSize = 10;
    var cols, rows, grid;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.floor(canvas.width / cellSize);
      rows = Math.floor(canvas.height / cellSize);
      grid = new Uint8Array(rows * cols);
      seed();
    }

    function seed() {
      for (var k = 0; k < grid.length; k++) {
        grid[k] = Math.random() < 0.03 ? 1 : 0;
      }
    }

    function step() {
      var next = new Uint8Array(rows * cols);
      var alive = false;
      for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
          var idx = r * cols + c;
          var state = grid[idx];
          if (state === 0) {
            var firing = 0;
            for (var dr = -1; dr <= 1; dr++) {
              for (var dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;
                var nr = (r + dr + rows) % rows;
                var nc = (c + dc + cols) % cols;
                if (grid[nr * cols + nc] === 1) firing++;
              }
            }
            next[idx] = firing === 2 ? 1 : 0;
          } else if (state === 1) {
            next[idx] = 2;
          } else {
            next[idx] = 0;
          }
          if (next[idx] !== 0) alive = true;
        }
      }
      grid = next;
      if (!alive) seed();
      if (Math.random() < 0.008) {
        for (var j = 0; j < 4; j++) {
          grid[Math.floor(Math.random() * grid.length)] = 1;
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
          var state = grid[r * cols + c];
          if (state === 0) continue;
          var x = c * cellSize;
          var y = r * cellSize;
          if (state === 1) {
            ctx.fillStyle = CONFIG.colorPrimary + 'dd';
            ctx.shadowColor = CONFIG.colorPrimary;
            ctx.shadowBlur = 6;
            ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);
          } else {
            ctx.fillStyle = CONFIG.colorSecondary + '66';
            ctx.shadowColor = CONFIG.colorSecondary;
            ctx.shadowBlur = 3;
            ctx.fillRect(x + 2, y + 2, cellSize - 4, cellSize - 4);
          }
        }
      }
      ctx.shadowBlur = 0;
    }

    resize();
    window.addEventListener('resize', resize);

    var lastTime = 0;
    function animate(ts) {
      requestAnimationFrame(animate);
      if (ts - lastTime < 150) return;
      lastTime = ts;
      step();
      draw();
    }
    requestAnimationFrame(animate);
  }

  /* ─── Boot ─────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', init);
})();
