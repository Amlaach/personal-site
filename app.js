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
      'nav.philosophy': 'How I Think',
      'nav.projects': 'Projects',
      'nav.currently': 'Currently',
      'nav.experiments': 'Experiments',
      'nav.timeline': 'Timeline',
      'nav.techstack': 'Stack',
      'nav.profiles': 'Profiles',
      
      // Hero
      'hero.subtitle': 'Algorithms, systems engineering, AI infrastructure and high-performance computing.',
      'hero.pills': 'Rust · Python · Algorithms · AI · Systems',
      'hero.btnWork': 'View my work',

      // About
      'about.title': 'About',
      'about.subtitle': 'Software engineer based in Israel focused on core engineering and performance.',
      'about.bioTitle': 'Software Engineer',
      'about.bioText1': 'I enjoy working on algorithms, performance-critical systems, and AI infrastructure. Most of my work is open-source and built around understanding low-level computational constraints.',
      'about.bioText2': 'My engineering focus centers on memory-safe systems programming in Rust, data pipelines in Python, search infrastructure, and binary inspection.',
      'about.labelName': 'Name:',
      'about.labelRole': 'Role:',
      'about.valueRole': 'Software Engineer',
      'about.labelFocus': 'Core Focus:',
      'about.valueFocus': 'Algorithms, Systems & AI',
      'about.labelGitHub': 'GitHub:',
      'about.labelCommunity': 'Community:',
      'about.mitmachimLink': 'Hamalach @ Mitmachim Top',

      // Philosophy (How I Think)
      'phil.title': 'How I Think',
      'phil.subtitle': 'Engineering approach to complexity, performance, and architecture',
      'phil.quote1': 'I care about the parts of software that are easy to overlook: memory access, algorithmic complexity, concurrency, cache behavior and the cost of abstraction.',
      'phil.quote2': 'I prefer understanding why a system is slow before adding another layer of optimization.',

      // Things I Care About
      'val.title1': 'Performance',
      'val.desc1': 'Making hardware do useful work before adding more hardware.',
      'val.title2': 'Algorithms',
      'val.desc2': 'Finding better ways to solve the problem, not merely faster implementations of the wrong solution.',
      'val.title3': 'Systems',
      'val.desc3': 'Memory, concurrency, data layout and everything CPUs apparently decided humans should understand.',
      'val.title4': 'AI',
      'val.desc4': 'Using models where they help, while keeping the underlying system understandable.',

      // Projects
      'p.title': 'Featured Projects',
      'p.subtitle': 'Key software architectures and engineering solutions',
      'p.featured': 'Flagship',
      'p.hddeTagline': 'Zero-allocation hierarchical decision architecture for high-performance systems.',
      'p.labelWhy': 'Why I built it',
      'p.hddeWhy': 'To eliminate runtime heap allocation overhead in dynamic utility evaluation systems.',
      'p.labelInteresting': 'What makes it interesting',
      'p.hddeInteresting': 'Organizes complex hierarchical decision trees into flat contiguous memory buffers. Maximizes CPU cache locality while avoiding dynamic allocations during execution.',

      'p.otzariaTagline': 'Hybrid lexical + semantic retrieval for large Hebrew corpora.',
      'p.otzariaWhy': 'To enable contextual, meaning-based queries across thousands of historical Hebrew texts in Otzaria.',
      'p.otzariaInteresting': 'Combines BM25 lexical indexing with dense vector embeddings (Qwen3 0.6B) tuned for Hebrew morphology. Delivers fast local retrieval on consumer hardware.',

      'p.jmTagline': 'Lightweight audio player focusing on minimal system footprint.',
      'p.jmWhy': 'Created in spare time for instant audio playback without heavy framework dependencies.',
      'p.jmInteresting': 'Built with vanilla Web Audio APIs and lightweight DOM manipulation for instant startup and low RAM usage.',

      // Currently Building
      'curr.title': 'Currently Building',
      'curr.subtitle': 'Active projects, ongoing engineering work, and current research',
      'curr.hdde': 'Hierarchical decision architecture in Rust focusing on cache layout and zero allocations.',
      'curr.otzaria': 'Hybrid lexical + semantic retrieval engine for large Hebrew text corpora.',
      'curr.aiResTitle': 'AI / Local Inference Research',
      'curr.aiResDesc': 'Exploring CPU inference, quantization, MoE architectures and memory-efficient computation.',

      // Selected Experiments & Research
      'exp.title': 'Experiments & Research',
      'exp.subtitle': 'Focused explorations and technical benchmarks',
      'exp1.title': 'CPU Inference Optimization',
      'exp1.desc': 'Testing SIMD vectorization and cache locality for small LLM inference on consumer CPUs.',
      'exp2.title': 'MoE Memory Locality',
      'exp2.desc': 'Analyzing Mixture-of-Experts routing overhead and expert weight layout in system RAM.',
      'exp3.title': 'Hebrew Vector Retrieval',
      'exp3.desc': 'Benchmarking morphological tokenizers and embedding quantization for Hebrew text.',
      'exp4.title': 'Zero-Allocation Structures',
      'exp4.desc': 'Designing slab allocators and arena memory buffers for deterministic execution.',
      'exp5.title': 'Quantization Experiments',
      'exp5.desc': 'Comparing INT4 vs INT8 quantization accuracy loss on specialized domain embeddings.',
      'exp6.title': 'Cache-Aware Algorithms',
      'exp6.desc': 'Structuring graph traversal algorithms for CPU L1/L2 cache prefetching efficiency.',

      // Timeline
      'time.title': 'Timeline',
      'time.subtitle': 'Evolution of engineering focus and technical milestones',
      'time.y2024': 'Software & AI projects — Building core tools and exploring machine learning fundamentals.',
      'time.y2025': 'Otzaria / Search Infrastructure — Building hybrid lexical and vector search engines.',
      'time.y2026': 'Systems, Rust & Algorithms — Focus on zero-allocation architectures and CPU inference research.',

      // Technologies
      'tech.title': 'Technologies',
      'tech.subtitle': 'Core languages, tools, and technical areas',
      'tech.coreTitle': 'Core Stack',
      'tech.alsoTitle': 'Also Work With',
      'tech.pillAlgorithms': 'Algorithms',
      'tech.pillSystems': 'Systems Engineering',
      'tech.pillSearch': 'Vector Search',
      'tech.pillSecurity': 'Security & Binary Audit',
      'tech.pillRE': 'Reverse Engineering',

      // Profiles & Footer
      'profiles.title': 'Open Source & Profiles',
      'profiles.subtitle': 'Connect across development platforms and tech communities',
      'profiles.ghTitle': 'GitHub Profile',
      'profiles.ghDesc': 'Browse open-source repositories, system architectures, algorithms, and code.',
      'profiles.ghBtn': 'Visit @AMLAACH on GitHub',
      'profiles.mtTitle': 'המלאך | Mitmachim Top',
      'profiles.mtDesc': 'Haredi tech community forum — profile and community activity.',
      'profiles.mtBtn': 'Visit Mitmachim Top Profile',
      'footer.rights': 'All rights reserved.',
      'footer.top': '↑ Top'
    },
    he: {
      langLabel: 'English',
      'a11y.skip': 'דלג לתוכן המרכזי',
      'nav.about': 'אודות',
      'nav.philosophy': 'איך אני חושב',
      'nav.projects': 'פרויקטים',
      'nav.currently': 'כעת בפיתוח',
      'nav.experiments': 'ניסויים',
      'nav.timeline': 'ציר זמן',
      'nav.techstack': 'טכנולוגיות',
      'nav.profiles': 'פרופילים',

      // Hero
      'hero.subtitle': 'אלגוריתמים, הנדסת מערכות, תשתיות AI וחישוב בעל ביצועים גבוהים.',
      'hero.pills': 'Rust · Python · אלגוריתמים · AI · מערכות',
      'hero.btnWork': 'צפה בעבודות שלי',

      // About
      'about.title': 'אודות',
      'about.subtitle': 'מהנדס תוכנה מישראל הממוקד בהנדסת ליבה וביצועים.',
      'about.bioTitle': 'מהנדס תוכנה',
      'about.bioText1': 'אני עובד על אלגוריתמים, מערכות קריטיות לביצועים, ותשתיות בינה מלאכותית. רוב העבודות שלי בקוד פתוח ומבוססות על הבנת מגבלות חישוב נמוכות-דרג.',
      'about.bioText2': 'מיקוד ההנדסה שלי מתרכז בתכנות מערכות בטוח לזיכרון ב-Rust, צינורות נתונים ב-Python, תשתיות חיפוש, וביקורת בינארית.',
      'about.labelName': 'שם:',
      'about.labelRole': 'תפקיד:',
      'about.valueRole': 'מהנדס תוכנה',
      'about.labelFocus': 'מיקוד מרכזי:',
      'about.valueFocus': 'אלגוריתמים, מערכות ו-AI',
      'about.labelGitHub': 'גיטהאב:',
      'about.labelCommunity': 'קהילה:',
      'about.mitmachimLink': 'המלאך בפורום מתמחים טופ',

      // Philosophy (How I Think)
      'phil.title': 'איך אני חושב',
      'phil.subtitle': 'גישה הנדסית למורכבות, ביצועים וארכיטקטורה',
      'phil.quote1': 'אכפת לי מהחלקים בתוכנה שקל להתעלם מהם: גישה לזיכרון, מורכבות אלגוריתמית, מקביליות, התנהגות Cache ועלות האבסטרקציה.',
      'phil.quote2': 'אני מעדיף להבין למה מערכת איטית לפני שמוסיפים עוד שכבה של אופטימיזציה.',

      // Things I Care About
      'val.title1': 'ביצועים',
      'val.desc1': 'לגרום לחומרה לעשות עבודה מועילה לפני שמוסיפים עוד חומרה.',
      'val.title2': 'אלגוריתמים',
      'val.desc2': 'מציאת דרכים טובות יותר לפתור את הבעיה, ולא רק מימוש מהיר יותר של הפתרון השגוי.',
      'val.title3': 'מערכות',
      'val.desc3': 'זיכרון, מקביליות, מבנה נתונים וכל מה שמעבדים כנראה החליטו שבני אדם אמורים להבין.',
      'val.title4': 'בינה מלאכותית',
      'val.desc4': 'שימוש במודלים איפה שהם עוזרים, תוך שמירה על המערכת שמתחתיהם מובנת.',

      // Projects
      'p.title': 'פרויקטים נבחרים',
      'p.subtitle': 'ארכיטקטורות תוכנה ופתרונות הנדסיים מרכזיים',
      'p.featured': 'פרויקט דגל',
      'p.hddeTagline': 'ארכיטקטורת היררכיה ללא הצאת זיכרון עבור מערכות בעלות ביצועים גבוהים.',
      'p.labelWhy': 'למה בניתי את זה',
      'p.hddeWhy': 'כדי לבטל את תקורת הצאת הזיכרון (heap allocations) בזמן ריצה במערכות הערכה דינמיות.',
      'p.labelInteresting': 'מה הופך את זה למעניין',
      'p.hddeInteresting': 'מארגן עצי החלטה היררכיים מורכבים בתוך חוצצי זיכרון רציפים ושטוחים. ממקסם את ניצול ה-Cache של המעבד תוך הימנעות ממוחלטת מהקצאות דינמיות בזמן ביצוע.',

      'p.otzariaTagline': 'שליפה היברידית לקסיקלית + סמנטית עבור מאגרי טקסט בעברית.',
      'p.otzariaWhy': 'כדי לאפשר שאילתות סמנטיות מבוססות הקשר ומשמעות על גבי אלפי טקסטים תורניים בספריית אוצריא.',
      'p.otzariaInteresting': 'משלב אינדוקס לקסיקלי בשיטת BM25 עם הטמעות וקטוריות צפופות (Qwen3 0.6B) המותאמות למורפולוגיה של השפה העברית. מספק שליפה מקומית מהירה על חומרה ביתית.',

      'p.jmTagline': 'נגן אודיו קל משקל הממוקד בצריכת משאבים מינימלית.',
      'p.jmWhy': 'נוצר בזמן הפנאי עבור ניגון אודיו מיידי ללא תלויות בספריות או פרימוורקים כבדים.',
      'p.jmInteresting': 'נבנה באמצעות Web Audio APIs טהור ומניפולציות DOM קלות משקל לטעינה מיידית וצריכת זיכרון מינימלית.',

      // Currently Building
      'curr.title': 'כעת בפיתוח',
      'curr.subtitle': 'פרויקטים פעילים, עבודה הנדסית שוטפת ומחקר עכשווי',
      'curr.hdde': 'ארכיטקטורת החלטה היררכית ב-Rust הממוקדת ב-Cache layout ובאפס הקצאות זיכרון.',
      'curr.otzaria': 'מנוע שליפה היברידי לקסיקלי + סמנטי עבור מאגרי טקסט נרחבים בעברית.',
      'curr.aiResTitle': 'מחקר AI / הרצה מקומית',
      'curr.aiResDesc': 'חקירת הרצת מודלים על CPU, קוונטיזציה, ארכיטקטורות MoE וחישוב חסכוני בזיכרון.',

      // Selected Experiments & Research
      'exp.title': 'ניסויים ומחקר',
      'exp.subtitle': 'חקירות ממוקדות ובנצ'מארקים טכניים',
      'exp1.title': 'אופטימיזציית הרצת CPU',
      'exp1.desc': 'בדיקת וקטוריזציית SIMD ו-Cache locality עבור הרצת מודלי שפה קטנים על מעבדים ביתיים.',
      'exp2.title': 'מיקום זיכרון ב-MoE',
      'exp2.desc': 'ניתוח תקורת נתיבי Mixture-of-Experts ומבנה משקולות המומחים ב-RAM.',
      'exp3.title': 'שליפה וקטורית בעברית',
      'exp3.desc': 'בנצ'מארק של טוקנייזרים מורפולוגיים וקוונטיזציית הטמעות עבור טקסט בעברית.',
      'exp4.title': 'מבנים ללא הצאת זיכרון',
      'exp4.desc': 'תכנון Slab allocators ו-Arena buffers עבור ביצוע דטרמיניסטי.',
      'exp5.title': 'ניסויי קוונטיזציה',
      'exp5.desc': 'השוואת איבוד דיוק ב-INT4 מול INT8 על גבי הטמעות בתחומים ממוקדים.',
      'exp6.title': 'אלגוריתמים מודעי-Cache',
      'exp6.desc': 'ארגון אלגוריתמי מעבר על גרפים עבור יעילות prefetching ב-Cache של המעבד.',

      // Timeline
      'time.title': 'ציר זמן',
      'time.subtitle': 'התפתחות המיקוד ההנדסי והאבנים המרכזיות',
      'time.y2024': 'פרויקטי תוכנה ו-AI — בניית כלי ליבה וחקירת יסודות למידת מכונה.',
      'time.y2025': 'אוצריא / תשתיות חיפוש — בניית מנועי חיפוש היברידיים ולקסיקליים.',
      'time.y2026': 'מערכות, Rust ואלגוריתמים — מיקוד בארכיטקטורות ללא הקצאות ומחקר הרצת CPU.',

      // Technologies
      'tech.title': 'טכנולוגיות',
      'tech.subtitle': 'שפות ליבה, כלים ותחומי טכנולוגיה',
      'tech.coreTitle': 'טכנולוגיות ליבה',
      'tech.alsoTitle': 'תחומים נוספים',
      'tech.pillAlgorithms': 'אלגוריתמים',
      'tech.pillSystems': 'הנדסת מערכות',
      'tech.pillSearch': 'חיפוש וקטורי',
      'tech.pillSecurity': 'אבטחה וביקורת בינארית',
      'tech.pillRE': 'הנדסה לאחור',

      // Profiles & Footer
      'profiles.title': 'קוד פתוח ופרופילים',
      'profiles.subtitle': 'התחברות בפלטפורמות פיתוח וקהילות טכנולוגיות',
      'profiles.ghTitle': 'פרופיל GitHub',
      'profiles.ghDesc': 'מוזמנים לצפות במאגרי הקוד הפתוח, ארכיטקטורות מערכת ואלגוריתמים.',
      'profiles.ghBtn': 'בקר ב-@AMLAACH ב-GitHub',
      'profiles.mtTitle': 'המלאך | מתמחים טופ',
      'profiles.mtDesc': 'פורום הטכנולוגיה של הציבור החרדי — פרופיל ופעילות בקהילה.',
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

    // Update placeholders if any
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
