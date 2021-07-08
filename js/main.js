$(function(){

  $(".header__top a, .footer a").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
  
  $('.blog-slider').slick({
    dots:true,
    arrows:false,
  });

  $('.menu__btn, .menu a').on('click', function(){
    $('.header__top-content').toggleClass('header__top-content--active');
  });


  var mixer = mixitup('.gallery__content');
});