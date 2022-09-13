const sliderOne = document.querySelector(".repairedBrands");
const sliderTwo = document.querySelector(".repairedTypes");
const sliderThree = document.querySelector(".price__container");
if (window.innerWidth < 760) {
  const swiper = new Swiper(sliderOne, {
    slidesPerView: 1.2,
    spaceBetween: 24,
    slideClass: "swiper-slide",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
if (window.innerWidth < 760) {
  const swiper = new Swiper(sliderTwo, {
    slidesPerView: 1.2,
    spaceBetween: 24,
    slideClass: "swiper-slide",
    pagination: {
      el: ".repairedTypes__pagination",
      clickable: true,
    },
  });
}
if (window.innerWidth < 760) {
  const swiper = new Swiper(sliderThree, {
    slidesPerView: 1,
    spaceBetween: 24,
    slideClass: "swiper-slide",
    pagination: {
      el: ".price__pagination",
      clickable: true,
    },
  });
}
