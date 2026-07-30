/**
 * AMLAACH Portfolio - Core Application Logic
 * Pure ES6 JS handling Themes (Dark Default), Bilingual i18n (English Default / Hebrew RTL), 
 * Interactive Particle Canvas, & ScrollSpy Navigation.
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. i18n Translations Dictionary
  // --------------------------------------------------------------------------
  const translations = {
    en: {
      langLabel: 'עברית',
      'a11y.skip': 'Skip to main content',
      'nav.about': 'About',
      'nav.expertise': 'Specializations',
      'nav.projects': 'Projects',
      'nav.techstack': 'Tech Stack',
      'nav.profiles': 'Profiles',
      'hero.badge': 'Algorithms • Complex Systems • AI',
      'hero.titlePrefix': "Hi, I'm",
      'hero.subtitle': 'Israeli Haredi Software Engineer specializing in high-performance algorithms, complex systems, Artificial Intelligence (AI), Language Models (LM), cybersecurity, and reverse engineering.',
      'hero.ctaGithub': 'GitHub Profile',
      'hero.ctaProjects': 'Featured Projects',
      'stats.techVal': 'Python • Rust • JS • HTML',
      'stats.tech': 'Core Languages & Stack',
      'stats.specVal': 'AI • LM • Security • Reverse Eng',
      'stats.spec': 'Primary Specializations',
      'stats.engVal': 'Algorithms & Complex Systems',
      'stats.eng': 'Engineering Focus',
      'about.title': 'About Me',
      'about.subtitle': 'Engineering deep technical solutions with mathematical logic & precision',
      'about.bioTitle': 'Israeli Haredi Software Engineer',
      'about.bioText1': 'I am a software engineer focused on building high-scale complex systems, optimizing algorithmic efficiency, and researching Artificial Intelligence (AI) and Language Models (LM).',
      'about.bioText2': 'Combining deep analytical discipline with low-level systems programming in Rust and Python, my work encompasses binary analysis, reverse engineering, cybersecurity research, and modern web architectures.',
      'about.labelName': 'Name:',
      'about.labelRole': 'Role:',
      'about.valueRole': 'Software Engineer (AI & Systems)',
      'about.labelFocus': 'Core Focus:',
      'about.valueFocus': 'Algorithms, AI/LM & Security',
      'about.labelGitHub': 'GitHub:',
      'about.labelCommunity': 'Community:',
      'about.mitmachimLink': 'Hamalach @ Mitmachim Top',
      'exp.title': 'Specializations & Pillars',
      'exp.subtitle': 'Engineering domains and core computational capabilities',
      'exp.title1': 'Algorithms & Complex Systems',
      'exp.desc1': 'Designing high-performance computational structures, graph algorithms, concurrency models, and memory-safe system architectures.',
      'exp.title2': 'Artificial Intelligence & LM',
      'exp.desc2': 'Developing AI pipelines, integrating Language Models (LM/LLMs), neural processing engines, and intelligent retrieval architectures (RAG).',
      'exp.title3': 'Security & Reverse Engineering',
      'exp.desc3': 'Deep binary analysis, decompilation, protocol reverse engineering, code audit, and cryptographic security assessment.',
      'exp.title4': 'Systems & Web Engineering',
      'exp.desc4': 'Building ultra-fast asynchronous engines, modern user interfaces, and clean modular web tools using JavaScript & HTML5.',
      'pill.concurrency': 'Concurrency',
      'pill.optimization': 'Optimization',
      'pill.aiModels': 'AI Models',
      'pill.neuralNets': 'Neural Nets',
      'pill.re': 'Reverse Eng',
      'pill.sec': 'Security',
      'pill.binary': 'Binary Audit',
      'pill.async': 'Async Engines',
      'pill.glass': 'CSS3 Glass',
      'p.title': 'Featured Projects',
      'p.subtitle': 'Selected software architectures, AI systems, and applications',
      'p.p1Type': 'Priority #1 • Core Systems Architecture',
      'p.featured': 'Flagship',
      'p.p1Sub': 'A Zero-Allocation Hierarchical Utility Architecture',
      'p.p1Desc': 'High-performance computational architecture designed for zero memory allocation overhead, extreme throughput, and complex system hierarchies.',
      'p.p2Type': 'AI & Semantic NLP Engine',
      'p.p2Title': 'Otzaria Semantic Search',
      'p.p2Sub': 'Vector Search & AI Embeddings for Otzaria Library',
      'p.p2Desc': 'Advanced vector-based semantic search engine built for the Otzaria digital library, empowering intelligent contextual queries across massive Hebrew text corpora using AI embeddings.',
      'p.p3Type': 'Leisure / Audio Application',
      'p.p3Title': 'Just Music',
      'p.p3Sub': 'Lightweight Audio Player Application',
      'p.p3Desc': 'Developed in leisure time - a clean, lightweight audio player application focusing on minimal system footprint, fast responsiveness, and smooth music playback.',
      'p.viewRepo': 'View Repository',
      'tag.zeroAlloc': 'Zero-Allocation',
      'tag.algorithms': 'Algorithms',
      'tag.complexSys': 'Complex Systems',
      'tag.performance': 'Performance',
      'tag.semanticSearch': 'Semantic Search',
      'tag.aiNlp': 'AI / NLP',
      'tag.vectorEmbeddings': 'Vector Embeddings',
      'tag.audioApi': 'Audio API',
      'tag.uiDesign': 'UI Design',
      'tag.leisureProj': 'Leisure Project',
      'tech.title': 'Technologies & Stack',
      'tech.subtitle': 'Hover or tap on any badge to reveal interactive technical tooltips',
      'tech.catPy': 'AI, Systems & Scripting',
      'tech.catRs': 'Systems & Performance',
      'tech.catJs': 'Web Logic & Engines',
      'tech.catHtml': 'Semantic Structure',
      'tech.secName': 'Cybersecurity',
      'tech.catSec': 'Security & Auditing',
      'tech.reName': 'Reverse Engineering',
      'tech.catRe': 'Binary Analysis',
      'tech.aiName': 'Artificial Intelligence',
      'tech.catAi': 'Machine Intelligence',
      'tech.lmName': 'Language Models (LM)',
      'tech.catLm': 'LLMs & Prompt Engineering',
      'tooltip.pyTitle': 'Python Expertise:',
      'tooltip.pyText': 'High-performance data pipelines, AI modeling, machine learning algorithms, automation & computational research.',
      'tooltip.rsTitle': 'Rust Expertise:',
      'tooltip.rsText': 'Memory-safe systems programming, high-concurrency algorithms, low-level binary tools & security engines.',
      'tooltip.jsTitle': 'JavaScript Expertise:',
      'tooltip.jsText': 'Modern ES6+ asynchronous logic, client-side rendering engines, dynamic UIs, and interactive web tools.',
      'tooltip.htmlTitle': 'HTML5 Expertise:',
      'tooltip.htmlText': 'Clean semantic markup, screen-reader accessibility (A11y), SEO optimization, and structured document trees.',
      'tooltip.secTitle': 'Security Expertise:',
      'tooltip.secText': 'Vulnerability research, threat modeling, code auditing, cryptographic verification, and secure architecture.',
      'tooltip.reTitle': 'Reverse Engineering:',
      'tooltip.reText': 'Binary decompilation, machine code disassembly, protocol reverse engineering, and low-level system inspection.',
      'tooltip.aiTitle': 'AI Expertise:',
      'tooltip.aiText': 'Machine learning algorithms, neural networks, intelligent data pipelines, and deep computational modeling.',
      'tooltip.lmTitle': 'Language Models (LM):',
      'tooltip.lmText': 'Large Language Model (LLM) integration, prompt engineering, RAG retrieval architectures, and fine-tuning.',
      'profiles.title': 'Profiles & Community',
      'profiles.subtitle': 'Connect across development platforms and tech forums',
      'profiles.ghTitle': 'GitHub Profile',
      'profiles.ghDesc': 'Explore open-source repositories, system architectures, algorithmic libraries, and code.',
      'profiles.ghBtn': 'Visit @AMLAACH on GitHub',
      'profiles.mtTitle': 'המלאך | Mitmachim Top',
      'profiles.mtDesc': 'Israeli Haredi Tech Forum - Community profile & technological contributions.',
      'profiles.mtBtn': 'Visit Mitmachim Top Profile',
      'footer.rights': 'All rights reserved.',
      'footer.top': '↑ Top'
    },
    he: {
      langLabel: 'English',
      'a11y.skip': 'דלג לתוכן המרכזי',
      'nav.about': 'אודות',
      'nav.expertise': 'התמחויות',
      'nav.projects': 'פרויקטים',
      'nav.techstack': 'טכנולוגיות',
      'nav.profiles': 'פרופילים',
      'hero.badge': 'אלגוריתמים • מערכות מורכבות • AI',
      'hero.titlePrefix': 'שלום, אני',
      'hero.subtitle': 'מהנדס תוכנה חרדי מתמחה באלגוריתמים מתקדמים, מערכות מורכבות, בינה מלאכותית (AI), מודלי שפה (LM), אבטחת מידע והנדסה לאחור.',
      'hero.ctaGithub': 'פרופיל GitHub',
      'hero.ctaProjects': 'פרויקטים נבחרים',
      'stats.techVal': 'פייתון • ראסט • JS • HTML',
      'stats.tech': 'שפות וטכנולוגיות ליבה',
      'stats.specVal': 'AI • LM • אבטחה • הנדסה לאחור',
      'stats.spec': 'התמחויות מרכזיות',
      'stats.engVal': 'אלגוריתמים ומערכות מורכבות',
      'stats.eng': 'מיקוד הנדסי',
      'about.title': 'אודותיי',
      'about.subtitle': 'פיתוח פתרונות טכנולוגיים עמוקים מתוך לוגיקה מתמטית ודיוק',
      'about.bioTitle': 'מהנדס תוכנה חרדי',
      'about.bioText1': 'אני מהנדס תוכנה המתמחה בבניית מערכות מורכבות בסקייל גבוה, אופטימיזציה של אלגוריתמים, ומחקר מתקדם בתחומי הבינה המלאכותית (AI) ומודלי שפה (LM).',
      'about.bioText2': 'בשילוב בין חשיבה אנליטית עמוקה לתכנות מערכות נמוך-דרג ב-Rust ו-Python, העבודה שלי כוללת ניתוח בינארי, הנדסה לאחור, מחקר אבטחת מידע וארכיטקטורת ווב מודרנית.',
      'about.labelName': 'שם:',
      'about.labelRole': 'תפקיד:',
      'about.valueRole': 'מהנדס תוכנה (AI ומערכות)',
      'about.labelFocus': 'התמחות מרכזית:',
      'about.valueFocus': 'אלגוריתמים, AI/LM ואבטחה',
      'about.labelGitHub': 'גיטהאב:',
      'about.labelCommunity': 'קהילה:',
      'about.mitmachimLink': 'המלאך בפורום מתמחים טופ',
      'exp.title': 'תחומי התמחות וליבה',
      'exp.subtitle': 'תחומי הנדסה ויכולות חישוביות מרכזיות',
      'exp.title1': 'אלגוריתמים ומערכות מורכבות',
      'exp.desc1': 'תכנון מבני נתונים מתקדמים, אלגוריתמי גרפים, מודלי מקביליות וארכיטקטורות מערכת בטוחות לזיכרון.',
      'exp.title2': 'בינה מלאכותית ומודלי שפה (LM)',
      'exp.desc2': 'פיתוח צינורות עיבוד AI, אינטגרציית מודלי שפה (LM/LLMs), מנועי עיבוד נוירוניים וארכיטקטורות שליפת מידע (RAG).',
      'exp.title3': 'אבטחת מידע והנדסה לאחור',
      'exp.desc3': 'ניתוח קוד בינארי, דקומפילציה, הנדסה לאחור של פרוטוקולים, סקירת אבטחת קוד והערכת סיכונים קריפטוגרפית.',
      'exp.title4': 'הנדסת מערכות וווב',
      'exp.desc4': 'בניית מנועים אסינכרוניים מהירים, ממשקי משתמש מודרניים וכלים מודולריים ב-JavaScript ו-HTML5.',
      'pill.concurrency': 'מקביליות',
      'pill.optimization': 'אופטימיזציה',
      'pill.aiModels': 'מודלי AI',
      'pill.neuralNets': 'רשתות נוירונים',
      'pill.re': 'הנדסה לאחור',
      'pill.sec': 'אבטחת מידע',
      'pill.binary': 'ביקורת בינארית',
      'pill.async': 'מנועים אסינכרוניים',
      'pill.glass': 'עיצוב זכוכית CSS3',
      'p.title': 'פרויקטים נבחרים',
      'p.subtitle': 'ארכיטקטורות תוכנה, מערכות AI ואפליקציות נבחרות',
      'p.p1Type': 'עדיפות #1 • ארכיטקטורת מערכות ליבה',
      'p.featured': 'פרויקט דגל',
      'p.p1Sub': 'ארכיטקטורת היררכיה חישובית ללא הצאת זיכרון',
      'p.p1Desc': 'ארכיטקטורת חישוב בעלת ביצועים גבוהים המיועדת לאפס הצאת זיכרון (Zero-Allocation), מהירות עיבוד מקסימלית והיררכיית מערכות מורכבות.',
      'p.p2Type': 'מנוע AI וחיפוש סמנטי',
      'p.p2Title': 'חיפוש סמנטי לאוצריא',
      'p.p2Sub': 'חיפוש וקטורי ו-Embeddings של AI לספריית אוצריא',
      'p.p2Desc': 'מנוע חיפוש סמנטי מבוסס וקטורים שפותח עבור ספריית אוצריא, המאפשר שאילתות סמנטיות חכמות על מאגרי טקסט תורניים נרחבים בעזרת AI Embeddings.',
      'p.p3Type': 'בזמן הפנאי • אפליקציית אודיו',
      'p.p3Title': 'Just Music',
      'p.p3Sub': 'נגן אודיו קל משקל ומהיר',
      'p.p3Desc': 'פותח בשעות הפנאי - נגן אודיו קל משקל ומהיר הממוקד בצריכת משאבים מינימלית, ממשק נקי וניגון מוזיקה חלק.',
      'p.viewRepo': 'צפה בגרסה ב-GitHub',
      'tag.zeroAlloc': 'ללא הצאת זיכרון',
      'tag.algorithms': 'אלגוריתמים',
      'tag.complexSys': 'מערכות מורכבות',
      'tag.performance': 'ביצועים',
      'tag.semanticSearch': 'חיפוש סמנטי',
      'tag.aiNlp': 'AI / עיבוד שפה',
      'tag.vectorEmbeddings': 'הטמעות וקטוריות',
      'tag.audioApi': 'מנוע אודיו',
      'tag.uiDesign': 'עיצוב ממשק',
      'tag.leisureProj': 'פרויקט בזמן הפנאי',
      'tech.title': 'טכנולוגיות וכישורים',
      'tech.subtitle': 'רחף או לחץ על כל באדג\' לצפייה בטולטיפ טכני מפורט',
      'tech.catPy': 'AI, מערכות וסקריפטינג',
      'tech.catRs': 'מערכות וביצועים גבוהים',
      'tech.catJs': 'לוגיקת ווב ומנועים',
      'tech.catHtml': 'מבנה סמנטי ונגישות',
      'tech.secName': 'אבטחת מידע',
      'tech.catSec': 'מחקר אבטחה וביקורת',
      'tech.reName': 'הנדסה לאחור',
      'tech.catRe': 'ניתוח קוד בינארי',
      'tech.aiName': 'בינה מלאכותית',
      'tech.catAi': 'אינטליגנציה חישובית',
      'tech.lmName': 'מודלי שפה (LM)',
      'tech.catLm': 'מודלי שפה ו-LLMs',
      'tooltip.pyTitle': 'מומחיות ב-Python:',
      'tooltip.pyText': 'צינורות עיבוד נתונים מהירים, מידול AI, אלגוריתמי למידת מכונה, אוטומציה ומחקר חישובי.',
      'tooltip.rsTitle': 'מומחיות ב-Rust:',
      'tooltip.rsText': 'תכנות מערכות בטוח לזיכרון, אלגוריתמי מקביליות בסקייל גבוה, כלי בינארי נמוכי-דרג ומנועי אבטחה.',
      'tooltip.jsTitle': 'מומחיות ב-JavaScript:',
      'tooltip.jsText': 'לוגיקה אסינכרונית מודרנית (ES6+), מנועי רינדור בצד הלקוח, ממשקים דינמיים וכלים אינטראקטיביים.',
      'tooltip.htmlTitle': 'מומחיות ב-HTML5:',
      'tooltip.htmlText': 'מבנה סמנטי נקי, נגישות לקוראי מסך (A11y), אופטימיזציית SEO ומבנה מסמך תקין.',
      'tooltip.secTitle': 'מומחיות באבטחת מידע:',
      'tooltip.secText': 'מחקר פגיצויות, מידול איומים, ביקורת קוד, אימות קריפטוגרפי וארכיטקטורה מאובטחת.',
      'tooltip.reTitle': 'הנדסה לאחור (Reverse Eng):',
      'tooltip.reText': 'דקומפילציית קוד בינארי, ניתוח שפת מכונה Assembly, הנדסה לאחור של פרוטוקולים ובדיקת מערכות.',
      'tooltip.aiTitle': 'מומחיות ב-AI:',
      'tooltip.aiText': 'אלגוריתמי למידת מכונה, רשתות נוירונים, צינורות נתונים חכמים ומידול חישובי עמוק.',
      'tooltip.lmTitle': 'מודלי שפה (LM):',
      'tooltip.lmText': 'אינטגרציית מודלי שפה גדולים (LLM), הנדסת פרומפטים, ארכיטקטורות RAG ו-Fine-tuning.',
      'profiles.title': 'פרופילים וקהילה',
      'profiles.subtitle': 'התחברות בפלטפורמות פיתוח ופורומים טכנולוגיים',
      'profiles.ghTitle': 'פרופיל GitHub',
      'profiles.ghDesc': 'מוזמנים לצפות במאגרי הקוד הפתוח, ארכיטקטורות מערכת ואלגוריתמים ב-GitHub.',
      'profiles.ghBtn': 'בקר ב-@AMLAACH ב-GitHub',
      'profiles.mtTitle': 'המלאך | מתמחים טופ',
      'profiles.mtDesc': 'פורום הטכנולוגיה של הציבור החרדי - פרופיל משתמש ופעילות בקהילת הטכנולוגיה.',
      'profiles.mtBtn': 'צפה בפרופיל במתמחים טופ',
      'footer.rights': 'כל הזכויות שמורות.',
      'footer.top': '↑ למעלה'
    }
  };

  // State Variables (Default: English & Dark Mode)
  let currentLang = localStorage.getItem('amlaach_lang') || 'en';
  let currentTheme = localStorage.getItem('amlaach_theme') || 'dark';

  // DOM References
  const langToggleBtn = document.getElementById('lang-toggle');
  const langLabel = document.getElementById('lang-label');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const yearEl = document.getElementById('year');
  const sections = document.querySelectorAll('section[id]');

  // Initialize Footer Year
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Language Manager
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('amlaach_lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';

    if (langLabel) {
      langLabel.textContent = translations[lang].langLabel;
    }

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  // Theme Manager
  function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('amlaach_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  // Set English & Dark mode defaults
  setLanguage(currentLang);
  setTheme(currentTheme);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'he' : 'en');
    });
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggleBtn.setAttribute('aria-expanded', isOpen);
    });

    const links = navMenu.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 2. Interactive Particles Canvas Background
  // --------------------------------------------------------------------------
  const canvas = document.getElementById('particles-canvas');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let particles = [];
    const particleCount = Math.min(Math.floor(width / 24), 45);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 1.8 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = currentTheme === 'dark' ? 'rgba(56, 189, 248, 0.45)' : 'rgba(2, 132, 199, 0.35)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = currentTheme === 'dark' 
              ? `rgba(56, 189, 248, ${0.2 * (1 - dist / 115)})` 
              : `rgba(2, 132, 199, ${0.15 * (1 - dist / 115)})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animateParticles);
    }

    animateParticles();

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });
  }

  // --------------------------------------------------------------------------
  // 3. Scroll Reveal & ScrollSpy Active Navigation
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.data-reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-list a[href*=${sectionId}]`);

      if (targetLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetLink.classList.add('active');
        } else {
          targetLink.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

})();
