var PV = true;

var split_pn;
var nom_page ;
var date = new Date();
var flag_source_prio = false;
var cookieABt = s.Util.cookieRead('abtestbox');

if(cookieABt == "1"){
  s.eVar38 = "version actuelle";
}
if(cookieABt == "2"){
  s.eVar38 = "nouvelle version";
}

if(typeof _satellite.getVar('pageName') !=="undefined"){
  nom_page = _satellite.getVar('pageName').replace("FR : B2C : ","");
  s.pageName = s.eVar4 = nom_page;
  split_pn=s.pageName.split(":");
  s.prop4 =  split_pn[0];
  s.prop5=(typeof split_pn[1] != "undefined")? s.prop4+":"+split_pn[1]: s.prop4;
  s.prop6=(typeof split_pn[2] != "undefined")? s.prop5+":"+split_pn[2]: s.prop5;
}



if(typeof s_experienceDetails !='undefined'){
 s.eVar93 = s_experienceDetails;
}



s.hier1=s.pageName;

s.eVar28 = s.getPreviousValue(s.pageName,"prev_page");
s.prop1 = s.eVar1 = "FR";
s.prop2 = s.eVar2 = "B2C";
s.prop3 = s.eVar3 = _satellite.getVar('site')||_satellite.getVar('siteStyle');

s.prop7 = s.pageName;
s.prop10 = document.URL;


s.eVar45 = "speed";

s.eVar5 = "build date : "+_satellite.buildDate+" | publish date : "+_satellite.publishDate;
s.eVar76 = s.Util.cookieRead('pf_test_speed_redirection');
s.eVar34 = s.Util.getQueryParam('aapush');

if(/ciid/.test(document.referrer)){
  document.cookie = 'flagCiid=true;domain='+location.host.split('.').reverse()[1]+"."+location.host.split('.').reverse()[0]+';path=/';
}
console.log(!!s.Util.getQueryParam('ciid'),s.Util.cookieRead('flagCiid') == '' , s.pageName !== s.eVar28);
if(!!s.Util.getQueryParam('ciid')){
  if(s.Util.cookieRead('flagCiid') == '' && s.pageName !== s.eVar28) {
    s.events = s.apl(s.events,"event4",",",1);
    s.eVar13 = s.Util.getQueryParam('ciid')+"|"+s.eVar28;
  } else {
    document.cookie = 'flagCiid=true;domain='+location.host.split('.').reverse()[1]+"."+location.host.split('.').reverse()[0]+';path=/;expires=Thu, 01-Jan-70 00:00:01 GMT;';
  }
}

if(!/ciid/.test(document.referrer) && !s.Util.getQueryParam('ciid')) {
  document.cookie = 'flagCiid=true;domain='+location.host.split('.').reverse()[1]+"."+location.host.split('.').reverse()[0]+';path=/;expires=Thu, 01-Jan-70 00:00:01 GMT;';
}





var campaign_param = s.Util.getQueryParam("cmpid")||s.Util.getQueryParam("cid");

