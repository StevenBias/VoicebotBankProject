var toPush = {
                event : "ccFinished"
              , ccLaunched : "yes"
            }

cookieconsent("consent", "webAnalytics", function(b){toPush.ccWebAnalytics = b ? "accept" : "refuse"})
cookieconsent("consent", "social", function(b){toPush.ccSocial = b ? "accept" : "refuse"})
cookieconsent("consent", "advertising", function(b){toPush.ccAdvertising = b ? "accept" : "refuse"})
cookieconsent("consent", "webAnalytics", function(b){
  (function(){
  var consent = consent||b;
  if(typeof Visitor != 'undefined' && typeof AppMeasurement !='undefined' && typeof s =='undefined'){
		if(consent){ 	 
			_satellite.track('ccAnalytics');
   	}
                                                     
    dt = new Date();
    var dtlog = "";
    if(window.parent!=window){
    	 dtlog = "iframe ";
    }
    else{
       dtlog = "pagemère ";
    }
    console.log(dtlog +dt.getTime());
    dt.setDate(dt.getDate()+365);
    document.cookie='__55CCdtm='+true+';path=/;domain='+document.location.hostname.replace(/www./,'')+';expires='+dt.toUTCString()
    dataLayer.push(toPush);
    setTimeout(function(){
      window.ccFlaged = "yes";
    },1000)
  }else{
    if(typeof s =='undefined'){
    	setTimeout(arguments.callee,20); 
    }
  } })();               //}, 1e3)
})



