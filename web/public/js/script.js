// =========================================================
// BSConsulting — script.js
// =========================================================

/* ---------- 1. Traductions FR / EN ---------- */
const translations = {
  fr: {
    "nav.solutions": "Solutions",
    "nav.features": "Fonctionnalités",
    "nav.testimonials": "Témoignages",
    "nav.contact": "Contact",
    "nav.cta": "Demander une démo",

    "hero.eyebrow": "Consultants ERPNext — basés en Haïti",
    "hero.title": "L'ERP pensé pour la réalité haïtienne.",
    "hero.subtitle": "Double devise HTG/USD, taxes locales, RH conforme à la loi haïtienne : BSConsulting déploie et configure ERPNext pour qu'il fonctionne vraiment comme votre entreprise, pas l'inverse.",
    "hero.ctaPrimary": "Demander une démo",
    "hero.ctaSecondary": "Voir les modules",
    "hero.trust1": "devises gérées nativement",
    "hero.trust2": "modules déployés sur le terrain",
    "hero.trust3": "support en français, sur place",

    "solutions.eyebrow": "Solutions ERPNext",
    "solutions.title": "Un module pour chaque partie de votre entreprise.",
    "solutions.subtitle": "Nous configurons ERPNext module par module, en gardant le contexte haïtien à chaque étape : devises, taxes, imprimés officiels.",
    "solutions.crm.title": "CRM & Ventes",
    "solutions.crm.desc": "Prospect → Devis → Bon de livraison → Facture, avec règles de prix, remises et suivi de la relation client.",
    "solutions.pos.title": "Point de Vente",
    "solutions.pos.desc": "Caisse rapide pour clients de passage, sessions multi-caissiers, programmes de fidélité et retours.",
    "solutions.stock.title": "Gestion de Stock",
    "solutions.stock.desc": "Multi-entrepôt, numéros de série et de lot, valorisation FIFO ou moyenne pondérée, transferts entre succursales.",
    "solutions.fin.title": "Comptabilité & Finance",
    "solutions.fin.desc": "Plan comptable haïtien, multi-devise HTG/USD, TCA, centres de coûts et états financiers en temps réel.",
    "solutions.rh.title": "RH & Paie",
    "solutions.rh.desc": "Structures salariales, ONA, IR selon le barème DGI, congés, notes de frais et bulletins de paie personnalisés.",
    "solutions.buy.title": "Achats",
    "solutions.buy.desc": "Demandes d'achat, bons de commande fournisseurs et réception de marchandises, connectés au stock et à la comptabilité.",

    "nav.services": "Services",
    "services.eyebrow": "Services offerts",
    "services.title": "Au-delà du logiciel, un accompagnement complet.",
    "services.subtitle": "De la mise en place initiale au support quotidien, BSConsulting reste à vos côtés à chaque étape.",
    "services.s1.title": "Analyse & cadrage",
    "services.s1.desc": "Étude de vos processus actuels et définition des modules et flux ERPNext adaptés à votre activité.",
    "services.s2.title": "Intégration & migration",
    "services.s2.desc": "Import de vos données existantes (clients, stock, comptabilité) et connexion avec vos outils actuels.",
    "services.s3.title": "Formation des équipes",
    "services.s3.desc": "Sessions pratiques, adaptées au rôle de chaque employé, pour une adoption rapide au quotidien.",
    "services.s4.title": "Support & maintenance",
    "services.s4.desc": "Assistance continue, résolution rapide des incidents et mises à jour après la mise en production.",
    "services.c1.title": "Configuration sur mesure",
    "services.c1.desc": "Adaptation des modules, imprimés officiels et rapports aux besoins spécifiques de votre secteur.",
    "services.c2.title": "Accompagnement au changement",
    "services.c2.desc": "Aide à la transition des équipes vers les nouveaux processus digitalisés, sans rupture d'activité.",
    "services.c3.title": "Hébergement & infrastructure",
    "services.c3.desc": "Mise en place sur serveur local à Port-au-Prince ou dans le nuage, avec sauvegardes régulières.",

    "features.eyebrow": "Fonctionnalités",
    "features.title": "Conçu pour les réalités du marché haïtien.",
    "features.f1.title": "Double devise native",
    "features.f1.desc": "Facturez en gourdes ou en dollars, avec taux de change saisis manuellement pour un contrôle total.",
    "features.f2.title": "Conformité fiscale locale",
    "features.f2.desc": "TCA, ONA, CFGDCT et barème IR de la DGI intégrés à vos documents et bulletins de paie, avec NIF affiché.",
    "features.f3.title": "Multi-succursale",
    "features.f3.desc": "Gérez plusieurs points de vente ou entrepôts sous une seule entité, avec des rapports consolidés ou séparés.",
    "features.f4.title": "Rapports en temps réel",
    "features.f4.desc": "Tableaux de bord de ventes, de marge et de trésorerie, actualisés à chaque transaction enregistrée.",
    "features.f5.title": "Pensé pour l'hôtellerie",
    "features.f5.desc": "Suivi de la rentabilité par client, centres de coûts dédiés et gestion adaptée aux besoins des hôtels et restaurants.",
    "features.f6.title": "Déploiement local ou infonuagique",
    "features.f6.desc": "Hébergement sur vos propres serveurs à Port-au-Prince ou dans le nuage, selon vos contraintes de connectivité.",

    "testi.eyebrow": "Témoignages",
    "testi.title": "Des entreprises qui pilotent leur activité avec ERPNext.",
    "testi.note": "Contenu d'exemple — à remplacer par vos propres témoignages clients.",
    "testi.t1.quote": "« Depuis le déploiement, notre facturation en gourdes et en dollars ne prend plus une seule minute d'hésitation. »",
    "testi.t1.role": "Directrice financière, quincaillerie — Port-au-Prince",
    "testi.t2.quote": "« L'équipe de BSConsulting a configuré nos bulletins de paie exactement selon les règles de la DGI. Un vrai gain de temps. »",
    "testi.t2.role": "Responsable RH, groupe hôtelier — Pétion-Ville",
    "testi.t3.quote": "« Nos deux succursales voient enfin le même stock en temps réel. Fini les écarts d'inventaire. »",
    "testi.t3.role": "Gérante, distribution d'équipements — Delmas",

    "contact.eyebrow": "Contact",
    "contact.title": "Discutons de votre déploiement ERPNext.",
    "contact.subtitle": "Décrivez votre activité et vos besoins : nous revenons vers vous avec une proposition adaptée à votre secteur.",
    "contact.emailLabel": "Courriel",
    "contact.phoneLabel": "Téléphone / WhatsApp",
    "contact.locationLabel": "Localisation",
    "contact.locationValue": "Delmas, Port-au-Prince, Haïti",
    "contact.form.name": "Nom complet",
    "contact.form.email": "Adresse courriel",
    "contact.form.company": "Entreprise",
    "contact.form.message": "Votre besoin",
    "contact.form.submit": "Envoyer la demande",
    "contact.form.success": "Merci ! Votre message a bien été noté, nous vous répondons sous peu.",
    "contact.form.error": "Une erreur est survenue. Merci de réessayer ou de nous écrire directement par courriel.",

    "footer.tagline": "Solutions ERPNext pour les entreprises haïtiennes.",
    "footer.rights": "Tous droits réservés.",

    "ws.crm.title": "CRM · Pipeline des ventes",
    "ws.crm.l1": "Devis actifs", "ws.crm.l2": "Taux de conversion", "ws.crm.l3": "Devise de base",
    "ws.crm.v1": "128", "ws.crm.v2": "34%", "ws.crm.v3": "HTG",
    "ws.pos.title": "Point de Vente · Aujourd'hui",
    "ws.pos.l1": "Ventes du jour", "ws.pos.l2": "Panier moyen", "ws.pos.l3": "Sessions ouvertes",
    "ws.pos.v1": "312", "ws.pos.v2": "1 450 HTG", "ws.pos.v3": "2",
    "ws.stk.title": "Stock · Pétion-Ville & Delmas",
    "ws.stk.l1": "Articles suivis", "ws.stk.l2": "Sous seuil minimum", "ws.stk.l3": "Entrepôts actifs",
    "ws.stk.v1": "864", "ws.stk.v2": "17", "ws.stk.v3": "2",
    "ws.fin.title": "Finance · Aperçu du mois",
    "ws.fin.l1": "Marge brute", "ws.fin.l2": "Factures en attente", "ws.fin.l3": "Devise de référence",
    "ws.fin.v1": "41%", "ws.fin.v2": "23", "ws.fin.v3": "USD",
    "ws.rh.title": "RH & Paie · Cycle en cours",
    "ws.rh.l1": "Employés actifs", "ws.rh.l2": "Bulletins générés", "ws.rh.l3": "Prochaine paie",
    "ws.rh.v1": "46", "ws.rh.v2": "46", "ws.rh.v3": "5 j"
  },
  en: {
    "nav.solutions": "Solutions",
    "nav.features": "Features",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.cta": "Request a demo",

    "hero.eyebrow": "ERPNext consultants — based in Haiti",
    "hero.title": "The ERP built for how Haiti really works.",
    "hero.subtitle": "Native HTG/USD dual currency, local taxes, HR that follows Haitian law: BSConsulting deploys and configures ERPNext to fit your business, not the other way around.",
    "hero.ctaPrimary": "Request a demo",
    "hero.ctaSecondary": "See the modules",
    "hero.trust1": "currencies handled natively",
    "hero.trust2": "modules deployed in the field",
    "hero.trust3": "on-the-ground support",

    "solutions.eyebrow": "ERPNext solutions",
    "solutions.title": "A module for every part of your business.",
    "solutions.subtitle": "We configure ERPNext module by module, keeping the Haitian context in mind at every step: currencies, taxes, official documents.",
    "solutions.crm.title": "CRM & Sales",
    "solutions.crm.desc": "Lead → Quotation → Delivery Note → Invoice, with pricing rules, discounts and relationship tracking.",
    "solutions.pos.title": "Point of Sale",
    "solutions.pos.desc": "Fast checkout for walk-in customers, multi-cashier sessions, loyalty programs and returns.",
    "solutions.stock.title": "Stock Management",
    "solutions.stock.desc": "Multi-warehouse, serial and batch numbers, FIFO or moving average valuation, inter-branch transfers.",
    "solutions.fin.title": "Accounting & Finance",
    "solutions.fin.desc": "Haitian chart of accounts, HTG/USD multi-currency, TCA, cost centers and real-time financial statements.",
    "solutions.rh.title": "HR & Payroll",
    "solutions.rh.desc": "Salary structures, ONA, income tax per DGI brackets, leave, expense claims and custom pay slips.",
    "solutions.buy.title": "Purchasing",
    "solutions.buy.desc": "Purchase requests, supplier orders and goods receipts, connected to stock and accounting.",

    "nav.services": "Services",
    "services.eyebrow": "Services offered",
    "services.title": "Beyond the software: full support along the way.",
    "services.subtitle": "From initial setup to day-to-day support, BSConsulting stays by your side at every step.",
    "services.s1.title": "Analysis & scoping",
    "services.s1.desc": "Review of your current processes and definition of the ERPNext modules and flows suited to your business.",
    "services.s2.title": "Integration & migration",
    "services.s2.desc": "Import of your existing data (customers, stock, accounting) and connection with your current tools.",
    "services.s3.title": "Team training",
    "services.s3.desc": "Hands-on sessions tailored to each employee's role, for fast day-to-day adoption.",
    "services.s4.title": "Support & maintenance",
    "services.s4.desc": "Ongoing assistance, fast issue resolution and updates after go-live.",
    "services.c1.title": "Custom configuration",
    "services.c1.desc": "Adapting modules, official print formats and reports to your sector's specific needs.",
    "services.c2.title": "Change management",
    "services.c2.desc": "Helping your teams transition to new digital processes without disrupting operations.",
    "services.c3.title": "Hosting & infrastructure",
    "services.c3.desc": "Set up on a local server in Port-au-Prince or in the cloud, with regular backups.",

    "features.eyebrow": "Features",
    "features.title": "Built for the realities of the Haitian market.",
    "features.f1.title": "Native dual currency",
    "features.f1.desc": "Invoice in gourdes or dollars, with manually entered exchange rates for full control.",
    "features.f2.title": "Local tax compliance",
    "features.f2.desc": "TCA, ONA, CFGDCT and DGI income tax brackets built into your documents and pay slips, with your NIF displayed.",
    "features.f3.title": "Multi-branch",
    "features.f3.desc": "Manage several stores or warehouses under one entity, with consolidated or separate reporting.",
    "features.f4.title": "Real-time reporting",
    "features.f4.desc": "Sales, margin and cash-flow dashboards, updated with every transaction recorded.",
    "features.f5.title": "Built for hospitality",
    "features.f5.desc": "Per-client profitability tracking, dedicated cost centers and workflows suited to hotels and restaurants.",
    "features.f6.title": "On-premise or cloud",
    "features.f6.desc": "Host on your own servers in Port-au-Prince or in the cloud, depending on your connectivity needs.",

    "testi.eyebrow": "Testimonials",
    "testi.title": "Businesses running their operations on ERPNext.",
    "testi.note": "Example content — replace with your own client testimonials.",
    "testi.t1.quote": "\"Since going live, billing in gourdes and dollars no longer costs us a minute of hesitation.\"",
    "testi.t1.role": "CFO, hardware retailer — Port-au-Prince",
    "testi.t2.quote": "\"BSConsulting set up our pay slips exactly to DGI rules. A real time saver.\"",
    "testi.t2.role": "HR manager, hotel group — Pétion-Ville",
    "testi.t3.quote": "\"Our two branches finally see the same stock in real time. No more inventory gaps.\"",
    "testi.t3.role": "Manager, equipment distributor — Delmas",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about your ERPNext rollout.",
    "contact.subtitle": "Tell us about your business and needs — we'll get back to you with a proposal suited to your sector.",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Phone / WhatsApp",
    "contact.locationLabel": "Location",
    "contact.locationValue": "Delmas, Port-au-Prince, Haiti",
    "contact.form.name": "Full name",
    "contact.form.email": "Email address",
    "contact.form.company": "Company",
    "contact.form.message": "What do you need?",
    "contact.form.submit": "Send request",
    "contact.form.success": "Thanks! Your message has been received, we'll reply shortly.",
    "contact.form.error": "Something went wrong. Please try again or email us directly.",

    "footer.tagline": "ERPNext solutions for Haitian businesses.",
    "footer.rights": "All rights reserved.",

    "ws.crm.title": "CRM · Sales pipeline",
    "ws.crm.l1": "Open quotations", "ws.crm.l2": "Conversion rate", "ws.crm.l3": "Base currency",
    "ws.crm.v1": "128", "ws.crm.v2": "34%", "ws.crm.v3": "HTG",
    "ws.pos.title": "Point of Sale · Today",
    "ws.pos.l1": "Today's sales", "ws.pos.l2": "Average basket", "ws.pos.l3": "Open sessions",
    "ws.pos.v1": "312", "ws.pos.v2": "HTG 1,450", "ws.pos.v3": "2",
    "ws.stk.title": "Stock · Pétion-Ville & Delmas",
    "ws.stk.l1": "Items tracked", "ws.stk.l2": "Below reorder level", "ws.stk.l3": "Active warehouses",
    "ws.stk.v1": "864", "ws.stk.v2": "17", "ws.stk.v3": "2",
    "ws.fin.title": "Finance · Month overview",
    "ws.fin.l1": "Gross margin", "ws.fin.l2": "Invoices pending", "ws.fin.l3": "Reference currency",
    "ws.fin.v1": "41%", "ws.fin.v2": "23", "ws.fin.v3": "USD",
    "ws.rh.title": "HR & Payroll · Current cycle",
    "ws.rh.l1": "Active employees", "ws.rh.l2": "Slips generated", "ws.rh.l3": "Next payroll",
    "ws.rh.v1": "46", "ws.rh.v2": "46", "ws.rh.v3": "5 d"
  }
};

