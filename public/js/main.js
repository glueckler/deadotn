console.log('main.js..');
$(window).load(function() {
  console.log('fully loaded..');
  $('.lds-heart__wrap').addClass('all-loaded');
  setTimeout(sendLoadingScreenToBack, 300);

  //
  // carousel
  var slickLock = $('#slick-carousel-lock');
  slickLock.slick({
    // autoplay: true,
    // autoplaySpeed: 6000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: false,
    adaptiveHeight: true,
    prevArrow: null,
    nextArrow: null,
  });

  //
  // typing
  var typed = new Typed('#typed-lock', {
    strings: ['Full Stack Web Development', 'Single Page Applications', 'API Development', 'Exploration..', 'Responsive Web Design'],
    typeSpeed: 100,
    backSpeed: 50,
    showCursor: false,
    loop: true,
    onStringTyped() {
      slickLock.slick('slickNext');
    }
  });
});

const sendLoadingScreenToBack = () => {
  $('.lds-heart__wrap').addClass('send-to-back');
};
