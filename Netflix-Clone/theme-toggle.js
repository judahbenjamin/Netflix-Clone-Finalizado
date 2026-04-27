const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

function updateThemeButton(theme) {
    const icon = theme === 'light' ? '🌙' : '🌞';
    const label = theme === 'light' ? 'Trocar para dark mode' : 'Trocar para light mode';
    toggleBtn.textContent = icon;
    toggleBtn.setAttribute('aria-label', label);
}

function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('netflix-theme', theme);
    updateThemeButton(theme);
}

function initTheme() {
    const savedTheme = localStorage.getItem('netflix-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    applyTheme(theme);
}

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const current = root.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
    });
}

initTheme();
