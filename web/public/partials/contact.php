 <section class="contact" id="contact">
    <div class="container contact-inner">
      <div class="contact-copy">
        <p class="section-eyebrow" data-i18n="contact.eyebrow">Contact</p>
        <h2 data-i18n="contact.title">Discutons de votre déploiement ERPNext.</h2>
        <p class="section-sub" data-i18n="contact.subtitle">Décrivez votre activité et vos besoins : nous revenons vers vous avec une proposition adaptée à votre secteur.</p>

        <ul class="contact-details">
          <li>
            <span class="contact-label" data-i18n="contact.emailLabel">Courriel</span>
            <a href="mailto:contact@bsconsulting.ht">contact@bsconsulting.ht</a>
          </li>
          <li>
            <span class="contact-label" data-i18n="contact.phoneLabel">Téléphone / WhatsApp</span>
            <a href="https://wa.me/50900000000" target="_blank" rel="noopener noreferrer">+509 00 00 0000</a>
          </li>
          <li>
            <span class="contact-label" data-i18n="contact.locationLabel">Localisation</span>
            <span data-i18n="contact.locationValue">Delmas, Port-au-Prince, Haïti</span>
          </li>
        </ul>
      </div>

      <form class="contact-form" id="contactForm" novalidate>
        <div class="form-row">
          <label for="cf-name" data-i18n="contact.form.name">Nom complet</label>
          <input type="text" id="cf-name" name="name" required>
        </div>
        <div class="form-row">
          <label for="cf-email" data-i18n="contact.form.email">Adresse courriel</label>
          <input type="email" id="cf-email" name="email" required>
        </div>
        <div class="form-row">
          <label for="cf-company" data-i18n="contact.form.company">Entreprise</label>
          <input type="text" id="cf-company" name="company">
        </div>
        <div class="form-row">
          <label for="cf-message" data-i18n="contact.form.message">Votre besoin</label>
          <textarea id="cf-message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block" data-i18n="contact.form.submit">Envoyer la demande</button>
        <p class="form-success" id="formSuccess" data-i18n="contact.form.success">Merci ! Votre message a bien été noté, nous vous répondons sous peu.</p>
        <!-- Ce formulaire est statique : branchez-le à Formspree, Netlify Forms ou votre propre backend pour recevoir les messages. -->
      </form>
    </div>
  </section>