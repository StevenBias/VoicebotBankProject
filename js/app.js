//For compatibility
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

$(document).ready(function() {
   setTimeout(function(){sendWelcome();}, 1500);
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
   var token = getToken();
   $.ajax({
      type: "POST",
      //$(gcloud auth application-default print-access-token)
      url:
      "https://dialogflow.googleapis.com/v2beta1/projects/guide-cetelem/agent/sessions/1234:detectIntent",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      headers: {
         "Authorization": "Bearer " + token
      },
      data: JSON.stringify({ 
         "queryInput": {
            "event": {
               "name": "WELCOME",
               "languageCode": "fr-FR"
            }
         }
      }),

      success: function(data) {
         setResponse(data);
      },
      error: function() {
         setResponse("Internal Server Error");
      }
   });
   setResponse("Loading...");
}

function send() {
   var text = $("#input").val();
   $("#input").val('');
   addUserItem(text);
   var token = getToken();
   gapi.client.request({
      path: 'https://dialogflow.googleapis.com/v2beta1/projects/guide-cetelem/agent/sessions/1234:detectIntent',
      method: "POST",
      body: {
         "queryInput": {
            "text": {
               "text": "bonjour",
               "languageCode": "fr-FR"
            }
         }
      }
      }).then(handleResponse, handleError);

      function handleResponse(serverResponse) {
      }
      function handleError(serverError) {
         console.log("Error from DialogFlow server: ", serverError);
      }
}

function setResponse(val) {
   if(typeof(val) == "string"){
      $("#response").text(val);
   }
   else{
      var response = val.queryResult.fulfillmentText;
      $("#response").text(response);
      $("#input").text("");
      addBotItem(response);
      var res = val.queryResult.fulfillmentText;
      var snd = new Audio("data:audio/wav;base64," + val.outputAudio);
      //re-acrivate mic after end of bot speech
      snd.addEventListener("ended", function(){
         if(!isOver(val))
            switchRecognition();
      });
      snd.play();
   }
}

function isOver(val){
   var res = val.queryResult.intent.endInteraction;
   if(res){
      return true;
   }
   return false;
}
