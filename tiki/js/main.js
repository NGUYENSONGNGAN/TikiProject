var navArrowLeft = document.querySelector(".icon-arrow-left");
var navArrowRight = document.querySelector(".icon-arrow-right");



var btn_next = document.querySelector(".icon_next_slide_auth");
var btn_prev = document.querySelector(".icon_prav_slide_auth");

var btn_prev_shockbottom = document.querySelector(".icon_prav_shockbottom");
var btn_next_shockbottom = document.querySelector(".icon_next_shockbottom");


//nav
navArrowLeft.onclick = function () {
  document.querySelector(".nav").style.transform = "translateX(0%)";
  navArrowRight.style.display = "block";
  navArrowLeft.style.display = "none";
};

navArrowRight.onclick = function () {
  document.querySelector(".nav").style.transform = "translateX(-43%)";
  navArrowLeft.style.display = "block";
  navArrowRight.style.display = "none";
};
///slide bottom brand auth
btn_next.onclick = function () {
  document.querySelector(".container_slide_after_brand_auth").style.transform = "translateX(-20%)";
  btn_next.style.display = "none";
  btn_prev.style.display = "block";
}
btn_prev.onclick = function () {
  document.querySelector(".container_slide_after_brand_auth").style.transform = "translateX(0%)";
  btn_next.style.display = "block";
  btn_prev.style.display = "none";
}

//slide shockbottom
btn_next_shockbottom.onclick = function () {
  document.querySelector(".slide_priceShock_bottom").style.transform = "translateX(-100%)";
  btn_next_shockbottom.style.display = "none";
  btn_prev_shockbottom.style.display = "block";
}
btn_prev_shockbottom.onclick = function () {
  document.querySelector(".slide_priceShock_bottom").style.transform = "translateX(0%)";
  btn_next_shockbottom.style.display = "block";
  btn_prev_shockbottom.style.display = "none";
}


/* let suggest_item = document.querySelectorAll(".suggest_today_item")
let suggest_lisst = document.querySelector(".list_suggest_today")
 */
//suggest_item.onclick 🙁)=>
//{
  /* suggest_item.classList.toggle('active') */
 // suggest_item.forEach((e)=>{
 //   e.classList.toggle('active');
 // })
//}
/* document.querySelectorAll(".suggest_today_item").
suggest_item.forEach((e)=>{
  e.onclick = ()=>{e.classList.toggle('active');}
}) */
/* 
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

/* var swiper = new Swiper(".slide_priceShock_bottom", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-nex",
    prevEl: ".swiper-button-prev",
  },
}); */



var menusuggest = document.querySelector('.menu_suggest');
var menu = document.querySelector('.suggest_today_bottom')
var menuclose = document.querySelector('.menu_close');

menusuggest.onclick = function() {
  menu.classList.add('open');
  menusuggest.style.display = "none";
  menuclose.style.display = "block";
}

menuclose.onclick = function() {
  menu.classList.remove('open');
  menusuggest.style.display = "block";
  menuclose.style.display = "none";
}


