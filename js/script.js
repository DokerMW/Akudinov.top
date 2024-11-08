
const swiper = new Swiper('.examples__swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
	slidesPerView: 3,
	spaceBetween: 20,
	// Navigation arrows
	navigation: {
		nextEl: '.examples__next-btn',
		prevEl: '.examples__prev-btn',
	},
});
new Accordion('.accordion-container', {
	duration: 400,
	showMultiple: true,

});