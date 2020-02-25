console.log('main.js..');
$(window).load(function() {
  console.log('fully loaded..');
  $('.lds-heart__wrap').addClass('all-loaded');
  setTimeout(sendLoadingScreenToBack, 300);

  //
  // typing
  var typed = new Typed('#typed-lock', {
    strings: [
      `hi welcome to my quick spot on the internetz.  
      <br/><br/>
      i do web development.  i do multimedia stuff.  i do music.
      <br/><br/>
      i'm a creative and an engineer.   
      <br/><br/>
      art brings wonder and tech brings possibility.
      <br/><br/>
      my mission is to combine the two.
      <br/><br/>
      if you're curious please get in touch, or follow some of my links.
      `,
    ],
    typeSpeed: 35,
    backSpeed: 30,
    showCursor: false,
    loop: false,
    backDelay: 3000
  });
});

const sendLoadingScreenToBack = () => {
  $('.lds-heart__wrap').addClass('send-to-back');
};
