'use strict';

var Chatty = (function(otherChatty) {

	otherChatty.removeItem = function(event) {

		let divId = event.target.parentNode.id; 
		let copyArray = Chatty.getPrivateArray();
		let index = copyArray.findIndex(element => element.timeStamp == divId && user);
		copyArray.splice(index, 1);
		console.log('copyArray:', copyArray);
	}

	otherChatty.removePreviousMessage = function(id) {
		let copyArray = Chatty.getPrivateArray();
		let index = copyArray.indexOf(id);
		copyArray.splice(index, 1);
		console.log('copyArray:', copyArray);
	}

	return otherChatty;

})( Chatty || {} );

//the above is called when the target of a click on the body has the className 'delete'
//the event is passed to the method (when called in the eventHandler) see main.js


//we get the target (delete button), grab its parentNode's id (timeStamp),
//we get private array
//find the index of that id
//and splice it at the index of the id 



		
		
		
		
		
		
