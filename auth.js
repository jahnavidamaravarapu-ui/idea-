/* =========================================================
   auth.js – Authentication helpers
   Handles login, logout, and session protection
   ========================================================= */

const USERS_STORAGE_KEY = 'ideaLaunchUsers';
const SESSION_STORAGE_KEY = 'ideaLaunchCurrentUser';

function getRegisteredUsers() {
  try {
    const users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || '[]');
    return Array.isArray(users) ? users : [];
  } catch (error) {
    return [];
  }
}

function saveRegisteredUsers(users) {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

/* ── Guard: redirect to login if not authenticated ── */
function requireAuth() {
  if (!getCurrentUser().isLoggedIn) {
    window.location.href = 'index.html';
  }
}

/* ── Guard: redirect authenticated users away from login page ── */
function redirectIfLoggedIn() {
  if (getCurrentUser().isLoggedIn) {
    window.location.href = 'dashboard.html';
  }
}

function login(email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  const user = getRegisteredUsers().find(account => account.email === normalizedEmail && account.password === password);

  if (user) {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify({ name: user.name, email: user.email }));
    return { success: true };
  }
  return { success: false, error: 'Invalid email or password.' };
}

function registerUser(name, email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  const users = getRegisteredUsers();

  if (users.some(user => user.email === normalizedEmail)) {
    return { success: false, error: 'An account with this email already exists.' };
  }

  users.push({ name: name.trim(), email: normalizedEmail, password, createdAt: new Date().toISOString() });
  saveRegisteredUsers(users);
  return { success: true };
}

function logout() {
  sessionStorage.removeItem(SESSION_STORAGE_KEY);
  window.location.href = 'index.html';
}

/* ── Validate email format ── */
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/* ── Form validation: returns array of error messages ── */
function validateLoginForm(email, password) {
  const errors = {};

  if (!email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!password.trim()) {
    errors.password = 'Password is required.';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters.';
  }

  return errors;
}

function validateSignupForm(name, email, password, confirmPassword) {
  const errors = {};

  if (!name.trim()) errors.name = 'Full name is required.';
  if (!email.trim()) errors.email = 'Email address is required.';
  else if (!isValidEmail(email)) errors.email = 'Please enter a valid email address.';
  if (!password) errors.password = 'Password is required.';
  else if (password.length < 6) errors.password = 'Password must be at least 6 characters.';
  if (!confirmPassword) errors.confirmPassword = 'Please confirm your password.';
  else if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match.';

  return errors;
}

/* ── Get logged-in user info ── */
function getCurrentUser() {
  let user = null;
  try {
    user = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY) || 'null');
  } catch (error) {
    user = null;
  }

  return {
    email: user && user.email ? user.email : '',
    name: user && user.name ? user.name : '',
    isLoggedIn: Boolean(user && user.email),
  };
}

/* ── Toast notification helper (used across pages) ── */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type] || icons.info}</span><span>${message}</span>`;
  container.appendChild(toast);

  // Auto-remove after 3 seconds
  setTimeout(() => {
    toast.style.animation = 'fadeOutToast 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ── Shared protected-page navigation ── */
function initNavigation() {
  document.querySelectorAll('[data-logout]').forEach(button => {
    button.addEventListener('click', logout);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavigation);
} else {
  initNavigation();
}
