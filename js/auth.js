var gapi = gapi || {};

// [START load_auth2_library]
function loadAuthClient(){
   gapi.load('client:auth2', initGoogleAuth);
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
   var token = user.getAuthResponse().access_token;
   return token;
}
// [END user_signin]

