const swiperExamples = new Swiper('.examples__swiper', {
	direction: 'horizontal',
	loop: false,
	slidesPerView: 3,
	spaceBetween: 20,
	navigation: {
		nextEl: '.examples__next-btn',
		prevEl: '.examples__prev-btn',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		769: {
			slidesPerView: 2,
		},
		1260: {
			slidesPerView: 3,
		},
	},
});


const swiperClients = new Swiper('.clients__swiper', {
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


const swiperReviewsText = new Swiper('.text-reviews__swiper', {
	direction: 'horizontal',
	loop: false,
	slidesPerView: 3,
	spaceBetween: 20,
	autoHeight: true,
	navigation: {
		nextEl: '.reviews-text__next-btn',
		prevEl: '.reviews-text__prev-btn',
	},
});
const swiperReviewsVideo = new Swiper('.video-reviews__swiper', {
	direction: 'horizontal',
	loop: false,
	slidesPerView: 4,
	spaceBetween: 20,
	autoHeight: false,
	navigation: {
		nextEl: '.reviews-video__next-btn',
		prevEl: '.reviews-video__prev-btn',
	},
});
