var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

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
   $.ajax({
      type: "POST",
      //$(gcloud auth application-default print-access-token)
      url:
      "https://dialogflow.googleapis.com/v2beta1/projects/guide-cetelem/agent/sessions/1234:detectIntent",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      headers: {
         "Authorization": "Bearer ya29.c.ElrDBpzvzDN-jczaIrom4WCfproIs4x1GUxhm-CI2ULn_7i8ukYKZksZxx_d2vO4Pu_i0LKo0wovoTFnDvp81vANmWWODbWqwqqs8_gIpxC-MRD6IcRgvuJNU8k"
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
