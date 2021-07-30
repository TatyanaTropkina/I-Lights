
// window.onload = function () {
// 	document.addEventListener('click', documentActions);
	
	
// 	function documentActions(e) {
// 		const targetElement = e.target;

		
// 		// if (targetElement.classList.contains('products__more')) {

		
// 		// if (targetElement.classList.contains('catalog__button')) {
		
// 		// 	targetElement.classList.toggle('fuck')
// 		// 	getProducts(targetElement);
// 		// 	e.preventDefault();
		
// 		if (targetElement.querySelectorAll('[data-filter=".figured-lights"]')) {
// 			getProducts(targetElement);
// 			e.preventDefault();
// 		}
// 		if (targetElement.querySelectorAll('[data-filter=".recessed-lights"]')) {
// 			getLight(targetElement);
// 			e.preventDefault();
// 		}
		
// }
// }
		// async function getProducts(button) {
		// 	if (!button.classList.contains('_hold')) {
		// 		button.classList.add('_hold');
				
		// 		const file = "json/products.json";
		// 		let response = await fetch(file, {
		// 			method: 'GET'
		// 		});
		// 		if(response.ok) {
		// 			let result = await response.json();
		// 			loadProducts(result);
		// 			button.classList.remove('_hold');
		// 			button.remove;
		// 		} 
		// 		else {
		// 			alert('Oшибка');
		// 		}
		// 	};
		// 	function loadProducts(data){
		// 		const productsItems = document.querySelector('.product__items');
		// 		// productsItems.removeChild();

		// 		data.products.forEach(item => {
		// 			const productId = item.id;
		// 			const productUrl = item.url;
		// 			const productLabel = item.label;
		// 			const productImage = item.image;
		// 			const productTitle = item.title;
		// 			const productText = item.text;
		// 			const productPrice = item.price;
	
		// 			let productTemplateStart = `<div data-pid="${productId}" class="product__item mix recessed">`;
		// 			let productTemplateEnd = `</div>`;
		
		// 			let productTemplateImage = `
		// 				<a href="${productUrl}" class="product__link">
		// 					<img class="product__link-img" src="images/catalog/${productImage}" alt="${productTitle}">
		// 				</a>
		// 			`;
		// 			let productTemplateLabel = `
		// 			<span class="product__label">${productLabel}</span>
		// 		`;
		// 			let productTemplateBodyStart = `<div class="product__content">`;
		// 			let productTemplateBodyEnd = `</div>`;
		
		// 			let productTemplatePrice = `<div class="product__price">${productPrice} &#8381;</div>`;

		// 			let productTemplateContent =
		// 			`<h6 class="product__title">${productTitle}</h6>`
		// 				let productTemplateText = '';
		// 			if (productText){
		// 				let productTemplateTextStart = `<ul class="product__list">`;
		// 				let productTemplateTextEnd = `</ul>`;
		// 				let productTemplateTextContent = '';
					
		// 				productText.forEach(TextItem => {
		// 					productTemplateTextContent += `<li class="product__list-item">${TextItem.value}</li>`;
		// 				});
		
		// 				productTemplateText += productTemplateTextStart;
		// 				productTemplateText += productTemplateTextContent;
		// 				productTemplateText += productTemplateTextEnd;
		// 			}
				
		// 				productTemplatePrice;
						
		// 			let productTemplateButton = `<a class="btn-dark product__content-btn __icon-plus"
		// 			href="#">Подробнее</a>`
		
		// 			let productTemplateBody = '';
		// 			productTemplateBody += productTemplateBodyStart;
		// 			productTemplateBody += productTemplateContent;
		// 			productTemplateBody += productTemplateText;
		// 			productTemplateBody += productTemplatePrice;
		// 			productTemplateBody += productTemplateBodyEnd;

		// 			let productTemplate = '';
		// 			productTemplate += productTemplateStart;
		// 			productTemplate += productTemplateLabel; 
		// 			productTemplate += productTemplateImage;
		// 			productTemplate += productTemplateBody;
		// 			productTemplate += productTemplateButton;
		// 			productTemplate += productTemplateEnd;

		// 			productsItems.insertAdjacentHTML('beforeend', productTemplate);
		// 	})
			
			
			
		// 	} 
		// }
		// async function getLight(button) {
		// 	if (!button.classList.contains('_hold')) {
		// 		button.classList.add('_hold');
				
		// 		const file = "json/products.json";
		// 		let response = await fetch(file, {
		// 			method: 'GET'
		// 		});
		// 		if(response.ok) {
		// 			let result = await response.json();
		// 			loadLight(result);
		// 			button.classList.remove('_hold');
		// 			button.remove;
		// 		} 
		// 		else {
		// 			alert('Oшибка');
		// 		}
		// 	};
		// 	function loadLight(data){
		// 		const productsItems = document.querySelector('.product__items');
		// 		data.light.forEach(item => {
		// 			const productId = item.id;
		// 			const productUrl = item.url;
		// 			const productLabel = item.label;
		// 			const productImage = item.image;
		// 			const productTitle = item.title;
		// 			const productText = item.text;
		// 			const productPrice = item.price;
	
		// 			let productTemplateStart = `<div data-pid="${productId}" class="product__item mix figured-lights">`;
		// 			let productTemplateEnd = `</div>`;
		
		// 			let productTemplateImage = `
		// 				<a href="${productUrl}" class="product__link">
		// 					<img class="product__link-img" src="images/catalog/${productImage}" alt="${productTitle}">
		// 				</a>
		// 			`;
		// 			let productTemplateLabel = `
		// 			<span class="product__label">${productLabel}</span>
		// 		`;
		// 			let productTemplateBodyStart = `<div class="product__content">`;
		// 			let productTemplateBodyEnd = `</div>`;
		
		// 			let productTemplatePrice = `<div class="product__price">${productPrice} &#8381;</div>`;

		// 			let productTemplateContent =
		// 			`<h6 class="product__title">${productTitle}</h6>`
		// 				let productTemplateText = '';
		// 			if (productText){
		// 				let productTemplateTextStart = `<ul class="product__list">`;
		// 				let productTemplateTextEnd = `</ul>`;
		// 				let productTemplateTextContent = '';
					
		// 				productText.forEach(TextItem => {
		// 					productTemplateTextContent += `<li class="product__list-item">${TextItem.value}</li>`;
		// 				});
		
		// 				productTemplateText += productTemplateTextStart;
		// 				productTemplateText += productTemplateTextContent;
		// 				productTemplateText += productTemplateTextEnd;
		// 			}
				
		// 				productTemplatePrice;
						
		// 			let productTemplateButton = `<a class="btn-dark product__content-btn __icon-plus"
		// 			href="#">Подробнее</a>`
		
		// 			let productTemplateBody = '';
		// 			productTemplateBody += productTemplateBodyStart;
		// 			productTemplateBody += productTemplateContent;
		// 			productTemplateBody += productTemplateText;
		// 			productTemplateBody += productTemplatePrice;
		// 			productTemplateBody += productTemplateBodyEnd;

		// 			let productTemplate = '';
		// 			productTemplate += productTemplateStart;
		// 			productTemplate += productTemplateLabel; 
		// 			productTemplate += productTemplateImage;
		// 			productTemplate += productTemplateBody;
		// 			productTemplate += productTemplateButton;
		// 			productTemplate += productTemplateEnd;

		// 			productsItems.insertAdjacentHTML('beforeend', productTemplate);
		// 	})
			
			
			
		// 	} 
		// }