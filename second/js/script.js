const ENTER_BUTTON = '13';
const input = document.querySelector("input");

input.addEventListener("keydown", printKey);

function printKey(expression) {
	if (event.which == ENTER_BUTTON) {
		event.preventDefault();
		event.stopPropagation();
		return alert(event.target.value);
	}
	console.log(expression);
}
