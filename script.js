(function () {
  'use strict';

  // ---- Mobile nav toggle: progressive enhancement ----
  var toggles = document.querySelectorAll('[data-nav-toggle]');
  toggles.forEach(function (btn) {
    var targetId = btn.getAttribute('aria-controls');
    var panel = targetId ? document.getElementById(targetId) : null;
    if (!panel) return;

    btn.setAttribute('aria-expanded', 'false');

    btn.addEventListener('click', function () {
      var open = panel.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close the menu when a link inside it is activated (useful on mobile).
    panel.addEventListener('click', function (e) {
      var target = e.target;
      if (target && target.tagName === 'A' && panel.classList.contains('open')) {
        panel.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // ---- Highlight the current page in the nav ----
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav .nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href) return;
    if (href === here || (here === '' && href === 'index.html')) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });
})();
