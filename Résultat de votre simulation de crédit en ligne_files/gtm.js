
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"57",
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"AuthorizationNumber"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],";return(new Date).getFullYear()+a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"GoodsCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"TypeOfProject"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var GoodsCode=",["escape",["macro",2],8,16],";var lol=null,isInLol=\/voiture|vehicule de loisirs|mobilier \\\/ decoration|faits par|vacances|evenement|etudes|bien-etre|tresorerie\/i,isOccasion=\/(voiture).+(occasion|neuve)\/,res=null,ifOccasionOrNeuve=null,prType=",["escape",["macro",3],8,16],";lol={\"bien-etre\":\"credit evenement de vie\",\"etudes\":\"credit evenement de vie\",\"evenement\":\"credit evenement de vie\",\"faits par\":\"credit travaux\",\"mobilier \/ decoration\":\"credit equipement de la maison\",\"tresorerie\":\"credit tresorerie\",\n\"vacances\":\"credit voyage ou loisirs\",\"vehicule de loisirs\":\"credit vehicule de loisirs\",\"voiture\":\"credit auto\"};res=isInLol.exec(prType);ifOccasionOrNeuve=isOccasion.exec(prType);ifOccasionOrNeuve=ifOccasionOrNeuve?ifOccasionOrNeuve[2]:\"\";return res?lol[res[0]]+\" \"+ifOccasionOrNeuve:\"autres\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=navigator.userAgent.match(\/(android|iphone|ipad|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)\/gi)?480\u003C=screen.width\u0026\u0026800\u003C=screen.height||800\u003C=screen.width\u0026\u0026480\u003C=screen.height||navigator.userAgent.match(\/ipad\/gi)?\"t\":\n\"m\":\"d\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.pathname;\"\/\"==a.substr(a.length-1)\u0026\u0026a.substring(0,a.length-1);return a=document.location.pathname.match(\/credit.*credit-immobilier\/)?\"immo\":document.location.pathname.match(\/credit.*rachat-credits.*avec-credit-immobilier\/)?\"rcimmo\":document.location.pathname.match(\/(pret-personnel.*projet-avec-rachat-credit)|(credit.*rachat-credits.*sans-credit-immobilier)\/)?\"rcconso\":document.location.pathname.match(\/credit\\\/pret\\-personnel\\\/autres\\-projets\\\/credit\\-mobilier\\-deco\/)?\n\"mobilier\":document.location.pathname.match(\/credit\\\/pret-personnel\\\/autres\\-projets\\\/credit\\-informatique\/)?\"informatique\":document.location.pathname.match(\/credit\\\/pret-personnel\\\/credit-moto-scooter\/)?\"moto\":document.location.pathname.match(\/credit\\\/pret-personnel\\\/autres-projets\\\/credit-sante-bien-etre\/)?\"sante\":document.location.pathname.match(\/credit\\\/pret-personnel\\\/autres-projets\\\/(credit-voyages-loisirs|credit-mariage-pacs)\/)?\"voyages\":document.location.pathname.match(\/(credit.*pret-personnel.*credit-auto)|(pret-personnel.*autres-projets.*(camping-car|caravane))|credit.*location\/)?\n\"auto\":document.location.pathname.match(\/epargne.*(livret-epargne|livret-a|assurance-vie|protection-epargne)\/)?\"epargne\":document.location.pathname.match(\/(credit\\\/pret-personnel\\\/autres-projets\\\/credit-(cuisine|salle-bain|veranda|terasse|isolation|chauffage|piscine))|credit\\\/pret-personnel\\\/credit-travaux\/)?\"travaux\":document.location.pathname.match(\/(credit\\\/pret-personnel\\\/$)|(credit-renouvelable-nouvelle-generation\\\/$)|(credit\\\/credit-renouvelable\\\/$)|(contrat-duree-determinee\\\/$)\/)?\"pretperso\":\ndocument.location.pathname.match(\/credit\\\/pret-personnel\\\/((autres-projets\\\/$)|(autres-projets\\\/credit-bateau-occasion\\\/$)|(autres-projets\\\/credit-occasion\\\/$))\/)?\"pretperso\":document.location.pathname.match(\/credit\\\/credit-renouvelable\\\/(en-resume|caracteristiques|vos-interrogations)\\\/$\/)?\"pretperso\":void 0})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"55_lastPrioSource"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"55_lastCampaign"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/^AFF\/.test(",["escape",["macro",7],8,16],")||\/^AFF\/.test(",["escape",["macro",8],8,16],")?\"AW\":\"AUT\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"EtatDemande"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"chaud\"==",["escape",["macro",10],8,16],"?\"IMMO1\":\"IMMO0\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"pageName",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],";return\/RAC\/.test(",["escape",["macro",12],8,16],")?(a=new Date,a.getTime()):(new Date).getFullYear()+a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.querySelector(\".BreadcrumbHSblocImage li:last-child\")){var b=function(a,b,c){return a.toLowerCase()},a=document.querySelector(\".BreadcrumbHSblocImage li:last-child\").textContent;return a=a.replace(\/[A-Z]\/g,b).replace(\/[\\u00e9\\u00e8\\u00ea\\u00eb]\/g,\"e\")}return null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"environment"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=\"false\",c=\"false\",a=window.dataLayer.length-1;0\u003C=a;a--)\"ccFinished\"==window.dataLayer[a].event\u0026\u0026(c=\"true\");void 0!=",["escape",["macro",15],8,16],"\u0026\u0026\"true\"==c\u0026\u0026(b=\"true\");return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b,a=window.dataLayer.length-1;0\u003Ca;a--)if(\"module_interaction\"==window.dataLayer[a].event){b=window.dataLayer[a];break}return b=void 0!=b.pageName?\"virtualPageview\":\"event\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ApplicationScore"
    },{
      "function":"__e"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"__55CC"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ccAdvertising"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"TotalAmount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Amount"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__r"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"FR : B2C : Credit  Immo : Formulaire : Confirmation\"===",["escape",["macro",12],8,16],"?",["escape",["macro",26],8,16],":",["escape",["macro",13],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",12],8,16],",a=\"\";switch(!0){case \/PP\/.test(b):a=\"PRETPR\";break;case \/CRL\/.test(b):a=\"RENOUV\";break;case \/RAC\/.test(b):a=\"RACHAT\";break;case \/IMMO|Immo\/.test(b):a=",["escape",["macro",11],8,16],"}return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ccSocial"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"TypeOfInsurance"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Term"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"stepNumber"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"visitorStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"typeProduit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"etatCont"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"ContributorCode"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",37],
      "vtp_defaultValue":"11320390",
      "vtp_map":["list",["map","key","*","value","11320390"],["map","key","1004755997","value","11320392"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"CreditType"
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__e"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_CHANGE_SOURCE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_URL_FRAGMENT"
    },{
      "function":"__f"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"vpageName",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"ModuleName",
      "vtp_dataLayerVersion":2
    }],
  "tags":[{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":37
    },{
      "function":"__paused",
      "vtp_originalTagType":"sp",
      "tag_id":38
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"780469025",
      "vtp_conversionLabel":"OokrCN7Xr4wBEKGGlPQC",
      "vtp_url":["macro",22],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":103
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;iframeElt1=document.createElement(\"iframe\");iframeElt1.src=\"https:\/\/3897964.fls.doubleclick.net\/activityi;src\\x3d3897964;type\\x3dsales;cat\\x3dg8wg9bxq;qty\\x3d1;cost\\x3d[",["escape",["macro",23],7],"];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;ord\\x3d\"+a+\"?\";iframeElt1.width=\"1\";iframeElt1.height=\"1\";iframeElt1.frameBorder=\"0\";iframeElt1.style.display=\"none\";document.body.appendChild(iframeElt1);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":26
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;iframeElt1=document.createElement(\"iframe\");iframeElt1.src=\"https:\/\/3897964.fls.doubleclick.net\/activityi;src\\x3d3897964;type\\x3dsales;cat\\x3dwcwzjvln;qty\\x3d1;cost\\x3d[",["escape",["macro",23],7],"];dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;ord\\x3d\"+a+\"?\";iframeElt1.width=\"1\";iframeElt1.height=\"1\";iframeElt1.frameBorder=\"0\";iframeElt1.style.display=\"none\";document.body.appendChild(iframeElt1);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3ciframe src\\x3d\"https:\/\/3897964.fls.doubleclick.net\/activityi;src\\x3d3897964;type\\x3dinvmedia;cat\\x3ddr9zwwpl;dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;ord\\x3d'+a+'?\" width\\x3d\"1\" height\\x3d\"1\" frameborder\\x3d\"0\" style\\x3d\"display:none\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Ciframe src=\"https:\/\/3897964.fls.doubleclick.net\/activityi;src=3897964;type=invmedia;cat=dr9zwwpl;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":28
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:897},{event:\"setHashedEmail\",email:\"\"},{event:\"setSiteType\",type:\"deviceType\"},{event:\"trackTransaction\",id:",["escape",["macro",0],8,16],",item:[{id:",["escape",["macro",4],8,16],",price:",["escape",["macro",24],8,16],",quantity:1}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":32
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:897},{event:\"setHashedEmail\",email:\"\"},{event:\"setSiteType\",type:\"deviceType\"},{event:\"viewBasket\",item:[{id:",["escape",["macro",4],8,16],",price:1,quantity:1}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:897},{event:\"setSiteType\",type:\"deviceType\"},{event:\"viewItem\",item:",["escape",["macro",14],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:897},{event:\"setHashedEmail\",email:\"\"},{event:\"setSiteType\",type:\"deviceType\"},{event:\"viewHome\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":35
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");var initFB_done=window.initFB_done||!1;initFB_done||(fbq(\"init\",\"959923604018944\"),initFB_done=!0);fbq(\"track\",\"PageView\");\nfbq(\"track\",\"Lead\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=959923604018944\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"5525747\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=5525747\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"4052777\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=4052777\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/secure.adnxs.com\/px?id=669841\u0026amp;t=2\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar id=",["escape",["macro",27],8,16],",imgzanox=document.createElement(\"img\");imgzanox.border=\"0\";imgzanox.height=\"0\";imgzanox.src=\"https:\/\/www.awin1.com\/sread.img?tt\\x3dns\\x26tv\\x3d2\\x26merchant\\x3d6972\\x26amount\\x3d1\\x26ch\\x3d\"+",["escape",["macro",9],8,16],"+\"\\x26cr\\x3dEUR\\x26parts\\x3d\"+",["escape",["macro",28],8,16],"+\":1\\x26ref\\x3d\"+id;imgzanox.style=\"display:none;\";imgzanox.width=\"0\";document.body.appendChild(imgzanox);\u003C\/script\u003E\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar AWIN={Tracking:{}};AWIN.Tracking.Sale={};AWIN.Tracking.Sale.amount=\"0\";AWIN.Tracking.Sale.channel=",["escape",["macro",9],8,16],";AWIN.Tracking.Sale.currency=\"EUR\";AWIN.Tracking.Sale.orderRef=id;AWIN.Tracking.Sale.parts=",["escape",["macro",28],8,16],"+\":1\";AWIN.Tracking.Sale.custom=[id];\u003C\/script\u003E\n\u003Cscript defer data-gtmsrc=\"https:\/\/www.dwin1.com\/6972.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");var initFB_done=window.initFB_done||!1;initFB_done||(fbq(\"init\",\"959923604018944\"),initFB_done=!0);fbq(\"track\",\"PageView\");\nfbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=959923604018944\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cimg src=\"\/\/email-reflex.com\/tags\/sell.php?source=254\u0026amp;amount=1000\u0026amp;panierId=",["escape",["macro",1],12],"\" alt=\"\" width=\"0\" height=\"0\" style=\"display: none;\"\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"\/\/email-reflex.com\/tags\/exclude.php?source=254\" alt=\"\" width=\"0\" height=\"0\" style=\"display: none;\"\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"\/\/email-reflex.com\/tags\/target.php?source=254\" alt=\"\" width=\"0\" height=\"0\" style=\"display: none;\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"959923604018944\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=959923604018944\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":48
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3ciframe src\\x3d\"https:\/\/3897964.fls.doubleclick.net\/activityi;src\\x3d3897964;type\\x3dinvmedia;cat\\x3daidpr7ik;dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;ord\\x3d'+a+'?\" width\\x3d\"1\" height\\x3d\"1\" frameborder\\x3d\"0\" style\\x3d\"display:none\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E\n\n\u003Cnoscript\u003E\n\n\u003Ciframe src=\"https:\/\/3897964.fls.doubleclick.net\/activityi;src=3897964;type=invmedia;cat=aidpr7ik;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\n\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3ciframe src\\x3d\"https:\/\/3897964.fls.doubleclick.net\/activityi;src\\x3d3897964;type\\x3dinvmedia;cat\\x3dm4qnqnu6;dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;ord\\x3d'+a+'?\" width\\x3d\"1\" height\\x3d\"1\" frameborder\\x3d\"0\" style\\x3d\"display:none\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E\n\n\u003Cnoscript\u003E\n\n\u003Ciframe src=\"https:\/\/3897964.fls.doubleclick.net\/activityi;src=3897964;type=invmedia;cat=m4qnqnu6;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\n\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":54
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3ciframe src\\x3d\"https:\/\/3897964.fls.doubleclick.net\/activityi;src\\x3d3897964;type\\x3dinvmedia;cat\\x3d0iiceygq;dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;ord\\x3d'+a+'?\" width\\x3d\"1\" height\\x3d\"1\" frameborder\\x3d\"0\" style\\x3d\"display:none\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E\n\n\u003Cnoscript\u003E\n\n\u003Ciframe src=\"https:\/\/3897964.fls.doubleclick.net\/activityi;src=3897964;type=invmedia;cat=0iiceygq;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\n\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":55
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3ciframe src\\x3d\"https:\/\/3897964.fls.doubleclick.net\/activityi;src\\x3d3897964;type\\x3dinvmedia;cat\\x3dd3iqzonu;dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;ord\\x3d'+a+'?\" width\\x3d\"1\" height\\x3d\"1\" frameborder\\x3d\"0\" style\\x3d\"display:none\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E\n\n\u003Cnoscript\u003E\n\n\u003Ciframe src=\"https:\/\/3897964.fls.doubleclick.net\/activityi;src=3897964;type=invmedia;cat=d3iqzonu;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\n\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":56
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"959923604018944\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=959923604018944\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":57
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"959923604018944\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=959923604018944\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":58
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"959923604018944\");fbq(\"track\",\"PageView\");fbq(\"track\",\"\\x3cTransfo diagnostic pricing\\x3e\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=959923604018944\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":59
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"959923604018944\");fbq(\"track\",\"PageView\");fbq(\"track\",\"\\x3cTransfo diagnostic projet\\x3e\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=959923604018944\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Evar toi=\"\"!=",["escape",["macro",30],8,16],"\u0026\u0026\"undefined\"!=typeof ",["escape",["macro",30],8,16],"\u0026\u0026\"0\"!=",["escape",["macro",30],8,16],"?\"oui\":\"non\";gtag(\"event\",\"conversion\",{allow_custom_scripts:!0,u1:",["escape",["macro",4],8,16],",u2:",["escape",["macro",24],8,16],",u3:toi,u4:",["escape",["macro",31],8,16],",u5:\"\",u6:",["escape",["macro",4],8,16],"+\"-\"+",["escape",["macro",24],8,16],"+\"-\"+toi+\"-\"+",["escape",["macro",31],8,16],",u7:",["escape",["macro",0],8,16],",send_to:\"DC-2793762\/ctlm\/fv+standard\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":81
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Evar toi=\"\"!=",["escape",["macro",30],8,16],"\u0026\u0026\"undefined\"!=typeof ",["escape",["macro",30],8,16],"\u0026\u0026\"0\"!=",["escape",["macro",30],8,16],"?\"oui\":\"non\";gtag(\"event\",\"conversion\",{allow_custom_scripts:!0,u1:",["escape",["macro",4],8,16],",u2:",["escape",["macro",24],8,16],",u3:toi,u4:",["escape",["macro",31],8,16],",u5:\"\",u6:",["escape",["macro",4],8,16],"+\"-\"+",["escape",["macro",24],8,16],"+\"-\"+toi+\"-\"+",["escape",["macro",31],8,16],",u7:",["escape",["macro",0],8,16],",send_to:\"DC-2793762\/ctlm\/fe+standard\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":82
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=DC-2793762\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-1037463002\");gtag(\"config\",\"DC-2793762\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":84
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Egtag(\"event\",\"conversion\",{send_to:\"AW-1037463002\/m_xKCPz23gIQ2tvZ7gM\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":85
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,d,f,b){a=[];c=\"b929ceae-85f4-4b75-991f-678dc7f34510\";a.push([\"h\",\"\"]);a.push([\"action\",\"home\"]);a.push([\"w\",window.location.hostname]);d=\"\/\/tr.cloud-media.fr\/t\/\"+c;f=a.map(function(a){return a[0]+\"\\x3d\"+encodeURI(a[1])}).join(\"\\x26\");b=document.getElementsByTagName(\"body\")[0];e=document.createElement(\"img\");e.src=d+\"?\"+f;b.parentNode.appendChild(e,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":86
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,d,f,b){a=[];c=\"b929ceae-85f4-4b75-991f-678dc7f34510\";a.push([\"h\",\"\"]);a.push([\"action\",\"sale\"]);a.push([\"order_id\",",["escape",["macro",13],8,16],"]);a.push([\"products[0][id]\",",["escape",["macro",28],8,16],"]);a.push([\"products[0][price]\",\"1\"]);a.push([\"products[0][quantity]\",\"1\"]);a.push([\"w\",window.location.hostname]);d=\"\/\/tr.cloud-media.fr\/t\/\"+c;f=a.map(function(a){return a[0]+\"\\x3d\"+encodeURI(a[1])}).join(\"\\x26\");b=document.getElementsByTagName(\"body\")[0];e=document.createElement(\"img\");e.src=d+\"?\"+\nf;b.parentNode.appendChild(e,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":87
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=document.location.protocol+\"\/\/halc.iadvize.com\/iadvize.js?sid\\x3d6166\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":88
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template"," \n\u003Cscript type=\"text\/gtmscript\"\u003Evar idzCustomData={TypeOfProject:\"",["escape",["macro",3],7],"\",page_type:\"",["escape",["macro",12],7],"\",step_number:\"",["escape",["macro",33],7],"\",cartAmount:\"",["escape",["macro",24],7],"\",user_logged:\"",["escape",["macro",34],7],"\",type_produit:\"",["escape",["macro",35],7],"\",etatCont:\"",["escape",["macro",36],7],"\"};\u003C\/script\u003E \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":91
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cimg src=\"https:\/\/secure.adnxs.com\/seg?add=",["escape",["macro",38],12],"\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/secure.adnxs.com\/seg?add=11320402\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":93
    },{
      "function":"__html",
      "setup_tags":["list",["tag",34,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction sendTransaction(a,b){window.idzTrans={cartAmount:a,tID:b};iAdvize.recordTransaction(idzTrans)}sendTransaction(\"",["escape",["macro",24],7],"\",\"",["escape",["macro",1],7],"\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window._uxa=window._uxa||[];try{if(\"undefined\"!==typeof dataLayer)for(var a=0,b=dataLayer.length;a\u003Cb;a++)window._uxa.push([\"setCustomVariable\",1,\"pageName\",",["escape",["macro",12],8,16],",3]),window._uxa.push([\"setCustomVariable\",2,\"visitorStatus\",",["escape",["macro",34],8,16],",3]),window._uxa.push([\"setCustomVariable\",3,\"TypeOfProject\",",["escape",["macro",3],8,16],",3]),window._uxa.push([\"setCustomVariable\",4,\"CreditType\",",["escape",["macro",39],8,16],",3]),window._uxa.push([\"setCustomVariable\",5,\"TypeOfInsurance\",",["escape",["macro",30],8,16],",\n3]),window._uxa.push([\"setCustomVariable\",6,\"ApplicationScore\",",["escape",["macro",18],8,16],",3]),window._uxa.push([\"setCustomVariable\",7,\"DematerializOffer\",dataLayer[a].DematerializationOffer,3]),window._uxa.push([\"setCustomVariable\",8,\"customerProfile\",dataLayer[a].customerProfile,3]),window._uxa.push([\"setCustomVariable\",9,\"ErrorType\",dataLayer[a].ErrorType,3]),window._uxa.push([\"setCustomVariable\",10,\"GoodsCode\",",["escape",["macro",2],8,16],",3]),window._uxa.push([\"setCustomVariable\",11,\"Produit\",dataLayer[a].Produit,\n3]),window._uxa.push([\"setCustomVariable\",12,\"produitsDetenus\",dataLayer[a].produitsDetenus,3]),window._uxa.push([\"trackDynamicVariable\",{key:\"typeProduit\",value:dataLayer[a].typeProduit}]),window._uxa.push([\"trackDynamicVariable\",{key:\"TypeOfSelectedOps\",value:dataLayer[a].TypeOfSelectedOperations}]),window._uxa.push([\"trackDynamicVariable\",{key:\"enseigne\",value:dataLayer[a].enseigne}]),window._uxa.push([\"trackDynamicVariable\",{key:\"etatCont\",value:dataLayer[a].etatCont}]),window._uxa.push([\"trackDynamicVariable\",\n{key:\"typeContrat\",value:dataLayer[a].typeContrat}]),window._uxa.push([\"trackDynamicVariable\",{key:\"ContributorCode\",value:dataLayer[a].ContributorCode}]),window._uxa.push([\"trackDynamicVariable\",{key:\"ContactReason\",value:dataLayer[a].ContactReason}]),window._uxa.push([\"trackDynamicVariable\",{key:\"dematOrigine\",value:dataLayer[a].dematOrigine}]),window._uxa.push([\"trackDynamicVariable\",{key:\"geoLocation\",value:dataLayer[a].geoLocation}]),window._uxa.push([\"trackDynamicVariable\",{key:\"typeCarte\",\nvalue:dataLayer[a].typeCarte}]),window._uxa.push([\"trackDynamicVariable\",{key:\"eligibOR\",value:dataLayer[a].eligibOR}]),window._uxa.push([\"trackDynamicVariable\",{key:\"eligibAugdma\",value:dataLayer[a].eligibAugdma}])}catch(c){}\"undefined\"===typeof CS_CONF?(window._uxa.push([\"setPath\",window.location.pathname+window.location.hash.replace(\"#\",\"?__\")]),a=document.createElement(\"script\"),a.type=\"text\/javascript\",a.async=!0,a.src=\"\/\/t.contentsquare.net\/uxa\/7bace32d5216e.js\",document.getElementsByTagName(\"head\")[0].appendChild(a)):\nwindow._uxa.push([\"trackPageview\",window.location.pathname+window.location.hash.replace(\"#\",\"?__\")])})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":97
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Esas_tmstp=Math.round(1E10*Math.random());document.write('\\x3cimg src\\x3d\"\/\/www8.smartadserver.com\/track\/pix2.asp?318993;28044;'+sas_tmstp+';0;[transactionid];[reference]\" width\\x3d1 height\\x3d1 border\\x3d0\\x3e\\x3c\/img\\x3e');\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":98
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,c,d,f,e,g){if(!a[e]){var b=a[e]=function(){b.process?b.process.apply(b,arguments):b.queue.push(arguments)};b.queue=[];b.t=1*new Date;a=c.createElement(d);a.async=!0;a.src=f;c=c.getElementsByTagName(d)[0];c.parentNode.insertBefore(a,c)}}(window,document,\"script\",\"https:\/\/s.kmtx.io\/kmpx.js\",\"kmpx\");kmpx(\"init\",\"10\");kmpx(\"event\",\"visit\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":99
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,c,d,f,e,g){if(!a[e]){var b=a[e]=function(){b.process?b.process.apply(b,arguments):b.queue.push(arguments)};b.queue=[];b.t=1*new Date;a=c.createElement(d);a.async=!0;a.src=f;c=c.getElementsByTagName(d)[0];c.parentNode.insertBefore(a,c)}}(window,document,\"script\",\"https:\/\/s.kmtx.io\/kmpx.js\",\"kmpx\");kmpx(\"init\",\"10\");kmpx(\"event\",\"lead\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\n\u003Cscript type=\"text\/javascript\"\u003Esas_tmstp=Math.round(1E10*Math.random());document.write('\\x3cimg src\\x3d\"https:\/\/www8.smartadserver.com\/track\/pix2.asp?384386;29002;'+sas_tmstp+';0;[transactionid];[reference]\" width\\x3d1 height\\x3d1 border\\x3d0\\x3e\\x3c\/img\\x3e');\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg src=\"https:\/\/www8.smartadserver.com\/track\/pix2.asp?384386;29002;123456;0;[transactionid];[reference]\" width=\"1\" height=\"1\" border=\"0\"\u003E \u003C\/img\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":101
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"224274608510364\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=224274608510364\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template"," \n\u003Cscript type=\"text\/gtmscript\"\u003Evar idzCustomData={TypeOfProject:\"",["escape",["macro",3],7],"\",page_type:\"",["escape",["macro",12],7],"\",step_number:\"",["escape",["macro",33],7],"\",cartAmount:\"",["escape",["macro",24],7],"\",user_logged:\"",["escape",["macro",34],7],"\",type_produit:\"",["escape",["macro",35],7],"\",etatCont:\"",["escape",["macro",36],7],"\"};\u003C\/script\u003E \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":106
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"PP : Formulaire : Reponse"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"V|O"
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"pageLoaded|module_interaction"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"CRL : Formulaire : Reponse"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"RAC : Formulaire : Reponse"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"Attente|Potentiel",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"RAC : Avec credit immo : Formulaire : Valide"
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"\"ccbm\"\\:(63|61|59|57),\"ccus\"",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"virtualPageview"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"module_interaction"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"simulation_modified"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"simulation_updated"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"accept"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"ccFinished"
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"\"ccbm\"\\:(63|61|55|53),\"ccus\""
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"\"ccbm\"\\:(63|59|55|51),\"ccus\""
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"V|O|R"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"Attente|Potentiel|Refus",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(Resultat simulation|P0 Box full|P0 Box light)"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"ccFinished|pageLoaded"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"fr\/credit\/(autres-prets-personnels|offres-auto-professionnelles|renouvelable-cartes|rachats-credits|financement-travaux-deco|credit-immobilier|financement-vehicules-2-roues)"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"FR : B2C : accueil"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"EC :"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(PP|CRL|RAC) : Formulaire"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"accept"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"FR : B2C : C Mon Projet : Une Idee du Prix",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"FR : B2C : C Mon Projet : Checklist : vehicule : Rappel 1"
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"module_interaction"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"FR : B2C : C Mon Projet : Checklist : travaux : Rappel 1"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"FR : B2C : C Mon Projet : Checklist Projet"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"pageLoaded"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"FR : B2C : C Mon Projet : Une idee du prix : travaux : Simulation resultat",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"pageLoaded"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"Une idee du prix : vehicule : Resultat",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"\"ccbm\"\\:(63|61|59|57),\"ccus\""
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"ccFinished"
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"pageLoaded|module_interaction|simulation_modified|simulation_updated"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"https:\/\/www.cetelem.fr\/fr\/espace-client\/tableau-de-bord"
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"digitalMeError|error|popinAccompagnement|popinVivassistance|simulation_altered|simulation_modified|virtualPageview|module_interaction"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"FR : B2C : Credit : Offre du moment"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"espace-client\/tableau-de-bord",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"chargement_IA_CR"
    }],
  "rules":[
    [["if",0,1,2],["add",0,4,6,10,11,13,14,16,29,31,33,42],["block",32]],
    [["if",1,2,3],["add",0,4,6,10,11,13,14,16,29,31,33,42],["block",32]],
    [["if",2,4,5],["add",0,4,6,10,11,13,14,16,29,33,42],["block",32]],
    [["if",2,6],["add",0,3,4,6,10,11,13,14,16,17,29,33,42],["block",32]],
    [["if",9,10],["add",1,5,12,18,19,30,32]],
    [["if",11],["add",1,5,12,18,19,30,32]],
    [["if",12],["add",1,5,12,18,19,30,32]],
    [["if",13,14],["add",1,2,5,12,18,19,32,36,40,41,44]],
    [["if",2,3,17],["add",3,15,17,28,33,37,38],["block",32]],
    [["if",0,2,17],["add",3,15,17,28,33,37,38],["block",32]],
    [["if",2,4,18],["add",3,15,17,33],["block",32]],
    [["if",2,19],["add",7]],
    [["if",13,20,21],["add",8,9]],
    [["if",26,27,28],["add",20,25]],
    [["if",29,30],["add",21,27]],
    [["if",30,31],["add",21,27]],
    [["if",13,32,33],["add",22]],
    [["if",34,35],["add",23,26]],
    [["if",33,36],["add",23,26]],
    [["if",26,32,33],["add",24]],
    [["if",14,26],["add",30]],
    [["if",37,38],["add",34]],
    [["if",39],["add",35]],
    [["if",20,21,37],["add",39]],
    [["if",20,41],["add",39]],
    [["if",35,42],["add",43]],
    [["if",43,44],["add",45]],
    [["if",8],["unless",7],["block",0,3,4,6,10,11,13,14,15,34,35,38,39,45]],
    [["if",8],["unless",15],["block",1,2,5,7,8,9,12,16,17,18,19,20,21,22,23,28,29,30,31,32,33,40,42,43,44]],
    [["if",8],["unless",16],["block",2,24,25,26,27,44]],
    [["if",8],["unless",22],["block",8]],
    [["if",21],["unless",23],["block",9]],
    [["if",8,24],["block",18,32]],
    [["if",8,25],["block",19]],
    [["if",8,40],["block",35]]]
},
"runtime":[
[],[]
]


};
var aa,ca=this,da=/^[\w+/_-]+[=]{0,2}$/,ea=null,fa=function(a,b){function c(){}c.prototype=b.prototype;a.Xg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Gg=function(d,e,g){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[e].apply(d,h)}};var ha=function(){},ia=function(a){return"function"==typeof a},ja=function(a){return"string"==typeof a},ka=function(a){return"number"==typeof a&&!isNaN(a)},la=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ma=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},oa=function(a,b){if(a&&la(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},pa=function(a,b){if(!ka(a)||
!ka(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},qa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ra=function(a){return Math.round(Number(a))||0},sa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},ta=function(a){var b=[];if(la(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},ua=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},va=function(){return(new Date).getTime()},wa=function(){this.prefix="gtm.";this.values=
{}};wa.prototype.set=function(a,b){this.values[this.prefix+a]=b};wa.prototype.get=function(a){return this.values[this.prefix+a]};wa.prototype.contains=function(a){return void 0!==this.get(a)};
var xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Aa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ba=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ca=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Da=function(a){if(null==a)return String(a);var b=Ca.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ea=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Fa=function(a){if(!a||"object"!=Da(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ea(a,"constructor")&&!Ea(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ea(a,b)},Ga=function(a,b){var c=b||("array"==Da(a)?[]:{}),d;for(d in a)if(Ea(a,d)){var e=a[d];"array"==Da(e)?("array"!=Da(c[d])&&(c[d]=[]),c[d]=Ga(e,c[d])):Fa(e)?(Fa(c[d])||(c[d]={}),c[d]=Ga(e,c[d])):c[d]=e}return c};var f=window,u=document,Ha=navigator,Ia=u.currentScript&&u.currentScript.src,Ja=function(a,b){var c=f[a];f[a]=void 0===c?b:c;return f[a]},Ka=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},La=function(a,b,c){var d=u.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Ka(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ca.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=u.getElementsByTagName("script")[0]||u.body||u.head;l.parentNode.insertBefore(d,l);return d},Ma=function(){if(Ia){var a=Ia.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Na=function(a,b){var c=u.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=u.body&&u.body.lastChild||
u.body||u.head;d.parentNode.insertBefore(c,d);Ka(c,b);void 0!==a&&(c.src=a);return c},Oa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Pa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Qa=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},z=function(a){f.setTimeout(a,0)},Sa=function(a){var b=
u.getElementById(a);if(b&&Ra(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Ra(document.all[a][c],"id")==a)return document.all[a][c];return b},Ra=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ta=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ua=function(a){var b=u.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=
[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Wa=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;g=g.parentElement}return null};var Xa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Ya=/:[0-9]+$/,Za=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},bb=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=$a(a.protocol)||$a(f.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:f.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||f.location.hostname).replace(Ya,"").toLowerCase());var g=b,h,k=$a(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=ab(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Ya,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":h="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=h.split("/");0<=
ma(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Za(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},$a=function(a){return a?a.replace(":","").toLowerCase():""},ab=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},cb=function(a){var b=u.createElement("a");
a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(Ya,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var db=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},hb=function(a,b,c,d){var e=eb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=fb(e,function(g){return g.yb},b);if(1===e.length)return e[0].id;e=fb(e,function(g){return g.Ta},c);return e[0]?e[0].id:void 0}};
function ib(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=db(b,e).indexOf(c)}
var lb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=jb(),x=0;x<v.length;++x){var y="none"!=v[x]?v[x]:void 0;if(!kb(y,t)&&ib(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!kb(p,t)&&ib(m,a,l)}return k};function fb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function eb(a,b){for(var c=[],d=db(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),yb:1*k[0]||1,Ta:1*k[1]||1}))}}return c}
var mb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,nb=/(^|\.)doubleclick\.net$/i,kb=function(a,b){return nb.test(document.location.hostname)||"/"===b&&mb.test(a)},jb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var ob=[],pb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},qb=function(a){return pb[a]},sb=/[\x00\x22\x26\x27\x3c\x3e]/g;var wb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,xb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},yb=function(a){return xb[a]};ob[7]=function(a){return String(a).replace(wb,yb)};
ob[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(wb,yb)+"'"}};var Fb=/['()]/g,Gb=function(a){return"%"+a.charCodeAt(0).toString(16)};ob[12]=function(a){var b=
encodeURIComponent(String(a));Fb.lastIndex=0;return Fb.test(b)?b.replace(Fb,Gb):b};var Hb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ib={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Jb=function(a){return Ib[a]};ob[16]=function(a){return a};var Lb=[],Mb=[],Nb=[],Ob=[],Pb=[],Qb={},Rb,Sb,Tb,Ub=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Vb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Qb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Qb[c](e):(void 0)(c,e,b)},Xb=function(a,b,c,d){c=c||[];d=d||ha;var e={},g;for(g in a)a.hasOwnProperty(g)&&(e[g]=Wb(a[g],b,
c,d));return e},Yb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Qb[b];return c?c.b||0:0},Wb=function(a,b,c,d){if(la(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var g=1;g<a.length;g++)e.push(Wb(a[g],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=Lb[h];if(!k||b(k))return;c[h]=!0;try{var l=Xb(k,b,c,d);e=Vb(l,d);Tb&&(e=Tb.ff(e,l))}catch(y){d(y,h),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=
2)e[Wb(a[m],b,c,d)]=Wb(a[m+1],b,c,d);return e;case "template":e=[];for(var n=!1,p=1;p<a.length;p++){var t=Wb(a[p],b,c,d);Sb&&(n=n||t===Sb.ob);e.push(t)}return Sb&&n?Sb.kf(e):e.join("");case "escape":e=Wb(a[1],b,c,d);if(Sb&&la(a[1])&&"macro"===a[1][0]&&Sb.Nf(a))return Sb.Yf(e);e=String(e);for(var q=2;q<a.length;q++)ob[a[q]]&&(e=ob[a[q]](e));return e;case "tag":var r=a[1];if(!Ob[r])throw Error("Unable to resolve tag reference "+r+".");return e={wd:a[2],index:r};case "zb":var v={arg0:a[2],arg1:a[3],
ignore_case:a[5]};v["function"]=a[1];var x=Zb(v,b,c,d);a[4]&&(x=!x);return x;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Zb=function(a,b,c,d){try{return Rb(Xb(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var $b=null,cc=function(a,b){function c(t){for(var q=0;q<t.length;q++)e[t[q]]=!0}var d=[],e=[];$b=ac(a,b||function(){});for(var g=0;g<Mb.length;g++){var h=Mb[g],k=bc(h);if(k){for(var l=h.add||[],m=0;m<l.length;m++)d[l[m]]=!0;c(h.block||[])}else null===k&&c(h.block||[])}for(var n=[],p=0;p<Ob.length;p++)d[p]&&!e[p]&&(n[p]=!0);return n},bc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=$b(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=$b(e[g]);if(null===
h)return null;if(h)return!1}return!0},ac=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=Zb(Nb[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var dc,ec=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Se&&(l["fix_"+m]=!0),l.xd=l.xd||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,D:q.D,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(v,x,y,w,D){var A=y||w||D||g.test(x)&&x||null,B=document.createElement("div");B.innerHTML=A;r[x]=B.textContent||B.innerText||A});return{tagName:q[1],D:r,Ya:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var r=p[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.xd&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Id=function(){return this[this.length-1]};v.xc=function(B){var C=this.Id();return C&&C.tagName&&C.tagName.toUpperCase()===B.toUpperCase()};v.ef=
function(B){for(var C=0,H;H=this[C];C++)if(H.tagName===B)return!0;return!1};var x=function(B){B&&"startTag"===B.type&&(B.Ya=q.test(B.tagName)||B.Ya);return B},y=t,w=function(){k="</"+v.pop().tagName+">"+k},D={startTag:function(B){var C=B.tagName;"TR"===C.toUpperCase()&&v.xc("TABLE")?(k="<TBODY>"+k,A()):l.Lg&&r.test(C)&&v.ef(C)?v.xc(C)?w():(k="</"+B.tagName+">"+k,A()):B.Ya||v.push(B)},endTag:function(B){v.Id()?l.vf&&!v.xc(B.tagName)?w():v.pop():l.vf&&(y(),A())}},A=function(){var B=k,C=x(y());k=B;if(C&&
D[C.type])D[C.type](C)};t=function(){A();return x(y())}}();return{append:function(q){k+=q},eg:t,Rg:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},Sg:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Yg="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Ug=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Zg=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.D){var t=m.D[p];
n+=" "+p+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Ya?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.Kg=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.Xe=a.Xe||!b[h]&&h;dc=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,t,q){var r,v=p&&p.length||0;for(r=0;r<v;r++)t.call(q,p[r],r)}function d(p,t,q){for(var r in p)p.hasOwnProperty(r)&&t.call(q,r,p[r])}function e(p,
t){d(t,function(q,r){p[q]=r});return p}function g(p,t){p=p||{};d(t,function(q,r){b(p[q])||(p[q]=r)});return p}function h(p){try{return m.call(p)}catch(q){var t=[];c(p,function(r){t.push(r)});return t}}var k={Ie:a,Je:a,Ke:a,Le:a,Te:a,Ue:function(p){return p},done:a,error:function(p){throw p;},ig:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,r,v){var x="data-ps-"+r;if(2===arguments.length){var y=q.getAttribute(x);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(x,
v):q.removeAttribute(x)}function t(q,r){var v=q.ownerDocument;e(this,{root:q,options:r,Za:v.defaultView||v.parentWindow,xa:v,Db:dc("",{Se:!0}),bc:[q],Fc:"",Gc:v.createElement(q.nodeName),Xa:[],la:[]});p(this.Gc,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.la,arguments);for(var q;!this.xb&&this.la.length;)q=this.la.shift(),"function"===typeof q?this.af(q):this.Rc(q)};t.prototype.af=function(q){var r={type:"function",value:q.name||q.toString()};this.Cc(r);q.call(this.Za,this.xa);this.Md(r)};
t.prototype.Rc=function(q){this.Db.append(q);for(var r,v=[],x,y;(r=this.Db.eg())&&!(x=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.zg(v);x&&this.Bf(r);y&&this.Cf(r)};t.prototype.zg=function(q){var r=this.Ye(q);r.qd&&(r.oc=this.Fc+r.qd,this.Fc+=r.cg,this.Gc.innerHTML=r.oc,this.wg())};t.prototype.Ye=function(q){var r=this.bc.length,v=[],x=[],y=[];c(q,function(w){v.push(w.text);if(w.D){if(!/^noscript$/i.test(w.tagName)){var D=
r++;x.push(w.text.replace(/(\/?>)/," data-ps-id="+D+" $1"));"ps-script"!==w.D.id&&"ps-style"!==w.D.id&&y.push("atomicTag"===w.type?"":"<"+w.tagName+" data-ps-proxyof="+D+(w.Ya?" />":">"))}}else x.push(w.text),y.push("endTag"===w.type?w.text:"")});return{$g:q,raw:v.join(""),qd:x.join(""),cg:y.join("")}};t.prototype.wg=function(){for(var q,r=[this.Gc];b(q=r.shift());){var v=1===q.nodeType;if(!v||!p(q,"proxyof")){v&&(this.bc[p(q,"id")]=q,p(q,"id",null));var x=q.parentNode&&p(q.parentNode,"proxyof");
x&&this.bc[x].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.Bf=function(q){var r=this.Db.clear();r&&this.la.unshift(r);q.src=q.D.src||q.D.Dg;q.src&&this.Xa.length?this.xb=q:this.Cc(q);var v=this;this.yg(q,function(){v.Md(q)})};t.prototype.Cf=function(q){var r=this.Db.clear();r&&this.la.unshift(r);q.type=q.D.type||q.D.Eg||"text/css";this.Ag(q);r&&this.write()};t.prototype.Ag=function(q){var r=this.$e(q);this.Lf(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.xa.createTextNode(q.content)))};t.prototype.$e=function(q){var r=this.xa.createElement(q.tagName);r.setAttribute("type",q.type);d(q.D,function(v,x){r.setAttribute(v,x)});return r};t.prototype.Lf=function(q){this.Rc('<span id="ps-style"/>');var r=this.xa.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.Cc=function(q){q.Uf=this.la;this.la=[];this.Xa.unshift(q)};t.prototype.Md=function(q){q!==this.Xa[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Xa.shift(),this.write.apply(this,q.Uf),!this.Xa.length&&this.xb&&(this.Cc(this.xb),this.xb=null))};t.prototype.yg=function(q,r){var v=this.Ze(q),x=this.pg(v),y=this.options.Ie;q.src&&(v.src=q.src,this.mg(v,x?y:function(){r();y()}));try{this.Kf(v),q.src&&!x||r()}catch(w){this.options.error(w),r()}};t.prototype.Ze=function(q){var r=this.xa.createElement(q.tagName);d(q.D,function(v,x){r.setAttribute(v,x)});q.content&&(r.text=q.content);return r};t.prototype.Kf=function(q){this.Rc('<span id="ps-script"/>');
var r=this.xa.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.mg=function(q,r){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var x=this.options.error;e(q,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),r())},onerror:function(){var y={message:"remote script failed "+q.src};v();x(y);r()}})};t.prototype.pg=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.ig&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function p(){var x=r.shift(),y;x&&(y=x[x.length-1],y.Je(),x.stream=t.apply(null,x),y.Ke())}function t(x,y,w){function D(H){H=w.Ue(H);v.write(H);w.Le(H)}v=new n(x,w);v.id=q++;v.name=w.name||v.id;var A=x.ownerDocument,B={close:A.close,open:A.open,write:A.write,writeln:A.writeln};e(A,{close:a,open:a,write:function(){return D(h(arguments).join(""))},writeln:function(){return D(h(arguments).join("")+"\n")}});var C=v.Za.onerror||a;v.Za.onerror=function(H,N,R){w.error({Og:H+
" - "+N+":"+R});C.apply(v.Za,arguments)};v.write(y,function(){e(A,B);v.Za.onerror=C;w.done();v=null;p()});return v}var q=0,r=[],v=null;return e(function(x,y,w){"function"===typeof w&&(w={done:w});w=g(w,k);x=/^#/.test(x)?l.document.getElementById(x.substr(1)):x.Mg?x[0]:x;var D=[x,y,w];x.Xf={cancel:function(){D.stream?D.stream.abort():D[1]=a}};w.Te(D);r.push(D);v||p();return x.Xf},{streams:{},Qg:r,Fg:n})}();ec=l.postscribe}})();var pc={},qc=null,rc=Math.random();pc.m="GTM-N99KVH";pc.sb="3i1";var sc="www.googletagmanager.com/gtm.js";var tc=sc,uc=null,vc=null,wc=null,xc="//www.googletagmanager.com/a?id="+pc.m+"&cv=57",yc={},zc={},Ac=function(){var a=qc.sequence||0;qc.sequence=a+1;return a};var E=function(a,b,c,d){return(2===Bc()||d||"http:"!=f.location.protocol?a:b)+c},Bc=function(){var a=Ma(),b;if(1===a)a:{var c=tc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=u.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Cc=!1;var Fc=function(){var a=function(b){return{toString:function(){return b}}};return{Vc:a("convert_case_to"),Wc:a("convert_false_to"),Xc:a("convert_null_to"),Yc:a("convert_true_to"),Zc:a("convert_undefined_to"),ra:a("function"),ye:a("instance_name"),ze:a("live_only"),Ae:a("malware_disabled"),Cg:a("original_vendor_template_id"),Be:a("once_per_event"),md:a("once_per_load"),nd:a("setup_tags"),Ce:a("tag_id"),od:a("teardown_tags")}}();var Gc={},Hc=function(a){Gc.GTM=Gc.GTM||[];Gc.GTM[a]=!0};
var Ic=function(){return"&tc="+Ob.filter(function(a){return a}).length},Rc=function(){Jc&&(f.clearTimeout(Jc),Jc=void 0);void 0===Kc||Lc[Kc]&&!Mc||(Nc[Kc]||Oc.Pf()||0>=Pc--?(Hc(1),Nc[Kc]=!0):(Oc.gg(),Oa(Qc()),Lc[Kc]=!0,Mc=""))},Qc=function(){var a=Kc;if(void 0===a)return"";for(var b,c=[],d=Gc.GTM||[],e=0;e<d.length;e++)d[e]&&(c[Math.floor(e/6)]^=1<<e%6);for(var g=0;g<c.length;g++)c[g]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(c[g]||0);b=c.join("");return[Sc,Lc[a]?"":
"&es=1",Tc[a],b?"&u="+b:"",Ic(),Mc,"&z=0"].join("")},Uc=function(){return[xc,"&v=3&t=t","&pid="+pa(),"&rv="+pc.sb].join("")},Vc="0.005000">Math.random(),Sc=Uc(),Wc=function(){Sc=Uc()},Lc={},Mc="",Kc=void 0,Tc={},Nc={},Jc=void 0,Oc=function(a,b){var c=0,d=0;return{Pf:function(){if(c<a)return!1;va()-d>=b&&(c=0);return c>=a},gg:function(){va()-d>=b&&(c=0);c++;d=va()}}}(2,1E3),Pc=1E3,Xc=function(a,b){if(Vc&&!Nc[a]&&Kc!==a){Rc();Kc=a;Mc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):
"*";Tc[a]="&e="+c+"&eid="+a;Jc||(Jc=f.setTimeout(Rc,500))}},Yc=function(a,b,c){if(Vc&&!Nc[a]&&b){a!==Kc&&(Rc(),Kc=a);var d=c+String(b[Fc.ra]||"").replace(/_/g,"");Mc=Mc?Mc+"."+d:"&tr="+d;Jc||(Jc=f.setTimeout(Rc,500));2022<=Qc().length&&Rc()}};var Zc=new wa,$c={},ad={},ed={set:function(a,b){Ga(bd(a,b),$c);cd()},get:function(a){return dd(a,2)},reset:function(){Zc=new wa;$c={};cd()}},dd=function(a,b){if(2!=b){var c=Zc.get(a);if(Vc){var d=fd(a);c!==d&&Hc(5)}return c}return fd(a)},fd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;
return e?g:hd(d)},hd=function(a){for(var b=$c,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var kd=function(a,b){ad.hasOwnProperty(a)||(Zc.set(a,b),Ga(bd(a,b),$c),cd())},bd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},cd=function(a){qa(ad,function(b,c){Zc.set(b,c);Ga(bd(b,void 0),$c);Ga(bd(b,c),$c);a&&delete ad[b]})};var ld=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),md={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},nd={cl:["ecl"],customPixels:["customScripts","html"],ecl:["cl"],html:["customScripts"],
customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]};
var pd=function(a){var b=dd("gtm.whitelist");b&&Hc(9);var c=b&&Ba(ta(b),md),d=dd("gtm.blacklist");d||(d=dd("tagTypeBlacklist"))&&Hc(3);d?Hc(8):d=[];
od()&&(d=ta(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=ma(ta(d),"google")&&Hc(2);var e=d&&Ba(ta(d),nd),g={};return function(h){var k=h&&h[Fc.ra];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=zc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>ma(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>ma(c,l[p])){Hc(11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=ma(e,
k);if(q)t=q;else{var r;b:{for(var v=l||[],x=new wa,y=0;y<e.length;y++)x.set(e[y],!0);for(var w=0;w<v.length;w++)if(x.get(v[w])){r=!0;break b}r=!1}var D=r;D&&Hc(10);t=D}}return g[k]=!m||t}},od=function(){return ld.test(f.location&&f.location.hostname)};var rd=function(a){return function(b,c){if(ka(c))a(b,c);else{b instanceof qd||(b=new qd(b));var d=b;c&&d.jc.push(c);throw d;}}},qd=function(a){this.Tf=a;this.jc=[]};fa(qd,Error);var sd={ff:function(a,b){b[Fc.Vc]&&"string"===typeof a&&(a=1==b[Fc.Vc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Fc.Xc)&&null===a&&(a=b[Fc.Xc]);b.hasOwnProperty(Fc.Zc)&&void 0===a&&(a=b[Fc.Zc]);b.hasOwnProperty(Fc.Yc)&&!0===a&&(a=b[Fc.Yc]);b.hasOwnProperty(Fc.Wc)&&!1===a&&(a=b[Fc.Wc]);return a}};var td={active:!0,isWhitelisted:function(){return!0}},ud=function(a){var b=qc.zones;!b&&a&&(b=qc.zones=a());return b};var vd=!1,wd=0,xd=[];function yd(a){if(!vd){var b=u.createEventObject,c="complete"==u.readyState,d="interactive"==u.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){vd=!0;for(var e=0;e<xd.length;e++)z(xd[e])}xd.push=function(){for(var g=0;g<arguments.length;g++)z(arguments[g]);return 0}}}function zd(){if(!vd&&140>wd){wd++;try{u.documentElement.doScroll("left"),yd()}catch(a){f.setTimeout(zd,50)}}}var Ad=function(a){vd?a():xd.push(a)};var Bd=function(){function a(d){return!ka(d)||0>d?0:d}if(!qc._li&&f.performance&&f.performance.timing){var b=f.performance.timing.navigationStart,c=ka(ed.get("gtm.start"))?ed.get("gtm.start"):0;qc._li={cst:a(c-b),cbt:a(vc-b)}}};var Fd=!1,Gd=function(){return f.GoogleAnalyticsObject&&f[f.GoogleAnalyticsObject]},Hd=!1;
var Ld=function(){},Kd=function(){return f.GoogleAnalyticsObject||"ga"},Md=!1;var Td=function(a){};
function Sd(a,b){a.containerId=pc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function Ud(a,b,c,d,e){var g=Ob[a],h=Vd(a,b,c,d,e);if(!h)return null;var k=Wb(g[Fc.nd],d.da,[],ha);if(k&&k.length){var l=k[0];h=Ud(l.index,b,{I:h,O:1===l.wd?c.terminate:h,terminate:c.terminate},d,e)}return h}
function Vd(a,b,c,d,e){function g(){if(h[Fc.Ae])l();else{var y=Xb(h,d.da,[],rd(function(B){Hc(6);Td(B)})),w=!1;y.vtp_gtmOnSuccess=function(){if(!w){w=!0;Yc(d.id,Ob[a],"5");k()}};y.vtp_gtmOnFailure=function(){if(!w){w=!0;Yc(d.id,Ob[a],"6");l()}};y.vtp_gtmTagId=h.tag_id;Yc(d.id,h,"1");var D=
!1,A=function(B,C){if(!D){B instanceof qd||(B=new qd(B));var H=B;C&&H.jc.push(C);throw H;}Td(B);Yc(d.id,h,"7");w||(w=!0,l())};try{Vb(y,A)}catch(B){try{D=!0,A(B)}catch(C){}}}}
var h=Ob[a],k=c.I,l=c.O,m=c.terminate;if(d.da(h))return null;var n=Wb(h[Fc.od],d.da,[],ha);if(n&&n.length){var p=n[0],t=Ud(p.index,b,{I:k,O:l,terminate:m},d,e);if(!t)return null;k=t;l=2===p.wd?m:t}if(h[Fc.md]||h[Fc.Be]){var q=h[Fc.md]?Pb:b,r=k,v=l;if(!q[a]){g=ya(g);var x=Wd(a,q,g);k=x.I;l=x.O}return function(){q[a](r,v)}}return g}function Wd(a,b,c){var d=[],e=[];b[a]=Xd(d,e,c);return{I:function(){b[a]=Yd;for(var g=0;g<d.length;g++)d[g]()},O:function(){b[a]=Zd;for(var g=0;g<e.length;g++)e[g]()}}}
function Xd(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Yd(a){a()}function Zd(a,b){b()};function $d(a){var b=0,c=0,d=!1;return{add:function(){c++;return ya(function(){b++;d&&b>=c&&a()})},Qe:function(){d=!0;b>=c&&a()}}}var ce=function(a){for(var b=$d(a.callback),c=[],d=[],e=0;e<Ob.length;e++)if(a.Va[e]){var g=Ob[e];var h=b.add();try{var k=Ud(e,c,{I:h,O:h,terminate:h},a,e);k?d.push({Wd:e,b:Yb(g),uf:k}):(ae(e,a),h())}catch(m){h()}}b.Qe();d.sort(be);for(var l=0;l<d.length;l++)d[l].uf();return 0<d.length};
function be(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Wd,k=b.Wd;g=h>k?1:h<k?-1:0}return g}function ae(a,b){if(!Vc)return;var c=function(d){var e=b.da(Ob[d])?"3":"4",g=Wb(Ob[d][Fc.nd],b.da,[],ha);g&&g.length&&c(g[0].index);Yc(b.id,Ob[d],e);var h=Wb(Ob[d][Fc.od],b.da,[],ha);h&&h.length&&c(h[0].index)};c(a);}
var de=!1,ee=function(a,b,c,d){if("gtm.js"==b){if(de)return!1;de=!0}Xc(a,b);var e=pd(c),g={id:a,name:b,callback:d||ha,da:e,Va:[]};g.Va=cc(e,rd(function(n){Td(n)}));var h=ce(g);"gtm.js"!==b&&"gtm.sync"!==b||Ld();if(!h)return h;for(var k={__cl:!0,__ecl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},l=0;l<g.Va.length;l++)if(g.Va[l]){var m=
Ob[l];if(m&&!k[m[Fc.ra]])return!0}return!1};var F={Pb:"event_callback",Rb:"event_timeout"};var ge={};var he=/[A-Z]+/,ie=/\s/,je=function(a){if(ja(a)&&(a=ua(a),!ie.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(he.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ca:d}}}}},le=function(a){for(var b={},c=0;c<a.length;++c){var d=je(a[c]);d&&(b[d.id]=d)}ke(b);var e=[];qa(b,function(g,h){e.push(h)});return e};
function ke(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.ca[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var me=null,ne={},oe={},pe,re=function(a,b){var c={event:a};b&&(c.eventModel=Ga(b),b[F.Pb]&&(c.eventCallback=b[F.Pb]),b[F.Rb]&&(c.eventTimeout=b[F.Rb]));return c};
var we={config:function(a){},event:function(a){var b=a[1];if(ja(b)&&!(3<a.length)){var c;if(2<
a.length){if(!Fa(a[2]))return;c=a[2]}var d=re(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];ge[b]||(ge[b]=[]);ge[b].push(c)}},set:function(a){var b;2==a.length&&Fa(a[1])?b=Ga(a[1]):3==a.length&&ja(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Ga(b),b.event="gtag.set",b._clear=!0,b}},xe={policy:!0};var ye=function(){return!1};var Ee=function(a){if(De(a))return a;this.vg=a};Ee.prototype.Af=function(){return this.vg};var De=function(a){return!a||"object"!==Da(a)||Fa(a)?!1:"getUntrustedUpdateValue"in a};Ee.prototype.getUntrustedUpdateValue=Ee.prototype.Af;var Fe=!1,Ge=[];function He(){if(!Fe){Fe=!0;for(var a=0;a<Ge.length;a++)z(Ge[a])}}var Ie=function(a){Fe?z(a):Ge.push(a)};var Je=[],Ke=!1;function Le(a){var b=a.eventCallback,c=ya(function(){ia(b)&&z(function(){b(pc.m)})}),d=a.eventTimeout;d&&f.setTimeout(c,Number(d));return c}
var Me=function(a){return f["dataLayer"].push(a)},Oe=function(a){var b=a._clear;qa(a,function(g,h){"_clear"!==g&&(b&&kd(g,void 0),kd(g,h))});var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ac(),a["gtm.uniqueEventId"]=d,kd("gtm.uniqueEventId",d));wc=c;var e=Ne(a);wc=null;if(!uc){uc=a["gtm.start"];}return e};
function Ne(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=qc.zones;d=e?e.checkState(pc.m,c):td;if(!d.active)return!1;var g=Le(a);return ee(c,b,d.isWhitelisted,g)?!0:!1}
var Pe=function(){for(var a=!1;!Ke&&0<Je.length;){Ke=!0;delete $c.eventModel;cd();var b=Je.shift();if(null!=b){var c=De(b);if(c){var d=b;b=De(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=dd(h,1);if(la(k)||Fa(k))k=Ga(k);ad[h]=k}}try{if(ia(b))try{b.call(ed)}catch(v){}else if(la(b)){var l=b;if(ja(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=dd(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ja(b[0])){var r=we[b[0]];if(r&&(!c||!xe[b[0]])){b=r(b);break a}}b=void 0}if(!b){Ke=!1;continue}}a=Oe(b)||a}}finally{c&&cd(!0)}}Ke=!1}
return!a},Qe=function(){var a=Pe();try{var b=pc.m,c=f["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Re=function(){var a=Ja("dataLayer",[]),b=Ja("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Ad(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ie(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var d;
if(0<qc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Ee(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Je.push.apply(Je,d);if(300<this.length)for(Hc(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Pe()&&h};Je.push.apply(Je,a.slice(0));z(Qe)};var Te=function(a){return Se?u.querySelectorAll(a):null},Ue=function(a,b){if(!Se)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!u.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ve=!1;if(u.querySelectorAll)try{var We=u.querySelectorAll(":root");We&&1==We.length&&We[0]==u.documentElement&&(Ve=!0)}catch(a){}var Se=Ve;var Xe;var tf={};tf.ob=new String("undefined");
var uf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===tf.ob?b:a[d]);return c.join("")}};uf.prototype.toString=function(){return this.resolve("undefined")};uf.prototype.valueOf=uf.prototype.toString;tf.De=uf;tf.$b={};tf.kf=function(a){return new uf(a)};var vf={};tf.hg=function(a,b){var c=Ac();vf[c]=[a,b];return c};tf.td=function(a){var b=a?0:1;return function(c){var d=vf[c];if(d&&"function"===typeof d[b])d[b]();vf[c]=void 0}};tf.Nf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};tf.Yf=function(a){if(a===tf.ob)return a;var b=Ac();tf.$b[b]=a;return'google_tag_manager["'+pc.m+'"].macro('+b+")"};tf.Rf=function(a,b,c){a instanceof tf.De&&(a=a.resolve(tf.hg(b,c)),b=ha);return{oc:a,I:b}};var wf=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Ra(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return d},xf=function(a){qc.hasOwnProperty("autoEventsSettings")||(qc.autoEventsSettings={});var b=qc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},
yf=function(a,b,c){xf(a)[b]=c},zf=function(a,b,c,d){var e=xf(a),g=xa(e,b,d);e[b]=c(g)},Af=function(a,b,c){var d=xf(a);return xa(d,b,c)};var Bf=function(){for(var a=Ha.userAgent+(u.cookie||"")+(u.referrer||""),b=a.length,c=f.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(va()/1E3)].join(".")},Ef=function(a,b,c,d){var e=Cf(b);return hb(a,e,Df(c),d)},Cf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Df=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Ff(a,b){var c=""+Cf(a),d=Df(b);1<d&&(c+="-"+d);return c};var Gf=["1"],Hf={},Lf=function(a,b,c,d){var e=If(a);Hf[e]||Jf(e,b,c)||(Kf(e,Bf(),b,c,d),Jf(e,b,c))};function Kf(a,b,c,d,e){var g;g=["1",Ff(d,c),b].join(".");lb(a,g,c,d,0==e?void 0:new Date(va()+1E3*(void 0==e?7776E3:e)))}function Jf(a,b,c){var d=Ef(a,b,c,Gf);d&&(Hf[a]=d);return d}function If(a){return(a||"_gcl")+"_au"};var Mf=function(){for(var a=[],b=u.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Nc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Nc]||(g[a[h].Nc]=[]),g[a[h].Nc].push({timestamp:k[1],xf:k[2]}))}return g};function Nf(){for(var a=Of,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Pf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Of,Qf,Rf=function(a){Of=Of||Pf();Qf=Qf||Nf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Of[l],Of[m],Of[n],Of[p])}return b.join("")},Sf=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Qf[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Of=Of||Pf();Qf=Qf||
Nf();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Tf;function Uf(a,b){if(!a||b===u.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var Vf=function(){var a=Ja("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Wf=/(.*?)\*(.*?)\*(.*)/,Xf=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Yf=/^(?:www\.|m\.|amp\.)+/,Zf=/([^?#]+)(\?[^#]*)?(#.*)?/,$f=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,bg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Rf(String(d))))}var e=b.join("*");return["1",ag(e),e].join("*")},ag=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Tf)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Tf=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Tf[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},dg=function(){return function(a){var b=cb(f.location.href),c=b.search.replace("?",""),d=Za(c,"_gl",!0)||"";a.query=cg(d)||{};var e=bb(b,"fragment").match($f);a.fragment=cg(e&&e[3]||
"")||{}}},cg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Wf.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===ag(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Sf(t[q+1]);return p}}}}catch(r){}};
function eg(a,b,c){function d(m){var n=m,p=$f.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Zf.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function fg(a,b,c){for(var d={},e={},g=Vf().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Uf(k.domains,b)&&(k.fragment?za(e,k.callback()):za(d,k.callback()))}if(Aa(d)){var l=bg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=u.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=eg(l,a.action);Xa.test(v)&&(a.action=v)}}}else gg(l,a,!1)}if(!c&&Aa(e)){var x=bg(e);gg(x,a,!0)}}function gg(a,b,c){if(b.href){var d=eg(a,b.href,void 0===c?!1:c);Xa.test(d)&&(b.href=d)}}
var hg=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||fg(e,e.hostname,!1)}}catch(h){}},ig=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=bb(cb(b.action),"host");fg(b,c,!0)}}catch(d){}},jg=function(a,b,c,d){var e=Vf();e.init||(Pa(u,"mousedown",hg),Pa(u,"keyup",hg),Pa(u,"submit",ig),e.init=!0);var g={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};Vf().decorators.push(g)},kg=function(){var a=u.location.hostname,b=Xf.exec(u.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(Yf,"")===e.replace(Yf,"")},lg=function(a,b){return!1===a?!1:a||b||kg()};var mg=/^\w+$/,ng=/^[\w-]+$/,og=/^~?[\w-]+$/,pg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function qg(a){return a&&"string"==typeof a&&a.match(mg)?a:"_gcl"}var sg=function(){var a=cb(f.location.href),b=bb(a,"query",!1,void 0,"gclid"),c=bb(a,"query",!1,void 0,"gclsrc"),d=bb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Za(e,"gclid",void 0);c=c||Za(e,"gclsrc",void 0)}return rg(b,c,d)};
function rg(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(ng))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function tg(a,b,c){function d(p,t){var q=ug(p,e);q&&lb(q,t,h,g,l,!0)}b=b||{};var e=qg(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Jd?7776E3:b.Jd;c=c||va();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.bh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var ug=function(a,b){var c=pg[a];if(void 0!==c)return b+c},vg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function wg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var xg=function(a,b,c,d,e){if(la(b)){var g=qg(e);jg(function(){for(var h={},k=0;k<a.length;++k){var l=ug(a[k],g);if(l){var m=db(l,u.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},yg=function(a){return a.filter(function(b){return og.test(b)})},zg=function(a,b){for(var c=qg(b&&b.prefix),d={},e=0;e<a.length;e++)pg[a[e]]&&(d[a[e]]=pg[a[e]]);qa(d,function(g,h){var k=db(c+h,u.cookie);if(k.length){var l=k[0],m=vg(l),n={};n[g]=[wg(l)];tg(n,b,m)}})};var Ag=/^\d+\.fls\.doubleclick\.net$/;function Bg(a){var b=cb(f.location.href),c=bb(b,"host",!1);if(c&&c.match(Ag)){var d=bb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Cg(a,b){if("aw"==a||"dc"==a){var c=Bg("gcl"+a);if(c)return c.split(".")}var d=qg(b);if("_gcl"==d){var e;e=sg()[a]||[];if(0<e.length)return e}var g=ug(a,d),h;if(g){var k=[];if(u.cookie){var l=db(g,u.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=wg(l[m]);n&&-1===ma(k,n)&&k.push(n)}h=yg(k)}else h=k}else h=k}else h=[];return h}
var Dg=function(){var a=Bg("gac");if(a)return decodeURIComponent(a);var b=Mf(),c=[];qa(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].xf);g=yg(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Eg=function(a,b,c,d,e){Lf(b,c,d,e);var g=Hf[If(b)],h=sg().dc||[],k=!1;if(g&&0<h.length){var l=qc.joined_au=qc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ha.sendBeacon&&Ha.sendBeacon(t)||Oa(t);k=l[m]=
!0}}k|=a;if(k&&g){var q=If(b),r=Hf[q];r&&Kf(q,r,c,d,e)}};var Fg;if(3===pc.sb.length)Fg="g";else{var Gg="G";Fg=Gg}
var Hg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Fg},Ig=function(a){var b=pc.m.split("-"),c=b[0].toUpperCase(),d=Hg[c]||"i",e=a&&"GTM"===c?b[1]:"",g;if(3===pc.sb.length){var h=void 0;g="2"+(h||"w")}else g="";return g+d+pc.sb+e};var Pg=!!f.MutationObserver,Qg=void 0,Rg=function(a){if(!Qg){var b=function(){var c=u.body;if(c)if(Pg)(new MutationObserver(function(){for(var e=0;e<Qg.length;e++)z(Qg[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Pa(c,"DOMNodeInserted",function(){d||(d=!0,z(function(){d=!1;for(var e=0;e<Qg.length;e++)z(Qg[e])}))})}};Qg=[];u.body?b():z(b)}Qg.push(a)};var ih=f.clearTimeout,jh=f.setTimeout,G=function(a,b,c){if(ye()){b&&z(b)}else return La(a,b,c)},kh=function(){return new Date},lh=function(){return f.location.href},mh=function(a){return bb(cb(a),"fragment")},nh=function(a){return ab(cb(a))},oh=function(a,b){return dd(a,b||2)},ph=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Me(a)},qh=function(a,b){f[a]=b},K=function(a,b,c){b&&(void 0===f[a]||
c&&!f[a])&&(f[a]=b);return f[a]},rh=function(a,b,c){return db(a,b,void 0===c?!0:!!c)},sh=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Jd:d},g=sg();tg(g,e);zg(["aw"],e);zg(["dc"],e);},th=function(a,b,c,d,e){var g=dg(),h=Vf();h.data||(h.data=
{query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&(za(k,l.query),za(k,l.fragment));for(var m=qg(b),n=0;n<a.length;++n){var p=a[n];if(void 0!==pg[p]){var t=ug(p,m),q=k[t];if(q){var r=Math.min(vg(q),va()),v;b:{for(var x=r,y=db(t,u.cookie),w=0;w<y.length;++w)if(vg(y[w])>x){v=!0;break b}v=!1}v||lb(t,q,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var D={prefix:b,path:c,domain:d};tg(rg(k.gclid,k.gclsrc),D);},uh=function(a,b,c,d,e){
xg(a,b,c,d,e);},vh=function(a,b){if(ye()){b&&z(b)}else Na(a,b)},wh=function(a){return!!Af(a,"init",!1)},xh=function(a){yf(a,"init",!0)},yh=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":tc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&qa(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});G(E("https://","http://",d))};
var Ah=tf.Rf;
var Bh=new wa;function Ch(a,b){function c(h){var k=cb(h),l=bb(k,"protocol"),m=bb(k,"host",!0),n=bb(k,"port"),p=bb(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function Dh(a){var b=a.arg0,c=a.arg1;if(a.any_of&&la(c)){for(var d=0;d<c.length;d++)if(Dh({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=ma(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Bh.get(q);r||(r=new RegExp(c,t),Bh.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));
case "_um":return Ch(b,c)}return!1};var Fh=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Gh={},Hh=encodeURI,M=encodeURIComponent,Ih=Oa;var Jh=function(a,b){if(!a)return!1;var c=bb(cb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Kh=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Gh.Of=function(){var a=!1;return a};var ti=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},ui=function(){this.c=1;this.e=[];this.p=null};function vi(a){var b=qc,c=b.gss=b.gss||{};return c[a]=c[a]||new ui}var wi=function(a,b){vi(a).p=b},xi=function(a){var b=vi(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,l.p)}catch(m){}};g(d);g(e)}};var zi=function(){var a=f.gaGlobal=f.gaGlobal||{};a.hid=a.hid||pa();return a.hid};var Oi=window,Pi=document,Qi=function(a){var b=Oi._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Oi["ga-disable-"+a])return!0;try{var c=Oi.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=db("AMP_TOKEN",Pi.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Pi.getElementById("__gaOptOutExtension")?!0:!1};var Wi=function(a,b,c){Vi(a);var d=Math.floor(va()/1E3);vi(a).e.push(new ti(b,d,c,void 0));xi(a)},Xi=function(a,b,c){Vi(a);var d=Math.floor(va()/1E3);vi(a).e.push(new ti(b,d,c,!0))},Vi=function(a){if(1===vi(a).c){vi(a).c=2;var b=encodeURIComponent(a);La(("http:"!=f.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Zi=function(a,b){},Yi=function(a,b){};var X={a:{}};
X.a.jsm=["customScripts"],function(){(function(a){X.__jsm=a;X.__jsm.g="jsm";X.__jsm.h=!0;X.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=K("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
X.a.e=["google"],function(){(function(a){X.__e=a;X.__e.g="e";X.__e.h=!0;X.__e.b=0})(function(){return wc})}();
X.a.f=["google"],function(){(function(a){X.__f=a;X.__f.g="f";X.__f.h=!0;X.__f.b=0})(function(a){var b=oh("gtm.referrer",1)||u.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?bb(cb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):nh(String(b)):String(b)})}();X.a.k=["google"],function(){(function(a){X.__k=a;X.__k.g="k";X.__k.h=!0;X.__k.b=0})(function(a){return rh(a.vtp_name,oh("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
X.a.r=["google"],function(){(function(a){X.__r=a;X.__r.g="r";X.__r.h=!0;X.__r.b=0})(function(a){return pa(a.vtp_min,a.vtp_max)})}();

X.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){X.__u=b;X.__u.g="u";X.__u.h=!0;X.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:oh("gtm.url",1))||lh();var d=b[a("vtp_component")];if(!d||"URL"==d)return nh(String(c));var e=cb(String(c)),g;if("QUERY"==d&&b[a("vtp_multiQueryKeys")])a:{var h=b[a("vtp_queryKey")],k;k=la(h)?h:String(h||"").replace(/\s+/g,"").split(",");for(var l=0;l<k.length;l++){var m=bb(e,"QUERY",void 0,void 0,
k[l]);if(null!=m){g=m;break a}}g=void 0}else g=bb(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0);return g})}();X.a.v=["google"],function(){(function(a){X.__v=a;X.__v.g="v";X.__v.h=!0;X.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=oh(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();




X.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},g=function(m){var n=oh(e[m.vtp_varType],1);return void 0!==n?n:m.vtp_defaultValue},h=function(m,
n){if(!m)return!1;var p=l(lh()),t;t=la(n.vtp_affiliatedDomains)?n.vtp_affiliatedDomains:String(n.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",");for(var q=[p],r=0;r<t.length;r++)if(t[r]instanceof RegExp){if(t[r].test(m))return!1}else{var v=t[r];if(0!=v.length){if(0<=l(m).indexOf(v))return!1;q.push(l(v))}}return!Jh(m,q)},k=/^https?:\/\//i,l=function(m){k.test(m)||(m="http://"+m);return bb(cb(m),"HOST",!0)};(function(m){X.__aev=m;X.__aev.g="aev";X.__aev.h=!0;X.__aev.b=0})(function(m){switch(m.vtp_varType){case "TAG_NAME":return oh("gtm.element",
1).tagName||m.vtp_defaultValue;case "TEXT":var n,p=oh("gtm.element",1),t=oh("event",1),q=Number(kh());a===p&&b===t&&c>q-250?n=d:(d=n=p?Ta(p):"",a=p,b=t);c=q;return n||m.vtp_defaultValue;case "URL":var r;a:{var v=String(oh("gtm.elementUrl",1)||m.vtp_defaultValue||""),x=cb(v);switch(m.vtp_component||"URL"){case "URL":r=v;break a;case "IS_OUTBOUND":r=h(v,m);break a;default:r=bb(x,m.vtp_component,m.vtp_stripWww,m.vtp_defaultPages,m.vtp_queryKey)}}return r;case "ATTRIBUTE":var y;if(void 0===m.vtp_attribute)y=
g(m);else{var w=oh("gtm.element",1);y=Ra(w,m.vtp_attribute)||m.vtp_defaultValue||""}return y;default:return g(m)}})}();

X.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=K("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Bd();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Ig()},m=function(p){return function(t,q,r){var v="DATA_LAYER"==p?oh(r):k[q];v&&(l[t]=v)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(p){return{value:p.price,quantity:p.quantity,item_id:p.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;b.push(l);a||(a=!0,G("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};X.__awct=h;X.__awct.g="awct";X.__awct.h=!0;X.__awct.b=0}();X.a.smm=["google"],function(){(function(a){X.__smm=a;X.__smm.g="smm";X.__smm.h=!0;X.__smm.b=0})(function(a){var b=a.vtp_input,c=Kh(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



X.a.paused=[],function(){(function(a){X.__paused=a;X.__paused.g="paused";X.__paused.h=!0;X.__paused.b=0})(function(a){z(a.vtp_gtmOnFailure)})}();
X.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=u.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Ka(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){z(h)}}}var b=function(d,e,g){Ad(function(){var h,k=qc;k.postscribe||(k.postscribe=ec);h=k.postscribe;var l={done:e},m=u.createElement("div");m.style.display="none";m.style.visibility="hidden";u.body.appendChild(m);try{h(m,d,l)}catch(n){z(g)}})};var c=function(d){if(u.body){var e=
d.vtp_gtmOnFailure,g=Ah(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.oc,k=g.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(u.body,Ua(h),k,e)()}else jh(function(){c(d)},
200)};X.__html=c;X.__html.g="html";X.__html.h=!0;X.__html.b=0}();



var $i={};$i.macro=function(a){if(tf.$b.hasOwnProperty(a))return tf.$b[a]},$i.onHtmlSuccess=tf.td(!0),$i.onHtmlFailure=tf.td(!1);$i.dataLayer=ed;$i.callback=function(a){yc.hasOwnProperty(a)&&ia(yc[a])&&yc[a]();delete yc[a]};$i.Ve=function(){qc[pc.m]=$i;zc=X.a;Sb=Sb||tf;Tb=sd};
$i.Jf=function(){qc=f.google_tag_manager=f.google_tag_manager||{};if(qc[pc.m]){var a=qc.zones;a&&a.unregisterChild(pc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Lb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Ob.push(e[g]);for(var h=b.predicates||[],k=0;k<h.length;k++)Nb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<
n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Mb.push(p)}Qb=X;Rb=Dh;$i.Ve();Re();vd=!1;wd=0;if("interactive"==u.readyState&&!u.createEventObject||"complete"==u.readyState)yd();else{Pa(u,"DOMContentLoaded",yd);Pa(u,"readystatechange",yd);if(u.createEventObject&&u.documentElement.doScroll){var q=!0;try{q=!f.frameElement}catch(y){}q&&zd()}Pa(f,"load",yd)}Fe=!1;"complete"===u.readyState?He():Pa(f,"load",He);a:{if(!Vc)break a;f.setInterval(Wc,864E5);}vc=(new Date).getTime();}};(0,$i.Jf)();

})()
