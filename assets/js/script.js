//По клику на бургер меню
const burgerMenu = document.querySelector('#burgerMenu');
const menuBlock = document.querySelector('#menuBlock');
	
burgerMenu.addEventListener('click', () => {
	menuBlock.classList.toggle('burgerActive');
	burgerMenu.classList.toggle('burgerActive');
});

//По клику на логотип
const logo = document.querySelector('#logo');
logo.addEventListener('click', () => {
	logo.style.color = 'red';
})

//Объекты которые будут попадать под анимацию
const animItems = document.querySelectorAll('.anim-items');

if(animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);

	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				animItem.classList.remove('_active');
			}
		}
	}

	function offset(el) {
		let rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}











