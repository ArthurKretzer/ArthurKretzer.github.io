(function () {
  var b = document.getElementById('copy'), pre = document.getElementById('prompt');
  if (!b || !pre) return;
  var label = b.textContent;
  function done(ok) {
    b.textContent = ok ? 'Copiado ✓ agora cole no seu assistente' : 'Texto selecionado: toque em Copiar';
    b.className = ok ? 'ok' : '';
    setTimeout(function () { b.textContent = label; b.className = ''; }, 3500);
  }
  function fallback() {
    var r = document.createRange(); r.selectNodeContents(pre);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    var ok = false; try { ok = document.execCommand('copy'); } catch (e) {}
    done(ok);
  }
  b.addEventListener('click', function () {
    var t = pre.innerText;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(t).then(function () { done(true); }, fallback);
    } else { fallback(); }
  });
})();
