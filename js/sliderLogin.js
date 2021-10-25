const swiper = new Swiper(".swiper", {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".banner__pagination",
    clickable: true,
  },
});
