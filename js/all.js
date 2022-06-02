// jquery
$('document').ready(function() {
  // index header scroll icon
  $('.header-index').on('click', '#iconArrow', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('#social').offset().top - 60 }, 200);
  });

  // scroll2top
  $('html, body').on('click', '#scroll2top', function(e) {
    e.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, 200);
  });

  // scheme options
  $('.options').on('click', '.options-btns li', function(e) {
    // !此處對象必須是 li 才可正確取得索引順序與內容
    e.preventDefault();
    
    let userNum = ['10000', '15000', '20000', '25000', '>25000'];
    let basicPrice = ['600', '750', '900', '1050', '1200'];
    let standardPrice = ['1600', '1700', '1800', '1900', '2000'];

    let i = $(this).index();
    // console.log(i);
    $('.user').text(userNum[i]);
    $('.price-basic').text(basicPrice[i]);
    $('.price-standard').text(standardPrice[i]);


    // options-btns background effect
    $(this).find('a').addClass('bg-danger');
    $(this).siblings().find('a').removeClass('bg-danger');
  })


  // scheme FAQ list
  $('.faq-list').on('click', '#faqItem', function(e) {
    e.preventDefault();
    $(this).find('#faqAnswer').slideToggle(200);
    $(this).siblings().find('#faqAnswer').slideUp(200);

    $(this).find('.faq-icon i').toggleClass('d-none');
    $(this).siblings().find('.faq-icon .icon-minus').addClass('d-none');
    $(this).siblings().find('.faq-icon .icon-plus').removeClass('d-none');
  });
});

