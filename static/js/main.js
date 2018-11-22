console.log(`main.js..`)
$(window).load(function() {
  console.log(`fully loaded..`)
  $(".lds-heart__wrap").addClass('all-loaded');
  setTimeout(sendLoadingScreenToBack, 300)
});

const sendLoadingScreenToBack = () => {
  $(".lds-heart__wrap").addClass('send-to-back');
}

var typed = new Typed('#typed-lock', {
  strings: ['Full Stack/Front End', 'Single Page Applications', 'API Development', 'Responsive Web Design'],
  typeSpeed: 100,
  backSpeed: 50,
  showCursor: false,
  loop: true,
})

$(document).ready(function() {
  $('#slick-carousel-lock').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: false,
    adaptiveHeight: true,
    prevArrow: null,
    nextArrow: null,
  })
})
