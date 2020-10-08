// sub02_portfolio.js





$(function() {

  var $port = $('.content'),
      $top = $port.find('.top'),
      $btprev = $top.find('.preview')
      $bt = $port.find('.bt'),
      $artT = $top.find('.article'),
      $artB = $bt.find('.article'),
      i = 0,

  $btprev.on('click',function() {
    i = $(this).parents('article').index();
    console.log(i);
    $artB.eq(i).stop().animate({top : '-100vh'},800);
    $bt.find('.overlay').css({
      opacity : 1,
      zIndex : 1
    },800);
  })
  $artB.on('click',function() {
    $(this).stop().animate({top : '0vh'},800);
    $bt.find('.overlay').css({
      opacity : 0,
      zIndex:-1
    },800);
  })
});
