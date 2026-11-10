// Refreshes the Live Activity feed from the GitHub API in the visitor's browser.
// Cached in sessionStorage for 10 minutes to stay well within GitHub's
// unauthenticated rate limit (60 requests/hour per IP).
(function () {
  var box = document.querySelector('.live-activity');
  if (!box || !window.fetch) return;
  var repos = (box.dataset.repos || '').split(',').filter(Boolean);
  var limit = +box.dataset.limit || 8;
  var perRepo = +box.dataset.perRepo || 5;
  var list = box.querySelector('.activity-feed');
  var KEY = 'live-activity:' + repos.join(',');
  var TTL = 10 * 60 * 1000;

  function relTime(iso) {
    var s = (Date.now() - new Date(iso)) / 1000;
    var units = [['year', 31536000], ['month', 2592000], ['week', 604800], ['day', 86400], ['hour', 3600], ['minute', 60]];
    for (var i = 0; i < units.length; i++) {
      var n = Math.floor(s / units[i][1]);
      if (n >= 1) return n + ' ' + units[i][0] + (n > 1 ? 's' : '') + ' ago';
    }
    return 'just now';
  }
  function el(tag, cls, text, href) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    if (href) e.href = href;
    return e;
  }
  function render(items) {
    if (!items.length) return;
    list.replaceChildren.apply(list, items.slice(0, limit).map(function (c) {
      var li = el('li');
      li.appendChild(el('a', 'activity-repo', c.repo, 'https://github.com/' + c.full));
      var msg = c.msg.length > 90 ? c.msg.slice(0, 89) + '…' : c.msg;
      li.appendChild(el('a', 'activity-msg', msg, c.url));
      var meta = el('span', 'activity-meta', c.who + ' · ');
      var t = el('time', null, relTime(c.date));
      t.dateTime = c.date;
      t.title = new Date(c.date).toLocaleString();
      meta.appendChild(t);
      li.appendChild(meta);
      return li;
    }));
  }
  // Show relative times on the build-time list right away.
  list.querySelectorAll('time[datetime]').forEach(function (t) {
    t.title = t.textContent; t.textContent = relTime(t.dateTime);
  });

  try {
    var cached = JSON.parse(sessionStorage.getItem(KEY) || 'null');
    if (cached && Date.now() - cached.at < TTL) { render(cached.items); return; }
  } catch (e) {}

  Promise.all(repos.map(function (full) {
    return fetch('https://api.github.com/repos/' + full + '/commits?per_page=' + perRepo, {
      headers: { Accept: 'application/vnd.github+json' }
    }).then(function (r) { return r.ok ? r.json() : []; })
      .then(function (data) {
        return data.map(function (c) {
          return {
            full: full,
            repo: full.split('/')[1],
            msg: c.commit.message.split('\n')[0],
            url: c.html_url,
            who: c.author ? c.author.login : c.commit.author.name,
            date: c.commit.author.date
          };
        });
      }).catch(function () { return []; });
  })).then(function (groups) {
    var items = [].concat.apply([], groups).sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    if (!items.length) return; // keep the build-time list
    render(items);
    try { sessionStorage.setItem(KEY, JSON.stringify({ at: Date.now(), items: items.slice(0, limit) })); } catch (e) {}
  });
})();
