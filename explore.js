/* =========================================================
   explore.js – Explore page logic
   Handles search, category filtering, and idea card rendering
   ========================================================= */

// Protect the page
requireAuth();

/* ── DOM References ── */
const searchInput     = document.getElementById('search-input');
const categorySelect  = document.getElementById('category-select');
const ideasGrid       = document.getElementById('ideas-grid');
const resultCount     = document.getElementById('result-count');
const clearSearchBtn  = document.getElementById('clear-search');

/* ── State ── */
let currentQuery    = '';
let currentCategory = '';

/* ── Populate category dropdown from unique categories in IDEAS ── */
function populateCategoryFilter() {
  if (!categorySelect) return;

  const categories = getCategories();

  // Build option elements using map()
  const optionsHTML = categories
    .map(cat => `<option value="${cat}">${cat}</option>`)
    .join('');

  categorySelect.innerHTML = '<option value="">All Categories</option>' + optionsHTML;
}

/* ── Render idea cards to the grid ── */
function renderIdeas(ideas) {
  if (!ideasGrid) return;

  if (ideas.length === 0) {
    ideasGrid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-state-icon">🔍</div>
        <h3 class="empty-state-title">No ideas found</h3>
        <p class="empty-state-desc">Try adjusting your search or clearing the category filter.</p>
        <button class="btn btn-secondary" onclick="clearFilters()">Clear Filters</button>
      </div>
    `;
  } else {
    // Use map() to generate card HTML for each idea
    ideasGrid.innerHTML = ideas.map(idea => createIdeaCardHTML(idea)).join('');
    ideasGrid.classList.add('stagger');
    attachCardEvents(ideasGrid);
  }

  // Update result count
  if (resultCount) {
    resultCount.innerHTML = `Showing <span>${ideas.length}</span> of <span>${IDEAS.length}</span> ideas`;
  }
}

/* ── Apply current search and category filter ── */
function applyFilters() {
  const filtered = searchAndFilter(currentQuery, currentCategory);
  renderIdeas(filtered);

  // Show/hide clear button
  if (clearSearchBtn) {
    clearSearchBtn.style.display = (currentQuery || currentCategory) ? 'inline-flex' : 'none';
  }
}

/* ── Clear all filters ── */
function clearFilters() {
  currentQuery = '';
  currentCategory = '';
  if (searchInput)    searchInput.value = '';
  if (categorySelect) categorySelect.value = '';
  applyFilters();
}

/* ── Create idea card HTML (same structure as dashboard) ── */
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
        <span class="badge badge-category">${idea.category}</span>
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

/* ── Attach save/unsave button events ── */
function attachCardEvents(container) {
  container.querySelectorAll('[data-action="save"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      const nowSaved = toggleSave(id);
      btn.textContent = nowSaved ? '♥ Saved' : '♡ Save';
      btn.classList.toggle('saved', nowSaved);
      showToast(
        nowSaved ? 'Idea saved to favourites!' : 'Idea removed from saved.',
        nowSaved ? 'success' : 'info'
      );
    });
  });
}

/* ── Event Listeners ── */

// Search input – live search as user types
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    currentQuery = e.target.value;
    applyFilters();
  });
}

// Category dropdown – filter on change
if (categorySelect) {
  categorySelect.addEventListener('change', (e) => {
    currentCategory = e.target.value;
    applyFilters();
  });
}

// Clear button
if (clearSearchBtn) {
  clearSearchBtn.addEventListener('click', clearFilters);
}

/* ── Initialise page ── */
function initExplore() {
  populateCategoryFilter();
  applyFilters(); // Show all ideas by default
}

initExplore();
