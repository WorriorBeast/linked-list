import './style.css';
import { LinkedList, classMethodList } from './linked-list';

const output = document.getElementById('output');
const btnContainer = document.querySelector('.button-container');
const input = document.getElementById('methods');

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('frog');
list.prepend('bird');
list.append('fox');
list.prepend('rabbit');

btnContainer.addEventListener('click', (e) => {
	if (e.target.nodeName !== 'BUTTON') return;

	const method = e.target.dataset.method;

	if (classMethodList.parameterRequired.edit.includes(method)) {
		list[method](input.value);

		output.textContent = JSON.stringify(list);
	} else if (classMethodList.parameterRequired.returns.includes(method)) {
		output.textContent = JSON.stringify(list[method](input.value));
	} else if (classMethodList.parameterNotRequired.returns.includes(method)) {
		output.textContent = JSON.stringify(list[method]());
	} else if (classMethodList.parameterNotRequired.edit.includes(method)) {
		list[method]();

		output.textContent = JSON.stringify(list);
	} else if (
		classMethodList.parameterNotRequired.visualStructure.includes(method)
	) {
		output.textContent = list[method]();
	}
});

let previousInput = '';

input.addEventListener('input', () => {
	const enabledBtns = document.querySelectorAll('button:not([disabled])');
	const disabledBtns = document.querySelectorAll('button[disabled]');
	const currentInputArr = input.value.split('');

	if (input.value == '') {
		disabledBtns.forEach((btn) => btn.removeAttribute('disabled'));
		enabledBtns.forEach((btn) => (btn.disabled = true));
	} else if (
		input.value !== '' &&
		currentInputArr.length == 1 &&
		previousInput.split('').length < 1
	) {
		disabledBtns.forEach((btn) => btn.removeAttribute('disabled'));
		enabledBtns.forEach((btn) => (btn.disabled = true));
	}
	previousInput = input.value;
});
