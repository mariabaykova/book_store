const swiperPopularLists = new Swiper('.swiperPopularLists', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    enabled: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    centerInsufficientSlides: true,
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    breakpoints: {
      250: {
        slidesPerView: 1.1,
        spaceBetween: 0
      },
      280: {
        slidesPerView: 1.15,
        spaceBetween: 0
      },
      300: {
        slidesPerView: 1.20,
        spaceBetween: 0
      },
      330: {
        slidesPerView: 1.25,
        spaceBetween: 0
      },
      350: {
        slidesPerView: 1.5,
        spaceBetween: 0
      },
      // when window width is >= 375px
      375: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      400: {
        slidesPerView: 1.6,
        spaceBetween: 10
      },
      430: {
        slidesPerView: 1.7,
        spaceBetween: 10
      },
      460: {
        slidesPerView: 1.9,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      500: {
        slidesPerView: 2.1,
        spaceBetween: 10
      },
      520: {
        slidesPerView: 2.2,
        spaceBetween: 10
      },
      540: {
        slidesPerView: 2.3,
        spaceBetween: 10
      },
      560: {
        slidesPerView: 2.4,
        spaceBetween: 10
      },
      580: {
        slidesPerView: 2.5,
        spaceBetween: 10
      },
      600: {
        slidesPerView: 2.6,
        spaceBetween: 10
      },
      620: {
        slidesPerView: 2.7,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 2.8,
        spaceBetween: 10
      },
      660: {
        slidesPerView: 2.9,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      750: {
        slidesPerView: 3.1,
        spaceBetween: 10
      },
      780: {
        slidesPerView: 3.3,
        spaceBetween: 10
      },
      800: {
        slidesPerView: 3.4,
        spaceBetween: 10
      },
      850: {
        slidesPerView: 3.5,
        spaceBetween: 10
      },
      920: {
        slidesPerView: 3.8,
        spaceBetween: 10
      },
      950: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 4.3,
        spaceBetween: 10
      },
      1100: {
        slidesPerView: 4.5,
        spaceBetween: 10
      },
      1150: {
        slidesPerView: 4.7,
        spaceBetween: 10
      },
      1250: {
        slidesPerView: 5,
        spaceBetween: 10
      },
    }
  });
