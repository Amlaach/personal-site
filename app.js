/**
 * AMLAACH Personal Site - Core Application Logic
 * Clean, lightweight JS handling i18n (he/en/fr), Theme switching, and GitHub Issue contact form prefilling.
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. i18n Translations Dictionary
  // --------------------------------------------------------------------------
  const translations = {
    he: {
      'a11y.skip': 'לתוכן המרכזי',
      'nav.projects': 'פרויקטים',
      'nav.philosophy': 'איך אני חושב',
      'nav.tech': 'טכנולוגיות',
      'nav.contact': 'צור קשר',

      'intro.role': 'מהנדס תוכנה • אלגוריתמים, מערכות ו-AI',
      'intro.bio': 'מפתח תוכנה מישראל המתמקד בקוד ליבה, ביצועים ומערכות. עובד בעיקר עם Rust ו-Python על אלגוריתמים, תשתיות חיפוש סמנטי ומערכות ללא הקצאות זיכרון.',

      'phil.heading': 'איך אני חושב',
      'phil.p1': 'אני מרוכז בנושאים שקל להתעלם מהם בתוכנה: דפוס ניצול זיכרון, מורכבות אלגוריתמית, מקביליות, ניצול L1/L2 Cache והמחיר הנסתר של אבסטרקציות מיותרות.',
      'phil.p2': 'לפני שמוסיפים עוד שכבת אופטימיזציה או שרתים נוספים, עדיף להבין בדיוק מה מעכב את הקוד על החומרה הקיימת.',

      'proj.heading': 'פרויקטים',
      'proj.subtext': 'קוד ומערכות שפיתחתי',
      'proj.flagship': 'פרויקט דגל',
      'proj.lblWhy': 'למה בניתי את זה:',
      'proj.lblHow': 'איך זה עובד:',
      'proj.linkGithub': 'GitHub Repository',

      'proj.hddeDesc': 'מנוע החלטות ללא הקצאות זיכרון (Zero-allocation decision engine) עבור מערכות בעלות ביצועים קריטיים.',
      'proj.hddeWhy': 'ביטול מוחלט של הקצאות זיכרון ב-heap בזמן הערכת עצי החלטה דינמיים.',
      'proj.hddeHow': 'ייצוג הצומתים בתוך חוצצי זיכרון שטוחים ורציפים (מבנה SoA/ECS) השומר על המידע ב-Cache ומכסח latency.',

      'proj.otzariaDesc': 'מנוע חיפוש סמנטי היברידי לספריית "אוצריא" המשלב חיפוש לקסיקלי BM25 והטמעות וקטוריות צפופות.',
      'proj.otzariaWhy': 'אפשרות לחיפוש עמוק לפי משמעות והקשר במאות אלפי טקסטים תורניים, ולא רק לפי התאמת מילים מדויקת.',
      'proj.otzariaHow': 'שימוש במודל Qwen3 0.6B שעבר התאמה למורפולוגיה עברית, עם שליפה מהירה מעל 594K קישורים בלוקאלי על מחשב רגיל.',

      'proj.jmDesc': 'נגן אודיו קל משקל ומהיר במיוחד ללא פרימוורקים כבדים.',
      'proj.jmWhy': 'נגן מוזיקה שנגלל ונפתח כהרף עין, מבוסס Web Audio API טהור וצריכת זיכרון אפסית.',

      'exp.heading': 'מחקר וניסויים',
      'exp.t1': 'הרצת AI על CPU:',
      'exp.i1': 'וקטוריזציית SIMD (AVX2/NEON) ומבני זיכרון להרצה מהירה של מודלים מקומיים על מעבדים ביתיים.',
      'exp.t2': 'רוחב פס ב-MoE:',
      'exp.i2': 'חקירת צווארי בקבוק ב-RAM בעת החלפה דינמית של משקולות מומחים ברשתות Mixture-of-Experts.',
      'exp.t3': 'חיפוש וקטורי בעברית:',
      'exp.i3': 'בדיקת טוקנייזרים מורפולוגיים והטמעות מקוונטזות (INT4/INT8) עבור עברית.',
      'exp.t4': 'מבני נתונים ללא הקצאות:',
      'exp.i4': 'תכנון Arena allocators ו-Slab buffers ב-Rust לביצוע דטרמיניסטי.',

      'tech.heading': 'טכנולוגיות',
      'tech.lblCore': 'שפות וליבה:',
      'tech.lblFields': 'תחומים:',

      'contact.heading': 'שליחת הודעה',
      'contact.subtext': 'ניתן לשלוח הודעה ישירות דרך GitHub Issue.',
      'contact.labelName': 'שם',
      'contact.phName': 'שם השולח',
      'contact.labelTitle': 'כותרת',
      'contact.phTitle': 'כותרת ההודעה',
      'contact.labelMessage': 'הודעה',
      'contact.phMessage': 'תוכן ההודעה...',
      'contact.btn': 'פתיחת Issue ב-GitHub',
      'contact.note': 'הטופס יפתח את GitHub עם ההודעה מוכנה לשליחה.',

      'footer.top': '↑ למעלה'
    },

    en: {
      'a11y.skip': 'Skip to main content',
      'nav.projects': 'Projects',
      'nav.philosophy': 'How I Think',
      'nav.tech': 'Tech Stack',
      'nav.contact': 'Contact',

      'intro.role': 'Software Engineer • Algorithms, Systems & AI',
      'intro.bio': 'Software engineer based in Israel focused on core code, performance, and systems. Writing Rust and Python for algorithms, semantic search engines, and zero-allocation data structures.',

      'phil.heading': 'How I Think',
      'phil.p1': 'I care about the stuff that is easy to skip over: memory access patterns, algorithmic complexity, concurrency, L1/L2 cache usage, and the hidden cost of abstraction.',
      'phil.p2': 'Before throwing another layer of optimization or buying more servers, it is always better to understand exactly why code is slow on the hardware.',

      'proj.heading': 'Projects',
      'proj.subtext': 'Code and systems I\'ve built',
      'proj.flagship': 'Flagship',
      'proj.lblWhy': 'Why I built it:',
      'proj.lblHow': 'How it works:',
      'proj.linkGithub': 'GitHub Repository',

      'proj.hddeDesc': 'Zero-allocation decision engine for performance-critical systems.',
      'proj.hddeWhy': 'Eliminates heap memory allocations during dynamic decision tree evaluation.',
      'proj.hddeHow': 'Structures decision nodes into flat contiguous memory buffers (SoA/ECS layout) keeping data inside CPU cache and minimizing latency.',

      'proj.otzariaDesc': 'Hybrid semantic search engine for the Otzaria library combining BM25 lexical search with dense vector embeddings.',
      'proj.otzariaWhy': 'Enables contextual semantic search across hundreds of thousands of classic Hebrew texts instead of strict word matching.',
      'proj.otzariaHow': 'Uses Qwen3 0.6B fine-tuned for Hebrew morphology, providing fast local retrieval across 594K links on standard consumer hardware.',

      'proj.jmDesc': 'Lightweight high-speed audio player built without heavy frontend frameworks.',
      'proj.jmWhy': 'Instantly loads and plays music using vanilla Web Audio API with near-zero RAM footprint.',

      'exp.heading': 'Research & Experiments',
      'exp.t1': 'CPU AI Inference:',
      'exp.i1': 'Exploring SIMD (AVX2/NEON) vectorization and memory layouts to run quantized local LLMs fast on standard consumer CPUs.',
      'exp.t2': 'MoE Memory Locality:',
      'exp.i2': 'Investigating RAM bandwidth bottlenecks during dynamic expert weight switching in Mixture-of-Experts architectures.',
      'exp.t3': 'Hebrew Vector Retrieval:',
      'exp.i3': 'Benchmarking morphological tokenizers and quantized embeddings (INT4/INT8) for Hebrew text retrieval.',
      'exp.t4': 'Zero-Allocation Structures:',
      'exp.i4': 'Designing Arena allocators and Slab buffers in Rust for predictable execution timing.',

      'tech.heading': 'Tech Stack',
      'tech.lblCore': 'Languages & Core:',
      'tech.lblFields': 'Fields:',

      'contact.heading': 'Send a Message',
      'contact.subtext': 'Send a message directly via GitHub Issue.',
      'contact.labelName': 'Name',
      'contact.phName': 'Your name / handle',
      'contact.labelTitle': 'Title',
      'contact.phTitle': 'Message title',
      'contact.labelMessage': 'Message',
      'contact.phMessage': 'Your message content...',
      'contact.btn': 'Open Issue on GitHub',
      'contact.note': 'This form will open GitHub with your message ready to submit.',

      'footer.top': '↑ Top'
    },

    fr: {
      'a11y.skip': 'Passer au contenu principal',
      'nav.projects': 'Projets',
      'nav.philosophy': 'Ma vision',
      'nav.tech': 'Stack Tech',
      'nav.contact': 'Contact',

      'intro.role': 'Développeur Systèmes & IA • Algorithmes & Performance',
      'intro.bio': 'Développeur basé en Israël axé sur le code bas niveau, la performance et les systèmes. Développement en Rust et Python sur les algorithmes, les moteurs de recherche sémantique et les structures sans allocation.',

      'phil.heading': 'Ma vision',
      'phil.p1': 'Je m\'intéresse aux détails souvent ignorés : accès mémoire, complexité algorithmique, concurrence, utilisation du cache CPU L1/L2 et coût de l\'abstraction.',
      'phil.p2': 'Avant d\'ajouter une couche d\'optimisation ou de louer plus de serveurs, il vaut mieux comprendre pourquoi le code est lent sur le matériel.',

      'proj.heading': 'Projets',
      'proj.subtext': 'Systèmes et code réalisés',
      'proj.flagship': 'Projet Phare',
      'proj.lblWhy': 'Pourquoi :',
      'proj.lblHow': 'Fonctionnement :',
      'proj.linkGithub': 'Dépôt GitHub',

      'proj.hddeDesc': 'Moteur de décision sans allocation mémoire pour systèmes à haute performance.',
      'proj.hddeWhy': 'Élimine complètement l\'allocation dynamique sur le tas (heap) lors de l\'évaluation des décisions.',
      'proj.hddeHow': 'Organise les nœuds dans des tampons mémoire contigus (pattern SoA/ECS) pour maximiser le cache CPU et réduire la latence.',

      'proj.otzariaDesc': 'Moteur de recherche sémantique hybride pour la bibliothèque Otzaria combinant BM25 et embeddings vectoriels.',
      'proj.otzariaWhy': 'Permet la recherche par le sens dans des centaines de milliers de textes en hébreu.',
      'proj.otzariaHow': 'Utilise Qwen3 0.6B adapté à la morphologie hébraïque, permettant une recherche rapide en local sur un ordinateur classique.',

      'proj.jmDesc': 'Lecteur audio ultra léger et rapide sans framework lourd.',
      'proj.jmWhy': 'Démarrage instantané utilisant l\'API Web Audio native avec une consommation mémoire minimale.',

      'exp.heading': 'Recherche & Expérimentations',
      'exp.t1': 'Inférence IA sur CPU :',
      'exp.i1': 'Vectorisation SIMD (AVX2/NEON) et disposition mémoire pour exécuter des modèles quantifiés sur CPU classique.',
      'exp.t2': 'Bande passante MoE :',
      'exp.i2': 'Analyse des goulots d\'étranglement RAM lors de la permutation dynamique des experts dans les architectures MoE.',
      'exp.t3': 'Recherche vectorielle Hébreu :',
      'exp.i3': 'Test de tokeniseurs morphologiques et d\'embeddings quantifiés (INT4/INT8) pour l\'hébreu.',
      'exp.t4': 'Structures zéro allocation :',
      'exp.i4': 'Conception d\'allocateurs arena et de buffers contigus en Rust pour un temps d\'exécution déterministe.',

      'tech.heading': 'Stack Tech',
      'tech.lblCore': 'Langages & Cœur :',
      'tech.lblFields': 'Domaines :',

      'contact.heading': 'Envoyer un message',
      'contact.subtext': 'Envoyez un message directement via un Issue GitHub.',
      'contact.labelName': 'Nom',
      'contact.phName': 'Votre nom ou pseudo',
      'contact.labelTitle': 'Titre',
      'contact.phTitle': 'Sujet du message',
      'contact.labelMessage': 'Message',
      'contact.phMessage': 'Votre message...',
      'contact.btn': 'Ouvrir un Issue sur GitHub',
      'contact.note': 'Le formulaire ouvrira GitHub avec votre message prêt à être envoyé.',

      'footer.top': '↑ Haut'
    }
  };

  const supportedLangs = ['he', 'en', 'fr'];
  const langNames = {
    he: 'עברית',
    en: 'English',
    fr: 'Français'
  };

  let currentLang = localStorage.getItem('amlaach_lang') || 'he';
  let currentTheme = localStorage.getItem('amlaach_theme') || 'dark';

  const langSelector = document.getElementById('lang-selector');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const yearEl = document.getElementById('year');
  const contactForm = document.getElementById('contact-form');

  // Set Copyright Year
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Language Manager
  function updateLangSelectorUI() {
    if (!langSelector) return;
    langSelector.innerHTML = '';

    supportedLangs.forEach(lang => {
      if (lang !== currentLang) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'lang-btn';
        btn.textContent = langNames[lang];
        btn.setAttribute('aria-label', `Switch language to ${langNames[lang]}`);
        btn.addEventListener('click', () => setLanguage(lang));
        langSelector.appendChild(btn);
      }
    });
  }

  function setLanguage(lang) {
    if (!supportedLangs.includes(lang)) lang = 'he';
    currentLang = lang;
    localStorage.setItem('amlaach_lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';

    updateLangSelectorUI();

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });
  }

  // Theme Manager
  function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('amlaach_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  // Initialize
  setLanguage(currentLang);
  setTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // --------------------------------------------------------------------------
  // Contact Form Logic — GitHub Issue Prefill
  // --------------------------------------------------------------------------
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const titleInput = document.getElementById('contact-title');
      const msgInput = document.getElementById('contact-message');

      const senderName = nameInput ? nameInput.value.trim() : '';
      const subject = titleInput ? titleInput.value.trim() : '';
      const messageContent = msgInput ? msgInput.value.trim() : '';

      if (!subject || !messageContent) return;

      const issueTitle = `[Contact]: ${subject}`;
      const issueBody = `### הודעה מ-Personal Site\n\n**שולח:** ${senderName || 'אנונימי'}\n**כותרת:** ${subject}\n\n---\n\n${messageContent}`;

      // URL to create new issue in public repo Amlaach/personal-site
      const githubUrl = `https://github.com/Amlaach/personal-site/issues/new?title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(issueBody)}`;

      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    });
  }

})();
