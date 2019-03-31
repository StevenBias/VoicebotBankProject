visitor = Visitor.getInstance("E17995E0558BCEBE7F000101@AdobeOrg", {
                trackingServer: "cetelem.d3.sc.omtrdc.net",
                trackingServerSecure: "cetelem.d3.sc.omtrdc.net",
  							cookieLifetime: 31536000
              });



s=s_gi("");
s.visitor=visitor;
s.trackingServer=visitor.trackingServer;
s.trackingServerSecure=visitor.trackingServerSecure;
s.trackInlineStats=false;
s.linkInternalFilters="cetelem.fr,bnpp-pf-se-web.worldline.com";

s.registerPostTrackCallback(function(requestURL){
	if(localStorage.getItem("sdsat_debug")=="true"){
    console.log("hit envoyé, on vide le sémaphore");
		console.log(semaphore[0]);
		console.log(requestURL);
  }
 	s.clearVars();
  semaphore.shift();
  if(waitList.length!=0){
   	Metronome(); 
  }
});
