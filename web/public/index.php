<!DOCTYPE html>
<html lang="fr" data-lang="fr" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BSConsulting — Solutions ERPNext pour Haïti</title>
<meta name="description" content="BSConsulting accompagne les entreprises haïtiennes dans le déploiement d'ERPNext : ventes, stock, comptabilité multi-devise, RH et paie conformes à la législation locale.">
<link rel="icon" href="data:,">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<!-- ================= HEADER ================= -->
<header class="site-header">
  <div class="container header-inner">
    <a href="#top" class="brand">
      <span class="brand-mark">BS</span>
      <span class="brand-word">BSConsulting</span>
    </a>

    <nav class="main-nav" id="mainNav">
      <a href="#solutions" data-i18n="nav.solutions">Solutions</a>
      <a href="#services" data-i18n="nav.services">Services</a>
      <a href="#fonctionnalites" data-i18n="nav.features">Fonctionnalités</a>
      <a href="#temoignages" data-i18n="nav.testimonials">Témoignages</a>
      <a href="#contact" data-i18n="nav.contact">Contact</a>
    </nav>

    <div class="header-actions">
      <button class="lang-toggle" id="langToggle" type="button" aria-label="Changer de langue">
        <span class="lang-opt is-active" data-lang-btn="fr">FR</span>
        <span class="lang-sep">/</span>
        <span class="lang-opt" data-lang-btn="en">EN</span>
      </button>
      <button class="theme-toggle" id="themeToggle" type="button" aria-label="Basculer en mode clair">
        <svg class="icon-sun" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.6"/><path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
        <svg class="icon-moon" viewBox="0 0 24 24" fill="none"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>
      </button>
      <a href="#contact" class="btn btn-primary btn-sm" data-i18n="nav.cta">Demander une démo</a>
      <button class="nav-burger" id="navBurger" aria-label="Ouvrir le menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>

<main id="top">

  <!-- ================= HERO ================= -->
    <?php include 'partials/hero.php' ?>

  <!-- ================= SOLUTIONS ================= -->
 
  <?php include 'partials/solutions.php' ?>
  <!-- ================= SERVICES ================= -->
 <?php include 'partials/services.php' ?>

  <!-- ================= FEATURES ================= -->
 <?php include 'partials/features.php' ?>

  <!-- ================= TESTIMONIALS ================= -->
   <?php include 'partials/testimonials.php' ?>

  <!-- ================= CONTACT ================= -->
  <?php include 'partials/contact.php' ?>

</main>

<!-- ================= FOOTER ================= -->
<footer class="site-footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <span class="brand-mark">BS</span>
      <span class="brand-word">BSConsulting</span>
    </div>
    <p class="footer-tagline" data-i18n="footer.tagline">Solutions ERPNext pour les entreprises haïtiennes.</p>
    <nav class="footer-nav">
      <a href="#solutions" data-i18n="nav.solutions">Solutions</a>
      <a href="#services" data-i18n="nav.services">Services</a>
      <a href="#fonctionnalites" data-i18n="nav.features">Fonctionnalités</a>
      <a href="#temoignages" data-i18n="nav.testimonials">Témoignages</a>
      <a href="#contact" data-i18n="nav.contact">Contact</a>
    </nav>
    <p class="footer-copy">&copy; <span id="year"></span> BSConsulting. <span data-i18n="footer.rights">Tous droits réservés.</span></p>
  </div>
</footer>

<!-- ================= WHATSAPP FLOTTANT ================= -->
<a class="whatsapp-float" id="whatsappBtn" href="https://wa.me/50900000000" target="_blank" rel="noopener noreferrer" aria-label="Contacter BSConsulting sur WhatsApp">
  <span class="whatsapp-ring" aria-hidden="true"></span>
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden="true">
    <path d="M12 3.5a8.5 8.5 0 0 0-7.35 12.77L3.5 20.5l4.36-1.13A8.5 8.5 0 1 0 12 3.5z" stroke="#0A0E1A" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M8.7 8.6c.2-.5.4-.5.6-.5h.5c.16 0 .38 0 .55.42.2.5.66 1.65.7 1.77.05.12.08.26 0 .42-.08.16-.12.26-.24.4-.12.14-.25.32-.36.43-.12.12-.24.25-.1.5.14.24.62 1.02 1.33 1.65.9.82 1.66 1.07 1.9 1.2.24.11.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.53-.12.22.08 1.38.66 1.62.78.24.12.4.18.46.28.06.1.06.6-.14 1.18-.2.58-1.16 1.1-1.6 1.17-.42.07-.94.1-1.5-.1-.36-.12-.82-.28-1.4-.55-2.46-1.1-4.07-3.5-4.2-3.7-.12-.16-1-1.36-1-2.6 0-1.24.62-1.84.85-2.1z" fill="#0A0E1A"/>
  </svg>
</a>

<script src="js/script.js"></script>
</body>
</html>
