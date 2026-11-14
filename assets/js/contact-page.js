/* EXPERTS 12 — FORMULAIRE DE CONTACT
   Le site statique prépare un message dans l'application choisie.
   Aucun envoi serveur n'est effectué depuis cette page. */
(() => {
  const whatsappNumber = '2250565833103';
  const contactEmail = 'manager@experts12.com';
  const copyEmails = ['assistance@experts12.com', 'assistante@experts12.com', 'support@experts12.com'];
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  if (!form || !feedback) return;

  const fields = ['name', 'email', 'phone', 'domain', 'subject', 'message'];
  const getData = () => Object.fromEntries(fields.map((id) => {
    const field = document.getElementById(id);
    return [id, field ? field.value.trim() : ''];
  }));

  function validate(data) {
    let firstInvalid = null;
    ['name', 'email', 'subject', 'message'].forEach((id) => {
      const field = document.getElementById(id);
      const valid = field && field.value.trim() && (id !== 'email' || field.validity.valid);
      if (!valid) {
        field?.setAttribute('aria-invalid', 'true');
        if (!firstInvalid) firstInvalid = field;
      } else {
        field.removeAttribute('aria-invalid');
      }
    });
    if (firstInvalid) {
      feedback.textContent = 'Veuillez vérifier les champs obligatoires et le format de votre adresse email.';
      feedback.classList.add('is-error');
      firstInvalid.focus();
      return false;
    }
    feedback.classList.remove('is-error');
    return true;
  }

  function buildMessage(data) {
    return [
      'Bonjour Experts 12,', '',
      'Je souhaite vous contacter au sujet de la demande suivante :', '',
      `Nom : ${data.name}`,
      `Email : ${data.email}`,
      `Téléphone : ${data.phone || 'Non renseigné'}`,
      `Domaine : ${data.domain || 'Non précisé'}`,
      `Objet : ${data.subject}`, '',
      'Message :', data.message, '',
      'Merci.'
    ].join('\n');
  }

  document.getElementById('sendWhatsapp')?.addEventListener('click', () => {
    const data = getData();
    if (!validate(data)) return;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildMessage(data))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    feedback.textContent = 'WhatsApp a été ouvert avec votre message prérempli. Vérifiez-le puis envoyez-le dans WhatsApp.';
  });

  document.getElementById('sendEmail')?.addEventListener('click', () => {
    const data = getData();
    if (!validate(data)) return;
    const subject = `Demande de contact Experts 12 — ${data.subject}`;
    const url = `mailto:${contactEmail}?cc=${encodeURIComponent(assistanceEmail)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage(data))}`;
    window.location.href = url;
    feedback.textContent = 'Votre application email devrait s’ouvrir avec le message prérempli. Vérifiez-le puis envoyez-le.';
  });

  fields.forEach((id) => document.getElementById(id)?.addEventListener('input', (event) => {
    if (event.target.value.trim()) event.target.removeAttribute('aria-invalid');
  }));
})();
