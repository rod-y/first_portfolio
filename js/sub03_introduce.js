

$(function() {
  var $contIn = $('.intro'),
    $contSk = $('.skills'),
    $hdrW = $contIn.find('.hdrWrap'),
    $h2 = $hdrW.find('header'),
    $p = $hdrW.find('p'),
    $line = $hdrW.find('.line'),
    degR = 0,
    degL = 0,
    deg = 0,
    per = 0,
    conW = $('.content').outerWidth(),
    conNum = 0,
    delta = 0,
    scrollE = false,
    scrL = 0,
    $wrapper = $('.wrapper'),
    $container = $wrapper.find('.container'),
    ////변수추가
    $content = $wrapper.find('.content'),
    $sthead = $wrapper.find('.skills header'),
    $sechead = $wrapper.find('.personal header'),
    $thrhead = $wrapper.find('.vision header'),
    contOff = [],
    $perArt = $wrapper.find('.personal article'),
    btNext = $('.personal button'),
    $slider = $wrapper.find('.personal .artGroup'),
    i = 0,
    ////변수추가및 초기화 : marginLeft값으로 사용할것임
    ctWidth = $content.outerWidth();



  $(window).on('wheel', wheelpage);
  $('html').animate({scrollLeft : 0});



  $perArt.on('mouseenter', function() {
    $(this).animate({
      marginTop: 20
    }, 300)
  })
  $perArt.on('mouseleave', function() {
    $perArt.animate({
      marginTop: 0
    }, 150)
  })

  function wheelpage(e) {
    delta = (e.originalEvent.wheelDelta);
    console.log(delta);

    if (scrollE == false & delta > 0 & conNum > 0) {
      prev();
    } else if (scrollE == false & delta < 0 & conNum < 3) {
      next();
      if (conNum == 1) {
        //그래프실행
        $contSk.find('.artWrap .article').each(function(i) {
          per = $(this).find('h4').text();
          // percent 값 per 에 저장
          console.log(i);
          console.log(per);
          $({
            percent: 0
          }).animate({
            percent: per
          }, {
            duration: 2000,
            progress: function() {
              per = parseInt(this.percent);
              deg = per * 360 / 100;
              degR = Math.min(180, deg);
              degL = Math.max(180, deg);

              $contSk.find('.artWrap article').eq(i).find('.right li').css({
                transform: 'rotate(' + degR + 'deg)'
              });
              $contSk.find('.artWrap article').eq(i).find('.left li').css({
                transform: 'rotate(' + degL + 'deg)'
              });
              $contSk.find('.artWrap article').eq(i).find('h4').text(per + '%');
            }
          })
        });
      }
    }
  };

  function prev() {
    if (conNum > 0) conNum--;
    console.log(conNum);
    moveP();
  }

  function next() {
    if (conNum < 3) conNum++;

    /*효과 적용*/
    console.log(conNum);
    if (conNum == 1) {

      $sthead.find('.line').stop().animate({
          width: '30vw'
      }, {
          duration: 1800
      });
      $sthead.stop().animate({
          bottom: 200,
          opacity: 1
      }, {
          duration: 1500
      });

    } else if (conNum == 2) {
      $sechead.stop().animate({
          top: '10vh',
          opacity: 1
      }, {
          duration: 1500
      });

    } else if (conNum == 3) {
      $thrhead.stop().animate({
          left: 250,
          opacity: 1
      }, {
          duration: 1500
      });
      $thrhead.find('.line').delay(1500).animate({
          height: '20vh'
      }, {
          duration: 1800
      });
      $thrhead.find(':last').delay(3300).animate({
          opacity: 1
      }, {
          duration: 800
      });
    }

    moveP();
  }

  function moveP() {
    scrollE = true;
    ctWidth = $content.outerWidth();
    console.log(ctWidth)
    $container.stop().animate({
      ////이동값 변경
      marginLeft: -ctWidth * conNum
    }, {
      duration: 1000,
      ease: 'easeIn',
      done: function() {
        scrollE = false
      }

    });
    ////
    scrL = parseInt($container.css('margin-left'));
    if (scrL >= -ctWidth) {
      console.log(scrL, -ctWidth);
      ////임시주석
      // $thrhead.stop().animate({
      //     left: 250,
      //     opacity: 1
      // }, {
      //     duration: 1500
      // });
      // $thrhead.find('.line').delay(1500).animate({
      //     height: '35vh'
      // }, {
      //     duration: 1800
      // });
      // $thrhead.find(':last').delay(3300).animate({
      //     opacity: 1
      // }, {
      //     duration: 800
      // });

    } else if (scrL >= -ctWidth * 2) {
      console.log(scrL, -ctWidth * 2);
      ////임시주석
      /*$sechead.stop().animate({
          top: 130,
          opacity: 1
      }, {
          duration: 1500
      });*/
    } else if (scrL >= -ctWidth * 3) {
      console.log(scrL, -ctWidth * 3);
      ////임시주석
      // $sthead.find('.line').stop().animate({
      //     width: '30vw'
      // }, {
      //     duration: 1800
      // });
      // $sthead.stop().animate({
      //     bottom: 200,
      //     opacity: 1
      // }, {
      //     duration: 1500
      // });
    }
  }



  gsap.to($h2, {
    opacity: 1,
    marginLeft: 150,
    duration: 1.5,
    onComplete: function() {
      $p.stop().animate({
        opacity: 1,
        marginTop: '20px'
      }, {
        duration: 800
      });
      $line.stop().animate({
        width: '70vw'
      }, {
        duration: 1500
      });
      $contIn.find('.fade').stop().animate({
        opacity: 1
      }, {
        duration: 60
      });
    }
  })

});
