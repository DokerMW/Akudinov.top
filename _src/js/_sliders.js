const swiper = new Swiper('.examples__swiper', {
	direction: 'horizontal',
	loop: false,
	slidesPerView: 3,
	spaceBetween: 20,
	navigation: {
		nextEl: '.examples__next-btn',
		prevEl: '.examples__prev-btn',
	},
});


const swiperTwo = new Swiper('.clients__swiper', {
	direction: 'horizontal',
	loop: false,
	slidesPerView: 6,
	spaceBetween: 55,
	autoHeight: false,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.clients__next-btn',
		prevEl: '.clients__prev-btn',
	},
});
