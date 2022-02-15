const slider = document.querySelector(".swiper");

function mobileSlider() {
  if (window.innerWidth <= 438 && slider.dataset.mobile === "false") {
    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 32,
      slideClass: "swiper-slide",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    slider.dataset.mobile = "false";
  }

  if (window.innerWidth > 768) {
    slider.dataset.mobile = "false";
    slider.classList.remove("swiper");
    if (slider.classList.contains("swiper-container-initialized")) {
      swiper.destroy();
    }
  } else {
    slider.classList.add("swiper");
  }
}

window.addEventListener("resize", () => {
  mobileSlider();
});
