const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const flechaEmail = document.querySelector('.flecha-email');
const mobileMenuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toogleSubMenuDesktop);
mobileMenuIcon.addEventListener('click', toogleMobileMenu);

let i = 1;

function toogleSubMenuDesktop(){
    desktopMenu.classList.toggle('inactive');
    flechaEmail.classList.toggle('rotate');
}

function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive-mobile_menu');
}