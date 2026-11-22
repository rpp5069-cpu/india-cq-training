/* app.js — Navigation, progress tracking, localStorage helpers */
'use strict';

const STORAGE_KEY = 'india-cq-v1';

const PAGES = [
  { id: 'welcome',    label: 'Welcome',    href: 'index.html' },
  { id: 'precheck',   label: 'CQ Check',   href: 'cq-precheck.html' },
  { id: 'module-1',   label: 'M1',         href: 'module-1.html' },
  { id: 'module-2',   label: 'M2',         href: 'module-2.html' },
  { id: 'module-3',   label: 'M3',         href: 'module-3.html' },
  { id: 'module-4',   label: 'M4',         href: 'module-4.html' },
  { id: 'module-5',   label: 'M5',         href: 'module-5.html' },
  { id: 'module-6',   label: 'M6',         href: 'module-6.html' },
  { id: 'module-7',   label: 'M7',         href: 'module-7.html' },
  { id: 'capstone',   label: 'Capstone',   href: 'capstone.html' },
  { id: 'plan',       label: '30-Day Plan',href: 'action-plan.html' },
  { id: 'postcheck',  label: 'CQ Result',  href: 'cq-postcheck.html' },
  { id: 'references', label: 'References', href: 'references.html' },
  { id: 'about',      label: 'About',      href: 'about.html' },
];

/* ── Storage helpers ── */
function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch { return {}; }
}
function saveState(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}
function getField(key)        { return loadState()[key]; }
function setField(key, value) { const s = loadState(); s[key] = value; saveState(s); }

/* ── Progress helpers ── */
function markComplete(pageId) {
  const s = loadState();
  if (!s.completed) s.completed = [];
  if (!s.completed.includes(pageId)) s.completed.push(pageId);
  saveState(s);
  updateNavDots();
}
function isComplete(pageId) {
  const s = loadState();
  return s.completed && s.completed.includes(pageId);
}

/* ── Build progress nav ── */
function buildProgressNav() {
  const currentPage = document.body.dataset.page;
  const completed = loadState().completed || [];
  document.querySelectorAll('.progress-nav-item').forEach(a => {
    if (a.dataset.page === currentPage) a.classList.add('active');
    if (completed.includes(a.dataset.page)) a.classList.add('completed');
  });
}

function updateNavDots() {
  const state = loadState();
  const completed = state.completed || [];
  document.querySelectorAll('.progress-nav-item').forEach(a => {
    if (completed.includes(a.dataset.page)) a.classList.add('completed');
  });
}

/* ── Reflection autosave ── */
function initReflections() {
  document.querySelectorAll('.reflection-box[data-key]').forEach(textarea => {
    const key = textarea.dataset.key;
    const saved = getField(key);
    if (saved) textarea.value = saved;

    const notice = textarea.closest('.reflect-section')?.querySelector('.reflect-saved');
    textarea.addEventListener('input', () => {
      setField(key, textarea.value);
      if (notice) {
        notice.classList.add('shown');
        clearTimeout(textarea._saveTimer);
        textarea._saveTimer = setTimeout(() => notice.classList.remove('shown'), 2000);
      }
    });
  });
}

/* ── Branching scenarios ── */
function initScenarios() {
  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const step = btn.closest('.scenario-step');
      if (!step) return;
      step.querySelectorAll('.choice-btn').forEach(b => b.disabled = true);
      btn.classList.add(btn.dataset.outcome === 'correct' ? 'selected-correct' : 'selected-incorrect');
      if (btn.dataset.outcome === 'correct') {
        step.querySelectorAll('.choice-btn:not(.selected-correct)').forEach(b => {});
      }
      const fb = step.querySelector(`.feedback-panel[data-for="${btn.dataset.choice}"]`);
      if (fb) {
        fb.classList.add('shown', btn.dataset.outcome === 'correct' ? 'correct' : 'incorrect');
      }
    });
  });
}

/* ── Knowledge checks ── */
function initKnowledgeChecks() {
  document.querySelectorAll('.kc-item').forEach(item => {
    const opts = item.querySelectorAll('.kc-option');
    opts.forEach(opt => {
      opt.addEventListener('click', () => {
        if (item.dataset.answered) return;
        item.dataset.answered = '1';
        const isCorrect = opt.dataset.correct === 'true';
        opts.forEach(o => {
          o.style.pointerEvents = 'none';
          if (o.dataset.correct === 'true') o.classList.add('correct');
        });
        if (!isCorrect) opt.classList.add('incorrect');
        const fb = item.querySelector('.kc-feedback.' + (isCorrect ? 'correct' : 'incorrect'));
        if (fb) fb.classList.add('shown');
      });
    });
  });
}

/* ── Accordion/expandable cards ── */
function initAccordions() {
  document.querySelectorAll('.reflection-card__header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const chevron = header.querySelector('.reflection-card__chevron');
      const open = body.classList.toggle('open');
      if (chevron) chevron.classList.toggle('open', open);
      header.setAttribute('aria-expanded', open);
    });
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.setAttribute('aria-expanded', 'false');
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); header.click(); }
    });
  });
}

/* ── Hofstede explorer ── */
function initHofstedeExplorer() {
  document.querySelectorAll('.hofstede-bar-row').forEach(row => {
    row.setAttribute('tabindex', '0');
    row.setAttribute('role', 'button');
    row.setAttribute('aria-expanded', 'false');
    const panel = row.nextElementSibling;
    if (!panel || !panel.classList.contains('hofstede-panel')) return;

    const toggle = () => {
      const open = panel.classList.toggle('open');
      row.setAttribute('aria-expanded', open);
    };
    row.addEventListener('click', toggle);
    row.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });
}

/* ── Reset progress ── */
function initResetBtn() {
  const btn = document.getElementById('reset-progress');
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (confirm('Reset all progress, quiz answers, and reflections? This cannot be undone.')) {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  });
}

/* ── Theme toggle ── */
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.dataset.theme = saved;
  btn.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme;
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
  });
}

/* ── Auto-mark complete when user scrolls to bottom ── */
function initAutoComplete() {
  const pageId = document.body.dataset.page;
  if (!pageId || pageId === 'welcome' || isComplete(pageId)) return;
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      markComplete(pageId);
      const banner = document.querySelector('.module-complete-banner');
      if (banner) banner.classList.add('shown');
    }
  }, { threshold: 0.9 });
  const footer = document.querySelector('.module-nav, .site-footer');
  if (footer) observer.observe(footer);
}

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', () => {
  buildProgressNav();
  initReflections();
  initScenarios();
  initKnowledgeChecks();
  initAccordions();
  initHofstedeExplorer();
  initResetBtn();
  initThemeToggle();
  initAutoComplete();
  if (typeof lucide !== 'undefined') lucide.createIcons();
});
