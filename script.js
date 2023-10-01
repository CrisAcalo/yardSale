class Product {
  constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
  }
}
const bodyElement = document.body;

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const flechaEmail = document.querySelector(".flecha-email");

const mobileMenuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuBlurBackground = document.querySelector(
  ".mobile-menu_inactive-background"
);

const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector(
  ".shopping-cart_container"
);
const shoppingCartCloseIcon = document.querySelector(
  ".title_shopping-cart_container"
);

const cardsContainer = document.querySelector(".cards-container");

const productDetail = document.querySelector(".product-detail");
const closeProductDetailIcon = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", toogleSubMenuDesktop);
mobileMenuIcon.addEventListener("click", toogleMobileMenu);
mobileMenuBlurBackground.addEventListener("click", toogleMobileMenu);
shoppingCartIcon.addEventListener("click", toogleShoppingCart);
shoppingCartCloseIcon.addEventListener("click", toogleShoppingCart);
closeProductDetailIcon.addEventListener("click", closeProductDetailAside);

function toogleSubMenuDesktop() {
  desktopMenu.classList.toggle("inactive");
  flechaEmail.classList.toggle("rotate");
}

function toogleMobileMenu() {
  // Si el menú móvil se activa (es decir, se remueve la clase "inactive-mobile_menu")
  if (!mobileMenu.classList.toggle("inactive-mobile_menu")) {
    mobileMenuBlurBackground.classList.remove("inactive-mobile_menu");
    // Bloquea el scroll del body
    bodyElement.classList.add("no-scroll");
    // Si el carrito de compras está activo, lo desactiva
    if (!shoppingCartContainer.classList.contains("inactive-shopping-cart")) {
      shoppingCartContainer.classList.add("inactive-shopping-cart");
    }
  } else {
    // Si el menú móvil se desactiva, desbloquea el scroll del body
    bodyElement.classList.remove("no-scroll");
    mobileMenuBlurBackground.classList.add("inactive-mobile_menu");
  }
}

function toogleShoppingCart() {
  // Si el carrito de compras se activa (es decir, se remueve la clase "inactive-shopping-cart")
  if (!shoppingCartContainer.classList.toggle("inactive-shopping-cart")) {
    // Si el menú móvil está activo, lo desactiva
    if (!mobileMenu.classList.contains("inactive-mobile_menu")) {
      mobileMenu.classList.add("inactive-mobile_menu");
      mobileMenuBlurBackground.classList.add("inactive-mobile_menu");
    }
    //Si el detalle del producto está abierto, lo cerramos
    if (!productDetail.classList.contains("inactive-shopping-cart")) {
      productDetail.classList.add("inactive-shopping-cart");
    }
  }
}

function openProductDetailAside() {
  productDetail.classList.remove("inactive-shopping-cart");
  if (!shoppingCartContainer.classList.contains("inactive-shopping-cart")) {
    shoppingCartContainer.classList.add("inactive-shopping-cart");
  }
}

function closeProductDetailAside() {
  productDetail.classList.add("inactive-shopping-cart");
}

const products = [];

products.push(
  new Product(
    "MotorBike",
    "12.000",
    "https://www.atyourbusiness.com/blog/wp-content/uploads/2020/06/motorcyclefact.jpg"
  )
);
products.push(
  new Product(
    "Bike",
    "500",
    "https://i5.walmartimages.com/asr/205ce438-cf8c-4ae9-8903-56fe21ce3f59_1.0cbb20f693c2dcb22fe6d30ddcbc306e.jpeg"
  )
);
products.push(
  new Product(
    "Computer",
    "1.500",
    "https://iphoneroot.com/wp-content/uploads/2017/06/mbp-2017.-wwdcjpg.jpg"
  )
);
products.push(
  new Product(
    "MotorBike",
    "12.000",
    "https://www.atyourbusiness.com/blog/wp-content/uploads/2020/06/motorcyclefact.jpg"
  )
);
products.push(
  new Product(
    "Bike",
    "500",
    "https://i5.walmartimages.com/asr/205ce438-cf8c-4ae9-8903-56fe21ce3f59_1.0cbb20f693c2dcb22fe6d30ddcbc306e.jpeg"
  )
);
products.push(
  new Product(
    "Computer",
    "1.500",
    "https://iphoneroot.com/wp-content/uploads/2017/06/mbp-2017.-wwdcjpg.jpg"
  )
);
products.push(
  new Product(
    "MotorBike",
    "12.000",
    "https://www.atyourbusiness.com/blog/wp-content/uploads/2020/06/motorcyclefact.jpg"
  )
);
products.push(
  new Product(
    "Bike",
    "500",
    "https://i5.walmartimages.com/asr/205ce438-cf8c-4ae9-8903-56fe21ce3f59_1.0cbb20f693c2dcb22fe6d30ddcbc306e.jpeg"
  )
);
products.push(
  new Product(
    "Computer",
    "1.500",
    "https://iphoneroot.com/wp-content/uploads/2017/06/mbp-2017.-wwdcjpg.jpg"
  )
);
products.push(
  new Product(
    "MotorBike",
    "12.000",
    "https://www.atyourbusiness.com/blog/wp-content/uploads/2020/06/motorcyclefact.jpg"
  )
);
products.push(
  new Product(
    "Bike",
    "500",
    "https://i5.walmartimages.com/asr/205ce438-cf8c-4ae9-8903-56fe21ce3f59_1.0cbb20f693c2dcb22fe6d30ddcbc306e.jpeg"
  )
);
products.push(
  new Product(
    "Computer",
    "1.500",
    "https://iphoneroot.com/wp-content/uploads/2017/06/mbp-2017.-wwdcjpg.jpg"
  )
);
products.push(
  new Product(
    "MotorBike",
    "12.000",
    "https://www.atyourbusiness.com/blog/wp-content/uploads/2020/06/motorcyclefact.jpg"
  )
);
products.push(
  new Product(
    "Bike",
    "500",
    "https://i5.walmartimages.com/asr/205ce438-cf8c-4ae9-8903-56fe21ce3f59_1.0cbb20f693c2dcb22fe6d30ddcbc306e.jpeg"
  )
);
products.push(
  new Product(
    "Computer",
    "1.500",
    "https://iphoneroot.com/wp-content/uploads/2017/06/mbp-2017.-wwdcjpg.jpg"
  )
);

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

    productCard.addEventListener("click", openProductDetailAside);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(products);
