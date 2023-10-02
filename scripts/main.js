const checkbox = document.getElementById('checkbox');
const themeStyle = document.getElementById('theme-style');

checkbox.addEventListener('change', () => {
    themeStyle.href = checkbox.checked ? 'styles/dark-theme.css' : 'styles/light-theme.css';
});
