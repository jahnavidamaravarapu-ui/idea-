requireAuth();

const savedGrid = document.getElementById('saved-grid');
const savedCount = document.getElementById('saved-count');
const clearAllButton = document.getElementById('clear-all-btn');

function renderSavedIdeas() {
  const savedIdeas = IDEAS.filter(idea => getSavedIds().includes(idea.id));
  savedCount.textContent = `${savedIdeas.length} idea${savedIdeas.length === 1 ? '' : 's'} saved`;
  if (clearAllButton) clearAllButton.hidden = savedIdeas.length === 0;
  if (!savedIdeas.length) {
    savedGrid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><div class="empty-state-icon">♡</div><h2 class="empty-state-title">No saved ideas yet</h2><p class="empty-state-desc">Explore startup ideas and save the ones that spark something.</p><a class="btn btn-primary" href="explore.html">Explore ideas <span>→</span></a></div>';
    return;
  }
  savedGrid.innerHTML = savedIdeas.map(createSavedCard).join('');
  savedGrid.querySelectorAll('[data-action="remove"]').forEach(button => {
    button.addEventListener('click', () => { unsaveIdea(Number(button.dataset.id)); showToast('Idea removed from saved.', 'info'); renderSavedIdeas(); });
  });
}

function createSavedCard(idea) {
  return `<article class="card idea-card" id="saved-card-${idea.id}"><div class="idea-card-header"><div class="idea-card-icon">${idea.icon}</div><span class="badge badge-featured">♥ Saved</span></div><div class="idea-card-meta"><h2 class="idea-card-title">${idea.title}</h2><p class="idea-card-desc">${idea.description}</p></div><div class="idea-card-footer"><span class="badge badge-category">${idea.category}</span><span class="badge ${getDifficultyClass(idea.difficulty)}">${idea.difficulty}</span></div><div class="idea-card-actions"><button class="btn btn-sm btn-danger" data-action="remove" data-id="${idea.id}">✕ Remove</button><a class="btn btn-sm btn-secondary" href="details.html?id=${idea.id}">View details →</a></div></article>`;
}

if (clearAllButton) clearAllButton.addEventListener('click', () => { saveUserSavedIds([]); renderSavedIdeas(); showToast('Saved ideas cleared.', 'info'); });
renderSavedIdeas();