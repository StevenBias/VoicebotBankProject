//For compatibility
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var socket = io.connect();

$(document).ready(function() {
   setTimeout(function(){sendWelcome()}, 1500);
   $("#input").keypress(function(event) {
      if (event.which == 13) {
         event.preventDefault();
         send();
      }
   });
   $("#micImg").click(function(event) {
      switchRecognition();
   });
   $('.app-header').click(function(event) {
      switchChatbox();
   });
});

var recognition = new SpeechRecognition();
var isRecording = false;
var isBoxOpen = true;

function switchChatbox(){
   if(isBoxOpen){
      reduceChatbox();
   }
   else{
      loadChatbox();
   }
   isBoxOpen = !isBoxOpen;
}

recognition.onstart = function(event) {
   const micListening = document.querySelector(".listening");
   const micReady = document.querySelector("#micImg");
   micListening.style.display = "block";
   micReady.style.display = "none";
};

recognition.onresult = function(event) {
   var text = "";
   for (var i = event.resultIndex; i < event.results.length; ++i) {
      text += event.results[i][0].transcript;
   }
   setInput(text);
   stopRecognition();
};

recognition.onspeechend = function() {
   stopRecognition();
};
recognition.onend = function() {
   stopRecognition();
}

function startRecognition() {
   recognition.lang = "fr-FR";
   recognition.start();
   isRecording = true;
}

function stopRecognition() {
   if (isRecording) {
      const micListening = document.querySelector(".listening");
      const micReady = document.querySelector("#micImg");
      micListening.style.display = "none";
      micReady.style.display = "block";
      recognition.stop();
   }
   isRecording = false;
}

function switchRecognition() {
   if (isRecording) {
      stopRecognition();
   } else {
      startRecognition();
   }
}

function setInput(text) {
   $("#input").val(text);
   send();
}

function sendWelcome() {
	socket.emit('sendEvent', 'WELCOME');
}

function send() {
   var text = $("#input").val();
	socket.emit('sendIntent', text);
   addUserItem(text);
   $("#input").val('');
}

function setResponse(val) {
   if(typeof(val) == "string"){
      $("#response").text(val);
      addBotItem(val);
   }
   else{
		console.log(val);
      var response = val.queryResult.fulfillmentText;
      $("#response").text(response);
      $("#input").text("");
      addBotItem(response);
		var sound = val.outputAudio;
      var snd = new Audio("data:audio/wav;base64," + sound);
      //re-acrivate mic after end of bot speech
      snd.addEventListener("ended", function(){
         if(!isOver(val))
            switchRecognition();
      });
      snd.play();
   }
}

socket.on('resDialogflow', function(res){
	setResponse(res);
});

function isOver(val){
   var res = val.queryResult.intent.endInteraction;
   if(res){
      return true;
   }
   return false;
}
