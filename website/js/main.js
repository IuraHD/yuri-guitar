$(function () {

  var mixer = mixitup('.directions__list');

  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })

  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testimonials__dots'),
    waitForAnimate: false,
    // responsive:
    //   [
    //     {
    //       breakpoint: 700,
    //       settings: {

    //       },
    //     },
    //   ]
  })
  $('.testimonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })
  $('.testimonials__next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })
  const consultationBtn = document.querySelector('.header__top-button');
  const questions = document.querySelector('#questions');
  consultationBtn.addEventListener('click', () => {
    questions.scrollIntoView({ behavior: 'smooth' });
  });
  const topButton = document.querySelector('.scroll-to-top');

  topButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
})
function showComingSoon() {
  var comingSoonBlock = document.getElementById("comingSoonBlock");
  comingSoonBlock.style.display = "block";
}

function hideComingSoon() {
  var comingSoonBlock = document.getElementById("comingSoonBlock");
  comingSoonBlock.style.display = "none";
}

$('.burger, .overlay').on('click', function (e) {
  e.preventDefault()
  $('.header__top').toggleClass('header__top--open')
  $('.overlay').toggleClass('overlay--show')
})