/* ---------- 2. Application de la langue ---------- */
function applyLanguage(lang){
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined){
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang-btn') === lang);
  });

  localStorage.setItem('bsconsulting_lang', lang);
  refreshWorkspaceLabels(lang);
  updateWhatsAppLink(lang);
}

/* ---------- 2ter. Lien WhatsApp flottant ---------- */
function updateWhatsAppLink(lang){
  const btn = document.getElementById('whatsappBtn');
  if (!btn) return;
  const message = lang === 'en'
    ? "Hello, I'd like to know more about ERPNext for my business."
    : "Bonjour, je souhaite en savoir plus sur ERPNext pour mon entreprise.";
  btn.href = `https://wa.me/50900000000?text=${encodeURIComponent(message)}`;
}

function initLanguage(){
  const saved = localStorage.getItem('bsconsulting_lang');
  const lang = saved === 'en' ? 'en' : 'fr';
  applyLanguage(lang);

  const toggle = document.getElementById('langToggle');
  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-lang');
    applyLanguage(current === 'fr' ? 'en' : 'fr');
  });
}

/* ---------- 2bis. Thème clair / sombre ---------- */
function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggle');
  const lang = document.documentElement.getAttribute('data-lang') || 'fr';
  btn.setAttribute('aria-label', theme === 'light'
    ? (lang === 'fr' ? 'Basculer en mode sombre' : 'Switch to dark mode')
    : (lang === 'fr' ? 'Basculer en mode clair' : 'Switch to light mode'));
  localStorage.setItem('bsconsulting_theme', theme);
}

