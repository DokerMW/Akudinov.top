
const swiperExamples = new Swiper('.examples__swiper', {
	direction: 'horizontal',
	loop: false,
	slidesPerView: 3,
	spaceBetween: 20,
	navigation: {
		nextEl: '.examples__next-btn',
		prevEl: '.examples__prev-btn',
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

new Accordion('.accordion-container', {
	duration: 400,
	showMultiple: true,
});
const tabBtns = document.querySelectorAll('.tabs__btn');
const videoTab = document.getElementById('video')
const textTab = document.getElementById('text')

tabBtns.forEach(e => {
	e.addEventListener('click', e => {
		for (let i = 0; i < tabBtns.length; i++) {
			tabBtns[i].classList.remove('active');
		}
		e.target.classList.add('active');
		tabOpening(e)
	})
})

const tabOpening = (event) => {
	if (event.target.id == 'video-review') {
		textTab.classList.remove('active')
		videoTab.classList.add('active')
	} else if (event.target.id == 'text-review') {
		videoTab.classList.remove('active')
		textTab.classList.add('active')
	}
}