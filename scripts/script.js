const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: light)').matches;

// Set initial theme
if (localStorage.getItem('theme') === 'dark' || prefersDark) {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeToggle.textContent = '☀️';
} else {
  document.documentElement.setAttribute('data-theme', 'light');
  themeToggle.textContent = '🌑';
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});
