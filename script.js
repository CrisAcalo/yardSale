class Product {
  constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const flechaEmail = document.querySelector(".flecha-email");

const mobileMenuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");

const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector(
  ".shopping-cart_container"
);

const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toogleSubMenuDesktop);
mobileMenuIcon.addEventListener("click", toogleMobileMenu);
shoppingCartIcon.addEventListener("click", toogleShoppingCart);

function toogleSubMenuDesktop() {
  desktopMenu.classList.toggle("inactive");
  flechaEmail.classList.toggle("rotate");
}

function toogleMobileMenu() {
  //lo contiene, se remueve, retorna falso, se activa
  if (
    !mobileMenu.classList.toggle("inactive-mobile_menu") &&
    !shoppingCartContainer.classList.contains("inactive-shopping-cart")
  ) {
    shoppingCartContainer.classList.add("inactive-shopping-cart");
  }
}

function toogleShoppingCart() {
  //lo contiene, se remueve, retorna falso, se activa
  if (
    !shoppingCartContainer.classList.toggle("inactive-shopping-cart") &&
    !mobileMenu.classList.contains("inactive-mobile_menu")
  ) {
    mobileMenu.classList.add("inactive-mobile_menu");
  }
}

const products = [];

products.push(new Product("MotorBike","12.000","https://www.atyourbusiness.com/blog/wp-content/uploads/2020/06/motorcyclefact.jpg"));
products.push(new Product("Bike","500","https://i5.walmartimages.com/asr/205ce438-cf8c-4ae9-8903-56fe21ce3f59_1.0cbb20f693c2dcb22fe6d30ddcbc306e.jpeg"));
products.push(new Product("Computer","1.500","https://iphoneroot.com/wp-content/uploads/2017/06/mbp-2017.-wwdcjpg.jpg"));
products.push(new Product("MotorBike","12.000","https://www.atyourbusiness.com/blog/wp-content/uploads/2020/06/motorcyclefact.jpg"));
products.push(new Product("Bike","500","https://i5.walmartimages.com/asr/205ce438-cf8c-4ae9-8903-56fe21ce3f59_1.0cbb20f693c2dcb22fe6d30ddcbc306e.jpeg"));
products.push(new Product("Computer","1.500","https://iphoneroot.com/wp-content/uploads/2017/06/mbp-2017.-wwdcjpg.jpg"));
products.push(new Product("MotorBike","12.000","https://www.atyourbusiness.com/blog/wp-content/uploads/2020/06/motorcyclefact.jpg"));
products.push(new Product("Bike","500","https://i5.walmartimages.com/asr/205ce438-cf8c-4ae9-8903-56fe21ce3f59_1.0cbb20f693c2dcb22fe6d30ddcbc306e.jpeg"));
products.push(new Product("Computer","1.500","https://iphoneroot.com/wp-content/uploads/2017/06/mbp-2017.-wwdcjpg.jpg"));
products.push(new Product("MotorBike","12.000","https://www.atyourbusiness.com/blog/wp-content/uploads/2020/06/motorcyclefact.jpg"));
products.push(new Product("Bike","500","https://i5.walmartimages.com/asr/205ce438-cf8c-4ae9-8903-56fe21ce3f59_1.0cbb20f693c2dcb22fe6d30ddcbc306e.jpeg"));
products.push(new Product("Computer","1.500","https://iphoneroot.com/wp-content/uploads/2017/06/mbp-2017.-wwdcjpg.jpg"));
products.push(new Product("MotorBike","12.000","https://www.atyourbusiness.com/blog/wp-content/uploads/2020/06/motorcyclefact.jpg"));
products.push(new Product("Bike","500","https://i5.walmartimages.com/asr/205ce438-cf8c-4ae9-8903-56fe21ce3f59_1.0cbb20f693c2dcb22fe6d30ddcbc306e.jpeg"));
products.push(new Product("Computer","1.500","https://iphoneroot.com/wp-content/uploads/2017/06/mbp-2017.-wwdcjpg.jpg"));

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const image = document.createElement("img");
    image.setAttribute("src", product.image);
    image.classList.add("product-img");

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productPriceName = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = "$" + product.name;

    productPriceName.append(productPrice, productName);

    const productFigure = document.createElement("figure");
    const productIcn = document.createElement("img");
    productIcn.setAttribute("src", "./Icons/bt_add_to_cart.svg");

    productFigure.appendChild(productIcn);

    productInfo.append(productPriceName, productFigure);

    productCard.append(image, productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(products);
