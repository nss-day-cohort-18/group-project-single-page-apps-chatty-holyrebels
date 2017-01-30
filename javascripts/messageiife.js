"use strict";

	
var Chatty = (function(otherChatty) {

	/////// Creates private array
	var privateArray =[];

	/////// This adds each message to the private array
	otherChatty.unshiftMessage = function(message){
		privateArray.unshift(message);
	}

	/////// This creates message and then add it to the output
	otherChatty.printMessage = function(message){
		let messageDiv = document.createElement('div');
		messageDiv.className = "singleMessage";
		let newMessage = `<p>${message}</p>
						  <button class="delete">Delete</button>`;
		messageDiv.innerHTML += newMessage;
		// messageDiv.innerHTML = newMessage;
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