if(/page1/.test(s.Util.cookieRead("55_visitStarted"))){
  s.events = s.apl(s.events,'event47',',',1);// All Sources 2st PV
  s.eVar6 = s.campaign = s.cookieRead("55_currentVisitCampaign");
  s.eVar8 = s.cookieRead("55_CurrentTrafficSource")||s.cookieRead("55_currentSource");
  s.eVar7 = s.cookieRead("55_lastPrioSource")||s.cookieRead('55_currentVisitCampaign');
  if(s.campaign!=""||/event1/.test(s.cookieRead("PrevPageEvent"))){
    s.events = s.apl(s.events,"event2",",",1);
  }
  s.Util.cookieWrite("55_visitStarted","page2");
}
if(/page2/.test(s.Util.cookieRead("55_visitStarted"))&&campaign_param !=""){
  s.eVar6 = s.campaign =s.getValOnce(campaign_param,"55_currentVisitCampaign",0)
  s.eVar8 = s.getValOnce(getTrafficSource(),"55_CurrentTrafficSource",0);
  s.Util.cookieWrite("55_currentSource",getTrafficSource());
  s.eVar7 = source_prio = prioTrafficSource(s.eVar8);
}



 if(!s.Util.cookieRead("55_visitStarted")){
  s.eVar6 = s.campaign =s.getValOnce(campaign_param,"55_currentVisitCampaign",0)
  s.eVar8 = s.getValOnce(getTrafficSource(),"55_CurrentTrafficSource",0);
  s.eVar7 = source_prio = prioTrafficSource(s.eVar8);
  s.eVar12 = "D=pageName"; // Landing page sans dépriorisation de source
  s.events = s.apl(s.events,'event46',',',1);// All Sources 1st PV
  s.Util.cookieWrite("55_visitStarted","page1");
  s.Util.cookieWrite("55_allsourcesPV","true"); //TEST COMPATIBILITE AVEC VIEILLE MECHANIQUE GTM
  s.Util.cookieWrite("55_campaign1stPV","true");//TEST COMPATIBILITE AVEC VIEILLE MECHANIQUE GTM
  s.Util.cookieWrite("55_currentSource",s.eVar8);//TEST COMPATIBILITE AVEC VIEILLE MECHANIQUE GTM
}

if(/SEM/.test(s.eVar7)){
  if(_satellite.getVar('gclid')){ // URL
    s.Util.cookieWrite('semgclid',_satellite.getVar('gclid'));
        s.eVar90 = _satellite.getVar('gclid');
        s.eVar103 = _satellite.getVar('gclid');    
        s.eVar104 = _satellite.getVar('gclid');

  }else{
        if(/gclid/.test(document.referrer)){
            s.eVar90 = s.Util.getQueryParam('gclid',document.referrer);
            s.eVar103 = s.Util.getQueryParam('gclid',document.referrer);
            s.eVar104 = s.Util.getQueryParam('gclid',document.referrer);
        }else{
            s.eVar90 = s.Util.cookieRead('semgclid');
            s.eVar103 = s.Util.cookieRead('gclid');
            s.eVar104 = s.Util.cookieRead('semgclid');
        }
  }
}

if(/AFF|DIS|RET|EPA|EMA/.test(s.eVar7)){
    s.eVar104 = "payantHorSem";
}

if(typeof s.eVar8 != "undefined" && s.eVar8 !=""){
  s.eVar54 = s.crossVisitParticipation(s.eVar8.substring(0,3),'55_MTChannels','30','3','>','purchase');
}

if(flag_source_prio&&!/page2/.test(s.Util.cookieRead("55_visitStarted"))){
  s.eVar11 = "D=pageName";
  s.events = s.apl(s.events,"event1",",",1);
}
if(!flag_source_prio&&/page1/.test(s.Util.cookieRead("55_visitStarted"))){
  s.eVar11 = "Prioritized LP|"+s.pageName;
}

var previous_events = s.getPreviousValue(s.events,"PrevPageEvent");

/*  
Pamétrage du 11.06 pour ne plus avoir l'evar70 remplacée par l'evar98s.eVar70=s.Util.cookieRead('55_getVisitorStatus');
}else{
  
  if(/^(loggued|client)/.test(_satellite.getVar('visitorStatus'))){
    s.Util.cookieWrite('55_getVisitorStatus',"Client")
    s.eVar70 = "Client";
  }
  else{
    s.eVar70="Prospect";
  }
} */


s.account=(_satellite.getVar('environment') === 'prod') ? 'bnpppffrb2ccetprod' : "bnpppffrb2ccetdev";
s.eVar89=_satellite.readCookie('code_origine');
// TRAITEMENT PAGENAME ATOS

if(typeof _satellite.getVar('AtosId') != "undefined" || /7\.3|8\.(1|2)|9\.(1|2|3)/.test(_satellite.getVar('stepNumber'))){
  var correspondance =_satellite.getVar('CreditType');
  switch(correspondance){
    case "CLA":
      correspondance = "PP";
      break;
    case "REV":
      correspondance = "CRL";
      break;
  }
  s.pageName = "Credit : "+correspondance+" : "+s.pageName;
  s.eVar4 = s.pageName
}

s.eVar98 = _satellite.getVar('visitorStatus');
