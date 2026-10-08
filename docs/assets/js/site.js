(function () {
  var header = document.querySelector('.site-header');
  var btn = header && header.querySelector('.menu-btn');
  var nav = header && header.querySelector('.site-nav');

  if (btn && nav) {
    header.classList.add('has-menu');
    btn.hidden = false;

    var setOpen = function (open) {
      btn.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    };

    btn.addEventListener('click', function () {
      setOpen(btn.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        btn.focus();
      }
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
  }

  // Browsers give no signal when a mailto link has no app to open it. If the
  // page keeps focus for a moment after the click, assume nothing opened and
  // offer the address instead.
  if (window.HTMLDialogElement) {
    var dialog, addrEl, subjectEl, copyBtn, statusEl;

    var el = function (tag, cls, text) {
      var n = document.createElement(tag);
      if (cls) n.className = cls;
      if (text) n.textContent = text;
      return n;
    };

    var buildDialog = function () {
      dialog = el('dialog', 'mail-dialog');
      dialog.setAttribute('aria-labelledby', 'mail-dialog-title');
      var title = el('h2', null, 'Email us');
      title.id = 'mail-dialog-title';
      var msg = el('p', null, "If your email app didn't open, you can email us at ");
      addrEl = el('span', 'mail-address');
      msg.appendChild(addrEl);
      msg.appendChild(document.createTextNode('.'));
      subjectEl = el('p');
      statusEl = el('span', 'visually-hidden');
      statusEl.setAttribute('role', 'status');
      var actions = el('form', 'actions');
      actions.method = 'dialog';
      copyBtn = el('button', 'btn', 'Copy email address');
      copyBtn.type = 'button';
      var closeBtn = el('button', 'btn btn-line', 'Close');
      actions.appendChild(copyBtn);
      actions.appendChild(closeBtn);
      dialog.append(title, msg, subjectEl, actions, statusEl);
      document.body.appendChild(dialog);

      copyBtn.addEventListener('click', function () {
        var done = function () {
          copyBtn.textContent = 'Copied';
          statusEl.textContent = 'Email address copied';
        };
        if (navigator.clipboard) {
          navigator.clipboard.writeText(addrEl.textContent).then(done, function () {});
        } else {
          var range = document.createRange();
          range.selectNodeContents(addrEl);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          if (document.execCommand('copy')) done();
        }
      });
    };

    var showFallback = function (link) {
      if (!dialog) buildDialog();
      var parts = link.href.slice(7).split('?');
      var subject = new URLSearchParams(parts[1] || '').get('subject');
      addrEl.textContent = decodeURIComponent(parts[0]);
      subjectEl.textContent = subject ? 'Subject: ' + subject : '';
      subjectEl.hidden = !subject;
      copyBtn.textContent = 'Copy email address';
      statusEl.textContent = '';
      dialog.showModal();
    };

    document.addEventListener('click', function (e) {
      var link = e.target.closest && e.target.closest('a[href^="mailto:"]');
      if (!link) return;
      var left = false;
      var onLeave = function () { left = true; };
      window.addEventListener('blur', onLeave);
      document.addEventListener('visibilitychange', onLeave);
      setTimeout(function () {
        window.removeEventListener('blur', onLeave);
        document.removeEventListener('visibilitychange', onLeave);
        if (!left && document.visibilityState === 'visible' && document.hasFocus()) showFallback(link);
      }, 1500);
    });
  }

  // A figure draws when 20% of it is in view, and resets once it is fully
  // off-screen, so it redraws each time it comes back.
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var figs = document.querySelectorAll('svg.construct');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.intersectionRatio >= 0.2) e.target.classList.add('drawn');
      else if (!e.isIntersecting) e.target.classList.remove('drawn');
    });
  }, { threshold: [0, 0.2] });
  figs.forEach(function (f) {
    f.classList.add('pre');
    io.observe(f);
  });
})();
