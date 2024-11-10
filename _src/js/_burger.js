
//===== Определяет с какой ОС зашли на сайт =====================================================//
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
//===============================================================================================//

//===============================================================================================//
if (isMobile.any()) {
	document.body.classList.add('_touch'); //добавляет данный класс для body если определил сенсорный экран

	let menuArrows = document.querySelectorAll('.menu__arrow'); //собираем в переменную все объекты с классом .menu__arrow (стрелочки)
	if (menuArrows.length > 0) { //проверяем есть ли такие объекты
		for (let index = 0; index < menuArrows.length; index++) { //если есть, запускаем цикл, чтобы пройтись по всем
			const menuArrow = menuArrows[index]; //создаем константу с каждой стрелочкой
			menuArrow.addEventListener("click", function (e) { //навешиваем событие клик
				menuArrow.parentElement.classList.toggle('_active'); //добавляем класс родителю нажатой стрелочки при клике.
			});
		}
	}
} else {
	document.body.classList.add('_pc'); //добавляет класс для body если не определил сенсорный экран
}
//===============================================================================================//


//===== Открытие и закрытие меню бургера ========================================================//
const iconMenu = document.querySelector('.main-header__burger'); //ищем класс и добавляем его в константу
if (iconMenu) { //проверяем есть ли такой класс
	const menuBody = document.querySelector('.header__mobile-menu'); //получаем еще один класс в константу
	iconMenu.addEventListener("click", function (e) { //вешаем на иконку событие клик
		document.body.classList.toggle('_lock'); //ставим и убираем класс _lock на body каждый раз при клике (для запрета скролла сайта при открытом меню бургер)
		iconMenu.classList.toggle('_active');//ставим и убираем класс _active на иконку бургера каждый раз при клике (для навешивания анимаций при клике на иконку бургера)
		menuBody.classList.toggle('_active');//ставим и убираем класс _active на menu__body каждый раз при клике (для выезда меню при открытии бургера)
	});
}
//===============================================================================================//


