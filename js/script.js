new Swiper ('.image-slider', {
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slideToClickedSlide: true,
    centeredSlides: true,
    
    //a11y: true,
    //keyboardControl: true,
    grabCursor: true,
    
    touchRatio: 1,
    freeMode: true,
    // pagination
   // pagination: '.swiper-pagination',
    paginationClickable: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 5,
        eventntsTarget: ".image-slider",
    },
    slidesPerView: 1,
    watchOverflow: true,
    initialSlide: 0,
    
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        diasbleOnInteraction: false,
    },
    speed: 800,
    effect: 'fade',
    fadeEffect: {
        crossFade:true,
    },


});
