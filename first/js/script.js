const button = document.querySelector('button');
const body = document.querySelector('body');

button.addEventListener("click", () => {
	alert("button clicked");
});

button.addEventListener('mouseover', () => {
	body.style.backgroundColor = 'green';
});

button.addEventListener('mouseout', () => {
	body.style.backgroundColor = '';
});
