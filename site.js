function playHeroVideo() {
  var wrap = document.getElementById('videoPlayer');
  if (!wrap || wrap.querySelector('iframe')) return;
  wrap.innerHTML = '<iframe src="https://player.vimeo.com/video/1136269886?autoplay=1&title=0&byline=0&portrait=0&color=7A9E8E" allow="autoplay; fullscreen; picture-in-picture" title="Jeffrey Zeth LCSW — Introduction video"></iframe>';
  wrap.style.cursor = 'default';
}

function toggleMenu() {
  var mob = document.getElementById('mob');
  var hbg = document.getElementById('hbg');
  var open = mob.classList.toggle('open');
  hbg.classList.toggle('open');
  hbg.setAttribute('aria-expanded', open ? 'true' : 'false');
}

function initReveal() {
  var els = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold:0.08});
  els.forEach(function(el) { io.observe(el); });
}

document.addEventListener('DOMContentLoaded', function() { setTimeout(initReveal, 150); });
