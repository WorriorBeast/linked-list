import './style.css';
import { LinkedList, classMethodList } from './linked-list';

const output = document.getElementById('output');
const btnContainer = document.querySelector('.button-container');
const singleParamInput = document.getElementById('single-param');
const methodDescription = document.getElementById('method-description');
const doubleParamInput = document.getElementById('double-param');

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('frog');
list.prepend('bird');
list.append('fox');
list.prepend('rabbit');
list.insertAt('wolf', 7);

btnContainer.addEventListener('click', (e) => {
	if (e.target.nodeName !== 'BUTTON') return;

	const method = e.target.dataset.method;

	if (classMethodList.parameterRequired.edit.includes(method)) {
		list[method](singleParamInput.value);

		output.textContent = JSON.stringify(list);
	} else if (classMethodList.parameterRequired.returns.includes(method)) {
		output.textContent = JSON.stringify(list[method](singleParamInput.value));
	} else if (classMethodList.parameterNotRequired.returns.includes(method)) {
		output.textContent = JSON.stringify(list[method]());
	} else if (classMethodList.parameterNotRequired.edit.includes(method)) {
		list[method]();

		output.textContent = JSON.stringify(list);
	} else if (
		classMethodList.parameterNotRequired.visualStructure.includes(method)
	) {
		output.textContent = list[method]();
	} else if (
		classMethodList.parameterRequired.doubleParameter.includes(method)
	) {
		list[method](singleParamInput.value, doubleParamInput.value);

		output.textContent = JSON.stringify(list);
	}
});

let previousInput = '';
let prevDoubleParamInput = '';

singleParamInput.addEventListener('input', toggleClickableBtns);

doubleParamInput.addEventListener('input', toggleClickableBtns);

function toggleClickableBtns() {
	const noParamBtns = document.querySelectorAll('button[no-parameter]');
	const singleParamBtns = document.querySelectorAll(
		'button[single-parameter]',
	);
	const doubleParamBtns = document.querySelectorAll(
		'button[double-parameter]',
	);

	const singleParamValue = singleParamInput.value;
	const singleParamArrLength = singleParamValue.split('').length;
	const doubleParamValue = doubleParamInput.value;
	const prevSingleInputArrLength = previousInput.split('').length;
	const prevDoubleInputArrLength = prevDoubleParamInput.split('').length;

	if (
		doubleParamValue == '' &&
		singleParamArrLength <= 1 &&
		prevSingleInputArrLength <= 1 &&
		prevDoubleInputArrLength !== 1
	) {
		noParamBtns.forEach((btn) =>
			btn.disabled ? (btn.disabled = false) : (btn.disabled = true),
		);
		singleParamBtns.forEach((btn) =>
			btn.disabled ? (btn.disabled = false) : (btn.disabled = true),
		);
		doubleParamBtns.forEach((btn) => (btn.disabled = true));
	} else if (singleParamValue !== '' && doubleParamValue == '') {
		singleParamBtns.forEach((btn) => (btn.disabled = false));
		doubleParamBtns.forEach((btn) => (btn.disabled = true));
	} else if (
		singleParamValue == '' &&
		doubleParamValue == '' &&
		prevDoubleInputArrLength == 1
	) {
		noParamBtns.forEach((btn) => (btn.disabled = false));
		doubleParamBtns.forEach((btn) => (btn.disabled = true));
	} else if (
		(singleParamValue !== '' && doubleParamValue !== '') ||
		(singleParamValue === '' && doubleParamInput !== '')
	) {
		noParamBtns.forEach((btn) => (btn.disabled = true));
		singleParamBtns.forEach((btn) => (btn.disabled = true));
		doubleParamBtns.forEach((btn) => (btn.disabled = false));
	}

	previousInput = singleParamInput.value;
	prevDoubleParamInput = doubleParamInput.value;
}

btnContainer.addEventListener('mouseover', (e) => {
	if (e.target.nodeName !== 'BUTTON') return;

	methodDescription.textContent = e.target.dataset.description;
});
