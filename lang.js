// Shows one language: #ru / #kk / #en in the address, else the browser's.
(function () {
  var langs = ['ru', 'kk', 'en'];
  function pick() {
    var hash = location.hash.slice(1);
    if (langs.indexOf(hash) >= 0) return hash;
    var nav = (navigator.language || 'ru').slice(0, 2);
    return langs.indexOf(nav) >= 0 ? nav : 'ru';
  }
  function show() {
    var lang = pick();
    document.documentElement.lang = lang;
    document.querySelectorAll('section[data-lang]').forEach(function (s) {
      s.hidden = s.dataset.lang !== lang;
    });
    document.querySelectorAll('.langs a').forEach(function (a) {
      a.classList.toggle('on', a.dataset.lang === lang);
    });
  }
  window.addEventListener('hashchange', show);
  show();
})();
