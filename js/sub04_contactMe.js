// sub04_contactMe.js


$(function() {
    var $cont = $('.content'),
        $hd = $cont.find('header'),
        $seg = $cont.find('section');

    gsap.to($hd,{
      opacity : 1,
      left : '10vw',
      duration : 1.5,
    });

    gsap.to($hd.find('.line'),{
      height : '15vh',
      delay:1.5,
      duration:0.5,
      onComplete: function() {
          $seg.stop().animate({
            bottom : '3vh',
            opacity : 1
          },{duration:1000})
      }
    })


});
