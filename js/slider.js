const swiper = new Swiper(".testimonials", {
  loop: true,
  slidesPerView: 3,
  spaceBetween:10,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
      280:{
        slidesPerView: 1,
      },

      660:{
        slidesPerView: 2,
      },

      1024:{
          slidesPerView: 3,
      },
  },
});
