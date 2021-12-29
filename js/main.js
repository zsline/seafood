$(function(){
  $('.header-slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="../images/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next slick-btn"><img src="../images/next.svg" alt=""></button>',
    vertical: true,
    });

  $('.product__name').slick({
    prevArrow: '<button type="button" class="name-prev name-btn"><img src="../images/name-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="name-next name-btn"><img src="../images/name-next.svg" alt=""></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.product__content',
    vertical: true,
  });
  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    fade: true,
    arrows: false,
  });
});