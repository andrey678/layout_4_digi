$('.top-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/Head/Icons/next-arrow.svg" alt="next arrow"></button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/Head/Icons/prev-arrow.svg" alt="prev arrow"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
         
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows:false
        }
      }
      
    ]
  }); 