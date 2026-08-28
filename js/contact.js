/**
 * Kacper Kulesza - Psycholog | Contact Form Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const sendBtn = document.getElementById('contact-send-btn');
  
  if (!form || !sendBtn) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit();
  });
  
  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handleSubmit();
  });
  
  async function handleSubmit() {
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const subjectInput = document.getElementById('form-subject');
    const messageInput = document.getElementById('form-message');
    
    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const subject = (subjectInput && subjectInput.value.trim()) ? subjectInput.value.trim() : 'Zapytanie ze strony psychologkacper.pl';
    const message = messageInput ? messageInput.value.trim() : '';
    
    if (!name) {
      alert('Proszę podać swoje imię.');
      nameInput && nameInput.focus();
      return;
    }
    
    if (!email || !email.includes('@')) {
      alert('Proszę podać poprawny adres e-mail.');
      emailInput && emailInput.focus();
      return;
    }
    
    if (!message) {
      alert('Proszę wpisać treść wiadomości.');
      messageInput && messageInput.focus();
      return;
    }
    
    const origBtnHtml = sendBtn.innerHTML;
    sendBtn.disabled = true;
    sendBtn.innerHTML = `
      <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" style="animation: spin 0.8s linear infinite;"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-linecap="round"></circle></svg>
      Wysyłanie wiadomości...
    `;
    
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
          Imię_i_Nazwisko: name,
          Adres_Email: email,
          Temat: subject,
          Treść_Wiadomości: message
        })
      });
      
      if (response.ok) {
        form.innerHTML = `
          <div style="padding: 36px 24px; text-align: center; border-radius: 18px; background: rgba(16, 185, 129, 0.08); border: 1.5px solid #10B981;">
            <div style="width: 58px; height: 58px; border-radius: 50%; background: #10B981; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 style="font-size: 1.45rem; font-weight: 800; color: #065F46;">Wiadomość została wysłana!</h3>
            <p style="margin-top: 10px; font-size: 0.98rem; line-height: 1.6; color: #047857; max-width: 44ch; margin-left: auto; margin-right: auto;">
              Dziękuję za kontakt, <strong>${name}</strong>. Przeczytam Twoją wiadomość i odpowiem na adres <strong>${email}</strong> najpóźniej w ciągu 24 godzin.
            </p>
            <a href="index.html" class="btn-outline" style="margin-top: 22px; display: inline-flex;">Wróć na stronę główną</a>
          </div>
        `;
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      // Fallback to mailto
      const bodyParts = [
        message,
        '',
        '---',
        `Imię i nazwisko: ${name}`,
        `E-mail: ${email}`
      ];
      const mailtoUrl = `mailto:kackul17@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyParts.join('\n'))}`;
      
      sendBtn.disabled = false;
      sendBtn.innerHTML = origBtnHtml;
      
      if (confirm("Wysyłanie bezpośrednie napotkało problem z siecią. Czy chcesz wysłać wiadomość przez swój program pocztowy?")) {
        window.location.href = mailtoUrl;
      }
    }
  }
});
