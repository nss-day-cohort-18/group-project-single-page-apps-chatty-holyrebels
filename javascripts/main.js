////// Defines global variables
let container = document.getElementById("wrapper");
let input = document.getElementById('input');
let button = document.getElementById('clear-all');
let darkBox = document.getElementById('dark');
let largeBox = document.getElementById('large');
let output = document.getElementById('output');

////// Adds the event listeners to variables (objects)
input.addEventListener('keypress', createMessage);
button.addEventListener('checkBoxStateChange', clearAll);
darkBox.addEventListener('checkBoxStateChange', darkMode);
largeBox.addEventListener('checkBoxStateChange', largeMode);

//////////////////////// Main functions

////// Function that creates the message
function createMessage(e) {
	console.log('createMessage wants to run');
	if (e.keycode === 13){
		let message = input.value;
		chatty.makeMessage(message);
	}
}

////// Function that clears the output box
function clearAll(e) {
	console.log('clearAll wants to run');
	output.innerHTML = "";
}

////// Function that toggles the background and text colors
function darkMode(e) {
	console.log('darkMode wants to run');
	if(darkBox.hasAttribute('checked')){
		container.classList.toggle('dark');   //////// NEED TO MAKE CSS CLASS
	}
	else {
		container.classList.toggle('dark')
	}
}

////// Function that toggles the font size
function largeMode(e) {
	console.log('largeMode wants to run');
	if (largeBox.hasAttribute('checked')) {
		container.classList.toggle('large');
	}
	else {
		container.classList.toggle('large');
	}
}

////// Function that prints each chat message
function print(newMessage) {
	console.log('print wants to run');
	let messageDiv = "";
	messageDiv.innerHTML = message;
	container.appendChild(messageDiv);
}
 



