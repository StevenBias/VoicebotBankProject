var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

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


var recognition = new webkitSpeechRecognition();
var isRecording = false;

function startRecognition() {
   navigator.mediaDevices.getUserMedia({ audio: true })
      .catch(function() {
         chrome.tabs.create({
            url: chrome.extension.getURL("options.html"),
            selected: true
         })
      });
   recognition.lang = "fr-FR";
   recognition.start();
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

function stopRecognition() {
   if (recognition) {
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
   isRecording = !isRecording;
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
   console.log(token);
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
      console.log(res);
   }
}

// [START load_auth2_library]
function loadAuthClient(){
   console.log("load");
   gapi.load('auth2', initGoogleAuth);
}
// [END load_auth2_library]

// [START init_google_auth]
function initGoogleAuth(clientId = '225209884470-vrbburpnhs875a10dukuf1v6sb4quqj6.apps.googleusercontent.com'){
   var SCOPE = 'https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/dialogflow';
   console.log("init");
   gapi.auth2.init({
      clientId: clientId,
      scope: SCOPE
   }).then(()=>{
      console.log("ttt");
   }).catch(err => {
      console.log('erreur');
      console.log(err);
   });
}
// [END init_google_auth]

// [START user_signin]
function getToken() {
//  gapi.auth2.getAuthInstance().signIn().then(() => {
//  }).catch(err => {
//    console.log(err);
//  });
   var user = gapi.auth2.getAuthInstance().currentUser.get();
   var idToken = user.getAuthResponse().access_token;
   return idToken;
}
// [END user_signin]
