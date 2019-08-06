

var review_item = [1, 2, 3, 4, 5];
var totalItem = [];
var item = `<div class="inline">`;
review_item.map(function(index, elem) {
	item += `<div class="item"></div>`
	
})
item += `</div>`

var crReview = document.getElementById('cr-review');
	crReview.innerHTML = item;

var crSingleItem = crReview.querySelectorAll('.item');
	

	crSingleItem.forEach(function(elem, index) {
		
		elem.addEventListener('mouseover', () => {
			var sliceItem = Array.from(crSingleItem).slice(0, index+1);
			sliceItem.forEach( function(element, index) {
				element.classList.add('active');
				element.style.cursor = 'pointer';
			});			
		})

		elem.addEventListener('mouseleave', () => {
			var sliceItem = Array.from(crSingleItem).slice(0, index+1);
			sliceItem.forEach( function(element, index) {
				element.classList.remove('active');
			});			
		})
		
		elem.addEventListener('click', () => {
			crSingleItem.forEach( function(element, index) {
				element.style.background = 'transparent'
			});

			var sliceItem = Array.from(crSingleItem).slice(0, index+1);		

			sliceItem.forEach( function(element, index) {
				element.style.background = 'red';
			});		
		})

	})
