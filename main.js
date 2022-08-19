const menuEmail = document.querySelector(".email");
const menuDesktop = document.querySelector(".menu-desktop");
const menuHamburger = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");
const menuCart = document.querySelector(".icon-shopping-cart");
const menuOrder = document.querySelector(".my-order");
const back = document.querySelector(".back");
const productDetails = document.querySelector(".product-detail");
const priceProduct = document.querySelector(".priceProduct");
const nameProduct = document.querySelector(".nameProduct");
const imgProduct = document.querySelector(".imgProduct");
const closeDetails = document.querySelector(".close-detail");
const orderInfo = document.querySelector(".my-order-info");
const total = document.querySelector(".total");
total.innerText = "$0.00";

menuEmail.addEventListener("click", toggleMenuDesktop);
menuHamburger.addEventListener("click", toggleMenuMobile);
menuCart.addEventListener("click", toggleMenuCart);
back.addEventListener("click", closeOrder);
closeDetails.addEventListener("click", closeDetail);

function toggleMenuDesktop() {
  menuDesktop.classList.toggle("inactive");
  menuOrder.classList.add("inactive");
  productDetails.classList.add("inactive");
}
function toggleMenuMobile() {
  menuMobile.classList.toggle("inactive");
  menuOrder.classList.add("inactive");
  productDetails.classList.add("inactive");
}

function toggleMenuCart() {
  menuOrder.classList.toggle("inactive");
  menuMobile.classList.add("inactive");
  menuDesktop.classList.add("inactive");
  productDetails.classList.add("inactive");
}

function closeOrder() {
  menuOrder.classList.add("inactive");
}

function closeDetail() {
  productDetails.classList.add("inactive");
}

const arrProducts = [];
arrProducts.push({
  nameProduct: "Cactus",
  imgProduct:
    "https://images.pexels.com/photos/5783396/pexels-photo-5783396.jpeg?cs=srgb&dl=pexels-anna-khomutova-5783396.jpg&fm=jpg",
  priceProduct: 150,
});
arrProducts.push({
  nameProduct: "Suculenta",
  imgProduct:
    "https://images.pexels.com/photos/1046348/pexels-photo-1046348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  priceProduct: 250,
});
arrProducts.push({
  nameProduct: "Suculenta",
  imgProduct:
    "https://images.pexels.com/photos/1022922/pexels-photo-1022922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  priceProduct: 350,
});
arrProducts.push({
  nameProduct: "Cactus",
  imgProduct:
    "https://images.pexels.com/photos/1048024/pexels-photo-1048024.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  priceProduct: 150,
});
arrProducts.push({
  nameProduct: "Suculenta",
  imgProduct:
    "https://images.pexels.com/photos/3221137/pexels-photo-3221137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  priceProduct: 250,
});

function renderProducts(arr) {
  arr.forEach((product) => {
    const cardContainer = document.querySelector(".cards-container");

    const cardProduct = document.createElement("div");
    cardProduct.classList.add("card");

    const img = document.createElement("img");
    img.setAttribute("src", product.imgProduct);
    img.setAttribute("class", "product-img");

    img.addEventListener("click", () => {
      productDetails.classList.remove("inactive");
      menuOrder.classList.add("inactive");
      menuDesktop.classList.add("inactive");

      productDetail(
        product.imgProduct,
        product.nameProduct,
        product.priceProduct
      );
    });

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

    iconCart.addEventListener("click", () => {
      const productSelected = [];
      productSelected.push({
        img: product.imgProduct,
        name: product.nameProduct,
        price: product.priceProduct,
      });

      renderProductCart(productSelected);
    });

    cardContainer.appendChild(cardProduct);
    cardProduct.appendChild(img);
    cardProduct.appendChild(cardInfo);
    cardInfo.appendChild(info);
    cardInfo.appendChild(icon);
    info.appendChild(price);
    info.appendChild(name);
    icon.appendChild(iconCart);
  });
}

function productDetail(img, name, price) {
  console.log(img, name, price);
  imgProduct.setAttribute("src", img);
  nameProduct.innerText = name;
  priceProduct.innerText = `$${price}`;
}

// agregar productos al carrito -> cuando le de click al icono se agrega producto (img, precio, nombre)

function renderProductCart(arr) {
  arr.forEach((product) => {
    // crear elemento en el carrito
    const divOrder = document.createElement("div");
    divOrder.classList.add("my-order-product");

    const figProduct = document.createElement("figure");
    const imgProduct = document.createElement("img");
    imgProduct.setAttribute("src", product.img);

    const nameProduct = document.createElement("p");
    nameProduct.innerText = product.name;

    const priceProduct = document.createElement("p");
    priceProduct.innerHTML = `$ ${product.price}.00`;
    // suma de productos
    total.innerText =
      "$" + (Number(total.innerText.substring(1)) + product.price) + ".00";

    const figClose = document.createElement("figure");
    const imgClose = document.createElement("img");
    imgClose.setAttribute("src", "./Icons/icon_close.png");

    // notificacion de productos agregados
    const countProduct = document.querySelector(".count-products");
    countProduct.innerText = Number(countProduct.textContent) + arr.length;


    //  unir hijos
    orderInfo.appendChild(divOrder);
    divOrder.appendChild(figProduct);
    figProduct.appendChild(imgProduct);
    divOrder.appendChild(nameProduct);
    divOrder.appendChild(priceProduct);
    figClose.appendChild(imgClose);
  });
}

renderProducts(arrProducts);
