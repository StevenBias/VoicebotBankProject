//For compatibility
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

$(document).ready(function() {
   $("#input").keypress(function(event) {
      if (event.which == 13) {
         event.preventDefault();
         send();
      }
   });
   $("#rec").click(function(event) {
      switchRecognition();
   });
});


var recognition = new SpeechRecognition();
var isRecording = false;

function startRecognition() {
   recognition.lang = "fr-FR";
   recognition.start();
   isRecording = true;
}

recognition.onstart = function(event) {
   $("#rec").text("Stop");
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

function stopRecognition() {
   if (isRecording) {
      recognition.stop();
   }
   $("#rec").text("Speak");
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

function send() {
   var text = $("#input").val();
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
            "text": {
               "text": text,
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

function setResponse(val) {
   if(typeof(val) == "string"){
      $("#response").text(val);
   }
   else{
      $("#response").text(val.queryResult.fulfillmentText);
      var res = val.queryResult.fulfillmentText;
      var snd = new Audio("data:audio/wav;base64," + val.outputAudio);
      //re-acrivate mic after end of bot speech
      snd.addEventListener("ended", function(){
         switchRecognition();
      });
      snd.play();
   }
}
