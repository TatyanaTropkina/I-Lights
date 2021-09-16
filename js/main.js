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

// !about
$(function(){

	$('.portfolio-slider__shop').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		autoplay: false,
		asNavFor: '.portfolio-slider__nav-shop',
		
	});
	$('.portfolio-slider__nav-shop').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		autoplay: false,
		asNavFor: '.portfolio-slider__shop',
	});

	$('.portfolio-slider__public').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.portfolio-slider__nav-public',
		autoplay: true
	});
	$('.portfolio-slider__nav-public').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.portfolio-slider__public',
	});
	$('.portfolio-slider__landscape').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.portfolio-slider__nav-landscape',
		autoplay: true
	});
	$('.portfolio-slider__nav-landscape').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.portfolio-slider__landscape',
	});
	$('.portfolio-slider__cafe').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.portfolio-slider__nav-cafe',
		autoplay: true
	});
	$('.portfolio-slider__nav-cafe').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.portfolio-slider__cafe',
	});
	$('.portfolio-slider__office').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.portfolio-slider__nav-office',
		autoplay: true
	});
	$('.portfolio-slider__nav-office').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.portfolio-slider__office',
	});
	$('.portfolio-slider__interior').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.portfolio-slider__nav-interior',
		autoplay: true
	});
	$('.portfolio-slider__nav-interior').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.portfolio-slider__interior',
	});	
});

// !catalog-page-1

$(function(){
	
	if($('*').is('#catalog')) {
		var mixer = mixitup('#catalog', {
			load: {
				filter: '.track-lights'
			},
			animation: {
				enable: false
			}
		});
	}
});

// !accordion
if( window.innerWidth <= 769 ){
	
	$('.accordion__content').wrap('<div class="accordion__item">');
	$('.accordion__item').addClass('closed');
	$('.accordion__item:first-child').removeClass('closed');


	$('#btn-1').removeAttr('onclick', 'openTab(event, "tab-1")').insertBefore('#tab-1');
	$('#btn-2').removeAttr('onclick', 'openTab(event, "tab-2")').insertBefore('#tab-2');
	$('#btn-3').removeAttr('onclick', 'openTab(event, "tab-3")').insertBefore('#tab-3');
	$('#btn-4').removeAttr('onclick', 'openTab(event, "tab-4")').insertBefore('#tab-4');
	$('#btn-5').removeAttr('onclick', 'openTab(event, "tab-5")').insertBefore('#tab-5');


	$('.accordion__buttons').remove();
	$('.accordion__button').removeClass('active');

	let arrowColor = '<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.5L1.5 11L-6.55671e-08 9.5L4 5.5L-4.15258e-07 1.5L1.6 -6.99382e-08L7 5.5Z" fill="#FFC94F"/></svg>';
	let arrowWhite = '<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.5L1.5 11L-6.55671e-08 9.5L4 5.5L-4.15258e-07 1.5L1.6 -6.99382e-08L7 5.5Z" fill="#fff"/></svg>';
	let arrowBlack = '<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.5L1.5 11L-6.55671e-08 9.5L4 5.5L-4.15258e-07 1.5L1.6 -6.99382e-08L7 5.5Z" fill="#000000"/></svg>';

$(".about__button-toggle").html(arrowColor);
$(".delivery__button-toggle").html(arrowColor);
$(".services__button-toggle").html(arrowWhite);
$(".accordion__item.closed").toggleClass("show").children(".accordion__button").children(".accordion__button-toggle").html(arrowBlack).css('transform', 'rotate(90deg)');
$(".accordion__item.closed").children(".accordion__button").css('background-color', 'transparent');
$(".accordion__item.closed").children(".accordion__button").children(".accordion__button-title").css('color', '#535353');


$(".about__button").click(function(){
if ($(this).parent().hasClass("show")) {
$(".accordion__item").children(".accordion__button").children(".accordion__button-title").parent().children(".accordion__button-toggle").html(arrowBlack).css('transform', 'rotate(90deg)');
$(this).children(".accordion__button-title").parent().children(".accordion__button-toggle").html(arrowColor).css('transform', 'rotate(-90deg)');

	} else {
$(this).children(".accordion__button-title").parent().children(".accordion__button-toggle").html(arrowBlack).css('transform', 'rotate(90deg)');

}	
});

$(".services__button").click(function(){
	if ($(this).parent().hasClass("show")) {
	$(".accordion__item").children(".accordion__button").children(".accordion__button-title").parent().children(".accordion__button-toggle").html(arrowBlack).css('transform', 'rotate(90deg)');
	$(".accordion__item").children(".accordion__button").css('background-color', 'transparent')
	$(".accordion__item").children(".accordion__button").children(".accordion__button-title").css('color', '#535353');
	$(this).children(".accordion__button-title").parent().children(".accordion__button-toggle").html(arrowWhite).css('transform', 'rotate(-90deg)');
	$(this).children(".accordion__button-title").parent().css('background-color', '#3D4F64');
	$(this).children(".accordion__button-title").css('color', '#fff');
		} else {
	$(this).children(".accordion__button-title").parent().children(".accordion__button-toggle").html(arrowBlack).css('transform', 'rotate(90deg)');
	$(this).children(".accordion__button-title").parent().css('background-color', 'transparent');
	$(this).children(".accordion__button-title").css('color', '#535353');
	
	}	
	});

	$(".delivery__button").click(function(){
		if ($(this).parent().hasClass("show")) {
		$(".accordion__item").children(".accordion__button").children(".accordion__button-title").parent().children(".accordion__button-toggle").html(arrowBlack).css('transform', 'rotate(90deg)');
		$(this).children(".accordion__button-title").parent().children(".accordion__button-toggle").html(arrowColor).css('transform', 'rotate(-90deg)');
		
			} else {
		$(this).children(".accordion__button-title").parent().children(".accordion__button-toggle").html(arrowBlack).css('transform', 'rotate(90deg)');
		
		}	
		});

	$(".accordion__button").click(function(){
		if ($(this).parent().hasClass("show")) {
		$(".accordion__item").addClass("show").children(".accordion__content").hide("medium");
		$(this).parent().toggleClass("show").children(".accordion__content").slideToggle("medium");
		
			} else {
		$(this).parent().toggleClass("show").children(".accordion__content").slideToggle("medium");
		
		}	
		});

} else {

function openTab(evt, tab) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("accordion__content");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("accordion__button");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tab).style.display = "block";
	evt.currentTarget.className += " active";
}

} 