function initTheme(){
  const saved = localStorage.getItem('bsconsulting_theme');
  const preferLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const theme = saved || (preferLight ? 'light' : 'dark');
  applyTheme(theme);

  document.getElementById('themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

/* ---------- 3. Menu mobile ---------- */
function initMobileNav(){
  const burger = document.getElementById('navBurger');
  const nav = document.getElementById('mainNav');
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }));
}

/* ---------- 4. Animation du mockup ERPNext (élément signature) ---------- */
const wsModules = ['crm','pos','stk','fin','rh'];
let wsIndex = 0;
let wsTimer = null;

function renderWorkspace(mod, lang){
  const t = translations[lang];
  document.getElementById('wsTitle').textContent = t[`ws.${mod}.title`];
  document.getElementById('wsLabel1').textContent = t[`ws.${mod}.l1`];
  document.getElementById('wsLabel2').textContent = t[`ws.${mod}.l2`];
  document.getElementById('wsLabel3').textContent = t[`ws.${mod}.l3`];
  document.getElementById('wsStat1').textContent = t[`ws.${mod}.v1`];
  document.getElementById('wsStat2').textContent = t[`ws.${mod}.v2`];
  document.getElementById('wsStat3').textContent = t[`ws.${mod}.v3`];

  document.querySelectorAll('.ws-icon').forEach(icon => {
    icon.classList.toggle('is-active', icon.getAttribute('data-mod') === mod);
  });

  document.querySelectorAll('.ws-bar').forEach(bar => {
    bar.style.setProperty('--h', (30 + Math.random() * 65).toFixed(0) + '%');
  });
}

