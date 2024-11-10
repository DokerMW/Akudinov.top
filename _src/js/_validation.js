// const validation = () => {
const allInputs = document.querySelectorAll('input');
const forms = document.querySelectorAll('form[id^="form"]');
const testName = /[а-яА-Яa-zA-Z\\s]+/;
const testEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const testPhone = /^\+?[0-9][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
const testDomen = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;

forms.forEach(e => {
	let allInputs = document.querySelectorAll('input');
	e.addEventListener('submit', event => {
		allInputs.forEach(e => {
			if (e.classList.contains('success')) {
				e.classList.remove('success')
			}
		})
		let inputTel = event.target.querySelector('input[name="phone"]');
		let inputName = event.target.querySelector('input[name="name"]');
		let inputEmail = event.target.querySelector('input[name="email"]');
		let inputDomen = event.target.querySelector('input[name="domen"]');
		if (inputEmail) {
			if (testEmail.test(inputEmail.value)) {
				inputEmail.classList.add('success')
			} else {
				event.preventDefault();
				inputEmail.classList.add('error')
			}
		}
		if (inputTel) {
			if (testPhone.test(inputTel.value)) {
				inputTel.classList.add('success')
			} else {
				event.preventDefault();
				inputTel.classList.add('error')
			}
		}
		if (inputName) {
			if (testName.test(inputName.value)) {
				inputName.classList.add('success')
			} else {
				event.preventDefault();
				inputName.classList.add('error')
			}
		}
		if (inputDomen) {
			if (testDomen.test(inputDomen.value)) {
				inputDomen.classList.add('success')
			} else {
				event.preventDefault();
				inputDomen.classList.add('error')
			}
		}
	});
})

allInputs.forEach(e => {
	e.addEventListener('focus', event => {
		if (event.target.classList.contains('error')) {
			event.target.classList.remove('error')
		}
	});
})
// }
// export default validation;