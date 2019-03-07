var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

var gapi = gapi || {};

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
//   isRecording = !isRecording;
}

function setInput(text) {
   $("#input").val(text);
   send();
}

function synthVoice(text) {
   const synth = window.speechSynthesis;
   const utterance = new SpeechSynthesisUtterance();
   utterance.text = text;
   synth.speak(utterance);
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
      $("#response").text(JSON.stringify(val, undefined, 2));
      var res = val.queryResult.fulfillmentText;
      var audio = val.outputAudio;
      var snd = new Audio("data:audio/wav;base64," + audio);
      snd.play();
   }
}

// [START load_auth2_library]
function loadAuthClient(){
   gapi.load('auth2', initGoogleAuth);
}
// [END load_auth2_library]

// [START init_google_auth]
function initGoogleAuth(clientId = '225209884470-vrbburpnhs875a10dukuf1v6sb4quqj6.apps.googleusercontent.com'){
   var SCOPE = 'https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/dialogflow';
   gapi.auth2.init({
      clientId: clientId,
      scope: SCOPE
   });
}
// [END init_google_auth]

// [START user_signin]
function getToken() {
   var user = gapi.auth2.getAuthInstance().currentUser.get();
   var idToken = user.getAuthResponse().access_token;
   return idToken;
}
// [END user_signin]
