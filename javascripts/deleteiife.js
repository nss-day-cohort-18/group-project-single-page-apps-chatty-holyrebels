'use strict';

var Chatty = (function(otherChatty) {

	otherChatty.removeItem = function(event) {

		let textItem = event.target.previousElementSibling.innerHTML;
		console.log('textItem:', textItem);
		 
		let newPrivateArray = Chatty.getPrivateArray();
		console.log('newPrivateArray:', newPrivateArray);
		
		let textItemIndex = newPrivateArray.indexOf(textItem);
		console.log('deleteTextIndex:', textItemIndex);

		newPrivateArray.splice(textItemIndex, 1);
		console.log('newPrivateArray:', newPrivateArray);
	}

	return otherChatty;

})( Chatty || {} );

//the above is called when the target of a click on the body has the className 'delete'
//the event is passed to the method (when called in the eventHandler) see main.js


//we get the target (delete button), grab its parentNode (the message div),
//and look inside it's first element child to read its inner text.

//then we call getPrivateArray and splice it at the indexof the text we grabbed earlier
//heres a run-down in the console:


		
		
		
		
		
		
