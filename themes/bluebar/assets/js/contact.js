// Contact form: posts to params.contact.formAction (e.g. Formspree) when set,
// otherwise opens the visitor's email app with the message pre-filled.
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = form.querySelector('.form-status');
  var button = form.querySelector('button[type=submit]');

  function setStatus(msg, ok) {
    status.textContent = msg;
    status.className = 'form-status ' + (ok ? 'ok' : 'err');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form._gotcha && form._gotcha.value) return; // bot
    var data = new FormData(form);

    if (!form.getAttribute('action')) {
      var to = form.dataset.email;
      if (!to) { setStatus('No contact email is configured.', false); return; }
      var body = data.get('message') + '\n\n— ' + data.get('name') + ' <' + data.get('email') + '>';
      window.location.href = 'mailto:' + to +
        '?subject=' + encodeURIComponent('[' + data.get('subject') + '] Message from ' + data.get('name')) +
        '&body=' + encodeURIComponent(body);
      setStatus('Your email app should open now. If it doesn’t, write to ' + to + '.', true);
      return;
    }

    button.disabled = true;
    setStatus('Sending…', true);
    fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      .then(function (r) {
        if (!r.ok) throw new Error(r.status);
        form.reset();
        setStatus('Thanks! Your message has been sent. We’ll get back to you soon.', true);
      })
      .catch(function () {
        setStatus('Sorry, something went wrong. Please try again or email us directly.', false);
      })
      .finally(function () { button.disabled = false; });
  });
})();