function refreshWorkspaceLabels(lang){
  renderWorkspace(wsModules[wsIndex], lang);
}

function initWorkspaceCycle(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  renderWorkspace(wsModules[0], document.documentElement.getAttribute('data-lang'));
  if (reduceMotion) return;

  wsTimer = setInterval(() => {
    wsIndex = (wsIndex + 1) % wsModules.length;
    renderWorkspace(wsModules[wsIndex], document.documentElement.getAttribute('data-lang'));
  }, 3200);
}

/* ---------- 5. Formulaire de contact (connecté à /api/contact.php) ---------- */
function initContactForm(){
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()){
      form.reportValidity();
      return;
    }

    const lang = document.documentElement.getAttribute('data-lang') || 'fr';
    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      company: form.company.value.trim(),
      message: form.message.value.trim(),
      lang
    };

    submitBtn.disabled = true;

    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (res.ok && data.success){
        success.textContent = translations[lang]['contact.form.success'];
        success.classList.remove('is-error');
        success.classList.add('is-visible');
        form.reset();
      } else {
        success.textContent = translations[lang]['contact.form.error'];
        success.classList.add('is-visible', 'is-error');
      }
    } catch (err) {
      success.textContent = translations[lang]['contact.form.error'];
      success.classList.add('is-visible', 'is-error');
    } finally {
      submitBtn.disabled = false;
      setTimeout(() => success.classList.remove('is-visible', 'is-error'), 6000);
    }
  });
}

/* ---------- 6. Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  initTheme();
  initLanguage();
  initMobileNav();
  initWorkspaceCycle();
  initContactForm();
});
