import Swiper from 'swiper/bundle';
const slider = document.querySelector('.swiper');

function mobileSlider() {
  if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
   const swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      slideClass: 'swiper-slide',
      pagination: {
       	el: '.swiper-pagination',
          clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
           
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 768) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
  console.log('slider')
};

console.log(mobileSlider());

window.addEventListener('resize', () => {
  mobileSlider();
})
