$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
  });
});

const swiper = new Swiper('.intro__main-block', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.intro__main-block .swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.intro__main-block .swiper-button-next',
    prevEl: '.intro__main-block .swiper-button-prev',
  },
});

const tariffsSwiper = new Swiper('.tariffs__slider', {
  // Optional parameters
  // loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.tariffs__slider .swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.tariffs__slider .swiper-button-next',
    prevEl: '.tariffs__slider .swiper-button-prev',
  },
});

function sliderAnimate(index) {
  let buttonsCount = $('.levels__list-item').length - 1;
  $('.levels__line-front').animate({
    width: 100 / buttonsCount * index + "%"
  });
}


const levelSwiper = new Swiper('.levels__main-block', {
  // Optional parameters
  spaceBetween: 300,

  // If we need pagination
  pagination: {
    el: '.levels__main-block .swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.levels__main-block .swiper-button-next',
    prevEl: '.levels__main-block .swiper-button-prev',
  }
});

levelSwiper.on('slideChangeTransitionStart', function() {
  $('.levels__description-block').each(function(index){
    if ($('.levels__description-block').eq(index).hasClass('swiper-slide-active')) {
      $('.levels__list-item').removeClass('active')
      $('.levels__list-item').eq(index).addClass('active')
      sliderAnimate(index)
    }
  })
});

$('.button-animated').hover(function() {
  $(this).find('.button-animated-image').fadeToggle(300);
  $(this).toggleClass('active');
  if (!$(this).hasClass('active')) {
    $(this).find('.button-animated-text').animate({
      textAlign: 'center',
      flexGrow: 1,
    });
  } else {
    $(this).find('.button-animated-text').animate({
      textAlign: 'left',
      flexGrow: 0,
    });
  }
});

$('.levels__list-item').each(function(index) {
    $(this).click(function() {
    levelSwiper.slideTo(index);
    $('.levels__list-item').removeClass('active');
    $(this).addClass('active');
    sliderAnimate(index)
  });
});
