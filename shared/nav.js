document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.hamburger');
  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('overlay');
  var closeBtn = document.querySelector('.sidebar-close');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('visible');
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
  }

  if (hamburger) {
    hamburger.addEventListener('click', openSidebar);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeSidebar);
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  var mobileLinks = document.querySelectorAll('.nav-mobile a');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeSidebar);
  });

  var path = window.location.pathname;
  var allNavLinks = document.querySelectorAll('.nav-desktop a, .nav-mobile a');

  allNavLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href) return;

    var isHome = path.endsWith('/') ||
      path.endsWith('index.html') ||
      path.endsWith('/finsl_terms') ||
      (!path.includes('.html') && href === 'index.html');

    if (isHome && (href === 'index.html' || href === './' || href === '/')) {
      link.classList.add('active');
    } else if (!isHome && path.includes(href.replace('./', ''))) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = anchor.getAttribute('href');
      if (targetId.length <= 1) return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
