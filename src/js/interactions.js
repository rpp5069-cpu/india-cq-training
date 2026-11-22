/* interactions.js — Module-specific interactive elements */
'use strict';

/* ── CQ Slider live update ── */
function initCQSliders() {
  document.querySelectorAll('.cq-slider').forEach(slider => {
    const item = slider.closest('.cq-item') || slider.closest('.cq-item__scale') || slider.closest('.cq-slider-wrap');
    const display = item?.querySelector('.cq-score-display .cq-score-num, .cq-score-display, .slider-output, output');
    const updateFill = () => {
      const pct = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
      slider.style.setProperty('--val', pct + '%');
      if (display) display.textContent = slider.value;
    };
    updateFill();
    slider.addEventListener('input', updateFill);
  });
}

/* ── CQ Check form submit ── */
function initCQCheckForm() {
  const form = document.getElementById('cq-check-form');
  if (!form) return;
  const isPost = form.dataset.mode === 'post';

  // Restore saved values
  const state = JSON.parse(localStorage.getItem('india-cq-v1') || '{}');
  const savedKey = isPost ? 'cq-post' : 'cq-pre';
  if (state[savedKey]) {
    Object.entries(state[savedKey]).forEach(([k, v]) => {
      const el = form.querySelector(`[name="${k}"]`);
      if (el) {
        el.value = v;
        el.dispatchEvent(new Event('input'));
      }
    });
  }

  form.addEventListener('input', () => {
    const data = {};
    new FormData(form).forEach((v, k) => { data[k] = v; });
    const s = JSON.parse(localStorage.getItem('india-cq-v1') || '{}');
    s[savedKey] = data;
    localStorage.setItem('india-cq-v1', JSON.stringify(s));
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    // Compute capability averages
    const inputs = form.querySelectorAll('input[type=range]');
    const scores = { drive: [], knowledge: [], strategy: [], action: [] };
    inputs.forEach(inp => {
      const cap = inp.dataset.capability;
      if (cap && scores[cap]) scores[cap].push(Number(inp.value));
    });
    const averages = {};
    Object.entries(scores).forEach(([cap, vals]) => {
      averages[cap] = vals.length ? Math.round(vals.reduce((a,b)=>a+b,0)/vals.length) : null;
    });
    const s = JSON.parse(localStorage.getItem('india-cq-v1') || '{}');
    s[isPost ? 'cq-post-scores' : 'cq-pre-scores'] = averages;
    localStorage.setItem('india-cq-v1', JSON.stringify(s));

    const dest = isPost ? 'cq-postcheck.html' : 'module-1.html';
    window.location.href = dest;
  });
}

/* ── Drag-and-Sort (Accelerators vs Inhibitors, M7) ── */
function initSortActivity() {
  const activity = document.querySelector('.sort-activity');
  if (!activity) return;

  let dragItem = null;

  activity.querySelectorAll('.sort-card').forEach(card => {
    card.setAttribute('draggable', 'true');

    card.addEventListener('dragstart', e => {
      dragItem = card;
      card.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });
    card.addEventListener('dragend', () => {
      dragItem = null;
      card.classList.remove('dragging');
    });
  });

  activity.querySelectorAll('.sort-column__drop').forEach(zone => {
    zone.addEventListener('dragover', e => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; });
    zone.addEventListener('drop', e => {
      e.preventDefault();
      if (dragItem) zone.appendChild(dragItem);
    });
  });

  // Check button
  const checkBtn = document.getElementById('sort-check');
  if (checkBtn) {
    checkBtn.addEventListener('click', () => {
      activity.querySelectorAll('.sort-card').forEach(card => {
        const col = card.closest('.sort-column__drop');
        if (!col) return;
        const colType = col.closest('.sort-column')?.dataset.type;
        const correct = card.dataset.correct === colType;
        card.classList.remove('correct-place', 'wrong-place');
        card.classList.add(correct ? 'correct-place' : 'wrong-place');
      });
      const feedbackEl = document.getElementById('sort-feedback');
      if (feedbackEl) feedbackEl.classList.add('shown');
    });
  }

  // Reset button
  const resetBtn = document.getElementById('sort-reset');
  const bank = activity.querySelector('.sort-activity__bank');
  if (resetBtn && bank) {
    resetBtn.addEventListener('click', () => {
      activity.querySelectorAll('.sort-card').forEach(card => {
        card.classList.remove('correct-place', 'wrong-place');
        bank.appendChild(card);
      });
      const feedbackEl = document.getElementById('sort-feedback');
      if (feedbackEl) feedbackEl.classList.remove('shown');
    });
  }
}

