/**
 * AMLAACH Portfolio - Advanced Application Logic
 * Vanilla ES6 JS: Theme & i18n Manager, GitHub API Auto-Loader with Caching, 
 * Interactive Particle Canvas, Experience Timeline, & Contact Form Handler.
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
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',
      'hero.badge': 'Available for ambitious projects',
      'hero.titlePrefix': "Hi, I'm",
      'hero.subtitle': 'Full-Stack Software Engineer crafting high-performance, elegant web applications and robust digital systems.',
      'hero.ctaGithub': 'GitHub Profile',
      'hero.ctaContact': 'Get in Touch',
      'stats.repos': 'GitHub Repositories',
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
      'exp.title': 'Experience & Journey',
      'exp.subtitle': 'Engineering milestones and technical focus',
      'exp.role1': 'Full-Stack Architect',
      'exp.desc1': 'Designing scalable web platforms, REST APIs, and micro-frontend architectures with emphasis on performance & clean code.',
      'exp.role2': 'Frontend Engineer & UI Specialist',
      'exp.desc2': 'Building accessible bilingual (RTL/LTR) web applications, dynamic design systems, and responsive interfaces.',
      'exp.role3': 'Systems & Tools Developer',
      'exp.desc3': 'Developing CLI utilities, backend queue runners, and automated developer tooling.',
      'projects.title': 'Featured & Live Repositories',
      'projects.subtitle': 'Auto-loaded live repositories directly from GitHub API',
      'projects.viewRepo': 'View Repository',
      'projects.stars': 'Stars',
      'projects.forks': 'Forks',
      'skills.title': 'Technical Skills',
      'skills.subtitle': 'Technologies, frameworks, and methodologies I work with',
      'skills.catFrontend': 'Frontend Engineering',
      'skills.catBackend': 'Backend & Systems',
      'skills.catTools': 'Tools & Best Practices',
      'contact.title': "Let's Build Something Together",
      'contact.subtitle': 'Feel free to connect on GitHub or send a direct message',
      'contact.nameLabel': 'Your Name',
      'contact.emailLabel': 'Your Email',
      'contact.msgLabel': 'Your Message',
      'contact.sendBtn': 'Send Message',
      'contact.success': 'Thank you! Your message has been sent successfully.',
      'contact.or': 'OR',
      'contact.githubBtn': 'Connect on GitHub',
      'footer.rights': 'All rights reserved.',
      'footer.top': '↑ Top'
    },
    he: {
      langLabel: 'English',
      'a11y.skip': 'דלג לתוכן המרכזי',
      'nav.about': 'אודות',
      'nav.experience': 'ניסיון',
      'nav.projects': 'פרויקטים',
      'nav.skills': 'כישורים',
      'nav.contact': 'צור קשר',
      'hero.badge': 'זמין לפרויקטים מאתגרים',
      'hero.titlePrefix': 'שלום, אני',
      'hero.subtitle': 'מהנדס תוכנה Full-Stack המפתח אפליקציות ווב מודרניות, מהירות ומערכות דיגיטליות מתקדמות.',
      'hero.ctaGithub': 'פרופיל GitHub',
      'hero.ctaContact': 'צור קשר',
      'stats.repos': 'מאגרי GitHub',
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
      'exp.title': 'ניסיון ומסלול מקצועי',
      'exp.subtitle': 'אבני דרך והתמחות טכנולוגית',
      'exp.role1': 'ארכיטקט Full-Stack',
      'exp.desc1': 'תכנון פלטפורמות ווב בסקייל גבוה, ממשקי REST API וארכיטקטורת Frontend המושמת דגש על ביצועים וקוד נקי.',
      'exp.role2': 'מהנדס Frontend ומומחה UI',
      'exp.desc2': 'בניית אפליקציות דו-לשוניות נגישות (RTL/LTR), מערכות עיצוב דינמיות וממשקים רספונסיביים.',
      'exp.role3': 'מפתח מערכות וכלים',
      'exp.desc3': 'פיתוח כלי CLI, מנועי תורי משימות בצד השרת ואוטומציה למפתחים.',
      'projects.title': 'פרויקטים נבחרים ומאגרים חיים',
      'projects.subtitle': 'טעינה אוטומטית של פרויקטים ישירות מ-GitHub API',
      'projects.viewRepo': 'צפה בגרסה ב-GitHub',
      'projects.stars': 'כוכבים',
      'projects.forks': 'פיצולים',
      'skills.title': 'כישורים טכניים',
      'skills.subtitle': 'טכנולוגיות, ספריות מתודולוגיות בהן אני משתמש',
      'skills.catFrontend': 'פיתוח Front-End',
      'skills.catBackend': 'פיתוח Back-End ומערכות',
      'skills.catTools': 'כלים ומתודולוגיות',
      'contact.title': 'בואו נבנה משהו ביחד',
      'contact.subtitle': 'מוזמנים ליצור קשר ב-GitHub או לשלוח הודעה ישירה',
      'contact.nameLabel': 'השם שלך',
      'contact.emailLabel': 'אימייל לחזרה',
      'contact.msgLabel': 'הודעה',
      'contact.sendBtn': 'שלח הודעה',
      'contact.success': 'תודה! ההודעה נשלחה בהצלחה.',
      'contact.or': 'או',
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
  const reposContainer = document.getElementById('github-repos-container');
  const reposCountEl = document.getElementById('public-repos-count');
  const contactForm = document.getElementById('contact-form');
  const contactFeedback = document.getElementById('form-feedback');
  const sections = document.querySelectorAll('section[id]');

  // Initialize Footer Year
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. Language & Theme Managers
  // --------------------------------------------------------------------------
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
  // 3. GitHub API Auto-Loader with Caching
  // --------------------------------------------------------------------------
  const GITHUB_USERNAME = 'AMLAACH';
  const CACHE_TTL_MS = 60 * 60 * 1000; // 1 Hour

  async function loadGitHubData() {
    if (!reposContainer) return;

    const cachedRepos = localStorage.getItem('amlaach_repos_cache');
    const cachedTime = localStorage.getItem('amlaach_repos_time');
    const cachedUser = localStorage.getItem('amlaach_user_cache');

    if (cachedRepos && cachedTime && (Date.now() - parseInt(cachedTime, 10) < CACHE_TTL_MS)) {
      const repos = JSON.parse(cachedRepos);
      const user = cachedUser ? JSON.parse(cachedUser) : null;
      renderRepos(repos);
      if (user && reposCountEl) reposCountEl.textContent = user.public_repos || repos.length;
      return;
    }

    try {
      // Fetch User Stats & Repos
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
      ]);

      if (!reposRes.ok) throw new Error(`GitHub API error: ${reposRes.status}`);

      const user = userRes.ok ? await userRes.json() : null;
      const repos = await reposRes.json();

      // Save Cache
      localStorage.setItem('amlaach_repos_cache', JSON.stringify(repos));
      localStorage.setItem('amlaach_user_cache', JSON.stringify(user));
      localStorage.setItem('amlaach_repos_time', Date.now().toString());

      if (user && reposCountEl) {
        reposCountEl.textContent = user.public_repos || repos.length;
      }

      renderRepos(repos);
    } catch (err) {
      console.warn('GitHub API fetch fallback:', err);
      renderFallbackRepos();
    }
  }

  function renderRepos(repos) {
    if (!reposContainer) return;

    if (!Array.isArray(repos) || repos.length === 0) {
      renderFallbackRepos();
      return;
    }

    reposContainer.innerHTML = repos.map(repo => `
      <article class="project-card data-reveal revealed">
        <div class="project-content">
          <div class="project-header-meta">
            <span class="project-type">${repo.language || 'JavaScript'}</span>
            <div class="project-stats-badge">
              <span>★ ${repo.stargazers_count}</span>
              <span>⑂ ${repo.forks_count}</span>
            </div>
          </div>
          <h3 class="project-title">${escapeHTML(repo.name)}</h3>
          <p class="project-description">
            ${escapeHTML(repo.description || 'Modern software repository by AMLAACH.')}
          </p>
          <ul class="tech-tags">
            ${repo.topics && repo.topics.length ? repo.topics.map(t => `<li>${escapeHTML(t)}</li>`).join('') : `<li>${escapeHTML(repo.language || 'Code')}</li>`}
          </ul>
          <div class="project-links">
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="project-link">
              <span data-i18n="projects.viewRepo">View Repository</span> &rarr;
            </a>
          </div>
        </div>
      </article>
    `).join('');

    setLanguage(currentLang);
  }

  function renderFallbackRepos() {
    if (!reposContainer) return;
    if (reposCountEl) reposCountEl.textContent = '10+';

    const fallbacks = [
      {
        name: 'Modern Developer Platform',
        lang: 'JavaScript',
        desc: 'A high-performance web interface built with ultra-low latency client render and modular architecture.',
        url: 'https://github.com/AMLAACH'
      },
      {
        name: 'Distributed Async Engine',
        lang: 'Node.js',
        desc: 'A lightweight event-driven queue runner designed for concurrent background processing and telemetry.',
        url: 'https://github.com/AMLAACH'
      },
      {
        name: 'Bilingual Design System',
        lang: 'HTML5/CSS3',
        desc: 'An accessible, RTL-first component library with dynamic theme tokens and zero external dependencies.',
        url: 'https://github.com/AMLAACH'
      }
    ];

    reposContainer.innerHTML = fallbacks.map(repo => `
      <article class="project-card data-reveal revealed">
        <div class="project-content">
          <div class="project-header-meta">
            <span class="project-type">${repo.lang}</span>
          </div>
          <h3 class="project-title">${repo.name}</h3>
          <p class="project-description">${repo.desc}</p>
          <div class="project-links">
            <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="project-link">
              <span data-i18n="projects.viewRepo">View Repository</span> &rarr;
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }

  function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, match => {
      const escapeMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
      return escapeMap[match];
    });
  }

  loadGitHubData();

  // --------------------------------------------------------------------------
  // 4. Interactive Particles Canvas Background
  // --------------------------------------------------------------------------
  const canvas = document.getElementById('particles-canvas');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let particles = [];
    const particleCount = Math.min(Math.floor(width / 25), 45);

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
        ctx.fillStyle = currentTheme === 'dark' ? 'rgba(56, 189, 248, 0.4)' : 'rgba(2, 132, 199, 0.3)';
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

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = currentTheme === 'dark' 
              ? `rgba(56, 189, 248, ${0.2 * (1 - dist / 110)})` 
              : `rgba(2, 132, 199, ${0.15 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
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
  // 5. Scroll Reveal & ScrollSpy Active Navigation
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

  // --------------------------------------------------------------------------
  // 6. Contact Form Handler
  // --------------------------------------------------------------------------
  if (contactForm && contactFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactFeedback.textContent = translations[currentLang]['contact.success'];
      contactFeedback.className = 'form-feedback success';
      contactForm.reset();

      setTimeout(() => {
        contactFeedback.textContent = '';
      }, 5000);
    });
  }

})();
