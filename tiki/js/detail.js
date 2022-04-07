
/* var btn_next = document.querySelector(".btn_next_slide ");
var btn_prev = document.querySelector(".btn_prev_slide");

btn_next.onclick = function () {
    document.querySelector(".slick_track").style.transform = "translateX(-16.5%)";
  
  }
  btn_prev.onclick = function () {
    document.querySelector(".slick_track").style.transform = "translateX(0%)";
  }
 */
  var swiper = new Swiper(".slick_list", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".btn_next_slide",
      prevEl: ".btn_prev_slide"
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      }
    }
  });
  