/* ── Mistake Spotter (Champions Not Campaigns, M7) ── */
function initMistakeSpotter() {
  document.querySelectorAll('.mistake-item').forEach(item => {
    item.querySelectorAll('.mistake-option').forEach(opt => {
      opt.addEventListener('click', () => {
        if (item.dataset.answered) return;
        item.dataset.answered = '1';
        const isCorrect = opt.dataset.mistake === 'true';
        item.querySelectorAll('.mistake-option').forEach(o => {
          o.disabled = true;
          if (o.dataset.mistake === 'true') o.classList.add('selected-correct');
        });
        if (!isCorrect) opt.classList.add('selected-incorrect');
        const fb = item.querySelector('.mistake-feedback');
        if (fb) {
          fb.classList.add('shown');
          fb.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
      });
    });
  });
}

/* ── Motivation Plan builder (M6) ── */
function initMotivationPlan() {
  const form = document.getElementById('motivation-plan-form');
  if (!form) return;

  const state = JSON.parse(localStorage.getItem('india-cq-v1') || '{}');
  if (state['motivation-plan']) {
    Object.entries(state['motivation-plan']).forEach(([k, v]) => {
      const el = form.querySelector(`[name="${k}"]`);
      if (el) el.value = v;
    });
  }

  form.addEventListener('input', () => {
    const data = {};
    new FormData(form).forEach((v, k) => { data[k] = v; });
    const s = JSON.parse(localStorage.getItem('india-cq-v1') || '{}');
    s['motivation-plan'] = data;
    localStorage.setItem('india-cq-v1', JSON.stringify(s));
  });

  const previewBtn = document.getElementById('show-plan-preview');
  if (previewBtn) {
    previewBtn.addEventListener('click', () => {
      const preview = document.getElementById('motivation-plan-preview');
      if (!preview) return;
      const name = form.querySelector('[name="team-member"]')?.value || '[Team member]';
      const motivation = form.querySelector('[name="motivator-type"]')?.value || '';
      const a1 = form.querySelector('[name="action-1"]')?.value || '';
      const a2 = form.querySelector('[name="action-2"]')?.value || '';
      const a3 = form.querySelector('[name="action-3"]')?.value || '';
      preview.innerHTML = `
        <div class="motivation-plan">
          <div class="motivation-plan__header">Motivation Plan for ${name}</div>
          <div class="motivation-plan__body">
            <p><strong>Primary motivator:</strong> ${motivation || '—'}</p>
            ${[a1,a2,a3].filter(Boolean).map((a,i) => `
              <div class="motivation-step">
                <div class="motivation-step__num">${i+1}</div>
                <div>${a}</div>
              </div>`).join('')}
          </div>
        </div>`;
      preview.style.display = 'block';
    });
  }
}

/* ── Defaults Gap Table (M4) ── */
function initDefaultsTable() {
  const addBtn = document.getElementById('add-defaults-row');
  const tbody = document.getElementById('defaults-tbody');
  if (!addBtn || !tbody) return;

  const state = JSON.parse(localStorage.getItem('india-cq-v1') || '{}');
  const rows = state['defaults-rows'] || [];
  if (rows.length === 0) rows.push({ default: '', expectation: '', adaptation: '' });
  rows.forEach(r => addDefaultsRow(tbody, r));

  addBtn.addEventListener('click', () => {
    addDefaultsRow(tbody, { default: '', expectation: '', adaptation: '' });
    saveDefaultsRows(tbody);
  });
}

function addDefaultsRow(tbody, data) {
  const tr = document.createElement('tr');
  ['default','expectation','adaptation'].forEach(field => {
    const td = document.createElement('td');
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-input';
    input.value = data[field] || '';
    input.placeholder = field === 'default' ? 'e.g. Direct feedback in group' :
                         field === 'expectation' ? 'e.g. Feedback given privately' :
                         'e.g. Meet 1:1 before group review';
    input.addEventListener('input', () => saveDefaultsRows(tbody));
    td.appendChild(input);
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
}

function saveDefaultsRows(tbody) {
  const rows = [];
  tbody.querySelectorAll('tr').forEach(tr => {
    const inputs = tr.querySelectorAll('input');
    rows.push({
      default: inputs[0]?.value || '',
      expectation: inputs[1]?.value || '',
      adaptation: inputs[2]?.value || '',
    });
  });
  const s = JSON.parse(localStorage.getItem('india-cq-v1') || '{}');
  s['defaults-rows'] = rows;
  localStorage.setItem('india-cq-v1', JSON.stringify(s));
}

/* ── Capstone response save ── */
function initCapstoneResponses() {
  ['capstone-q1','capstone-q2','capstone-q3'].forEach(key => {
    const textarea = document.querySelector(`textarea[data-key="${key}"]`);
    if (!textarea) return;
    const state = JSON.parse(localStorage.getItem('india-cq-v1') || '{}');
    if (state[key]) textarea.value = state[key];
    textarea.addEventListener('input', () => {
      const s = JSON.parse(localStorage.getItem('india-cq-v1') || '{}');
      s[key] = textarea.value;
      localStorage.setItem('india-cq-v1', JSON.stringify(s));
    });
  });

  document.querySelectorAll('.show-model-answer').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.answer);
      if (!target) return;
      const open = target.classList.toggle('open');
      btn.textContent = open ? 'Hide model answer' : 'Show model answer';
    });
  });
}

/* ── Action Plan ── */
function initActionPlan() {
  const form = document.getElementById('action-plan-form');
  if (!form) return;
  const state = JSON.parse(localStorage.getItem('india-cq-v1') || '{}');
  if (state['action-plan']) {
    Object.entries(state['action-plan']).forEach(([k, v]) => {
      const el = form.querySelector(`[name="${k}"]`);
      if (el) el.value = v;
    });
  }
  form.addEventListener('input', () => {
    const data = {};
    new FormData(form).forEach((v, k) => { data[k] = v; });
    const s = JSON.parse(localStorage.getItem('india-cq-v1') || '{}');
    s['action-plan'] = data;
    localStorage.setItem('india-cq-v1', JSON.stringify(s));
  });
}

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', () => {
  initCQSliders();
  initCQCheckForm();
  initSortActivity();
  initMistakeSpotter();
  initMotivationPlan();
  initDefaultsTable();
  initCapstoneResponses();
  initActionPlan();
});
