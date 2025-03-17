document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    const navClickables = nav.querySelectorAll('a, button'); // Select clickable elements

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    // Close menu on nav item click
    navClickables.forEach(clickable => {
        clickable.addEventListener('click', () => {
            setTimeout(() => {
                nav.classList.remove('show');
            }, 100); // Delay closing the menu by 100 milliseconds
        });
    });
});