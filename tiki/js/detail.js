
var btn_next = document.querySelector(".btn_next_slide ");
var btn_prev = document.querySelector(".btn_prev_slide");

btn_next.onclick = function () {
    document.querySelector(".slick_track").style.transform = "translateX(-16.5%)";
  
  }
  btn_prev.onclick = function () {
    document.querySelector(".slick_track").style.transform = "translateX(0%)";
  }