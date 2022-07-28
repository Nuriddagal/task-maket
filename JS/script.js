const sliderOne = document.querySelector(".repairedBrands");
const sliderTwo = document.querySelector(".repairedTypes");
const crap = document.querySelector(".swiper-wrapper");
if (window.innerWidth < 520) {
  const swiper = new Swiper(sliderOne, {
    slidesPerView: 1.2,
    spaceBetween: 32,
    slideClass: "swiper-slide",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
if (window.innerWidth < 520) {
  const swiper = new Swiper(sliderTwo, {
    slidesPerView: 1.2,
    spaceBetween: 32,
    slideClass: "swiper-slide",
    pagination: {
      el: ".repairedTypes__pagination",
      clickable: true,
    },
  });
}
