const swiper = new Swiper('.growth__cards-block-main', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,


  // If we need pagination
  pagination: {
    el: '.growth__cards-block-main .swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.growth__cards-block-main .swiper-button-next',
    prevEl: '.growth__cards-block-main .swiper-button-prev',
  },
});

// const tariffsSwiper = new Swiper('.tariffs__slider', {
//   // Optional parameters
//   // loop: true,
//   slidesPerView: 1,

//   // If we need pagination
//   pagination: {
//     el: '.tariffs__slider .swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.tariffs__slider .swiper-button-next',
//     prevEl: '.tariffs__slider .swiper-button-prev',
//   },
// });

// function sliderAnimate(index) {
//   let buttonsCount = $('.levels__list-item').length - 1;
//   $('.levels__line-front').animate({
//     width: 100 / buttonsCount * index + "%"
//   });
// }


