const slider = document.querySelector('.swiper-container');

function mobileSlider() {
  if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      slideClass: 'swiper-slide',
      pagination: {
       	el: '.swiper-pagination',
          clickable: true,
            },
           
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
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});