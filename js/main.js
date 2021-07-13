	
$(function(){
$(document).ready(function () {
			let $preloader = $('.preloader'),
			$loader = $preloader.find('.preloader__loader');
			$loader.fadeOut();
			$preloader.delay(250).fadeOut(200);
	});
});
$(function(){
	$('.intro-slider').slick({
		prevArrow: '<button class="intro-slider__btn intro-slider__btn-left"><svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.55868e-08 5.5L5.5 1.78873e-08L7 1.5L3 5.5L7 9.5L5.4 11L6.55868e-08 5.5Z" /></svg></button>',
		nextArrow: '<button class="intro-slider__btn intro-slider__btn-right"><svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.5L1.5 11L1.78873e-08 9.5L4 5.5L1.13286e-07 1.5L1.6 1.90798e-08L7 5.5Z"/></svg></button>',
		infinite: false,
		dots: true,
		responsive: [{
			breakpoint: 769,
			settings: {
				arrows: false,
				// autoplay: true,
				// autoplaySpeed: 2000,
				infinite: true,

			}
		}]

	});
	
	
	if ($(window).width() >= 551) {
		$('.catalog__nav-title').on('click', function () {
		$('.catalog__nav').removeClass('catalog__nav--active');
		$(this).parent().addClass('catalog__nav--active');
		});

		$('.catalog__nav:nth-child(1)').addClass('catalog__nav--active');
		let mixer = mixitup('.catalog__gallery-wrapper', {
		load: {
		filter: '.track-lights'
		},
		animation: {
		effectsIn: 'fade translateY(0) translateX(0) translate3d(0) translateZ(0)',
		effectsOut: 'fade translateY(0) translateX(0) translate3d(0) translateZ(0)',
		effects: 'fade translateY(0) translateX(0) translate3d(0) translateZ(0)',
		duration: 500
		}
		});
		
		$('.services__item:nth-child(1)').addClass('services__item--active');

		$('.catalog__card-title').on('click', function(){
			$(this).parent('.catalog__card').toggleClass('open')
		});
		$('.services__item').on('click', function () {
			$('.services__item').removeClass('services__item--active');
			$(this).addClass('services__item--active');
		});

	
	} else{
		// $('.download__item').find().children('.download__name').attr('href', '#');
		
// let mixer = false
	}
	
});
$(function(){
	
		$(".download__item p").replaceWith(function(index, oldHTML){
			return $("<a class='download__name' href='#'/>").html(oldHTML);
		});
		$('.footer__items').append($('.footer__logo-descr'));
	
	let menu = $('.menu__list');
	let menuBtn = $('.menu__btn');
	let menuLink = $('.menu__list-link');
	// let header = $('.header');

	$(menuBtn).on('click', function () {
		$(menu).toggleClass('open');
		$(this).toggleClass('open');
		// $(header).toggleClass('gradient');
	});
	$(menuLink).on('click', function(){
		$(menu).removeClass('open');
		// $(header).removeClass('gradient');
		$(menuBtn).toggleClass('open');

	})
	$(document).mouseup(function (e) {
		if (!menuBtn.is(e.target) && menuBtn.has(e.target).length === 0 &&
			!menu.is(e.target) && menu.has(e.target).length === 0
		) {
			menu.removeClass('open');
			// $(header).removeClass('gradient');
			$(menuBtn).removeClass('open');
		}
	});
	$(window).scroll(function () {
		let scrollTop = $(window).scrollTop();
		if (scrollTop > 500) {
            $(menuBtn).removeClass('open');
            $(menu).removeClass('open');
			// $(header).removeClass('gradient');
        }
    });
})

// $('.catalog__card-title').on('click', function(){
// 	$(this).parent('.catalog__card').toggleClass('open')
// });

// $('.services__item').on('click', function () {
// 	$('.services__item').removeClass('services__item--active');
// 	$(this).addClass('services__item--active');
// });

$(function () {
	$(document).ready(function () {
		new WOW().init();
	});
});