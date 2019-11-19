$(function(){

  var imageIndex = 0;
  var $imageDisplayed;

  const changeImage = () => {
    $imageDisplayed = $('.show');

    if($('img').index($imageDisplayed) <= 2) {
      $imageDisplayed.removeClass('show');
      $imageDisplayed.next().addClass('show');
    } else if ($('img').index($imageDisplayed) == 3) {
      $imageDisplayed.removeClass('show');
      $imageDisplayed = $('img').eq(1).addClass('show');
    }

  }

  var id = setInterval(changeImage, 3000);



  // $('.menu-smartphone').click(function() {
  //   $('.header-menu-smartphone').slideDown();
  //   $('.header-menu-smartphone').addClass('open');
  // })

  // if($('.header-menu-smartphone').hasClass('open')) {
  //   $('.menu-smartphone').click(function() {
  //     $('.header-menu-smartphone').slideUp();
  //     $('.header-menu-smartphone').removeClass('open');
  //   })
  // } else {
  //   $('.menu-smartphone').click(function() {
  //     $('.header-menu-smartphone').slideDown();
  //     $('.header-menu-smartphone').addClass('open');
  //   })
  // }

  const showMenu = () => {
    $('.menu-smartphone').click(function() {
      if($('.header-menu-smartphone').hasClass('open')) {
        $('.header-menu-smartphone').slideUp();
        $('.header-menu-smartphone').removeClass('open');
      } else {
        $('.header-menu-smartphone').slideDown();
        $('.header-menu-smartphone').addClass('open');
      }
    })
  }

  $('.menu-smartphone').click(function() {
    if($('.header-menu-smartphone').hasClass('open')) {
      $('.header-menu-smartphone').slideUp();
      $('.header-menu-smartphone').removeClass('open');
    } else {
      $('.header-menu-smartphone').slideDown();
      $('.header-menu-smartphone').addClass('open');
    }
  })


});

