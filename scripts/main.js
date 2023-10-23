const checkbox = document.getElementById('checkbox');
const themeStyle = document.getElementById('theme-style');
const themeSwitchText = document.getElementById('theme-switch-text');

themeSwitchText.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked; // Toggle the checkbox
    themeStyle.href = checkbox.checked ? 'styles/dark-theme.css' : 'styles/light-theme.css';
});