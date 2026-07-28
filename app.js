/**
 * AMLAACH Portfolio - Core Application Logic
 * Vanilla ES6 JavaScript handling Themes, Bilingual i18n (EN/HE with RTL), & Navigation.
 */

(function () {
  'use strict';

  // 1. Translations Dictionary
  const translations = {
    en: {
      langLabel: 'עברית',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',
      'hero.badge': 'Available for ambitious projects',
      'hero.titlePrefix': "Hi, I'm",
      'hero.subtitle': 'Full-Stack Software Engineer crafting high-performance, elegant web applications and robust digital systems.',
      'hero.ctaGithub': 'GitHub Profile',
      'hero.ctaContact': 'Get in Touch',
      'stats.quality': 'Clean Architecture',
      'stats.role': 'Modern Web Tech',
      'stats.lang': 'Hebrew & English',
      'about.title': 'About Me',
      'about.subtitle': 'Passionate engineer dedicated to crafting efficient software solutions',
      'about.bioTitle': 'Building with passion & precision',
      'about.bioText1': 'I am a software engineer focused on building scalable web systems, modern user interfaces, and clean backend architectures. I aim for minimal complexity and maximum performance.',
      'about.bioText2': 'Driven by modern web standards and high-quality design principles inspired by Vercel and Apple, I craft software that feels responsive, reliable, and effortless.',
      'about.labelName': 'Name:',
      'about.labelRole': 'Role:',
      'about.valueRole': 'Full-Stack Developer',
      'about.labelGitHub': 'GitHub:',
      'about.labelLanguages': 'Languages:',
      'projects.title': 'Featured Projects',
      'projects.subtitle': 'Explore selected applications and software architectures',
      'projects.p1Type': 'Full Stack App',
      'projects.featured': 'Featured',
      'projects.p1Title': 'Modern Developer Platform',
      'projects.p1Desc': 'A high-performance cloud management interface built with ultra-low latency client render and modular architecture.',
      'projects.p2Type': 'Tool / System',
      'projects.p2Title': 'Distributed Async Engine',
      'projects.p2Desc': 'A lightweight event-driven queue runner designed for concurrent background processing and strict telemetry monitoring.',
      'projects.p3Type': 'Frontend UI',
      'projects.p3Title': 'Bilingual Design System',
      'projects.p3Desc': 'An accessible, RTL-first component library with dynamic theme tokens, smooth CSS transitions, and zero external dependencies.',
      'projects.viewRepo': 'View Repository',
      'skills.title': 'Technical Skills',
      'skills.subtitle': 'Technologies, frameworks, and methodologies I work with',
      'skills.catFrontend': 'Frontend Engineering',
      'skills.catBackend': 'Backend & Systems',
      'skills.catTools': 'Tools & Best Practices',
      'contact.title': "Let's Build Something Together",
      'contact.subtitle': 'Feel free to connect on GitHub or send a direct message',
      'contact.githubBtn': 'Connect on GitHub',
      'footer.rights': 'All rights reserved.',
      'footer.top': '↑ Top'
    },
    he: {
      langLabel: 'English',
      'nav.about': 'אודות',
      'nav.projects': 'פרויקטים',
      'nav.skills': 'כישורים',
      'nav.contact': 'צור קשר',
      'hero.badge': 'זמין לפרויקטים מאתגרים',
      'hero.titlePrefix': 'שלום, אני',
      'hero.subtitle': 'מהנדס תוכנה Full-Stack המפתח אפליקציות ווב מודרניות, מהירות ומערכות דיגיטליות מתקדמות.',
      'hero.ctaGithub': 'פרופיל GitHub',
      'hero.ctaContact': 'צור קשר',
      'stats.quality': 'ארכיטקטורה נקייה',
      'stats.role': 'טכנולוגיות ווב מודרניות',
      'stats.lang': 'עברית ואנגלית',
      'about.title': 'אודותיי',
      'about.subtitle': 'מהנדס תוכנה בעל תשוקה לפיתוח פתרונות טכנולוגיים יעילים',
      'about.bioTitle': 'בנייה מתוך תשוקה ודיוק',
      'about.bioText1': 'אני מהנדס תוכנה המתמחה בבניית מערכות ווב בסקייל גבוה, ממשקי משתמש מודרניים וארכיטקטורת צד-שרת נקייה. השאיפה שלי היא מינימום סיבוכיות ומקסימום ביצועים.',
      'about.bioText2': 'בהשראת תפיסות העיצוב המתקדמות של Vercel ו-Apple, אני מפתח תוכנה מהירה, אמינה ומהנה לשימוש.',
      'about.labelName': 'שם:',
      'about.labelRole': 'תפקיד:',
      'about.valueRole': 'מפתח Full-Stack',
      'about.labelGitHub': 'גיטהאב:',
      'about.labelLanguages': 'שפות:',
      'projects.title': 'פרויקטים נבחרים',
      'projects.subtitle': 'סקירת אפליקציות ומערכות תוכנה שפיתחתי',
      'projects.p1Type': 'אפליקציית Full Stack',
      'projects.featured': 'מומלץ',
      'projects.p1Title': 'פלטפורמת מפתחים מודרנית',
      'projects.p1Desc': 'ממשק ניהול ענן בעל ביצועים גבוהים, רינדור מהיר בצד הלקוח וארכיטקטורה מודולרית.',
      'projects.p2Type': 'כלי / מערכת',
      'projects.p2Title': 'מנוע משימות אסינכרוני',
      'projects.p2Desc': 'מריץ תור משימות קל משקל המבוסס אירועים, מיועד לעיבוד מבוזר במקביל וניטור מדויק.',
      'projects.p3Type': 'ממשק משתמש',
      'projects.p3Title': 'מערכת עיצוב דו-לשונית',
      'projects.p3Desc': 'ספריית רכיבים נגישה התומכת ב-RTL מהיסוד, עם ערכות נושא דינמיות וללא תלויות חיצוניות.',
      'projects.viewRepo': 'צפה בגרסה ב-GitHub',
      'skills.title': 'כישורים טכניים',
      'skills.subtitle': 'טכנולוגיות, ספריות ومتודולוגיות בהן אני משתמש',
      'skills.catFrontend': 'פיתוח Front-End',
      'skills.catBackend': 'פיתוח Back-End ומערכות',
      'skills.catTools': 'כלים ומתודולוגיות',
      'contact.title': 'בואו נבנה משהו ביחד',
      'contact.subtitle': 'מוזמנים ליצור קשר ב-GitHub או לשלוח הודעה ישירה',
      'contact.githubBtn': 'התחבר ב-GitHub',
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

  // Initialize Footer Year
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Language Switching Handler
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

  // Theme Switching Handler
  function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('amlaach_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  // Initialize Default States
  setLanguage(currentLang);
  setTheme(currentTheme);

  // Attach Listeners
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'he' : 'en';
      setLanguage(nextLang);
    });
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggleBtn.setAttribute('aria-expanded', isOpen);
    });

    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
