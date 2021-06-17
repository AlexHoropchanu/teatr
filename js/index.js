const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
const swiper1 = new Swiper(".swiper-container1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  breakpoints: {
    1410: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 1.5,
      // centeredSlides: true,
    },
  },
});
const swiper2 = new Swiper(".swiper-container2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  centeredSlides: false,
  breakpoints: {
    1411: {
      slidesPerView: 4,
      allowSlideNext: false,
      allowSlidePrev: false,
    },
    1338: {
      slidesPerView: 3,
      allowSlideNext: true,
      allowSlidePrev: true,
    },
    992: {
      allowSlideNext: true,
      allowSlidePrev: true,
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 78,
    },
  },
});
