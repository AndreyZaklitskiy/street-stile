//home-page-main-slider
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("home-slider-slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {//если n > длинны массива slides
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex=slides.length
  }
  for (i=0; i < slides.length; i++) {
    slides[i].style.display="none";
  }
  for(i=0; i < dots.length; i++) {
    dots[i].className=dots[i].className.replace("active","");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className+="active";
}


//slider
$(document).ready(function(){
  $('.home-featured-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

