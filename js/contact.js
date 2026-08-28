/**
 * Kacper Kulesza - Psycholog | Contact Form Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const sendBtn = document.getElementById('contact-send-btn');
  
  if (!sendBtn) return;
  
  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const subjectInput = document.getElementById('form-subject');
    const messageInput = document.getElementById('form-message');
    
    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const subject = (subjectInput && subjectInput.value.trim()) ? subjectInput.value.trim() : 'Zapytanie ze strony';
    const message = messageInput ? messageInput.value.trim() : '';
    
    const bodyParts = [
      message,
      '',
      '---',
      name ? `Imię i nazwisko: ${name}` : '',
      email ? `E-mail: ${email}` : ''
    ].filter(Boolean);
    
    const mailtoUrl = `mailto:kackul17@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyParts.join('\n'))}`;
    
    window.location.href = mailtoUrl;
  });
});
