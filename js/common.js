// common.js

$(function() {

  var $navW = $('.navWrap.main'),
      $hdrW = $('.hdrWrap.main'),
      $navB = $hdrW.find('.nav'),
      $navTxt = $navW.find('ul'),
      navClick = true,
      navHover = true;

  $navB.on('click',function() {
    if (navClick) {
      $navW.stop().animate({marginRight : 0},700);
      $navB.find('i').removeClass('fas fa-bars');
      $navB.find('i').addClass('fas fa-times');
      navClick = false;
    }else{
      $navW.stop().animate({marginRight : '-40%'},500);
      $navB.find('i').removeClass('fas fa-times');
      $navB.find('i').addClass('fas fa-bars');
      navClick = true;
    }

    $navTxt.on('mouseenter',function() {
      $(this).stop().animate({top: '-50px'});
    })
    $navTxt.on('mouseleave',function() {
      $(this).stop().animate({top: '0'});
    })

  });




})
