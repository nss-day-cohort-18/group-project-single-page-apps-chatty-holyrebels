"use strict";


var Chatty = (function(otherChatty) {

	/////// Creates private array
	var privateArray =[];

	/////// This adds each message to the private array
	otherChatty.pushMessage = function(message, time, name){
			let newMessage = {string: message, timeStamp: time, userName: user};
			privateArray.push(newMessage);
			console.log('privateArray:', privateArray);
	}

	/////// This creates message and then add it to the output
	otherChatty.printMessage = function(message, time, name){

		let messageDiv = document.createElement('div');
		messageDiv.setAttribute("id", `${time}`);
		messageDiv.className = "singleMessage";
		messageDiv.classList.add(`${user}`);

		let newMessage = `<h4>${user} Says: </h4>
						  <textarea class="input" rows="4">${message}</textarea>
						  <button type="button" class="edit button">Edit</button>
						  <button type="button" class="delete button ">Delete</button>`;

		messageDiv.innerHTML += newMessage;
		output.prepend(messageDiv);
	}

	/////// Deletes individual message
	otherChatty.deleteMessage = function(event){
		let messageToDelete = event.target.parentNode;
		output.removeChild(messageToDelete);
	}

	/////// Makes private array information available upon request
	otherChatty.getPrivateArray = function(){
		return privateArray;
	}

	/////// Returns final result
	return otherChatty;

})(Chatty || {});
