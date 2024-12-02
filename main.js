const navbarMenu = document.querySelector(".header__nav .header__menu");
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const menuLinks = document.querySelectorAll(".header__menu a");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-popup__box .bottom-link a")

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