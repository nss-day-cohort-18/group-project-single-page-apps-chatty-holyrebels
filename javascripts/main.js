////// Defines global variables
let container = document.getElementById("container");
let input = document.getElementById('input');
let button = document.getElementById('clear-all');
let darkBox = document.getElementById('dark');
let largeBox = document.getElementById('large');
let output = document.getElementById('output');
let Casey = document.getElementById('Casey');
let James = document.getElementById('James');
let Nick = document.getElementById('Nick');
let Donald = document.getElementById('Donald');
let user = "";
////// This is the dynamic event handler
let body = document.querySelector('body');

////// Adds the event listeners to variables (objects)

input.addEventListener('keypress', createMessage);
button.addEventListener('click', clearAll);
darkBox.addEventListener('click', darkMode);
largeBox.addEventListener('click', largeMode);
body.addEventListener('click', callDelete);

Casey.addEventListener('change', setUserName);
James.addEventListener('change', setUserName);
Nick.addEventListener('change', setUserName);
Donald.addEventListener('change', setUserName);

//////////////////////// Main functions
 function setUserName (event) {
 	user = event.target.id;
 	console.log('user:', user);
 	input.focus();
 	input.select();

 }


////// Function that creates the message



function createMessage(event) {
	
	if (event.keyCode === 13){
		let message = input.value;
		let time = Date.now();
		Chatty.pushMessage(message, time, user);
		Chatty.printMessage(message, time, user);
		event.currentTarget.value = "";
		button.removeAttribute("disabled");
	}
}

////// Function that clears the output box
function clearAll(event) {
	output.innerHTML = "";
	button.setAttribute("disabled", true);
}

////// Function that toggles the background and text colors
function darkMode(event) {

	if(darkBox.hasAttribute('checked')){
		container.classList.add('dark');   //////// NEED TO MAKE CSS CLASS
	}
	else {
		container.classList.toggle('dark')
	}
}

////// Function that toggles the font size
function largeMode(event) {

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
