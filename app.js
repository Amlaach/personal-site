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
      'hero.subtitle': 'Software engineer working on algorithms, complex systems, AI, language models, security, and reverse engineering. Based in Israel.',
      'hero.ctaGithub': 'GitHub Profile',
      'hero.ctaProjects': 'Featured Projects',
      'stats.techVal': 'Python • Rust • JS • HTML',
      'stats.tech': 'Main Languages',
      'stats.specVal': 'AI • LM • Security • Reverse Eng',
      'stats.spec': 'Areas of Interest',
      'stats.engVal': 'Algorithms & Complex Systems',
      'stats.eng': 'Engineering Focus',
      'about.title': 'About Me',
      'about.subtitle': 'Building software tools and exploring technical challenges',
      'about.bioTitle': 'Software Engineer',
      'about.bioText1': 'I work on building complex systems, improving algorithmic efficiency, and exploring Artificial Intelligence and Language Models. Most of my projects are open source and available on GitHub.',
      'about.bioText2': 'My work touches on systems programming (Rust, Python), binary analysis, security research, and web development. I\'m always learning and some of these areas are still early explorations.',
      'about.labelName': 'Name:',
      'about.labelRole': 'Role:',
      'about.valueRole': 'Software Engineer',
      'about.labelFocus': 'Main Interests:',
      'about.valueFocus': 'Algorithms, AI/LM & Security',
      'about.labelGitHub': 'GitHub:',
      'about.labelCommunity': 'Community:',
      'about.mitmachimLink': 'Hamalach @ Mitmachim Top',
      'exp.title': 'Areas of Focus',
      'exp.subtitle': 'Topics and engineering domains I work on and explore',
      'exp.title1': 'Algorithms & Complex Systems',
      'exp.desc1': 'Working on computational structures, graph algorithms, concurrency models, and memory-safe system design.',
      'exp.title2': 'Artificial Intelligence & LM',
      'exp.desc2': 'Building AI pipelines, integrating language models, and working with retrieval-augmented generation (RAG) architectures.',
      'exp.title3': 'Security & Reverse Engineering',
      'exp.desc3': 'Binary analysis, decompilation, protocol reverse engineering, and security assessment. This is an ongoing area of study.',
      'exp.title4': 'Systems & Web Engineering',
      'exp.desc4': 'Building asynchronous engines, web interfaces, and modular tools using JavaScript and HTML5.',
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
      'p.subtitle': 'A selection of projects I\'ve been working on. Some are actively maintained, others are early-stage.',
      'p.p1Type': 'Systems Architecture',
      'p.featured': 'Flagship',
      'p.p1Title': 'HDDE',
      'p.p1Sub': 'A Zero-Allocation Hierarchical Utility Architecture',
      'p.p1Desc': 'An experimental architecture for minimizing memory allocation overhead. Designed for high throughput and hierarchical system structures. Written in Rust.',
      'p.p2Type': 'AI & Semantic Search',
      'p.p2Title': 'Otzaria Semantic Search',
      'p.p2Sub': 'Vector Search & AI Embeddings for Otzaria Library',
      'p.p2Desc': 'A semantic search engine built for the Otzaria digital library, enabling meaning-based queries across Hebrew text collections using vector embeddings.',
      'p.p3Type': 'Side Project / Audio',
      'p.p3Title': 'Just Music',
      'p.p3Sub': 'Lightweight Audio Player',
      'p.p3Desc': 'A simple, lightweight audio player built in spare time. Focuses on clean UI and minimal resource usage.',
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
      'tag.leisureProj': 'Side Project',
      'tech.title': 'Technologies & Tools',
      'tech.subtitle': 'Hover or tap on any badge for more details',
      'tech.catPy': 'AI, Systems & Scripting',
      'tech.catRs': 'Systems & Performance',
      'tech.catJs': 'Web & Interfaces',
      'tech.catHtml': 'Semantic Structure',
      'tech.secName': 'Security',
      'tech.catSec': 'Research & Auditing',
      'tech.reName': 'Reverse Engineering',
      'tech.catRe': 'Binary Analysis',
      'tech.aiName': 'AI',
      'tech.catAi': 'Machine Learning',
      'tech.lmName': 'Language Models',
      'tech.catLm': 'LLMs & Prompt Eng.',
      'tooltip.pyTitle': 'Python:',
      'tooltip.pyText': 'Data pipelines, AI modeling, machine learning, and automation scripting.',
      'tooltip.rsTitle': 'Rust:',
      'tooltip.rsText': 'Memory-safe systems programming, concurrency, and low-level binary tools.',
      'tooltip.jsTitle': 'JavaScript:',
      'tooltip.jsText': 'Modern ES6+ web logic, client-side applications, and interactive tools.',
      'tooltip.htmlTitle': 'HTML5:',
      'tooltip.htmlText': 'Semantic markup, accessibility, and SEO-friendly document structures.',
      'tooltip.secTitle': 'Security:',
      'tooltip.secText': 'Vulnerability research, code auditing, and security architecture review.',
      'tooltip.reTitle': 'Reverse Engineering:',
      'tooltip.reText': 'Binary analysis, decompilation, protocol reverse engineering, and system inspection.',
      'tooltip.aiTitle': 'AI:',
      'tooltip.aiText': 'Machine learning algorithms, neural networks, and computational modeling.',
      'tooltip.lmTitle': 'Language Models:',
      'tooltip.lmText': 'LLM integration, prompt engineering, and retrieval-augmented generation (RAG).',

      'profiles.title': 'Profiles & Community',
      'profiles.subtitle': 'Find me on these platforms',
      'profiles.ghTitle': 'GitHub Profile',
      'profiles.ghDesc': 'Browse open-source repositories, project code, and contributions.',
      'profiles.ghBtn': 'Visit @AMLAACH on GitHub',
      'profiles.mtTitle': 'המלאך | Mitmachim Top',
      'profiles.mtDesc': 'Haredi tech community forum — profile and activity.',
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
      'hero.subtitle': 'מהנדס תוכנה שעובד על אלגוריתמים, מערכות מורכבות, בינה מלאכותית, מודלי שפה, אבטחת מידע והנדסה לאחור. מישראל.',
      'hero.ctaGithub': 'פרופיל GitHub',
      'hero.ctaProjects': 'פרויקטים נבחרים',
      'stats.techVal': 'פייתון • ראסט • JS • HTML',
      'stats.tech': 'שפות עיקריות',
      'stats.specVal': 'AI • LM • אבטחה • הנדסה לאחור',
      'stats.spec': 'תחומי עניין',
      'stats.engVal': 'אלגוריתמים ומערכות מורכבות',
      'stats.eng': 'מיקוד הנדסי',
      'about.title': 'אודותיי',
      'about.subtitle': 'בניית כלי תוכנה וחקירת אתגרים טכניים',
      'about.bioTitle': 'מהנדס תוכנה',
      'about.bioText1': 'אני עובד על בניית מערכות מורכבות, שיפור יעילות אלגוריתמית, וחקירת בינה מלאכותית ומודלי שפה. רוב הפרויקטים שלי בקוד פתוח וזמינים ב-GitHub.',
      'about.bioText2': 'העבודה שלי נוגעת בתכנות מערכות (Rust, Python), ניתוח בינארי, מחקר אבטחה ופיתוח ווב. אני תמיד לומד וחלק מהתחומים האלה עדיין בשלבי חקירה מוקדמים.',
      'about.labelName': 'שם:',
      'about.labelRole': 'תפקיד:',
      'about.valueRole': 'מהנדס תוכנה',
      'about.labelFocus': 'תחומי עניין:',
      'about.valueFocus': 'אלגוריתמים, AI/LM ואבטחה',
      'about.labelGitHub': 'גיטהאב:',
      'about.labelCommunity': 'קהילה:',
      'about.mitmachimLink': 'המלאך בפורום מתמחים טופ',
      'exp.title': 'תחומי עיסוק',
      'exp.subtitle': 'נושאים ותחומי הנדסה שאני עובד עליהם וחוקר',
      'exp.title1': 'אלגוריתמים ומערכות מורכבות',
      'exp.desc1': 'עבודה על מבני נתונים, אלגוריתמי גרפים, מודלי מקביליות וארכיטקטורות מערכת בטוחות לזיכרון.',
      'exp.title2': 'בינה מלאכותית ומודלי שפה',
      'exp.desc2': 'בניית צינורות עיבוד AI, אינטגרציית מודלי שפה וארכיטקטורות שליפת מידע (RAG).',
      'exp.title3': 'אבטחת מידע והנדסה לאחור',
      'exp.desc3': 'ניתוח קוד בינארי, דקומפילציה, הנדסה לאחור של פרוטוקולים והערכת אבטחה. תחום שעדיין בלמידה.',
      'exp.title4': 'הנדסת מערכות וווב',
      'exp.desc4': 'בניית מנועים אסינכרוניים, ממשקי ווב וכלים מודולריים ב-JavaScript ו-HTML5.',
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
      'p.subtitle': 'מבחר פרויקטים שעבדתי עליהם. חלקם בפיתוח פעיל, חלקם בשלב מוקדם.',
      'p.p1Type': 'ארכיטקטורת מערכות',
      'p.featured': 'פרויקט דגל',
      'p.p1Title': 'HDDE',
      'p.p1Sub': 'ארכיטקטורת היררכיה ללא הצאת זיכרון',
      'p.p1Desc': 'ארכיטקטורה ניסיונית למזעור תקורת הצאת זיכרון. מתוכננת למהירות עיבוד גבוהה ומבנים היררכיים. כתובה ב-Rust.',
      'p.p2Type': 'AI וחיפוש סמנטי',
      'p.p2Title': 'חיפוש סמנטי לאוצריא',
      'p.p2Sub': 'חיפוש וקטורי ו-AI Embeddings עבור אוצריא',
      'p.p2Desc': 'מנוע חיפוש סמנטי שפותח עבור ספריית אוצריא, המאפשר חיפוש לפי משמעות במאגרי טקסט בעברית באמצעות הטמעות וקטוריות.',
      'p.p3Type': 'פרויקט צד • אודיו',
      'p.p3Title': 'Just Music',
      'p.p3Sub': 'נגן אודיו קל משקל',
      'p.p3Desc': 'נגן אודיו פשוט וקל משקל שנבנה בשעות הפנאי. ממוקד בממשק נקי וצריכת משאבים מינימלית.',
      'p.viewRepo': 'צפה בקוד ב-GitHub',
      'tag.zeroAlloc': 'ללא הצאת זיכרון',
      'tag.algorithms': 'אלגוריתמים',
      'tag.complexSys': 'מערכות מורכבות',
      'tag.performance': 'ביצועים',
      'tag.semanticSearch': 'חיפוש סמנטי',
      'tag.aiNlp': 'AI / עיבוד שפה',
      'tag.vectorEmbeddings': 'הטמעות וקטוריות',
      'tag.audioApi': 'מנוע אודיו',
      'tag.uiDesign': 'עיצוב ממשק',
      'tag.leisureProj': 'פרויקט צד',
      'tech.title': 'טכנולוגיות וכלים',
      'tech.subtitle': 'רחף או לחץ על כל באדג\' לפרטים נוספים',
      'tech.catPy': 'AI, מערכות וסקריפטינג',
      'tech.catRs': 'מערכות וביצועים',
      'tech.catJs': 'ווב וממשקים',
      'tech.catHtml': 'מבנה סמנטי',
      'tech.secName': 'אבטחת מידע',
      'tech.catSec': 'מחקר וביקורת',
      'tech.reName': 'הנדסה לאחור',
      'tech.catRe': 'ניתוח בינארי',
      'tech.aiName': 'בינה מלאכותית',
      'tech.catAi': 'למידת מכונה',
      'tech.lmName': 'מודלי שפה',
      'tech.catLm': 'LLMs והנדסת פרומפטים',
      'tooltip.pyTitle': 'Python:',
      'tooltip.pyText': 'צינורות עיבוד נתונים, מידול AI, למידת מכונה ואוטומציה.',
      'tooltip.rsTitle': 'Rust:',
      'tooltip.rsText': 'תכנות מערכות בטוח לזיכרון, מקביליות וכלי בינארי נמוכי-דרג.',
      'tooltip.jsTitle': 'JavaScript:',
      'tooltip.jsText': 'לוגיקת ווב מודרנית (ES6+), אפליקציות צד לקוח וכלים אינטראקטיביים.',
      'tooltip.htmlTitle': 'HTML5:',
      'tooltip.htmlText': 'מבנה סמנטי, נגישות ומסמכים ידידותיים ל-SEO.',
      'tooltip.secTitle': 'אבטחת מידע:',
      'tooltip.secText': 'מחקר פגיעויות, ביקורת קוד וסקירת ארכיטקטורת אבטחה.',
      'tooltip.reTitle': 'הנדסה לאחור:',
      'tooltip.reText': 'ניתוח בינארי, דקומפילציה, הנדסה לאחור של פרוטוקולים ובדיקת מערכות.',
      'tooltip.aiTitle': 'AI:',
      'tooltip.aiText': 'אלגוריתמי למידת מכונה, רשתות נוירונים ומידול חישובי.',
      'tooltip.lmTitle': 'מודלי שפה:',
      'tooltip.lmText': 'אינטגרציית LLM, הנדסת פרומפטים וארכיטקטורות RAG.',

      'profiles.title': 'פרופילים וקהילה',
      'profiles.subtitle': 'מצאו אותי בפלטפורמות הבאות',
      'profiles.ghTitle': 'פרופיל GitHub',
      'profiles.ghDesc': 'מאגרי קוד פתוח, פרויקטים ותרומות.',
      'profiles.ghBtn': 'בקר ב-@AMLAACH ב-GitHub',
      'profiles.mtTitle': 'המלאך | מתמחים טופ',
      'profiles.mtDesc': 'פורום הטכנולוגיה של הציבור החרדי — פרופיל ופעילות.',
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

    // Update placeholders for form fields
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
