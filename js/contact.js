/**
 * Kacper Kulesza - Psycholog | Contact Form Handler
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const sendBtn = document.getElementById('contact-send-btn');
  const status = document.getElementById('form-status');

  if (!form || !sendBtn) return;

  const fields = {
    name: document.getElementById('form-name'),
    email: document.getElementById('form-email'),
    subject: document.getElementById('form-subject'),
    message: document.getElementById('form-message')
  };

  let sending = false;

  /** Never inject raw user input into innerHTML. */
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));

  const clearError = (input) => input && input.classList.remove('is-invalid');

  const showError = (input, message) => {
    if (status) status.textContent = message;
    if (input) {
      input.classList.add('is-invalid');
      input.focus({ preventScroll: false });
      // Re-trigger the shake on repeated failures.
      window.setTimeout(() => input.classList.remove('is-invalid'), 1200);
    }
  };

  Object.values(fields).forEach(input => {
    if (!input) return;
    input.addEventListener('input', () => {
      clearError(input);
      if (status) status.textContent = '';
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit();
  });

  async function handleSubmit() {
    if (sending) return;

    const name = fields.name ? fields.name.value.trim() : '';
    const email = fields.email ? fields.email.value.trim() : '';
    const subject = (fields.subject && fields.subject.value.trim())
      ? fields.subject.value.trim()
      : 'Zapytanie ze strony psychologkacper.pl';
    const message = fields.message ? fields.message.value.trim() : '';

    if (!name) {
      showError(fields.name, 'Podaj proszę swoje imię.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      showError(fields.email, 'Podaj proszę poprawny adres e-mail.');
      return;
    }

    if (message.length < 3) {
      showError(fields.message, 'Napisz proszę treść wiadomości.');
      return;
    }

    if (status) status.textContent = '';

    const origBtnHtml = sendBtn.innerHTML;
    sending = true;
    sendBtn.disabled = true;
    sendBtn.innerHTML =
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" style="animation: spin 0.8s linear infinite;">' +
      '<circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-linecap="round"></circle></svg>' +
      'Wysyłanie wiadomości...';

    try {
      const response = await fetch('https://formsubmit.co/ajax/kackul17@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[Strona WWW] ${subject} - od: ${name}`,
          _template: 'table',
          _captcha: 'false',
          'Imie_i_Nazwisko': name,
          'Adres_Email': email,
          'Temat': subject,
          'Tresc_Wiadomosci': message
        })
      });

      if (!response.ok) throw new Error('Server responded with ' + response.status);

      form.innerHTML = `
        <div class="form-success">
          <div style="width: 58px; height: 58px; border-radius: 50%; background: #10B981; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h3 style="font-size: 1.45rem; font-weight: 800; color: #065F46;">Wiadomość została wysłana!</h3>
          <p style="margin-top: 10px; font-size: 0.98rem; line-height: 1.6; color: #047857; max-width: 44ch; margin-left: auto; margin-right: auto;">
            Dziękuję za kontakt, <strong>${escapeHtml(name)}</strong>. Przeczytam Twoją wiadomość i odpowiem na adres <strong>${escapeHtml(email)}</strong> najpóźniej w ciągu 24 godzin.
          </p>
          <a href="index.html" class="btn-outline" style="margin-top: 22px; display: inline-flex;">Wróć na stronę główną</a>
        </div>
      `;
    } catch (err) {
      // Network or service failure — offer the user's own mail client instead.
      const mailtoUrl = 'mailto:kackul17@gmail.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent([message, '', '---', `Imię i nazwisko: ${name}`, `E-mail: ${email}`].join('\n'));

      sending = false;
      sendBtn.disabled = false;
      sendBtn.innerHTML = origBtnHtml;

      if (status) {
        status.textContent = 'Nie udało się wysłać wiadomości bezpośrednio ze strony.';
      }

      if (window.confirm('Wysyłanie bezpośrednie napotkało problem z siecią. Czy chcesz wysłać wiadomość przez swój program pocztowy?')) {
        window.location.href = mailtoUrl;
      }
    }
  }
});
