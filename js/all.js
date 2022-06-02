// jquery
$('document').ready(function() {
  // index header scroll icon
  $('.header-index').on('click', '.icon-arrow', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('.social').offset().top - 50 }, 200);
  });

  // scroll2top
  $('html, body').on('click', '.scroll2top', function(e) {
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
  $('.faq-list').on('click', '.faq-item', function(e) {
    e.preventDefault();
    $(this).find('.faq-answer').slideToggle(200);
    $(this).siblings().find('.faq-answer').slideUp(200);

    $(this).find('.faq-icon i').toggleClass('d-none');
    $(this).siblings().find('.faq-icon .icon-minus').addClass('d-none');
    $(this).siblings().find('.faq-icon .icon-plus').removeClass('d-none');
  });


  // animate css
  $('.header-index .banner-title').addClass('animate__animated animate__backInLeft');
  $('.header-scheme .banner .container').addClass('animate__animated animate__fadeInDown');

  // 事件結束後移除該 class // animationend 屬於一個可被監聽的 event
  $('.header-index, .scheme-index').on('animationend', function() {
    // console.log('animate end');
    $('.header-index .banner-title').removeClass('animate__animated animate__backInLeft');
    $('.header-scheme .banner .container').removeClass('animate__animated animate__fadeInDown');
  })


  // test

});

