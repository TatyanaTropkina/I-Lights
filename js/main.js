// !preloader 
$(function(){
	$(document).ready(function () {
		let $preloader = $('.preloader'),
		$loader = $preloader.find('.preloader__loader');
		$loader.fadeOut();
		$preloader.delay(250).fadeOut(200);
});
})

// !menu
$(function(){	
	$(document).ready(function(){
		if($(window).width()<=1300) {

			let menuList = $('.menu__list');
			let menuBtn = $('.menu__btn');
			let menuLink = $('.menu__list-link');
			
			let contacts = $('.header-contacts');

			$(menuBtn).on('click', function () {
				$(menuList).toggleClass('open');
				$(this).toggleClass('open');
				$(menuBtn).children().toggleClass('__icon-plus')
			});
			$(menuLink).on('click', function(){
				$(menuList).removeClass('open');
				$(menuBtn).removeClass('open');
				$(menuBtn).children().removeClass('__icon-plus');
				$(menuLink).removeClass('menu__list-link--active');
		$(this).toggleClass('menu__list-link--active');
			});
			// !not working
			$(window).scroll(function () {
				let scrollTop = $(window).scrollTop();
				if (scrollTop > 500) {
					$(menuBtn).removeClass('open');
					$(menuList).removeClass('open');
					
				}
			});
				
	$(document).mouseup(function (e) {
		if (!menuBtn.is(e.target) && menuBtn.has(e.target).length === 0 &&
			!menuList.is(e.target) && menuList.has(e.target).length === 0
		) {
			menuList.removeClass('open');
			$(menuBtn).removeClass('open');
			$(menuBtn).children().removeClass('__icon-plus')
		}
	});
		} 
		

	})
});


// !index 
$(function(){
	
});
// !about
$(function(){
	$(document).ready(function(){
		let containerEl2 = $('.about__wrapper');
		let mixer2 = mixitup(containerEl2, {
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
	
			});
			if($(window).width()<= 901) {

				$(document).ready(function(){
			$('[data-filter=".section-1"]').insertBefore('.section-1');
			$('[data-filter=".section-2"]').insertBefore('.section-2');
			$('[data-filter=".section-3"]').insertBefore('.section-3');
			$('[data-filter=".section-4"]').insertBefore('.section-4');
			$('.about__button').addClass('__icon-arrow');

			let containerEl2 = $('.about__wrapper');

			let mixer2 = mixitup(containerEl2, {
				controls: {
					scope: 'local',	
				},
				load: {
					filter: '.section-2',
				},
				animation: {
					enable: false
				},		
			});
			
			$('[data-filter=".shops"]').insertBefore('.shops');
					$('[data-filter=".public"]').insertBefore('.public');
					$('[data-filter=".landscape"]').insertBefore('.landscape');
					$('[data-filter=".cafe"]').insertBefore('.cafe');
					$('[data-filter=".office"]').insertBefore('.office');
					$('[data-filter=".interior"]').insertBefore('.interior');
				})
			} 
			else {
				let containerEl3 = $('.direction__wrapper');
				let mixer3 = mixitup(containerEl3, {
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
	
				
			}
	
	// 	$('.filter__title').addClass('__icon-filter');
		
	
	// 	$('.filter__title').addClass('__icon-arrow');
	// 	$('.filter__title').click(function(){
	// 		//? $('.filter__box').toggleClass('open');
	// 		$('.filter__wrapper').toggleClass('open');
	// 		//? $('.filter__buttons').toggleClass('open');

	// 	});
	// }

	$('.direction-slider__shop').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		
		asNavFor: '.direction-slider__nav-shop',
		autoplay: true
	});
	$('.direction-slider__nav-shop').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		
		asNavFor: '.direction-slider__shop',
	});

	$('.direction-slider__public').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.direction-slider__nav-public',
		autoplay: true
	});
	$('.direction-slider__nav-public').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.direction-slider__public',
	});
	$('.direction-slider__landscape').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.direction-slider__nav-landscape',
		autoplay: true
	});
	$('.direction-slider__nav-landscape').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.direction-slider__landscape',
	});
	$('.direction-slider__cafe').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.direction-slider__nav-cafe',
		autoplay: true
	});
	$('.direction-slider__nav-cafe').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.direction-slider__cafe',
	});
	$('.direction-slider__office').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.direction-slider__nav-office',
		autoplay: true
	});
	$('.direction-slider__nav-office').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.direction-slider__office',
	});
	$('.direction-slider__interior').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.direction-slider__nav-interior',
		autoplay: true
	});
	$('.direction-slider__nav-interior').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.direction-slider__interior',
	});	
});

// !catalog-page-1

