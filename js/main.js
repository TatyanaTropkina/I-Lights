window.onload = function () {
	document.addEventListener('click', documentActions);
	function documentActions(e) {
		const targetElement = e.target;
		// if (targetElement.classList.contains('products__more')) {
			if (targetElement.querySelectorAll('[data-filter=".figure-lights"]')) {
			getProducts(targetElement);
			e.preventDefault();
		}
	}
}
		async function getProducts(button) {
			if (!button.classList.contains('_hold')) {
				button.classList.add('_hold');
				
				const file = "json/products.json";
				let response = await fetch(file, {
					method: 'GET'
				});
				if(response.ok) {
					let result = await response.json();
					loadProducts(result);
					button.classList.remove('_hold');
					button.remove;
				} 
				else {
					alert('Oшибка');
				}
			};
			function loadProducts(data){
				const productsItems = document.querySelector('.product__items');
				data.products.forEach(item => {
					const productId = item.id;
					const productUrl = item.url;
					const productLabel = item.label;
					const productImage = item.image;
					const productTitle = item.title;
					const productText = item.text;
					const productPrice = item.price;
	
					let productTemplateStart = `<div data-pid="${productId}" class="product__item">`;
					let productTemplateEnd = `</div>`;
		
					let productTemplateImage = `
						<a href="${productUrl}" class="product__link">
							<img class="product__link-img" src="images/catalog/${productImage}" alt="${productTitle}">
						</a>
					`;
					let productTemplateLabel = `
					<span class="product__label">${productLabel}</span>
				`;
					let productTemplateBodyStart = `<div class="product__content">`;
					let productTemplateBodyEnd = `</div>`;
		
					let productTemplatePrice = `<div class="product__price">${productPrice} &#8381;</div>`;

					let productTemplateContent =
					`<h6 class="product__title">${productTitle}</h6>`
						let productTemplateText = '';
					if (productText){
						let productTemplateTextStart = `<ul class="product__list">`;
						let productTemplateTextEnd = `</ul>`;
						let productTemplateTextContent = '';
					
						productText.forEach(TextItem => {
							productTemplateTextContent += `<li class="product__list-item">${TextItem.value}</li>`;
						});
		
						productTemplateText += productTemplateTextStart;
						productTemplateText += productTemplateTextContent;
						productTemplateText += productTemplateTextEnd;
					}
				
						productTemplatePrice;
						
					let productTemplateButton = `<a class="btn-dark product__content-btn __icon-plus"
					href="#">Подробнее</a>`
		
					let productTemplateBody = '';
					productTemplateBody += productTemplateBodyStart;
					productTemplateBody += productTemplateContent;
					productTemplateBody += productTemplateText;
					productTemplateBody += productTemplatePrice;
					productTemplateBody += productTemplateBodyEnd;

					let productTemplate = '';
					productTemplate += productTemplateStart;
					productTemplate += productTemplateLabel; 
					productTemplate += productTemplateImage;
					productTemplate += productTemplateBody;
					productTemplate += productTemplateButton;
					productTemplate += productTemplateEnd;

					productsItems.insertAdjacentHTML('beforeend', productTemplate);
			})
			
			} 
		}
$(function(){
		
$(document).ready(function () {
			let $preloader = $('.preloader'),
			$loader = $preloader.find('.preloader__loader');
			$loader.fadeOut();
			$preloader.delay(250).fadeOut(200);
			$('body').addClass('fuck')
	});
	
	// var mixer1 = mixitup('.catalog-intro__gallery-wrapper', {
	// 	load: {
	// 		filter: '.track-lights'
	// 	},
	// 	animation: {
	// 		enable: false
	// 	},
	// });
	var mixer1 = mixitup('#catalog', {
		load: {
			filter: '.track-lights'
		},
		animation: {
			// enable: false
		},
		controls: {
			// scope: 'local',
			
		},
	});
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
			
		});
		$('.filter__title').addClass('__icon-filter');
		
		
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
		$('.filter__title').addClass('__icon-arrow');
		$('.filter__title').click(function(){
			// $('.filter__box').toggleClass('open');
			$('.filter__wrapper').toggleClass('open');
			// $('.filter__buttons').toggleClass('open');

		});
	}
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

		$('.services__item:nth-child(1)').addClass('services__item--active');

		$('.catalog-intro__card-title').on('click', function(){
			$(this).parent('.catalog-intro__card').toggleClass('open')
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
	let menuContacts = $('.menu-contacts-wrapper');
	let contacts = $('.header-contacts');
	// let header = $('.header');
$(menuContacts).hide();

	$(menuBtn).on('click', function () {
		$(menu).toggleClass('open');
		$(this).toggleClass('open');
		$(menuContacts).show();
		$(contacts).hide()
		$(menuBtn).children().toggleClass('__icon-plus')
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
$(function () {
	
	
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
			
