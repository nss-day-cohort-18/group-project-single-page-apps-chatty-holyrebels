"use strict";

/////// Variable Chatty
var Chatty = (function(otherChatty) {
	let prefillMessages =[];
	let dataRequest = new XMLHttpRequest();
	dataRequest.addEventListener('load', loadComplete);
	dataRequest.addEventListener('error', loadFailed);

	/////// This parses the JSON onto the DOM
	function loadComplete(load){
		let data = JSON.parse(load.target.responseText);
		showData(data);
	}

	/////// Prints the failed message
	function loadFailed(load) {
		console.log("data failed");
		load.target.responseText;
	}

	/////// This will create the HTML elements and write the messages to them
	function showData (someData){
		let prefill;
		for (refill in someData){
			let messages = "";
			let messageItem = someData[prefill];
			messages += `<div class="message">
						 <p> ${messageItem.message}</p>
						 <button class="delete">Delete</button>
						 </div>`;
			output.innerHTML += prefillMessages;
		}
	}

/////// This will put the JSON messages on the DOM
otherChatty.getJSONmessages = function(){
	return prefillMessages;
}

/////// Getting JSON file ready and starting it
dataRequest.open("GET", "../JSON/prefill.json");
dataRequest.send();

/////// This calls otherChatty
return otherChatty;



})(Chatty || {});