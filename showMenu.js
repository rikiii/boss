$(function() {
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

  showMenu();
});
