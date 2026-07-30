/**
 * AMLAACH Portfolio - Core Application Logic
 * Pure ES6 JS handling Themes, Bilingual i18n (Hebrew RTL / English LTR), 
 * Interactive Particle Background Canvas, ScrollSpy Navigation, & Tooltip Accessibility.
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
      'nav.techstack': 'Tech Stack',
      'nav.github': 'GitHub',
      'hero.badge': 'Algorithms • Complex Systems • AI',
      'hero.titlePrefix': "Hi, I'm",
      'hero.subtitle': 'Israeli Haredi Software Engineer specializing in high-performance algorithms, complex systems, Artificial Intelligence (AI), Language Models (LM), cybersecurity, and reverse engineering.',
      'hero.ctaGithub': 'GitHub Profile',
      'hero.ctaExplore': 'Explore Expertise',
      'stats.tech': 'Python • Rust • JS • HTML',
      'stats.spec': 'AI • LM • Security • Reverse Eng',
      'stats.eng': 'Algorithms & Complex Systems',
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
      'tech.catAi': 'Machine Intelligence',
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
      'github.cardTitle': 'Explore My GitHub Codebase',
      'github.cardDesc': 'Explore open-source repositories, system tools, algorithmic scripts, and AI code projects directly on GitHub.',
      'github.visitBtn': 'Visit @AMLAACH on GitHub',
      'footer.rights': 'All rights reserved.',
      'footer.top': '↑ Top'
    },
    he: {
      langLabel: 'English',
      'a11y.skip': 'דלג לתוכן המרכזי',
      'nav.about': 'אודות',
      'nav.expertise': 'התמחויות',
      'nav.techstack': 'טכנולוגיות',
      'nav.github': 'GitHub',
      'hero.badge': 'אלגוריתמים • מערכות מורכבות • AI',
      'hero.titlePrefix': 'שלום, אני',
      'hero.subtitle': 'מהנדס תוכנה חרדי מתמחה באלגוריתמים מתקדמים, מערכות מורכבות, בינה מלאכותית (AI), מודלי שפה (LM), אבטחת מידע והנדסה לאחור.',
      'hero.ctaGithub': 'פרופיל GitHub',
      'hero.ctaExplore': 'סקירת התמחויות',
      'stats.tech': 'Python • Rust • JS • HTML',
      'stats.spec': 'AI • LM • אבטחה • הנדסה לאחור',
      'stats.eng': 'אלגוריתמים ומערכות מורכבות',
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
      'tech.title': 'טכנולוגיות וכישורים',
      'tech.subtitle': 'רחף או לחץ על כל באדג\' לצפייה בטולטיפ טכני מפורט',
      'tech.catPy': 'AI, מערכות וסคריפטינג',
      'tech.catRs': 'מערכות וביצועים גבוהים',
      'tech.catJs': 'לוגיקת ווב ומנועים',
      'tech.catHtml': 'מבנה סמנטי ונגישות',
      'tech.secName': 'אבטחת מידע',
      'tech.catSec': 'מחקר אבטחה וביקורת',
      'tech.reName': 'הנדסה לאחור',
      'tech.catRe': 'ניתוח קוד בינארי',
      'tech.catAi': 'בינה מלאכותית',
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
      'github.cardTitle': 'סקירת הקוד שלי ב-GitHub',
      'github.cardDesc': 'מוזמנים לצפות במאגרי הקוד הפתוח, כלי המערכת, אלגוריתמים ופרויקטי AI ישירות בפרופיל ה-GitHub שלי.',
      'github.visitBtn': 'בקר ב-@AMLAACH ב-GitHub',
      'footer.rights': 'כל הזכויות שמורות.',
      'footer.top': '↑ למעלה'
    }
  };

  // State Variables
  let currentLang = localStorage.getItem('amlaach_lang') || 'en';
  let currentTheme = localStorage.getItem('amlaach_theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

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
