var gapi = gapi || {};

// [START load_auth2_library]
function loadAuthClient(){
   gapi.load('client', initGoogleAuth);
   console.log("load");
}
// [END load_auth2_library]

// [START init_google_auth]
//function initGoogleAuth(clientId = '225209884470-vrbburpnhs875a10dukuf1v6sb4quqj6.apps.googleusercontent.com'){
//   console.log("init");
//   var SCOPE = 'https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/dialogflow';
//   gapi.auth2.init({
//      clientId: clientId,
//      scope: SCOPE
//   });
//}
// [END init_google_auth]

// [START user_signin]
function getToken() {
   var user = gapi.auth2.getAuthInstance().currentUser.get();
   console.log(user);
   var token = user.getAuthResponse().access_token;
   console.log(token);
   return token;
}
// [END user_signin]
//
//
var GoogleAuth;
function initGoogleAuth() {
  gapi.client.init({
      'apiKey': 'AIzaSyCk7_igID5acvWw13Y2R6gZQ-kgCtsfJ7E',
      'clientId': '225209884470-vrbburpnhs875a10dukuf1v6sb4quqj6.apps.googleusercontent.com',
      'scope': 'https://www.googleapis.com/auth/dialogflow',
  }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();
     console.log("then init");
//     getToken();
  });
}
