// jquery
$('document').ready(function() {
  // index header scroll icon
  $('.header-index').on('click', '#iconArrow', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('#social').offset().top - 60 }, 300);
  });


  



});

