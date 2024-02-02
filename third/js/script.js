const START_INDEX = 1;
const END_INDEX = 10;

const elementUl = document.createElement('ul');
document.body.appendChild(elementUl);

for (let index = START_INDEX; index <= END_INDEX; index++) {
	let elementLi = document.createElement("li");
	elementLi.innerHTML = `It is elenent li # ${index}`;
	elementUl.appendChild(elementLi);
}

const listElements = document.querySelector('ul');

function printClick() {
	console.log(`clicked ${event.target}`);
}

listElements.addEventListener('click', function (event) {
	if (event.target.closest('ul')) {
		printClick();
	}
});
