/* ============================================================
   Main Application Logic
   ============================================================ */

(function () {
  'use strict';

  // --- State ---
  let currentLang = 'en';
  let currentTheme = 'light';
  // Whether the user has manually chosen a theme. When false, the site
  // follows the OS/browser preference via prefers-color-scheme.
  let themeIsManual = false;

  // --- DOM References ---
  const html = document.documentElement;
  const langToggle = document.getElementById('langToggle');
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const tabNav = document.getElementById('tabNav');
  const cvEnContainer = document.getElementById('cvEn');
  const cvZhContainer = document.getElementById('cvZh');

  // --- Initialize ---
  function init() {
    // Load saved preferences
    const savedLang = localStorage.getItem('site-lang');
    const savedTheme = localStorage.getItem('site-theme');
    if (savedLang === 'zh') currentLang = 'zh';

    // If the user has manually chosen a theme before, honour that choice.
    // Otherwise, follow the OS/browser preference automatically.
    if (savedTheme === 'dark' || savedTheme === 'light') {
      currentTheme = savedTheme;
      themeIsManual = true;
    } else {
      currentTheme = getSystemTheme();
      themeIsManual = false;
    }

    // Keep following the system preference as it changes, unless the
    // user has explicitly picked a theme.
    if (window.matchMedia) {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const onSystemChange = (e) => {
        if (!themeIsManual) {
          currentTheme = e.matches ? 'dark' : 'light';
          applyTheme();
        }
      };
      if (typeof mql.addEventListener === 'function') {
        mql.addEventListener('change', onSystemChange);
      } else if (typeof mql.addListener === 'function') {
        mql.addListener(onSystemChange);
      }
    }

    applyTheme();
    applyLanguage();
    renderCV();
    bindEvents();
  }

  // Read the current OS/browser color scheme preference.
  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  // --- Theme ---
  function applyTheme() {
    html.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      themeIcon.className = 'fa-solid fa-sun';
    } else {
      themeIcon.className = 'fa-solid fa-moon';
    }
    // Persist the choice only when the user picks a theme manually.
    if (themeIsManual) {
      localStorage.setItem('site-theme', currentTheme);
    }
  }

  function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    themeIsManual = true; // a manual toggle locks in the user's choice
    applyTheme();
  }

  // --- Language ---
  function applyLanguage() {
    const d = i18n[currentLang];

    // Update sidebar
    document.querySelector('.name').textContent = d.name;
    document.querySelector('.title-en').classList.toggle('hidden', currentLang !== 'en');
    document.querySelector('.title-zh').classList.toggle('hidden', currentLang !== 'zh');
    document.querySelector('.affiliation-en').classList.toggle('hidden', currentLang !== 'en');
    document.querySelector('.affiliation-zh').classList.toggle('hidden', currentLang !== 'zh');
    document.querySelector('.location-en').classList.toggle('hidden', currentLang !== 'en');
    document.querySelector('.location-zh').classList.toggle('hidden', currentLang !== 'zh');

    // Update tab buttons
    document.querySelectorAll('.tab-en').forEach(el => el.classList.toggle('hidden', currentLang !== 'en'));
    document.querySelectorAll('.tab-zh').forEach(el => el.classList.toggle('hidden', currentLang !== 'zh'));

    // Update gallery captions
    document.querySelectorAll('.gallery-caption-en').forEach(el => el.classList.toggle('hidden', currentLang !== 'en'));
    document.querySelectorAll('.gallery-caption-zh').forEach(el => el.classList.toggle('hidden', currentLang !== 'zh'));

    // Update lang toggle button
    const langZh = langToggle.querySelector('.lang-zh');
    const langEn = langToggle.querySelector('.lang-en');
    langZh.classList.toggle('active-lang', currentLang === 'zh');
    langEn.classList.toggle('active-lang', currentLang === 'en');

    // Show/hide CV containers
    cvEnContainer.classList.toggle('hidden', currentLang !== 'en');
    cvZhContainer.classList.toggle('hidden', currentLang !== 'zh');

    localStorage.setItem('site-lang', currentLang);
  }

  function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    applyLanguage();
  }

  // --- Tab Switching ---
  function switchTab(tabName) {
    // Update buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    // Update content
    document.querySelectorAll('.tab-content').forEach(section => {
      section.classList.toggle('active', section.id === `tab-${tabName}`);
    });
  }

  // --- Render CV ---
  function renderCV() {
    cvEnContainer.innerHTML = buildCV('en');
    cvZhContainer.innerHTML = buildCV('zh');
  }

  function buildCV(lang) {
    const d = i18n[lang];
    const isEn = lang === 'en';

    const sections = [];

    // --- Education ---
    sections.push(renderSection(d.cvEducation, 'fa-graduation-cap', () => {
      let html = '';
      const edus = [d.edu1, d.edu2, d.edu3];
      edus.forEach(edu => {
        html += `
          <div class="cv-edu-item">
            <div class="cv-edu-header">
              <span class="cv-edu-school">${edu.school}</span>
              <span class="cv-edu-date">${edu.date}</span>
            </div>
            <div class="cv-edu-degree">${edu.degree}</div>
            ${edu.note ? `<div class="cv-edu-note">${edu.note}</div>` : ''}
          </div>`;
      });
      return html;
    }));

    // --- Publications ---
    sections.push(renderSection(d.cvPublications, 'fa-file-lines', () => {
      return `
        <div class="cv-pub-item">
          <div class="cv-pub-title">${d.pub1.title}</div>
          <div class="cv-pub-authors">${d.pub1.authors}</div>
          <div class="cv-pub-venue">${d.pub1.venue}</div>
          <a href="${d.pub1.link}" target="_blank" rel="noopener" class="cv-pub-link">${d.pub1.link}</a>
        </div>`;
    }));

    // --- IC Related Experience ---
    sections.push(renderSection(d.cvICExperience, 'fa-microchip', () => {
      let html = '';
      html += `<div class="cv-experience-item">
        <div class="cv-item-title">${d.icExp1.title}</div>
        <div class="cv-item-desc">${d.icExp1.desc}</div>
      </div>`;
      html += `<div class="cv-experience-item">
        <div class="cv-item-title">${d.icExp2}</div>
      </div>`;
      html += `<div class="cv-experience-item">
        <div class="cv-item-title">${d.icExp3}</div>
      </div>`;
      html += `<div class="cv-experience-item">
        <div class="cv-item-title">${d.icExp4}</div>
      </div>`;
      return html;
    }));

    // --- Language ---
    sections.push(renderSection(d.cvLanguage, 'fa-language', () => {
      return `<ul class="cv-list">
        <li>${d.lang1}</li>
        <li>${d.lang2}</li>
      </ul>`;
    }));

    // --- Skills ---
    sections.push(renderSection(d.cvSkills, 'fa-gears', () => {
      return `<ul class="cv-list">
        <li>${d.skill1}</li>
        <li>${d.skill2}</li>
        <li>${d.skill3}</li>
        <li>${d.skill4}</li>
      </ul>`;
    }));

    // --- Honors ---
    sections.push(renderSection(d.cvHonors, 'fa-trophy', () => {
      let html = '';
      const honors = [d.honor1, d.honor2, d.honor3, d.honor4, d.honor5,
                      d.honor6, d.honor7, d.honor8, d.honor9, d.honor10, d.honor11];
      honors.forEach(h => {
        html += `<div class="cv-dated-line">
          <span>${h.text}</span>
          <span class="cv-date">${h.date}</span>
        </div>`;
      });
      return html;
    }));

    // --- Projects ---
    sections.push(renderSection(d.cvProjects, 'fa-heart', () => {
      let html = '<ul class="cv-list">';
      const projects = [d.project1, d.project2, d.project3, d.project4, d.project5, d.project6, d.project7];
      projects.forEach(p => {
        if (typeof p === 'object' && p.title) {
          html += `<li>
            <span class="cv-item-title">${p.title}</span>
            <div class="cv-note">${p.desc}</div>
          </li>`;
        } else {
          html += `<li>${p}</li>`;
        }
      });
      html += '</ul>';
      return html;
    }));

    return sections.join('');
  }

  function renderSection(title, icon, renderContent) {
    return `
      <div class="cv-section">
        <h3 class="cv-section-title">
          <i class="fa-solid ${icon}"></i> ${title}
        </h3>
        ${renderContent()}
      </div>`;
  }

  // --- Event Bindings ---
  function bindEvents() {
    langToggle.addEventListener('click', toggleLanguage);
    themeToggle.addEventListener('click', toggleTheme);

    tabNav.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-btn');
      if (!btn) return;
      switchTab(btn.dataset.tab);
    });
  }

  // --- Start ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
