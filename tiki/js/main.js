var navArrowLeft = document.querySelector(".icon-arrow-left");
var navArrowRight = document.querySelector(".icon-arrow-right");

navArrowLeft.onclick = function () {
    document.querySelector(".nav").style.transform = "translateX(0%)";
  navArrowRight.style.display = "block";
  navArrowLeft.style.display = "none";
};

navArrowRight.onclick = function () {
    document.querySelector(".nav").style.transform = "translateX(-40%)";
  navArrowLeft.style.display = "block";
  navArrowRight.style.display = "none";
};

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });