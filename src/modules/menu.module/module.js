document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu__icon-container')
    const menuWrapper = document.querySelector('.menu__menu-wrapper');

    menuIcon.addEventListener('click', () => menuWrapper.classList.toggle('active'));
});