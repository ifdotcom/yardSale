// Obtener los elementos del HTML
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

// Agregar evento click a los diferentes menús a mostrar y ocultar
menuEmail.addEventListener("click", toggleMenuDesktop);
menuHamburger.addEventListener("click", toggleMenuMobile);
menuCart.addEventListener("click", toggleMenuCart);
back.addEventListener("click", closeOrder);
closeDetails.addEventListener("click", closeDetail);

// Funciones para mostrar y ocultar el menú correspondiente
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

// Crear un array para guardar productos
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

// Función para renderizar en el inicio los productos -> recibe un array con todos los productos
function renderProducts(arr) {
  arr.forEach((product) => {
    const cardContainer = document.querySelector(".cards-container");
    const cardProduct = document.createElement("div");
    cardProduct.classList.add("card");

    const img = document.createElement("img");
    img.setAttribute("src", product.imgProduct);
    img.setAttribute("class", "product-img");

    // Agegar evento click a la imagen para mostrar los detalles del producto
    img.addEventListener("click", () => {
      productDetails.classList.remove("inactive");
      menuOrder.classList.add("inactive");
      menuDesktop.classList.add("inactive");

      // Ejecutar la funcion productDetail para enviarle los detalles del producto seleccionado
      productDetail(
        product.imgProduct,
        product.nameProduct,
        product.priceProduct
      );
    });

    // Crear los elementos para mostrar cada producto en el inicio
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

    // Agregar el evento click al icono de gregar al carrito
    iconCart.addEventListener("click", () => {
      // Por cada click guardar en un array la información del producto seleccionado
      const productSelected = [];
      productSelected.push({
        img: product.imgProduct,
        name: product.nameProduct,
        price: product.priceProduct,
      });
      // Ejecutar la función renderProductCart para enviar la información del producto seleccionado
      renderProductCart(productSelected);
    });

    // Unir los elementos para mostrarlos en el incio
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

// Función para mostrar la informacion detallada del producto
function productDetail(img, name, price) {
  imgProduct.setAttribute("src", img);
  nameProduct.innerText = name;
  priceProduct.innerText = `$${price}`;
}

// Función para agregar productos al carrito -> recibe un array con la información del producto selccionado
function renderProductCart(arr) {
  arr.forEach((product) => {
    // Crear los elementos para mostrar el producto en el menú del carrito
    const divOrder = document.createElement("div");
    divOrder.classList.add("my-order-product");

    const figProduct = document.createElement("figure");
    const imgProduct = document.createElement("img");
    imgProduct.setAttribute("src", product.img);

    const nameProduct = document.createElement("p");
    nameProduct.innerText = product.name;

    const priceProduct = document.createElement("p");
    priceProduct.innerHTML = `$ ${product.price}.00`;

    // Mostrar el precio Total (substring() -> quita elementos de un stirng) -> '$0.00' substring(1) = quita $

    total.innerText =
      "$" + (Number(total.innerText.substring(1)) + product.price) + ".00";

    const figClose = document.createElement("figure");
    const imgClose = document.createElement("img");
    imgClose.setAttribute("src", "./Icons/icon_close.png");
    imgClose.setAttribute("id", "close-icon");

    // Sumar productos agregados al carrito y mostrar en la notificación
    const countProduct = document.querySelector(".count-products");
    countProduct.innerText = Number(countProduct.textContent) + arr.length;

    // Eliminar producto del carrito
    figClose.addEventListener("click", () => {
      divOrder.remove();
      total.innerText =
        "$" + (Number(total.innerText.substring(1)) - product.price) + ".00";
      countProduct.innerText = Number(countProduct.textContent) - arr.length;
    });
    //  Unir elementos
    orderInfo.appendChild(divOrder);
    divOrder.appendChild(figProduct);
    figProduct.appendChild(imgProduct);
    divOrder.appendChild(nameProduct);
    divOrder.appendChild(priceProduct);
    divOrder.appendChild(figClose);
    figClose.appendChild(imgClose);
  });
}

renderProducts(arrProducts);
