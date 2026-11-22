/* charts.js — Accessible chart renderers using Chart.js + inline SVG */
'use strict';

/* ── Hofstede Bar Chart (Chart.js) ── */
function renderHofstedeChart(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || typeof Chart === 'undefined') return;

  const dims = ['PDI','IDV','MAS','UAI','LTO','IVR'];
  const india = [77, 48, 56, 40, 51, 26];
  const us    = [40, 91, 62, 46, 26, 68];

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: dims,
      datasets: [
        {
          label: 'India',
          data: india,
          backgroundColor: '#0072B2',
          borderRadius: 4,
        },
        {
          label: 'U.S. (reference)',
          data: us,
          backgroundColor: '#adb5bd',
          borderRadius: 4,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        tooltip: {
          callbacks: {
            afterBody: ctx => {
              const labels = {
                PDI: 'Power Distance',
                IDV: 'Individualism',
                MAS: 'Masculinity',
                UAI: 'Uncertainty Avoidance',
                LTO: 'Long-Term Orientation',
                IVR: 'Indulgence',
              };
              return labels[ctx[0].label] || '';
            }
          }
        }
      },
      scales: {
        y: { min: 0, max: 100, grid: { color: '#e9ecef' } },
        x: { grid: { display: false } }
      }
    }
  });
}

/* ── Rogers Bell Curve (SVG) ── */
function renderRogersCurve(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const W = 560, H = 220;
  const categories = [
    { label: 'Innovators', pct: 2.5,  x: 70  },
    { label: 'Early\nAdopters', pct: 13.5, x: 155 },
    { label: 'Early\nMajority', pct: 34,   x: 265 },
    { label: 'Late\nMajority',  pct: 34,   x: 375 },
    { label: 'Laggards', pct: 16,   x: 470 },
  ];

  // Bell curve path (approximation)
  const path = 'M20,200 C60,200 90,10 140,10 C190,10 200,160 230,170 ' +
               'C260,180 270,30 310,20 C350,10 360,160 400,170 ' +
               'C430,178 450,100 490,90 C510,80 530,180 540,200 Z';

  const tipX = (16 / 100) * W + 20; // 16% tipping point position

  el.innerHTML = `
<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg"
     role="img" aria-label="Rogers Diffusion of Innovations bell curve. Adopter categories: Innovators 2.5%, Early Adopters 13.5%, Early Majority 34%, Late Majority 34%, Laggards 16%. The 16% tipping point (innovators + early adopters) is marked with a vertical line.">
  <defs>
    <linearGradient id="bellGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#0072B2" stop-opacity=".6"/>
      <stop offset="27%"  stop-color="#0072B2" stop-opacity=".9"/>
      <stop offset="27%"  stop-color="#D55E00" stop-opacity=".5"/>
      <stop offset="100%" stop-color="#D55E00" stop-opacity=".3"/>
    </linearGradient>
  </defs>
  <!-- bell curve fill -->
  <path d="${path}" fill="url(#bellGrad)" stroke="none"/>
  <!-- tipping point line -->
  <line x1="${145}" y1="8" x2="${145}" y2="195"
        stroke="#2e7d32" stroke-width="2.5" stroke-dasharray="6 3"/>
  <text x="${148}" y="22" font-family="'Outfit',sans-serif" font-size="10" fill="#2e7d32" font-weight="700">16% tipping point</text>
  <!-- category labels -->
  ${categories.map(c => `
  <text x="${c.x}" y="210" text-anchor="middle"
        font-family="'Inter',sans-serif" font-size="9.5" fill="#495057">
    ${c.label.split('\n').map((l,i) => `<tspan x="${c.x}" dy="${i===0?0:11}">${l}</tspan>`).join('')}
  </text>
  <text x="${c.x}" y="${c.label.includes('\n') ? 220 : 221}" text-anchor="middle"
        font-family="'Outfit',sans-serif" font-size="10" fill="#0072B2" font-weight="700" dy="0">
    ${c.pct}%
  </text>`).join('')}
  <!-- x axis -->
  <line x1="20" y1="198" x2="${W-20}" y2="198" stroke="#dee2e6" stroke-width="1.5"/>
</svg>`;
}

/* ── UPI Growth Chart (Chart.js) ── */
function renderUPIChart(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || typeof Chart === 'undefined') return;

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ['FY18','FY19','FY20','FY21','FY22','FY23','FY24'],
      datasets: [{
        label: 'UPI transactions (billions)',
        data: [0.92, 5.35, 12.5, 22.3, 46, 83.7, 131.1],
        backgroundColor: ctx => ctx.dataIndex >= 4 ? '#0072B2' : '#adb5bd',
        borderRadius: 4,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        annotation: {},
        tooltip: {
          callbacks: {
            afterLabel: ctx => {
              if (ctx.dataIndex === 2) return '← Jan Dhan mandate effect begins';
              return '';
            }
          }
        }
      },
      scales: {
        y: {
          title: { display: true, text: 'Billions of transactions' },
          grid: { color: '#e9ecef' }
        },
        x: { grid: { display: false } }
      }
    }
  });
}

/* ── GLOBE Chart (accessible HTML table, rendered by HTML) ── */
/* Rendered directly in module-3.html as a data-table */

/* ── Init all charts found on current page ── */
document.addEventListener('DOMContentLoaded', () => {
  renderHofstedeChart('hofstede-chart');
  renderRogersCurve('rogers-curve');
  renderUPIChart('upi-chart');
});
