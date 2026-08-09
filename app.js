/**
 * AMLAACH Portfolio - Core Application Logic
 * Pure ES6 JS handling Themes (Dark Default), Trilingual i18n (Hebrew Default, English, French), 
 * Segmented Language Picker, Interactive Technical Modals, Floating Top Button, Particle Canvas, & ScrollSpy Navigation.
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. i18n Translations Dictionary (Hebrew, English, French)
  // --------------------------------------------------------------------------
  const translations = {
    he: {
      langLabel: 'עברית',
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
      'hero.title': 'אני בונה תוכנה במקומות שבהם <span class="gradient-text">ביצועים באמת משנים</span>.',
      'hero.subtitle': 'אלגוריתמים, הנדסת מערכות, כלי AI וקוד מהיר.',
      'hero.pills': 'Rust · Python · אלגוריתמים · AI · מערכות',
      'hero.btnWork': 'צפה בעבודות שלי',
      'hero.ctaGithub': 'פרופיל GitHub',

      // About
      'about.title': 'אודות',
      'about.subtitle': 'מהנדס תוכנה מישראל הממוקד בהנדסת ליבה וביצועים.',
      'about.bioTitle': 'מהנדס תוכנה',
      'about.bioText1': 'אני אוהב לבנות אלגוריתמים, מערכות קריטיות למהירות, ותשתיות בינה מלאכותית. רוב הקוד שלי בקוד פתוח ומבוסס על הבנת אופן ריצת הקוד על החומרה.',
      'about.bioText2': 'אני משקיע את רוב הזמן בכתיבת Rust למערכות, Python לצינורות נתונים, מנועי חיפוש, וביקורת בינארית.',
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
      'phil.subtitle': 'הגישה שלי לקוד, ביצועים וארכיטקטורה',
      'phil.quote1': 'אכפת לי מהדברים שקל להתעלם מהם בתוכנה: <span class="philosophy-highlight">גישה לזיכרון, מורכבות אלגוריתמית, מקביליות, התנהגות Cache והעלות של אבסטרקציות</span>.',
      'phil.quote2': 'אני מעדיף להבין למה קוד הוא איטי לפני שאני מוסיף עוד שכבת אופטימיזציה.',

      // Things I Care About
      'val.title1': 'ביצועים',
      'val.desc1': 'לגרום לחומרה לעשות עבודה אמיתית לפני שקונים עוד שרתים.',
      'val.title2': 'אלגוריתמים',
      'val.desc2': 'מציאת דרך חכמה יותר לפתור את הבעיה, ולא רק כתיבה מהירה יותר של פתרון שגוי.',
      'val.title3': 'מערכות',
      'val.desc3': 'זיכרון, תהליכונים, מבנה נתונים וכל מה שמעבדים דורשים שנבין.',
      'val.title4': 'בינה מלאכותית',
      'val.desc4': 'שימוש במודלים איפה שהם באמת עוזרים, תוך שמירה על יתר המערכת פשוטה ומובנת.',

      // Projects
      'p.title': 'פרויקטים נבחרים',
      'p.subtitle': 'פרויקטים מרכזיים וקוד שבניתי',
      'p.featured': 'פרויקט דגל',
      'p.p1Type': 'מערכות ליבה',
      'p.p2Type': 'תשתיות חיפוש',
      'p.p3Type': 'פרויקט צד / אודיו',
      'p.viewRepo': 'צפה ב-GitHub',
      'p.hddeTagline': 'מנוע החלטות ללא הצאת זיכרון עבור מערכות בעלות ביצועים גבוהים.',
      'p.hddeMetric1': '0 הקצאות זיכרון',
      'p.labelWhy': 'למה בניתי את זה',
      'p.hddeWhy': 'כדי לבטל לחלוטין הצאת זיכרון ב-heap בזמן הערכת החלטות דינמית.',
      'p.labelInteresting': 'מה הופך את זה למעניין',
      'p.hddeInteresting': 'מארגן עצי החלטה בתוך חוצצי זיכרון שטוחים. שומר על הנתונים קרוב ל-Cache של המעבד ונמנע מהקצאות זיכרון בזמן ריצה.',

      'p.otzariaTagline': 'חיפוש מהיר המשלב טקסט מדויק ומשמעות עבור ספרים בעברית.',
      'p.otzariaMetric1': '594K קישורים לקסיקליים',
      'p.otzariaMetric2': 'חיפוש סמנטי בעברית',
      'p.otzariaWhy': 'כדי לאפשר לאנשים לחפש באלפי טקסטים תורניים באוצריא לפי משמעות ולא רק לפי מילים מדויקות.',
      'p.otzariaInteresting': 'משלב חיפוש טקסטואלי BM25 עם הטמעות וקטוריות (Qwen3 0.6B) המותאמות לעברית. רץ מהיר ומקומי על מחשבים ניידים רגילים.',

      'p.jmTagline': 'נגן אודיו קל משקל שנבנה למהירות.',
      'p.jmMetric1': 'טעינה מיידית',
      'p.jmMetric2': 'ממשק נקי',
      'p.jmWhy': 'נוצר בזמן הפנאי לנגן מוזיקה מיידית ללא פרימוורקים כבדים או איטיות.',
      'p.jmInteresting': 'משתמש ב-Web Audio APIs טהור ועדכוני DOM פשוטים כדי להיפתח כהרף עין ולצרוך כמעט אפס RAM.',

      // Currently Building
      'curr.title': 'כעת בפיתוח',
      'curr.subtitle': 'מה שאני מפתח וחוקר באופן פעיל עכשיו',
      'curr.tagActive': '● בפיתוח פעיל',
      'curr.tagResearch': '● במחקר',
      'curr.hdde': 'מנוע החלטות ב-Rust הממוקד במבנה זיכרון ב-Cache ללא הקצאות.',
      'curr.otzaria': 'מנוע חיפוש היברידי המשלב חיפוש טקסט וחיפוש וקטורי לספרים בעברית.',
      'curr.aiResTitle': 'AI מקומי והרצת CPU',
      'curr.aiResDesc': 'בדיקת הרצת מודלים על CPU, קוונטיזציה, מודלי MoE וחישוב חסכוני בזיכרון.',

      // Selected Experiments & Research
      'exp.title': 'ניסויים ומחקר צדדי',
      'exp.subtitle': 'בדיקות קצרות, בנצ\'מארקים וחקירות קוד',
      'exp1.title': 'מהירות הרצת CPU',
      'exp1.desc': 'בדיקת הוראות SIMD ומבני Cache להרצת LLMs קטנים במהירות על מעבדים רגילים.',
      'exp2.title': 'גישת זיכרון ב-MoE',
      'exp2.desc': 'בדיקת צווארי בקבוק בזיכרון בעת החלפת משקולות מומחים ב-RAM.',
      'exp3.title': 'חיפוש וקטורי בעברית',
      'exp3.desc': 'בדיקת טוקנייזרים והטמעות מקוונטזות על מאגרי טקסט בעברית.',
      'exp4.title': 'מבנים ללא הצאת זיכרון',
      'exp4.desc': 'בניית Arena allocators ו-Slab buffers לזמן ביצוע צפוי מראש.',
      'exp5.title': 'בדיקות קוונטיזציה',
      'exp5.desc': 'השוואת איבוד איכות ב-INT4 מול INT8 בעת דחיסת הטמעות טקסט.',
      'exp6.title': 'אלגוריתמים מודעי-Cache',
      'exp6.desc': 'ארגון אלגוריתמי גרפים להתאמה נקייה ל-L1/L2 Cache של המעבד.',

      // Timeline
      'time.title': 'ציר זמן',
      'time.subtitle': 'איך המיקוד שלי התפתח עם הזמן',
      'time.y2024': 'תוכנה ו-AI — בניית כלי ליבה ולימוד יסודות למידת מכונה.',
      'time.y2025': 'חיפוש באוצריא — בניית כלי חיפוש עבור מאגרי ספרים גדולים בעברית.',
      'time.y2026': 'מערכות ו-Rust — מיקוד בקוד ללא הקצאות זיכרון ובהרצת AI מקומית.',

      // Technologies
      'tech.title': 'טכנולוגיות',
      'tech.subtitle': 'שפות, כלים ותחומים שאני עובד איתם',
      'tech.coreTitle': 'טכנולוגיות ליבה',
      'tech.alsoTitle': 'תחומים נוספים',
      'tech.pillAlgorithms': 'אלגוריתמים',
      'tech.pillSystems': 'הנדסת מערכות',
      'tech.pillAi': 'AI / למידת מכונה',
      'tech.pillSearch': 'חיפוש וקטורי',
      'tech.pillWeb': 'JavaScript / ווב',
      'tech.pillSecurity': 'אבטחה וביקורת',
      'tech.pillRE': 'הנדסה לאחור',

      // Profiles & Footer
      'profiles.title': 'קוד פתוח ופרופילים',
      'profiles.subtitle': 'איפה למצוא את הקוד והפרופיל שלי',
      'profiles.ghTitle': 'פרופיל GitHub',
      'profiles.ghDesc': 'צפה במאגרי הקוד הפתוח, האלגוריתמים והפרויקטים שלי.',
      'profiles.ghBtn': 'צפה ב-@AMLAACH ב-GitHub',
      'profiles.mtTitle': 'המלאך | מתמחים טופ',
      'profiles.mtDesc': 'פורום טכנולוגיה ישראלי — פרופיל ופעילות בקהילה.',
      'profiles.mtBtn': 'צפה בפרופיל במתמחים טופ',
      'footer.rights': 'כל הזכויות שמורות.',
      'footer.top': '↑ למעלה',
      'modal.close': 'סגור'
    },
    en: {
      langLabel: 'English',
      'a11y.skip': 'Skip to main content',
      'nav.about': 'About',
      'nav.philosophy': 'How I Think',
      'nav.projects': 'Projects',
      'nav.currently': 'Currently',
      'nav.experiments': 'Experiments',
      'nav.timeline': 'Timeline',
      'nav.techstack': 'Tech Stack',
      'nav.profiles': 'Profiles',
      
      // Hero
      'hero.title': 'I build software where <span class="gradient-text">performance actually matters</span>.',
      'hero.subtitle': 'Algorithms, systems engineering, AI tools, and fast code.',
      'hero.pills': 'Rust · Python · Algorithms · AI · Systems',
      'hero.btnWork': 'Check out my work',
      'hero.ctaGithub': 'GitHub',

      // About
      'about.title': 'About',
      'about.subtitle': 'Software engineer based in Israel focused on core code and performance.',
      'about.bioTitle': 'Software Engineer',
      'about.bioText1': 'I like building algorithms, speed-critical systems, and AI tools. Most of what I build is open source and focused on understanding how code actually runs on hardware.',
      'about.bioText2': 'I spend most of my time writing Rust for systems, Python for data pipelines, search engines, and binary inspection.',
      'about.labelName': 'Name:',
      'about.labelRole': 'Role:',
      'about.valueRole': 'Software Engineer',
      'about.labelFocus': 'Main Focus:',
      'about.valueFocus': 'Algorithms, Systems & AI',
      'about.labelGitHub': 'GitHub:',
      'about.labelCommunity': 'Community:',
      'about.mitmachimLink': 'Hamalach @ Mitmachim Top',

      // Philosophy (How I Think)
      'phil.title': 'How I Think',
      'phil.subtitle': 'My approach to code, performance, and design',
      'phil.quote1': 'I care about the stuff that is easy to skip over: <span class="philosophy-highlight">memory access, algorithmic complexity, concurrency, cache usage, and the hidden cost of abstraction</span>.',
      'phil.quote2': 'I always want to figure out why code is slow before throwing another layer of optimization at it.',

      // Things I Care About
      'val.title1': 'Performance',
      'val.desc1': 'Making hardware do real work before buying more servers.',
      'val.title2': 'Algorithms',
      'val.desc2': 'Finding a smarter way to solve the problem, not just writing a faster version of the wrong fix.',
      'val.title3': 'Systems',
      'val.desc3': 'Memory, threads, data layout, and everything CPUs force us to figure out.',
      'val.title4': 'AI',
      'val.desc4': 'Using models where they actually help, while keeping the rest of the system easy to understand.',

      // Projects
      'p.title': 'Featured Projects',
      'p.subtitle': 'Main projects and code I\'ve built',
      'p.featured': 'Flagship',
      'p.p1Type': 'Core Systems',
      'p.p2Type': 'Search Infrastructure',
      'p.p3Type': 'Side Project / Audio',
      'p.viewRepo': 'GitHub',
      'p.hddeTagline': 'Zero-allocation decision engine for high-performance systems.',
      'p.hddeMetric1': '0 Allocations',
      'p.labelWhy': 'Why I built it',
      'p.hddeWhy': 'To cut out heap memory allocation completely during dynamic decision evaluation.',
      'p.labelInteresting': 'What makes it interesting',
      'p.hddeInteresting': 'Puts dynamic decision trees into flat memory buffers. Keeps data right next to CPU cache and avoids memory allocations while running.',

      'p.otzariaTagline': 'Fast search combining exact text and meaning for Hebrew books.',
      'p.otzariaMetric1': '594K Lexical Links',
      'p.otzariaMetric2': 'Hebrew Semantic Search',
      'p.otzariaWhy': 'To let people search thousands of classic Hebrew texts in Otzaria by meaning instead of just exact words.',
      'p.otzariaInteresting': 'Mixes BM25 text search with dense vector embeddings (Qwen3 0.6B) tuned for Hebrew. Runs fast and locally on standard laptops.',

      'p.jmTagline': 'Lightweight audio player built for speed.',
      'p.jmMetric1': 'Fast Startup',
      'p.jmMetric2': 'Clean UI',
      'p.jmWhy': 'Built in spare time to play music instantly without heavy frameworks or lag.',
      'p.jmInteresting': 'Uses raw Web Audio APIs and simple DOM updates so it opens in a snap and uses almost no RAM.',

      // Currently Building
      'curr.title': 'Currently Building',
      'curr.subtitle': 'What I\'m actively coding and researching right now',
      'curr.tagActive': '● ACTIVE DEVELOPMENT',
      'curr.tagResearch': '● RESEARCH',
      'curr.hdde': 'Zero-allocation decision engine in Rust focusing on CPU cache layout.',
      'curr.otzaria': 'Hybrid search engine combining text and vector search for Hebrew books.',
      'curr.aiResTitle': 'Local AI & CPU Inference',
      'curr.aiResDesc': 'Testing CPU inference, quantization, MoE models, and memory-efficient AI execution.',

      // Selected Experiments & Research
      'exp.title': 'Experiments & Side Research',
      'exp.subtitle': 'Short tests, benchmarks, and code explorations',
      'exp1.title': 'CPU Inference Speed',
      'exp1.desc': 'Testing SIMD instructions and cache layouts to run small LLMs fast on normal CPUs.',
      'exp2.title': 'MoE Memory Access',
      'exp2.desc': 'Looking at memory bottlenecks when switching expert weights in RAM for MoE models.',
      'exp3.title': 'Hebrew Vector Search',
      'exp3.desc': 'Testing tokenizers and quantized embeddings on Hebrew text collections.',
      'exp4.title': 'Zero-Allocation Data Structures',
      'exp4.desc': 'Building arena allocators and slab buffers for predictable execution time.',
      'exp5.title': 'Quantization Tests',
      'exp5.desc': 'Comparing INT4 vs INT8 quality loss when compressing text embeddings.',
      'exp6.title': 'Cache-Friendly Algorithms',
      'exp6.desc': 'Organizing graph algorithms to fit neatly into CPU L1/L2 caches.',

      // Timeline
      'time.title': 'Timeline',
      'time.subtitle': 'How my focus has grown over time',
      'time.y2024': 'Software & AI — Building core tools and learning machine learning basics.',
      'time.y2025': 'Otzaria Search — Building search tools for large Hebrew book collections.',
      'time.y2026': 'Systems & Rust — Focusing on zero-allocation code and local AI inference.',

      // Technologies
      'tech.title': 'Tech Stack',
      'tech.subtitle': 'Languages, tools, and topics I work with',
      'tech.coreTitle': 'Core Stack',
      'tech.alsoTitle': 'Also Work With',
      'tech.pillAlgorithms': 'Algorithms',
      'tech.pillSystems': 'Systems Engineering',
      'tech.pillAi': 'AI / ML',
      'tech.pillSearch': 'Vector Search',
      'tech.pillWeb': 'JavaScript / Web',
      'tech.pillSecurity': 'Security & Audit',
      'tech.pillRE': 'Reverse Engineering',

      // Profiles & Footer
      'profiles.title': 'Open Source & Profiles',
      'profiles.subtitle': 'Where to find my code and profile',
      'profiles.ghTitle': 'GitHub Profile',
      'profiles.ghDesc': 'Check out my open-source repos, algorithms, and projects.',
      'profiles.ghBtn': 'See @AMLAACH on GitHub',
      'profiles.mtTitle': 'Hamalach | Mitmachim Top',
      'profiles.mtDesc': 'Israeli tech community forum — profile and activity.',
      'profiles.mtBtn': 'See Mitmachim Top Profile',
      'footer.rights': 'All rights reserved.',
      'footer.top': '↑ Top',
      'modal.close': 'Close'
    },
    fr: {
      langLabel: 'Français',
      'a11y.skip': 'Passer au contenu principal',
      'nav.about': 'À propos',
      'nav.philosophy': 'Ma vision',
      'nav.projects': 'Projets',
      'nav.currently': 'En cours',
      'nav.experiments': 'Expérimentations',
      'nav.timeline': 'Parcours',
      'nav.techstack': 'Tech',
      'nav.profiles': 'Profils',

      // Hero
      'hero.title': 'Je développe du code là où la <span class="gradient-text">performance compte vraiment</span>.',
      'hero.subtitle': 'Algorithmes, ingénierie système, infrastructure IA et code rapide.',
      'hero.pills': 'Rust · Python · Algorithmes · IA · Systèmes',
      'hero.btnWork': 'Voir mes projets',
      'hero.ctaGithub': 'Profil GitHub',

      // About
      'about.title': 'À propos',
      'about.subtitle': 'Développeur basé en Israël, passionné par le code bas niveau et la performance.',
      'about.bioTitle': 'Développeur Systèmes & IA',
      'about.bioText1': 'J\'aime concevoir des algorithmes, des systèmes rapides et des outils d\'IA. La plupart de mes projets sont open source et axés sur la compréhension réelle du matériel.',
      'about.bioText2': 'Je passe une grande partie de mon temps à coder en Rust pour le système, en Python pour le traitement de données, les moteurs de recherche et l\'analyse binaire.',
      'about.labelName': 'Nom :',
      'about.labelRole': 'Rôle :',
      'about.valueRole': 'Développeur Systèmes & IA',
      'about.labelFocus': 'Focus :',
      'about.valueFocus': 'Algorithmes, Systèmes & IA',
      'about.labelGitHub': 'GitHub :',
      'about.labelCommunity': 'Communauté :',
      'about.mitmachimLink': 'Hamalach @ Mitmachim Top',

      // Philosophy (How I Think)
      'phil.title': 'Ma vision',
      'phil.subtitle': 'Mon approche du code, de la performance et de l\'architecture',
      'phil.quote1': 'Je m\'intéresse aux détails qu\'on oublie souvent : <span class="philosophy-highlight">accès mémoire, complexité algorithmique, concurrence, gestion du cache et coût de l\'abstraction</span>.',
      'phil.quote2': 'Je préfère comprendre pourquoi un système est lent avant d\'ajouter une couche d\'optimisation en plus.',

      // Things I Care About
      'val.title1': 'Performance',
      'val.desc1': 'Faire travailler le matériel efficacement avant d\'ajouter des serveurs.',
      'val.title2': 'Algorithmes',
      'val.desc2': 'Trouver une meilleure façon de résoudre le problème, pas juste accélérer une mauvaise solution.',
      'val.title3': 'Systèmes',
      'val.desc3': 'Mémoire, threads, disposition des données et tout ce que les processeurs exigent qu\'on comprenne.',
      'val.title4': 'IA',
      'val.desc4': 'Utiliser des modèles là où ils aident vraiment, tout en gardant le système clair et maîtrisable.',

      // Projects
      'p.title': 'Projets phares',
      'p.subtitle': 'Mes réalisations et projets principaux',
      'p.featured': 'Projet Phare',
      'p.p1Type': 'Systèmes Principaux',
      'p.p2Type': 'Infrastructure de Recherche',
      'p.p3Type': 'Projet Secondaire / Audio',
      'p.viewRepo': 'Voir sur GitHub',
      'p.hddeTagline': 'Moteur de décision sans allocation mémoire pour systèmes à haute performance.',
      'p.hddeMetric1': '0 Allocation',
      'p.labelWhy': 'Pourquoi ce projet',
      'p.hddeWhy': 'Pour supprimer complètement l\'allocation sur le tas (heap) pendant l\'évaluation de décisions.',
      'p.labelInteresting': 'Ce qui le rend intéressant',
      'p.hddeInteresting': 'Organise les arbres de décision dans des structures mémoire contiguës. Maximise l\'usage du cache CPU et évite toute allocation dynamique à l\'exécution.',

      'p.otzariaTagline': 'Recherche hybride (texte + sens) pour les textes en hébreu.',
      'p.otzariaMetric1': '594K Liens Lexicaux',
      'p.otzariaMetric2': 'Recherche Sémantique Hébreu',
      'p.otzariaWhy': 'Pour permettre de chercher par le sens dans des milliers de textes anciens sur Otzaria.',
      'p.otzariaInteresting': 'Combine recherche textuelle BM25 et embeddings vectoriels (Qwen3 0.6B) adaptés à l\'hébreu. Tourne très vite en local sur un PC classique.',

      'p.jmTagline': 'Lecteur audio ultra léger et rapide.',
      'p.jmMetric1': 'Démarrage Rapide',
      'p.jmMetric2': 'Interface Épurée',
      'p.jmWhy': 'Créé sur mon temps libre pour écouter de la musique instantanément sans framework lourd.',
      'p.jmInteresting': 'Utilise l\'API Web Audio native et un DOM minimal pour démarrer immédiatement et consommer très peu de RAM.',

      // Currently Building
      'curr.title': 'En cours de développement',
      'curr.subtitle': 'Ce sur quoi je travaille et cherche en ce moment',
      'curr.tagActive': '● DÉVELOPPEMENT ACTIF',
      'curr.tagResearch': '● RECHERCHE',
      'curr.hdde': 'Moteur de décision en Rust axé sur le cache CPU et zéro allocation.',
      'curr.otzaria': 'Moteur de recherche hybride texte + vecteur pour textes en hébreu.',
      'curr.aiResTitle': 'IA locale & inférence CPU',
      'curr.aiResDesc': 'Expérimentations sur l\'inférence CPU, la quantification, les modèles MoE et l\'économie de mémoire.',

      // Selected Experiments & Research
      'exp.title': 'Expérimentations & Recherche',
      'exp.subtitle': 'Tests courts, benchmarks et explorations techniques',
      'exp1.title': 'Vitesse d\'inférence CPU',
      'exp1.desc': 'Tests d\'instructions SIMD et d\'accès cache pour tourner de petits LLM sur CPU grand public.',
      'exp2.title': 'Accès mémoire MoE',
      'exp2.desc': 'Analyse des goulots d\'étranglement lors de la permutation des experts en RAM.',
      'exp3.title': 'Recherche vectorielle en Hébreu',
      'exp3.desc': 'Test de tokeniseurs et d\'embeddings quantifiés sur corpus hébreu.',
      'exp4.title': 'Structures zéro allocation',
      'exp4.desc': 'Création d\'allocateurs arena et de buffers contigus pour un temps d\'exécution déterministe.',
      'exp5.title': 'Tests de quantification',
      'exp5.desc': 'Comparaison des pertes de précision entre INT4 et INT8 sur des embeddings.',
      'exp6.title': 'Algorithmes adaptés au Cache',
      'exp6.desc': 'Organisation d\'algorithmes de graphes pour optimiser le préchargement L1/L2.',

      // Timeline
      'time.title': 'Parcours',
      'time.subtitle': 'Évolution de mon travail au fil du temps',
      'time.y2024': 'Projets Logiciels & IA — Outils de base et bases du Machine Learning.',
      'time.y2025': 'Recherche Otzaria — Développement du moteur de recherche hybride.',
      'time.y2026': 'Systèmes & Rust — Focus sur le code zéro allocation et l\'IA locale.',

      // Technologies
      'tech.title': 'Technologies',
      'tech.subtitle': 'Langages, outils et domaines principaux',
      'tech.coreTitle': 'Stack Principale',
      'tech.alsoTitle': 'Autres compétences',
      'tech.pillAlgorithms': 'Algorithmes',
      'tech.pillSystems': 'Ingénierie Système',
      'tech.pillAi': 'IA / ML',
      'tech.pillSearch': 'Recherche Vectorielle',
      'tech.pillWeb': 'JavaScript / Web',
      'tech.pillSecurity': 'Sécurité & Audit',
      'tech.pillRE': 'Rétro-ingénierie',

      // Profiles & Footer
      'profiles.title': 'Open Source & Profils',
      'profiles.subtitle': 'Où retrouver mon code et mes profils',
      'profiles.ghTitle': 'Profil GitHub',
      'profiles.ghDesc': 'Découvrez mes projets open source, algorithmes et code.',
      'profiles.ghBtn': 'Voir @AMLAACH sur GitHub',
      'profiles.mtTitle': 'Hamalach | Mitmachim Top',
      'profiles.mtDesc': 'Forum tech de la communauté — profil et activité.',
      'profiles.mtBtn': 'Voir le profil Mitmachim Top',
      'footer.rights': 'Tous droits réservés.',
      'footer.top': '↑ Haut',
      'modal.close': 'Fermer'
    }
  };

  // Supported languages list (Default to Hebrew 'he')
  const supportedLangs = ['he', 'en', 'fr'];

  // State Variables (Default: Hebrew & Dark Mode)
  let currentLang = localStorage.getItem('amlaach_lang') || 'he';
  let currentTheme = localStorage.getItem('amlaach_theme') || 'dark';

  // DOM References
  const langSelector = document.getElementById('lang-selector');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const yearEl = document.getElementById('year');
  const sections = document.querySelectorAll('section[id]');
  const floatingTopBtn = document.getElementById('floating-top-btn');

  // Modal References
  const modalOverlay = document.getElementById('tech-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalOkBtn = document.getElementById('modal-ok-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalBodyText = document.getElementById('modal-body-text');

  // --------------------------------------------------------------------------
  // Modal Technical Details Dictionary
  // --------------------------------------------------------------------------
  const modalDetails = {
    hdde: {
      en: {
        title: 'HDDE — Zero-Allocation Decision Architecture',
        subtitle: 'Systems Engineering / Rust',
        body: 'HDDE structures hierarchical decision trees into flat contiguous memory buffers. By representing dynamic evaluation nodes as array slices (SoA / ECS pattern), it eliminates dynamic heap allocations (0 allocations) and keeps execution entirely within CPU L1/L2 caches for maximum deterministic throughput.'
      },
      he: {
        title: 'HDDE — ארכיטקטורת החלטות ללא הקצאות זיכרון',
        subtitle: 'הנדסת מערכות / Rust',
        body: 'HDDE מארגנת עצי החלטה היררכיים מורכבים בתוך חוצצי זיכרון שטוחים ורציפים. על ידי ייצוג צומתי הערכה בתוך מערכים (במבנה SoA / ECS), המערכת מונעת לחלוטין הצאת זיכרון ב-heap בזמן ריצה ושומרת על ביצוע מהיר במיוחד בתוך ה-L1/L2 Cache של המעבד.'
      },
      fr: {
        title: 'HDDE — Moteur de Décision Sans Allocation',
        subtitle: 'Ingénierie Système / Rust',
        body: 'HDDE structure des arbres de décision complexes dans des tampons mémoire contigus. En représentant les nœuds sous forme de tableaux (pattern SoA / ECS), il élimine les allocations mémoire dynamiques sur le tas et garantit une exécution rapide directement dans le cache L1/L2 du CPU.'
      }
    },
    otzaria: {
      en: {
        title: 'Otzaria Semantic Search Engine',
        subtitle: 'Search Infrastructure / AI & Vector Embeddings',
        body: 'Built for the Otzaria Hebrew digital library, combining BM25 lexical search with dense vector embeddings using Qwen3 0.6B fine-tuned for Hebrew text morphology. Enables fast, contextual semantic queries across 594K+ text links locally on standard consumer computers.'
      },
      he: {
        title: 'מנוע החיפוש הסמנטי של אוצריא',
        subtitle: 'תשתיות חיפוש / AI והטמעות וקטוריות',
        body: 'נבנה עבור ספריית אוצריא הדיגיטלית. המנוע משלב חיפוש טקסטואלי לקסיקלי בשיטת BM25 עם הטמעות וקטוריות צפופות של מודל Qwen3 0.6B המותאם לעברית. מאפשר חיפוש הקשרי ומשמעותי על גבי 594,000+ קישורים מקומית על גבי מחשבים רגילים.'
      },
      fr: {
        title: 'Moteur de Recherche Sémantique Otzaria',
        subtitle: 'Infrastructure de Recherche / IA & Vector Embeddings',
        body: 'Conçu pour la bibliothèque hébraïque Otzaria, combinant recherche textuelle BM25 et embeddings vectoriels avec le modèle Qwen3 0.6B adapté à la morphologie de l\'hébreu. Permet des recherches contextuelles rapides sur plus de 594 000 liens directement en local.'
      }
    },
    justmusic: {
      en: {
        title: 'Just Music — Lightweight Audio Engine',
        subtitle: 'Audio API / Client-Side JavaScript',
        body: 'A minimalist audio player built with vanilla Web Audio API and direct DOM manipulation. Designed for instant application launch, zero frame lag, and minimal RAM footprint.'
      },
      he: {
        title: 'Just Music — נגן אודיו קל משקל',
        subtitle: 'Audio API / JavaScript',
        body: 'נגן אודיו מינימליסטי שנבנה באמצעות Web Audio API טהור. מתוכנן לטעינה מיידית, אפס השהייה וצריכת זיכרון מינימלית בלבד.'
      },
      fr: {
        title: 'Just Music — Lecteur Audio Léger',
        subtitle: 'API Web Audio / JavaScript',
        body: 'Un lecteur audio minimaliste conçu avec l\'API Web Audio native. Pensé pour un démarrage instantané, aucune latence et une consommation RAM minimale.'
      }
    },
    exp1: {
      en: {
        title: 'CPU Inference Speed Benchmarks',
        subtitle: 'AI Research / SIMD & Memory Layout',
        body: 'Exploring SIMD (AVX2/NEON) vectorization and memory layouts for running quantized local LLM inference efficiently on standard consumer CPU architecture.'
      },
      he: {
        title: 'בנצ\'מארק הרצת AI על מעבד (CPU)',
        subtitle: 'מחקר AI / וקטוריזציית SIMD ומבני זיכרון',
        body: 'בדיקת הוראות SIMD (AVX2/NEON) ומבני זיכרון להרצת מודלי שפה מקומיים ומקוונטזים במהירות על מעבדים ביתיים רגילים.'
      },
      fr: {
        title: 'Benchmarks Vitesse d\'Inférence CPU',
        subtitle: 'Recherche IA / SIMD & Disposition Mémoire',
        body: 'Exploration des instructions SIMD (AVX2/NEON) et de la disposition mémoire pour exécuter des modèles de langage quantifiés rapidement sur CPU grand public.'
      }
    },
    exp2: {
      en: {
        title: 'MoE Memory Locality & Routing',
        subtitle: 'Systems Research / Concurrency',
        body: 'Investigating RAM bandwidth bottlenecks when dynamic routing switches active expert weights in Mixture-of-Experts neural network architectures.'
      },
      he: {
        title: 'מיקום זיכרון וניתוח נתיבים ב-MoE',
        subtitle: 'מחקר מערכות / מקביליות זיכרון',
        body: 'חקירת צווארי בקבוק ברוחב הפס של ה-RAM בעת החלפה דינמית של משקולות מומחים ברשתות נוירונים מסוג Mixture-of-Experts.'
      },
      fr: {
        title: 'Accès Mémoire et Routage MoE',
        subtitle: 'Recherche Systèmes / Concurrence',
        body: 'Analyse des goulots d\'étranglement de la bande passante RAM lors du basculement dynamique des poids d\'experts dans les architectures MoE.'
      }
    },
    exp3: {
      en: {
        title: 'Hebrew Vector Retrieval & Tokenization',
        subtitle: 'NLP Research / Hebrew Embeddings',
        body: 'Benchmarking morphological subword tokenizers and vector space density for dense retrieval in Semitic languages.'
      },
      he: {
        title: 'שליפה וקטורית וטוקניזציה לעברית',
        subtitle: 'מחקר NLP / הטמעות בעברית',
        body: 'בדיקת ביצועים של טוקנייזרים מורפולוגיים וצפיפות המרחב הווקטורי עבור שליפה סמנטית בשפה העברית.'
      },
      fr: {
        title: 'Recherche Vectorielle en Hébreu',
        subtitle: 'Recherche NLP / Embeddings Hébreu',
        body: 'Evaluation des tokeniseurs morphologiques et de la densité vectorielle pour la recherche sémantique dans les langues sémitiques.'
      }
    },
    exp4: {
      en: {
        title: 'Zero-Allocation Data Structures',
        subtitle: 'Rust / Memory Safety',
        body: 'Designing slab allocators, fixed-capacity arenas, and zero-copy view slices for deterministic high-frequency systems.'
      },
      he: {
        title: 'מבני נתונים ללא הקצאות זיכרון',
        subtitle: 'Rust / בטיחות זיכרון',
        body: 'תכנון Arena allocators, חוצצים בקיבולת קבועה וסקירות Zero-copy לביצוע דטרמיניסטי במערכות בעלות תדר גבוה.'
      },
      fr: {
        title: 'Structures de Données Zéro Allocation',
        subtitle: 'Rust / Sécurité Mémoire',
        body: 'Conception d\'allocateurs arena, de tampons à capacité fixe et de vues zero-copy pour des systèmes déterministes haute fréquence.'
      }
    },
    exp5: {
      en: {
        title: 'Embedding Quantization Accuracy Loss',
        subtitle: 'Machine Learning / Optimization',
        body: 'Measuring cosine similarity degradation when quantizing dense 768-dim floating point embeddings to INT4 and INT8 integer formats.'
      },
      he: {
        title: 'בדיקת אובדן דיוק בקוונטיזציית הטמעות',
        subtitle: 'למידת מכונה / אופטימיזציה',
        body: 'מדידת הירידה בדמיון הקוסינוס בעת דחיסת הטמעות וקטוריות צפופות מ-Float32 לפורמטי INT4 ו-INT8.'
      },
      fr: {
        title: 'Perte de Précision par Quantification',
        subtitle: 'Machine Learning / Optimisation',
        body: 'Mesure de la dégradation de la similitude cosinus lors de la quantification d\'embeddings de Float32 vers INT4 et INT8.'
      }
    },
    exp6: {
      en: {
        title: 'Cache-Friendly Graph Traversal',
        subtitle: 'Algorithms / Systems Architecture',
        body: 'Restructuring graph adjacency lists into cache-line aligned contiguous arrays to maximize CPU prefetching efficiency.'
      },
      he: {
        title: 'אלגוריתמי מעבר על גרפים מודעי-Cache',
        subtitle: 'אלגוריתמים / ארכיטקטורת מערכות',
        body: 'ארגון מחדש של רשימות שכנויות בגרפים לתוך מערכים רציפים המותאמים לקווי ה-Cache של המעבד לניצול מרבי של Prefetching.'
      },
      fr: {
        title: 'Parcours de Graphes Adapté au Cache',
        subtitle: 'Algorithmes / Architecture Système',
        body: 'Restructuration des listes d\'adjacence de graphes dans des tableaux contigus alignés sur les lignes de cache pour maximiser le préchargement CPU.'
      }
    }
  };

  // Initialize Footer Year
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Language Manager
  function setLanguage(lang) {
    if (!supportedLangs.includes(lang)) lang = 'he';
    currentLang = lang;
    localStorage.setItem('amlaach_lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';

    // Update active class on language selector buttons
    if (langSelector) {
      const btns = langSelector.querySelectorAll('.lang-pill-btn');
      btns.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
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

  // Set initial language & Dark mode defaults
  setLanguage(currentLang);
  setTheme(currentTheme);

  // Segmented Language Selector Click Event
  if (langSelector) {
    const langBtns = langSelector.querySelectorAll('.lang-pill-btn');
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedLang = btn.getAttribute('data-lang');
        if (selectedLang) {
          setLanguage(selectedLang);
        }
      });
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
  // Floating Back-To-Top Button (Fixed Left Side)
  // --------------------------------------------------------------------------
  if (floatingTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        floatingTopBtn.classList.add('visible');
      } else {
        floatingTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    floatingTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // Technical Modal Popups
  // --------------------------------------------------------------------------
  function openModal(triggerId) {
    if (!modalOverlay || !modalDetails[triggerId]) return;
    const detail = modalDetails[triggerId][currentLang] || modalDetails[triggerId]['en'];
    
    if (modalTitle) modalTitle.textContent = detail.title;
    if (modalSubtitle) modalSubtitle.textContent = detail.subtitle;
    if (modalBodyText) modalBodyText.textContent = detail.body;

    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
  }

  // Attach click listeners to data-modal-trigger elements
  document.querySelectorAll('[data-modal-trigger]').forEach(el => {
    el.addEventListener('click', (e) => {
      // Avoid triggering when clicking links inside project cards
      if (e.target.closest('a')) return;
      const triggerId = el.getAttribute('data-modal-trigger');
      if (triggerId) {
        openModal(triggerId);
      }
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOkBtn) modalOkBtn.addEventListener('click', closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });

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
