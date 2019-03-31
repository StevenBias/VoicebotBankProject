
try{
  var iframe_flag = false;
  var flag = false;
  var iframe = document.querySelectorAll("iframe")[0];
  (function(){
    if(typeof iframe != "undefined"){
       console.log('iframe trouvée');
       if(/cofinoga.fr|cetelem.fr|widget.enchantier.com/.test(iframe.src)&&/rachats-credits|checklist-projets|idee-prix-projets/.test(document.location.pathname)){
  		 window.addEventListener("message", getConfirm, false);
         console.log("écouteur iframe mis");
  }
    }else{
      iframe = document.querySelectorAll("iframe")[0];
      setTimeout(arguments.callee,10);
    }
    
  })();
 
  
  function getConfirm(event){
    
    //var origin = event.origin|| event.originalEvent.origin;
    if(/cofinoga.fr|cetelem.fr|widget.enchantier.com/.test(event.origin)&&/ready/.test(event.data)){
      
      (function(){
        if(typeof source != "undefined"){
          if(!flag){ 
            
            source.ca = _satellite.getVar('Cookie Adobe');
            source.cc = _satellite.readCookie('__55CC');
            flag = true;
            iframe.contentWindow.postMessage(source,iframe.src);
            console.log("sources envoyée à l'iframe");
          }
        }else{
          console.log('source undefined !');
          setTimeout(arguments.callee,10);
        }
        
      })();
      
      
    }   
     if(/cofinoga.fr/.test(event.origin)&&/event(2|47)/.test(event.data)){ 
          s.cookieWrite("55_visitStarted","page2");
     }
    
    if(event.data =="iframeloaded"){
      console.log("Flag iframe reçu");
      iframe_flag = true;
    }
       
       
       
       
       
       
       
       
    //if(origin !== "cetelem.fr"&& origin == "https://www.cofinoga.fr"&&event.data=="ready"){
    
      //window.removeEventListener("message", getConfirm, false);
    //}
  }
}catch(e){
  console.log(e);
}
