requireAuth();

const detailsContainer = document.getElementById('details-container');
const requestedIdeaId = new URLSearchParams(window.location.search).get('id');
const selectedIdea = findIdeaById(requestedIdeaId);

function renderDetails(idea) {
  if (!idea) {
    detailsContainer.innerHTML = '<div class="empty-state"><div class="empty-state-icon">?</div><h2 class="empty-state-title">Idea not found</h2><p class="empty-state-desc">Explore the atlas to find another opportunity.</p><a class="btn btn-primary" href="explore.html">Explore ideas</a></div>';
    return;
  }
  document.title = `${idea.title} | IDEALAUNCH`;
  const saved = isSaved(idea.id);
  detailsContainer.innerHTML = `<div class="details-layout"><article class="details-main"><section class="details-hero-card"><div class="details-hero-icon">${idea.icon}</div><div class="details-badges"><span class="badge badge-category">${idea.category}</span><span class="badge ${getDifficultyClass(idea.difficulty)}">${idea.difficulty}</span>${idea.featured ? '<span class="badge badge-featured">✦ Featured</span>' : ''}</div><h1 class="details-title">${idea.title}</h1><p class="details-desc">${idea.description}</p><div class="details-full-desc"><h4>◈ Full description</h4><p>${idea.fullDescription}</p></div></section><section class="card"><h4 class="info-row-label">Signal tags</h4><div class="tags-list">${idea.tags.map(tag => `<span class="badge badge-tag">#${tag}</span>`).join('')}</div></section></article><aside class="details-sidebar"><section class="details-info-card"><button class="btn btn-save ${saved ? 'saved' : ''} btn-full" id="detail-save-btn">${saved ? '♥ Saved to favourites' : '♡ Save to favourites'}</button><a class="btn btn-secondary btn-full" href="explore.html" style="margin-top:10px">← Back to explore</a></section><section class="details-info-card"><h4>Idea overview</h4><div class="info-row"><span class="info-row-icon">🎯</span><div><div class="info-row-label">Target audience</div><div class="info-row-value">${idea.targetAudience}</div></div></div><div class="info-row"><span class="info-row-icon">💰</span><div><div class="info-row-label">Business model</div><div class="info-row-value">${idea.businessModel}</div></div></div><div class="info-row"><span class="info-row-icon">⚙</span><div><div class="info-row-label">Difficulty</div><div class="info-row-value">${idea.difficulty}</div></div></div></section></aside></div>`;
  document.getElementById('detail-save-btn').addEventListener('click', event => { const nowSaved = toggleSave(idea.id); event.currentTarget.classList.toggle('saved', nowSaved); event.currentTarget.textContent = nowSaved ? '♥ Saved to favourites' : '♡ Save to favourites'; showToast(nowSaved ? 'Idea saved to favourites!' : 'Idea removed from saved.', nowSaved ? 'success' : 'info'); });
}

renderDetails(selectedIdea);