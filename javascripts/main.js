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
let previousMessageId = "";
let author = "";

////// Adds the event listeners to variables (objects)

input.addEventListener('keypress', createMessage);
button.addEventListener('click', clearAll);
darkBox.addEventListener('click', darkMode);
largeBox.addEventListener('click', largeMode);
body.addEventListener('click', editPost);

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

		if (event.target.classList.contains("input")) {
					let message = event.target.value;
					let time = Date.now();
					Chatty.removePreviousMessage(previousMessageId);
					Chatty.pushMessage(message, time);
				}

		 else if (input.value === "") {
			alert('Enter text please!');

		} else if (user === "") {
			alert("please select a user");

		} else {
			let message = input.value;
			let time = Date.now();
			Chatty.pushMessage(message, time);
			Chatty.printMessage(message, time);
			event.currentTarget.value = "";
			button.removeAttribute("disabled");
		}
	}

}

////// Function that clears the output box
function clearAll(event) {
	output.innerHTML = "";
	button.setAttribute("disabled", true);
}

////// Function that toggles the background and text colors
function darkMode(event) {

	if(darkBox.hasAttribute('checked')) {
		container.classList.add('dark');
    document.querySelectorAll('textarea').forEach((textarea)=>textarea.classList.add('textareadark'));
	} else {
		container.classList.toggle('dark')
    document.querySelectorAll('textarea').forEach((textarea)=>textarea.classList.toggle('textareadark'));

	}
}

////// Function that toggles the font size
function largeMode(event) {

	if (largeBox.hasAttribute('checked')) {
		output.classList.add('large');
    document.querySelectorAll('textarea').forEach((textarea)=>textarea.classList.add('textarealarge'));
	} else {
		output.classList.toggle('large');
    document.querySelectorAll('textarea').forEach((textarea)=>textarea.classList.toggle('textarealarge'));
	}
}

////// Deletes message and private array
function editPost(event){

	if (event.target.classList.contains("delete")){

		if(event.target.parentElement.classList.contains(user)) {
		Chatty.deleteMessage(event);
		Chatty.removeItem(event);

		} else {
			alert(`you're not ${event.target.parentElement.classList[1]}!`);
		}
	}

	if (event.target.classList.contains("edit")) {
		if(event.target.parentElement.classList.contains(user)) {
		let textArea = event.target.previousElementSibling;
		textArea.addEventListener("keypress", (event) => (event.keyCode === 13) ? createMessage(event) : null);
		textArea.focus();
		previousMessageId = textArea.parentElement.id;
		console.log('previousMessageId:', previousMessageId);

		} else{
			alert(`you're not ${event.target.parentElement.classList[1]}!`);
		}
	}
}