// !media
$(function(){
	let introSlider = $('.intro-slider')
	if(introSlider) {
		$('.intro-slider').slick({
			prevArrow: '<button class="intro-slider__btn intro-slider__btn-left"><svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.55868e-08 5.5L5.5 1.78873e-08L7 1.5L3 5.5L7 9.5L5.4 11L6.55868e-08 5.5Z" /></svg></button>',
			nextArrow: '<button class="intro-slider__btn intro-slider__btn-right"><svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.5L1.5 11L1.78873e-08 9.5L4 5.5L1.13286e-07 1.5L1.6 1.90798e-08L7 5.5Z"/></svg></button>',
			infinite: false,
			dots: true,
			responsive: [{
				breakpoint: 769,
				settings: {
					arrows: false,
					autoplay: true,
					autoplaySpeed: 2000,
					infinite: true,
	
				}
			}]
		});
	}

	if ($(window).width() <=769) {

		$('.header-contacts').appendTo('.menu__list').wrapAll('<li class="menu__list-item">');
		$('.footer__items').append($('.footer__logo-descr'));


		$('[data-filter=".shops"]').insertBefore('.shops');
		$('[data-filter=".public"]').insertBefore('.public');
		$('[data-filter=".landscape"]').insertBefore('.landscape');
		$('[data-filter=".cafe"]').insertBefore('.cafe');
		$('[data-filter=".office"]').insertBefore('.office');
		$('[data-filter=".interior"]').insertBefore('.interior');

		
		$('.filter__inner').hide("medium")
		$('.filter__title').removeClass('__icon-filter').addClass('__icon-arrow');
		$('.filter__title').click(function(){
			$('.filter__inner').slideToggle("medium");
		})
		$('.filter__button').click(function(){
			$('.filter__inner').hide("medium")
		})


	} else {
		
		if($('*').is('.portfolio__wrapper')) {
		var mixer = mixitup('.portfolio__wrapper', {
			load: {
				filter: '.shops'
			},
			animation: {
				enable: false
			},
			callbacks: {
				onMixEnd: function() {
					$('.portfolio-slider').slick("refresh");
					$('.portfolio-slider__nav').slick("refresh");
				},
			}		
		});
}
	}
	if ($(window).width() <= 601){
		$('.catalog-intro__nav-title').replaceWith(function(index, oldHTML){
			return $("<a class='catalog-intro__nav-title' href='catalog-page-1.html'/>").html(oldHTML);
		});
		$(".services-intro__head-title").replaceWith(function(index, oldHTML){
			return $("<a class='services-intro__head-title' href='catalog-page-1.html'/>").html(oldHTML);
		});
		$(".download__item p").replaceWith(function(index, oldHTML){
			return $("<a class='download__name' href='#'/>").html(oldHTML);
		});
		
	} else {
		$('.catalog-intro__nav-title').on('click', function () {
			$('.catalog-intro__nav').removeClass('active');
			$(this).parent().addClass('active');
			});
	
			$('.catalog-intro__nav:nth-child(1)').addClass('active');
			$('.catalog-intro__card-title').on('click', function(){
				$(this).parent('.catalog-intro__card').toggleClass('open')
			});

	}
	if ($(window).width() <= 551) {
		
		} else{
	
		if($('*').is('#catalog-intro')) {
			let mixer1 = mixitup('#catalog-intro', {
						load: {
							filter: '.track-lights'
						},
						animation: {
							enable: false
						},
					});
			}	
		}
});

// !!services-intro
$(function () {

	$(".services-intro__item.closed").toggleClass("show").children(".services-intro__head").children(".services-intro__head-btn").css("transform","rotate(0)");
	$(".services-intro__head").click(function(){
		if ($(this).parent().hasClass("show")) {
    $(".services-intro__item").addClass("show").children(".services-intro__item-text").hide("medium");
    $(".services-intro__item").children(".services-intro__head").children(".services-intro__head-title").parent().children(".services-intro__head-btn").css("transform","rotate(0)");
    $(this).parent().toggleClass("show").children(".services-intro__item-text").slideToggle("medium");
    $(this).children(".services-intro__head-title").parent().children(".services-intro__head-btn").css("transform","rotate(45deg)");

    		} else {
    $(this).parent().toggleClass("show").children(".services-intro__item-text").slideToggle("medium");
    $(this).children(".services-intro__head-title").parent().children(".services-intro__head-btn").css("transform","rotate(0)");

    }	
	});

});
// !filter
$(function(){

if($('*').is('.filter'))  {

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

	sliderPower.noUiSlider.set(0);
	sliderFlow.noUiSlider.reset();
	sliderAngle.noUiSlider.reset();
	sliderPrice.noUiSlider.reset();
});

}
});
