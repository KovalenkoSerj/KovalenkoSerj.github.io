$(function () {
  var menu = $('.header-nav');
  var menu_mobile = $('.header-mobile');
  var close = $('.header-mobile__close')

  menu_mobile.on('click', function (event) {
    event.preventDefault();
    menu.toggleClass('header-nav__active')
    close.toggleClass('header-mobile__close__active')
  });

  close.on('click', function (event) {
    event.preventDefault();
    menu.toggleClass('.header-nav__active');
  })
})


$(document).ready(function () {
  $(".header-nav").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top - 150 }, 1000);
  });
});


$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('.header-logo').fadeIn();
    } 
  });
  $('.header-logo').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 800);
  });

});