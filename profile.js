requireAuth();

function initProfile() {
  const user = getCurrentUser();
  document.querySelectorAll('.profile-name-display').forEach(element => { element.textContent = user.name; });
  document.querySelectorAll('.profile-email-display').forEach(element => { element.textContent = user.email; });
  const avatar = document.getElementById('avatar-initial');
  if (avatar) avatar.textContent = user.name.split(' ').map(part => part[0]).join('').slice(0, 2);
  const savedCount = document.getElementById('profile-saved-count');
  if (savedCount) savedCount.textContent = getSavedIds().length;
  const joinDate = document.getElementById('profile-join-date');
  if (joinDate) joinDate.textContent = 'September 2026';
}

initProfile();