$(function(){
	

	
	// var mixer5 = mixitup('.catalog__item-wrapper', {
	// 	load: {
	// 		filter: '.track-lights'
	// 	},
	// 	animation: {
	// 		// enable: false
	// 	},
		
	// 	controls: {
	// 		scope: 'local',
			
	// 	},
	// });
	
	
	// var mixer = mixitup('.delivery__wrapper', {
	// 	load: {
	// 		filter: '.individual'
	// 	}
	// });
	
	
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

	
});
$(function(){
	
	$(document).ready(function() {
		if($(window).width()<= 801){
			$('.individual').before($('[data-filter=".individual"]'));
			$('.entity').before($('[data-filter=".entity"]'));

			$('.budgetary').before($('[data-filter=".budgetary"]'));

			var mixer4 = mixitup('.delivery__content', {
				load: {
					filter: 'none'
				},
				animation: {
					enable: false
				},
			});
			
		} else {
			var mixer4 = mixitup('.delivery__content', {
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
		$('.catalog-intro__nav-title').on('click', function () {
		$('.catalog-intro__nav').removeClass('catalog-intro__nav--active');
		$(this).parent().addClass('catalog-intro__nav--active');
		});

		$('.catalog-intro__nav:nth-child(1)').addClass('catalog-intro__nav--active');
		$('.catalog-intro__card-title').on('click', function(){
			$(this).parent('.catalog-intro__card').toggleClass('open')
		});
	

		$('.services__item:nth-child(1)').addClass('services__item--active');

		
		$('.services__item').on('click', function () {
			$('.services__item').removeClass('services__item--active');
			$(this).addClass('services__item--active');
		});
		let mixer1 = mixitup('#catalog-intro', {
			load: {
				filter: '.track-lights'
			},
			animation: {
				// enable: false
			},
		});

	
	} else{
		$(".catalog-intro__nav-title").replaceWith(function(index, oldHTML){
			return $("<a class='catalog-intro__nav-title' href='catalog-page-1.html'/>").html(oldHTML);
		});
	}
	
});
$(function(){
	
	
		$(".download__item p").replaceWith(function(index, oldHTML){
			return $("<a class='download__name' href='#'/>").html(oldHTML);
		});
		$('.footer__items').append($('.footer__logo-descr'));
	




	
});

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
// 	var articleDiv = document.querySelector("#outputPower");
// // клонируем элемент articleDiv
// var newArticleDiv = articleDiv.cloneNode(true);
// // newArticleDiv.addEventListener();
// // добавляем в конец элемента body
// // let test = document.getElementsByClassName('.catalog__inner')
// document.body.appendChild(newArticleDiv);
// console.log(newArticleDiv)
});

let sliderPower = document.getElementById('sliderPower');
if (sliderPower) {
	noUiSlider.create(sliderPower, {
		start: 44,
		connect: 'lower',
		step: 1,
		range: {
			'min': 0,
			'max': 432
		},
	});
}
	let outputPower = document.getElementById('outputPower');
	sliderPower.noUiSlider.on('update', function(values, handle){
outputPower.value = Math.round(values[handle])
	});

	let sliderFlow = document.getElementById('sliderFlow');
	if (sliderFlow) {
		noUiSlider.create(sliderFlow, {
			start: 0,
			connect: 'lower',
			step: 1,
			range: {
				'min': 0,
				'max': 53820
			},
		});
	
		let outputFlow = document.getElementById('outputFlow');
		sliderFlow.noUiSlider.on('update', function(values, handle){
	outputFlow.value = Math.round(values[handle])
		});
	}
		let sliderAngle = document.getElementById('sliderAngle');
		if (sliderAngle) {
			noUiSlider.create(sliderAngle, {
				start: 0,
				connect: 'lower',
				step: 1,
				range: {
					'min': 0,
					'max': 160
				},
			});
		
			let outputAngle = document.getElementById('outputAngle');
			sliderAngle.noUiSlider.on('update', function(values, handle){
		outputAngle.value = Math.round(values[handle])
			});
		}
			let sliderPrice = document.getElementById('sliderPrice');
		if (sliderPrice) {
			noUiSlider.create(sliderPrice, {
				start: 0,
				connect: 'lower',
				step: 1,
				range: {
					'min': 0,
					'max': 2500
				},
			});
			let outputPrice = document.getElementById('outputPrice');
			sliderPrice.noUiSlider.on('update', function(values, handle){
		outputPrice.value = Math.round(values[handle]);			
			});		
}

document.getElementById('btnReset').addEventListener('click', function () {
    // sliderPower.noUiSlider.set(0);
	// sliderFlow.noUiSlider.set(0);
	// sliderAngle.noUiSlider.set(0);
	// sliderPrice.noUiSlider.set(0);
	sliderPower.noUiSlider.set(0);
	sliderFlow.noUiSlider.reset();
	sliderAngle.noUiSlider.reset();
	sliderPrice.noUiSlider.reset();
});
// sliderPrice.noUiSlider.on('change', function(values, handle){
	
// 	var articleDiv = document.querySelector("#outputPower");
// 	// клонируем элемент articleDiv
// 	var newArticleDiv = articleDiv.cloneNode(true);
// 	// newArticleDiv.addEventListener();
// 	// добавляем в конец элемента body
// 	// let test = document.getElementsByClassName('.catalog__inner')
// 	document.body.appendChild(newArticleDiv);
// 	console.log(newArticleDiv);

// 		});	
			
