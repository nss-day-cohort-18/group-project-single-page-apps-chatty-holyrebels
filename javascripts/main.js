////// Defines global variables
let container = document.getElementById("container");
let input = document.getElementById('input');
let button = document.getElementById('clear-all');
let darkBox = document.getElementById('dark');
let largeBox = document.getElementById('large');
let output = document.getElementById('output');

////// This is the dynamic event handler
let body = document.querySelector('body');

////// Adds the event listeners to variables (objects)

input.addEventListener('keypress', createMessage);
button.addEventListener('click', clearAll);
darkBox.addEventListener('click', darkMode);
largeBox.addEventListener('click', largeMode);
body.addEventListener('click', callDelete);

//////////////////////// Main functions





////// Function that creates the message

function createMessage(event) {
	if (event.keyCode === 13){
		let message = input.value;
		Chatty.unshiftMessage(message);
		Chatty.printMessage(message);
		event.currentTarget.value = "";
	}
}

////// Function that clears the output box
function clearAll(event) {
	console.log('clearAll wants to run');
	output.innerHTML = "";
	button.setAttribute("disabled", true);
}

////// Function that toggles the background and text colors
function darkMode(event) {
	console.log('darkMode wants to run');
	if(darkBox.hasAttribute('checked')){
		container.classList.add('dark');   //////// NEED TO MAKE CSS CLASS
	}
	else {
		container.classList.toggle('dark')
	}
}

////// Function that toggles the font size
function largeMode(event) {
	console.log('largeMode wants to run');
	if (largeBox.hasAttribute('checked')) {
		output.classList.add('large');
	}
	else {
		output.classList.toggle('large');
	}
}

////// Deletes message and private array
function callDelete(event){
	if (event.target.className === "delete"){
		Chatty.deleteMessage(event);
		Chatty.removeItem(event);
	}
}

