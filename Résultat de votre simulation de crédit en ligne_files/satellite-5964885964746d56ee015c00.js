if((window.parent==window||/ccus/.test(document.cookie))&&document.location.hostname!="bnpp-pf-se-web.worldline.com"){

    
  _satellite.getVar('55CookieConsentInit')();
}else{
  if(document.location.hostname=="bnpp-pf-se-web.worldline.com"){
    (function(){
      if(typeof s_gi !='undefined'){
        _satellite.track('ccAnalytics');
      }else{
       	setTimeout(arguments.callee,10) 
      }
    })();
  }
}
