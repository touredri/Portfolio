$(document).ready(function () {
  $('.scroll').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top,
      },
      2000
    );
  });
});
