const slider = document.querySelector(".swiper");
const crap = document.querySelector(".swiper-wrapper");
// function mobileSlider() {
//   if (window.innerWidth <= 428 && slider.dataset.mobile === "false") {
//     const swiper = new Swiper(slider, {
//       slidesPerView: 1.2,
//       spaceBetween: 12,
//       slideClass: "swiper-slide",
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     });

//     slider.dataset.mobile = "true";
//   }

//   if (window.innerWidth > 768) {
//     slider.dataset.mobile = "false";
//     if (slider.classList.contains("swiper-container-initialized")) {
//       swiper.destroy();
//     }
//   }
// }
// window.addEventListener("resize", () => {
//   mobileSlider();
// });
if (window.innerWidth < 520) {
  const swiper = new Swiper(slider, {
    slidesPerView: 1.2,
    spaceBetween: 12,
    slideClass: "swiper-slide",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
