const themeSwitch = document.getElementById('theme-switch');
const htmlElement = document.documentElement;
const logoImg = document.getElementById('logo-img'); // Get the logo image element

// Initialize switch position and logo based on saved theme
if (localStorage.getItem('theme') === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    themeSwitch.checked = true;
    logoImg.src = 'images/omkar-logo-dark.jpg'; // Set dark logo
}

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        logoImg.src = 'images/omkar-logo-dark.jpg'; // Change to dark logo
    } else {
        htmlElement.removeAttribute('data-theme');
        localStorage.removeItem('theme');
        logoImg.src = 'omkar logo.jpg'; // Change back to light logo
    }
});