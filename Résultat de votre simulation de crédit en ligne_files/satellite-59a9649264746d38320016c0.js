var consentPass = function(event){
  if(/cetelem.fr/.test(event.origin)){
    if(typeof event.data.ca != 'undefined'){
     	//_satellite.setCookie('AMCV_E17995E0558BCEBE7F000101%40AdobeOrg',event.data.ca,730);
      var dtcookie = new Date();
      var numberOfDaysToAdd = 730;
			dtcookie.setDate(dtcookie.getDate() + numberOfDaysToAdd); 
      var moncookie='AMCV_E17995E0558BCEBE7F000101%40AdobeOrg='+event.data.ca+";path=/;domain="+location.host.split('.').reverse()[1]+"."+location.host.split('.').reverse()[0]+";expires="+dtcookie.toUTCString();
      document.cookie=moncookie;
    }
    if(typeof event.data.cts != 'undefined'){
      console.log("l'iframe a la current source");
      var moncookie='55_CurrentTrafficSource='+event.data.cts+";path=/;domain="+location.host.split('.').reverse()[1]+"."+location.host.split('.').reverse()[0];
      document.cookie=moncookie;
    }
    if(typeof event.data.pts !='undefined'){
      var dtcookie = new Date();
      var numberOfDaysToAdd = 30;
			dtcookie.setDate(dtcookie.getDate() + numberOfDaysToAdd); 
      var moncookie='55_lastPrioSource='+event.data.pts+";path=/;domain="+location.host.split('.').reverse()[1]+"."+location.host.split('.').reverse()[0]+";expires="+dtcookie.toUTCString();
      document.cookie=moncookie; 
      if(!/55_visitStarted/.test(document.cookie)){
        var moncookie='55_visitStarted=page1;path=/;domain='+location.host.split('.').reverse()[1]+"."+location.host.split('.').reverse()[0];
        document.cookie=moncookie;
    	}
    }
    
		if(typeof event.data.cc !='undefined'){
     	//_satellite.setCookie('__55CC',event.data.cc,396);
      var dtcookie = new Date();
      var numberOfDaysToAdd = 396;
			dtcookie.setDate(dtcookie.getDate() + numberOfDaysToAdd); 
      var moncookie='__55CC='+event.data.cc+";path=/;domain="+location.host.split('.').reverse()[1]+"."+location.host.split('.').reverse()[0]+";expires="+dtcookie.toUTCString();
      document.cookie=moncookie;
      
    _satellite.getVar('55CookieConsentInit')();
    cookieconsent('start');
      
    }
  }
}

if(window.parent!=window){ 
  console.log("écouteur pour CC mis dans l'iframe");
	window.addEventListener('message', consentPass);
  window.parent.postMessage('ready',"https://www.cetelem.fr");
}
