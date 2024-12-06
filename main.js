const navbarMenu = document.querySelector(".header__nav .header__menu");
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const menuLinks = document.querySelectorAll(".header__menu a");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-popup__box .bottom-link a")
const iconCart = document.querySelector(".cart");
const closeBtn = document.querySelector(".cart__tab .cart__button__close");
const body = document.querySelector("body");
const list = document.querySelector(".products__list");
let listCard = document.querySelector(".cart__list");
let total = document.querySelector(".cart__button__total");
let quantity = document.querySelector(".cart-count");
const swiper = new Swiper('.js-testimonials-slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  },
});

iconCart.addEventListener('click', () => {
  body.classList.toggle('active__cart__tab');
});

closeBtn.addEventListener('click', () => {
  body.classList.toggle('active__cart__tab');
});

let products = [
  {
    id: 1,
    image: 'images/products/1.png',
    name: 'T-Shirt white',
    price: 25.99
  },
  {
    id: 2,
    image: 'images/products/2.png',
    name: 'T-Shirt midnight blue',
    price: 30.99
  },
  {
    id: 3,
    image: 'images/products/3.png',
    name: 'T-Shirt red',
    price: 20.99
  },
  {
    id: 4,
    image: 'images/products/4.png',
    name: 'T-Shirt light grey',
    price: 27.99
  },
  {
    id: 5,
    image: 'images/products/5.png',
    name: 'T-Shirt blu denim',
    price: 35.99
  },
  {
    id: 6,
    image: 'images/products/6.png',
    name: 'T-Shirt graphite grey',
    price: 25.99
  },
  {
    id: 7,
    image: 'images/products/7.png',
    name: 'T-Shirt dark green',
    price: 28.99
  },
  {
    id: 8,
    image: 'images/products/8.png',
    name: 'T-Shirt black',
    price: 25.99
  },
];

let listCards = [];

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
      <img src="${value.image}"/>
      <div class="product__name">${value.name}</div>
      <div class="product__price">${value.price.toFixed(2)}$</div>
      <button onclick="addToCard(${key})">Add To Cart</button>
    `;
    list.appendChild(newDiv);
  });
}
initApp();

function addToCard(key) {
  if (!listCards[key]) {
    listCards[key] = { ...products[key], quantity: 1 };
  } else {
    listCards[key].quantity += 1;
  }
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    if (value !== null) {
      totalPrice += value.price * value.quantity;
      count += value.quantity;

      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
        <div><img src="${value.image}"/></div>
        <div>${value.name}</div>
        <div>${(value.price * value.quantity).toFixed(2)}$</div>
        <div>
          <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
        </div>
      `;
      listCard.appendChild(newDiv);
    }
  });

  total.innerText = `${totalPrice.toFixed(2)} $`;
  quantity.innerText = count;
}

function changeQuantity(key, newQuantity) {
  if (newQuantity <= 0) {
    listCards[key] = null;
  } else {
    listCards[key].quantity = newQuantity;
  }
  reloadCard();
}

menuBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

hideMenuBtn.addEventListener("click", () => {
  navbarMenu.classList.remove("show-menu");
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbarMenu.classList.remove("show-menu");
  });
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
});


showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignupLink.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup")
  })
})