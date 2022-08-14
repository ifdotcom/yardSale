const menuEmail = document.querySelector(".email");
const menuDesktop = document.querySelector(".menu-desktop");
const menuHamburger = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");
const menuCart = document.querySelector(".icon-shopping-cart");
const menuOrder = document.querySelector(".my-order");

menuEmail.addEventListener("click", toggleMenuDesktop);
menuHamburger.addEventListener("click", toggleMenuMobile);
menuCart.addEventListener("click", toggleMenuCart);

function toggleMenuDesktop() {
  menuDesktop.classList.toggle("inactive");
  menuOrder.classList.add("inactive");
}
function toggleMenuMobile() {
  menuMobile.classList.toggle("inactive");
  menuOrder.classList.add("inactive");
}

function toggleMenuCart() {
  menuOrder.classList.toggle("inactive");
  menuMobile.classList.add("inactive");
  menuDesktop.classList.add("inactive");
}

// productos

const arrProducts = [];

arrProducts.push({
  nameProduct: "Cactus",
  imgProduct:
    "https://images.pexels.com/photos/5783396/pexels-photo-5783396.jpeg?cs=srgb&dl=pexels-anna-khomutova-5783396.jpg&fm=jpg",
  priceProduct: 150,
});
arrProducts.push({
  nameProduct: "Bamboo",
  imgProduct:
    "https://images.pexels.com/photos/5783396/pexels-photo-5783396.jpeg?cs=srgb&dl=pexels-anna-khomutova-5783396.jpg&fm=jpg",
  priceProduct: 250,
});
arrProducts.push({
  nameProduct: "Suculenta",
  imgProduct:
    "https://images.pexels.com/photos/5783396/pexels-photo-5783396.jpeg?cs=srgb&dl=pexels-anna-khomutova-5783396.jpg&fm=jpg",
  priceProduct: 350,
});
arrProducts.push({
  nameProduct: "Cactus",
  imgProduct:
    "https://images.pexels.com/photos/5783396/pexels-photo-5783396.jpeg?cs=srgb&dl=pexels-anna-khomutova-5783396.jpg&fm=jpg",
  priceProduct: 150,
});
arrProducts.push({
  nameProduct: "Bamboo",
  imgProduct:
    "https://images.pexels.com/photos/5783396/pexels-photo-5783396.jpeg?cs=srgb&dl=pexels-anna-khomutova-5783396.jpg&fm=jpg",
  priceProduct: 250,
});
arrProducts.push({
  nameProduct: "Suculenta",
  imgProduct:
    "https://images.pexels.com/photos/5783396/pexels-photo-5783396.jpeg?cs=srgb&dl=pexels-anna-khomutova-5783396.jpg&fm=jpg",
  priceProduct: 350,
});

function renderProducts(arr) {
  for (product of arr) {
    const cardContainer = document.querySelector(".cards-container");

    const cardProduct = document.createElement("div");
    cardProduct.classList.add("card");

    const img = document.createElement("img");
    img.setAttribute("src", product.imgProduct);

    const cardInfo = document.createElement("div");

    cardInfo.classList.add("card-items");
    const info = document.createElement("div");

    const price = document.createElement("p");
    price.innerText = `$${product.priceProduct}`;
    const name = document.createElement("p");
    name.innerText = `${product.nameProduct}`;

    const icon = document.createElement("figure");

    const iconCart = document.createElement("img");
    iconCart.setAttribute("src", "./Icons/bt_add_to_cart.svg");

    cardContainer.appendChild(cardProduct);
    cardProduct.appendChild(img);
    cardProduct.appendChild(cardInfo);
    cardInfo.appendChild(info);
    cardInfo.appendChild(icon);
    info.appendChild(price);
    info.appendChild(name);
    icon.appendChild(iconCart);
  }
}

renderProducts(arrProducts);
