# Run & Deploy — India CQ Training

## Run locally (no build step required)

The site is pure static HTML. Open `index.html` directly in any modern browser:

**Option A — File protocol (simplest)**
```
# Windows
start index.html

# Mac
open index.html
```
Note: `localStorage` works on `file://` in Chrome and Edge. If your browser blocks localStorage on file:// protocol, use a local server (Option B).

**Option B — Local HTTP server (recommended for Chrome)**
```bash
# Python 3
cd C:\Projects\india-cq-training
python -m http.server 8080
# then open: http://localhost:8080

# Node (npx — no install needed)
npx serve .
# then open the URL it prints
```

**Option C — VS Code Live Server**
Install the Live Server extension, right-click `index.html` → "Open with Live Server".

---

## Deploy to GitHub Pages

### First-time setup
```bash
# 1. Initialize git repo (if not already done)
cd C:\Projects\india-cq-training
git init
git add .
git commit -m "Initial build — India CQ Training site"

# 2. Create a GitHub repo (via github.com or CLI)
gh repo create india-cq-training --public --source=. --push

# 3. Enable GitHub Pages
# GitHub.com → repo → Settings → Pages → Source: main branch → / (root)
# OR
gh api repos/{owner}/india-cq-training/pages -X POST -f source[branch]=main -f source[path]=/
```

### After any update
```bash
git add .
git commit -m "Update: [describe change]"
git push

# GitHub Pages redeploys automatically in ~60 seconds
```

### Custom domain (optional)
```bash
echo "cq-training.example.com" > CNAME
git add CNAME && git commit -m "Add custom domain" && git push
# Then configure DNS: CNAME record pointing to <username>.github.io
```

---

## Browser compatibility

- Chrome 90+ ✅
- Firefox 90+ ✅
- Safari 15+ ✅
- Edge 90+ ✅
- IE11 ✗ (not supported — uses CSS custom properties, ES6)

---

## Accessibility testing (Step 4)

Run axe DevTools in Chrome:
1. Install [axe DevTools browser extension](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
2. Open each page locally
3. Open DevTools → axe DevTools tab → "Scan ALL of my page"
4. Fix any Critical or Serious issues

Run Lighthouse:
```
# In Chrome: DevTools → Lighthouse → Accessibility → Generate report
# Target: Accessibility score ≥ 90
```

Run link check:
```bash
# Install lychee (Windows)
choco install lychee
# or download from https://github.com/lycheeverse/lychee/releases

cd C:\Projects\india-cq-training
lychee --no-progress "**/*.html"
```

---

## File checklist

```
india-cq-training/
  index.html                   ← entry point
  cq-precheck.html
  module-1.html
  module-2.html
  module-3.html
  module-4.html
  module-5.html
  module-6.html
  module-7.html
  capstone.html
  action-plan.html
  cq-postcheck.html
  references.html
  about.html
  src/
    css/main.css
    js/app.js
    js/charts.js
    js/interactions.js
    js/completion.js
  content/
    references.json
    modules.json
    chart-data.json
  rubric-audit.md
  model-answers-for-review.md   ← [DRAFT] awaiting team review
  content-gaps.md               ← open gaps and citation notes
  DEPLOY.md                     ← this file
```

---

## After deployment

Point the team to:
- `model-answers-for-review.md` — three capstone draft answers marked [DRAFT]; review and edit before sharing with students
- `content-gaps.md` — three open gaps (SmartArt slides 32–33, 16, and four uncited claims on slides 4–5); verify reconstructed content against original sources
- `rubric-audit.md` — full rubric mapping; use to verify no criterion is missing before grading
