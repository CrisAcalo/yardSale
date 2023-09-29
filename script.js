const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const flechaEmail = document.querySelector('.flecha-email');

const mobileMenuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('.shopping-cart_container');

menuEmail.addEventListener('click', toogleSubMenuDesktop);
mobileMenuIcon.addEventListener('click', toogleMobileMenu);
shoppingCartIcon.addEventListener('click', toogleShoppingCart);

function toogleSubMenuDesktop(){
    desktopMenu.classList.toggle('inactive');
    flechaEmail.classList.toggle('rotate');
}

function toogleMobileMenu(){
    //lo contiene, se remueve, retorna falso, se activa
    if(!mobileMenu.classList.toggle('inactive-mobile_menu') && !shoppingCartContainer.classList.contains('inactive-shopping-cart')){
        shoppingCartContainer.classList.add('inactive-shopping-cart');
    }
}

function toogleShoppingCart(){
    //lo contiene, se remueve, retorna falso, se activa
    if(!shoppingCartContainer.classList.toggle('inactive-shopping-cart') && !mobileMenu.classList.contains('inactive-mobile_menu')){
        mobileMenu.classList.add('inactive-mobile_menu');
    }
}
