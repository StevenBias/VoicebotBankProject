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


var recognition;

function startRecognition() {
   //   navigator.mediaDevices.getUserMedia({ audio: true })
   //      .catch(function() {
   //         chrome.tabs.create({
   //            url: chrome.extension.getURL("options.html"),
   //            selected: true
   //         })
   //      });
   navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
         const mediaRecorder = new MediaRecorder(stream);
         mediaRecorder.start();

         const audioChunks = [];

         mediaRecorder.addEventListener("dataavailable", event => {
            audioChunks.push(event.data);
         });

         setTimeout(() => {
            mediaRecorder.stop();
            console.log("stop");
            console.log(audioChunks);
         }, 3000);
      });
   recognition = new webkitSpeechRecognition();
   recognition.onstart = function(event) {
      updateRec();
   };
   recognition.onresult = function(event) {
      var text = "";
      for (var i = event.resultIndex; i < event.results.length; ++i) {
         text += event.results[i][0].transcript;
      }
      setInput(text);
      stopRecognition();
   };
   recognition.onend = function() {
      stopRecognition();
   };
   recognition.lang = "fr-FR";
   recognition.start();
}

function stopRecognition() {
   if (recognition) {
      recognition.stop();
      recognition = null;
   }
   updateRec();
}

function switchRecognition() {
   if (recognition) {
      stopRecognition();
   } else {
      startRecognition();
   }
}

function setInput(text) {
   $("#input").val(text);
   send();
}

function updateRec() {
   $("#rec").text(recognition ? "Stop" : "Speak");
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
         "Authorization": "Bearer ya29.c.Elq_BrFdW1dEyH6ev_6C_9p0E7QHHIUvQuk3NHefMIZ6l12wfAxOz43JgGjW9GekkbPhg65pByogf1bvcBbtUx7Er1VSjJZd3NTSTdeyaenBjyEKlIq507OWHXs"
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
      console.log(res);
      synthVoice(res);
   }
}
