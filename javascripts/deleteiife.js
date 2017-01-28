'use strict';

var Chatty = (function(otherChatty) {

	otherChatty.removeItem = function(event) {
		let messageBox = event.target.parentNode;
		let textItem = messageBox.firstElementChild.innerText;
		let newPrivateArray = Chatty.getPrivateArray();
		let deleteTextIndex = newPrivateArray.indexOf(textItem);
		let splicedArray = newPrivateArray.splice(deleteTextIndex, 1);
	}

	return otherChatty;

})( Chatty || {} );

//the above is called when the target of a click on the body has the className 'delete'
//the event is passed to the method (when called in the eventHandler) see main.js


//we get the target (delete button), grab its parentNode (the message div),
//and look inside it's first element child to read its inner text.

//then we call getPrivateArray and splice it at the indexof the text we grabbed earlier
//heres a run-down in the console:


		console.log('messageBox:', messageBox)
		console.log('textItem:', textItem)
		console.log('newPrivateArray:', newPrivateArray)
		console.log('deleteTextIndex:', deleteTextIndex)
		console.log('splicedArray:', splicedArray);
		console.log('newPrivateArray:', newPrivateArray)
