//home-page-main-slider
$(document).ready(function() {
  $('.style-slider').slick({
    dots: false,
    arrows: true
  });
});


//slider
$(document).ready(function(){
  $('.featured-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

//sponsors-slider
$('.brand-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplaySpeed: 5000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
});
