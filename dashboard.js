/* =========================================================
   dashboard.js – Dashboard page logic
   Renders stats, featured ideas, and welcome content
   ========================================================= */

// Protect the page – must be logged in
requireAuth();

/* ── DOM References ── */
const welcomeNameEl = document.getElementById('welcome-name');
const statTotalEl   = document.getElementById('stat-total');
const statCatsEl    = document.getElementById('stat-categories');
const statSavedEl   = document.getElementById('stat-saved');
const featuredGrid  = document.getElementById('featured-grid');

/* ── Initialise dashboard ── */
function initDashboard() {
  // Set welcome name
  const user = getCurrentUser();
  if (welcomeNameEl) {
    welcomeNameEl.textContent = user.name.split(' ')[0]; // First name
  }

  // Populate stats using the IDEAS array
  const totalIdeas = IDEAS.length;
  const totalCategories = getCategories().length;
  const totalSaved = getSavedIds().length;

  animateCounter(statTotalEl,   totalIdeas);
  animateCounter(statCatsEl,    totalCategories);
  animateCounter(statSavedEl,   totalSaved);

  // Render featured ideas using map()
  renderFeaturedIdeas();
}

/* ── Animate counter from 0 to value ── */
function animateCounter(el, target) {
  if (!el) return;
  let current = 0;
  const step = Math.ceil(target / 20);
  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(interval);
  }, 40);
}

/* ── Render featured idea cards using map() ── */
function renderFeaturedIdeas() {
  if (!featuredGrid) return;

  const featured = getFeaturedIdeas();

  // Use map() to create HTML strings for each idea
  const cardsHTML = featured.map(idea => createIdeaCardHTML(idea)).join('');

  featuredGrid.innerHTML = cardsHTML;
  featuredGrid.classList.add('stagger');

  // Attach event listeners after rendering
  attachCardEvents(featuredGrid);
}

/* ── Create an idea card HTML string (shared with explore.js) ── */
function createIdeaCardHTML(idea) {
  const saved = isSaved(idea.id);
  const saveLabel = saved ? '♥ Saved' : '♡ Save';
  const diffClass = getDifficultyClass(idea.difficulty);

  return `
    <div class="card idea-card" data-id="${idea.id}">
      <div class="idea-card-header">
        <div class="idea-card-icon">${idea.icon}</div>
        <div style="margin-left:auto">
          ${idea.featured ? '<span class="badge badge-featured">✦ Featured</span>' : ''}
        </div>
      </div>
      <div class="idea-card-meta">
        <h3 class="idea-card-title">${idea.title}</h3>
        <p class="idea-card-desc">${idea.description}</p>
      </div>
      <div class="idea-card-footer">
        <div>
          <span class="badge badge-category">${idea.category}</span>
        </div>
        <span class="badge ${diffClass}">${idea.difficulty}</span>
      </div>
      <div class="idea-card-actions">
        <button
          class="btn btn-sm btn-save${saved ? ' saved' : ''}"
          data-action="save"
          data-id="${idea.id}"
          aria-label="${saved ? 'Remove from saved' : 'Save idea'}"
        >${saveLabel}</button>
        <a href="details.html?id=${idea.id}" class="btn btn-sm btn-secondary">View Details →</a>
      </div>
    </div>
  `;
}

/* ── Attach save button events to a container ── */
function attachCardEvents(container) {
  container.querySelectorAll('[data-action="save"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = Number(btn.dataset.id);
      const nowSaved = toggleSave(id);

      // Update button state
      btn.textContent = nowSaved ? '♥ Saved' : '♡ Save';
      btn.classList.toggle('saved', nowSaved);

      // Update saved stat display
      const savedCount = getSavedIds().length;
      if (statSavedEl) statSavedEl.textContent = savedCount;

      showToast(
        nowSaved ? 'Idea saved to favourites!' : 'Idea removed from saved.',
        nowSaved ? 'success' : 'info'
      );
    });
  });
}

/* ── Run on page load ── */
initDashboard();
