$(function(){
$(document).ready(function () {
			let $preloader = $('.preloader'),
			$loader = $preloader.find('.preloader__loader');
			$loader.fadeOut();
			$preloader.delay(250).fadeOut(200);
	});
	
	// var mixer = mixitup('.catalog__gallery-wrapper', {
	// 	load: {
	// 		filter: '.track-lights'
	// 	}
	// });
	// var mixer = mixitup('.delivery__wrapper', {
	// 	load: {
	// 		filter: '.individual'
	// 	}
	// });
	$('.direction-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.direction-slider__nav',
		// autoplay: true
	});
	$('.direction-slider__nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.direction-slider',
	});
	
	
	$(document).ready(function(){
		// let containerEl1 = $('.about__wrapper');
		
			// let mixer1 = mixitup(containerEl1, {
			// 	controls: {
			// 		scope: 'local',	
			// 	},
			// 	load: {
			// 		filter: '.section-1'
			// 	},		
			// });
			
	});
});
$(function(){
	if($(window).width()>= 901) {
		
		$(document).ready(function(){
			let containerEl1 = $('.about__wrapper');
			let mixer1 = mixitup(containerEl1, {
				controls: {
					scope: 'local',	
				},
				load: {
					filter: '.section-1'
				},
				animation: {
					enable: false
				},		
			});	
			let containerEl2 = $('.direction__wrapper');
			let mixer2 = mixitup(containerEl2, {
				controls: {
					scope: 'local',
					
				},
				load: {
					filter: '.shops'
				},
				animation: {
					enable: false
				},
				callbacks: {
					onMixEnd: function() {
						$('.direction-slider').slick("refresh");
						$('.direction-slider__nav').slick("refresh");
					},
				}	
			});
			
		});
		
	} else {
		
	
		$(document).ready(function() {
			// !not remove, just add
			$('.about__content').removeClass('mix');
			$('[data-filter=".section-1"]').prependTo('.section-1');
			$('[data-filter=".section-2"]').prependTo('.section-2');
			$('[data-filter=".section-3"]').prependTo('.section-3');
			$('[data-filter=".section-4"]').prependTo('.section-4');

			$('.about__text').hide()
			$('.about__button').on('click', function(){
				$('.about__text').hide();
				$('.about__button').removeClass('active');
				$(this).siblings('.about__text').show();
				$(this).addClass('active');				
			})
		});
		$(document).ready(function() {
			// !not remove, just add
			$('.direction__gallery').removeClass('mix');
			$('[data-filter=".shops"]').prependTo('.shops');
			$('[data-filter=".public"]').prependTo('.public');
			$('[data-filter=".landscape"]').prependTo('.landscape');
			$('[data-filter=".cafe"]').prependTo('.cafe');
			$('[data-filter=".office"]').prependTo('.office');
			$('[data-filter=".interior"]').prependTo('.interior');

			
		});
	}
});
$(function(){
	
	$(document).ready(function() {
		if($(window).width()<= 801){
			$('.individual').before($('[data-filter=".individual"]'));
			$('.entity').before($('[data-filter=".entity"]'));

			$('.budgetary').before($('[data-filter=".budgetary"]'));

			var mixer3 = mixitup('.delivery__content', {
				load: {
					filter: 'none'
				},
				animation: {
					enable: false
				},
			});
			
		} else {
			var mixer3 = mixitup('.delivery__content', {
				load: {
					filter: '.individual'
				},
				animation: {
					enable: false
				},

			});
		}
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

		$('.services__item:nth-child(1)').addClass('services__item--active');

		$('.catalog__card-title').on('click', function(){
			$(this).parent('.catalog__card').toggleClass('open')
		});
		$('.services__item').on('click', function () {
			$('.services__item').removeClass('services__item--active');
			$(this).addClass('services__item--active');
		});

	
	} else{
		
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