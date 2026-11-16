(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      toggle.textContent = open ? '✕' : '☰';
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
      }
    });
  }
  // Prefill role/service interest from ?role= or ?interest= query string
  var params = new URLSearchParams(window.location.search);
  var role = params.get('role');
  var sel = document.getElementById('type');
  if (role && sel) { for (var i = 0; i < sel.options.length; i++) { if (sel.options[i].value === role) sel.selectedIndex = i; } }
})();
