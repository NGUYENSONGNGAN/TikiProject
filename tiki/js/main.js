var navArrowLeft = document.querySelector(".icon-arrow-left");
var navArrowRight = document.querySelector(".icon-arrow-right");



/* var btn_next = document.querySelector(".container_slide_after_brand_auth .icon_next");
var btn_prev = document.querySelector(".container_slide_after_brand_auth .icon_prav");
 */
navArrowLeft.onclick = function () {
    document.querySelector(".nav").style.transform = "translateX(0%)";
  navArrowRight.style.display = "block";
  navArrowLeft.style.display = "none";
};

navArrowRight.onclick = function () {
    document.querySelector(".nav").style.transform = "translateX(-20%)";
  navArrowLeft.style.display = "block";
  navArrowRight.style.display = "none";
};
/* btn_next.onclick = function(){
  document.querySelector(".container_slide_after_brand_auth").style.transform = "translateX(-20%)";
  btn_next.style.display = "block";
  btn_prev.style.display = "none";
}
btn_prev.onclick = function(){
  document.querySelector(".container_slide_after_brand_auth").style.transform = "translateX(0%)";
  btn_next.style.display = "block";
  btn_prev.style.display = "none";
} */


//slide sale left home

  /* var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
   
    loop: true,
});
 */

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 6500,
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
  
  loop: true,
});


var swiper = new Swiper(".brand_auth_bottom", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 6500,
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
  
  loop: true,
});

var swiper = new Swiper(".slide_priceShock_bottom", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-nex",
    prevEl: ".swiper-button-prev",
  },
});
