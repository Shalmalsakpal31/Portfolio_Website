$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }

  });

  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );
  });
});

var typed = new Typed(".post", {
  strings: ["Freelancer", "App-Developer", "Front-end-Developer ", "Back-end-Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: false
});


var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
})