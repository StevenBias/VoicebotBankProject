/********************************************************************
 *
 * Main Plug-in code (should be in Plug-ins section)
 *
 *******************************************************************/
/*
 * Plugin Utility: apl v1.1
 */
s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)l=l?l+d+v:v;return l");


/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
 * Plugin: getValOnce 0.2
 */
s.getValOnce=new Function("v","c","e",""
+"var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");

s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

s.join = new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/*Plug-in: crossVisitParticipation v1.7 - stacks values from
specified variable in cookie and returns value
 */
s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
+"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
+";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){cook=ar"
+"ry[q];cook=s.repl(cook,'[','');cook=s.repl(cook,']','');cook=s.repl(cook,\"'\",'');arry"
+"[q]=s.split(cook,',')}}var e=new Date();e.setFullYear(e.getFullYear()+"
+"1);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len"
+"gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date("
+").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new"
+" Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td."
+"getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0"
+"]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',"
+"front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{deli"
+"m:dl});if(ce)s.c_w(cn,'');return r;");






// 55 CUSTOM PLUG-IN LIBRARY

function getTrafficSource (){
	
	var result,
		param_campaign= s.Util.getQueryParam("cmpid")||s.Util.getQueryParam("cid"),
		host,
    found = false;
		
	if(param_campaign!=""){
		result = param_campaign;
	}else{
		if(!document.referrer){
			result="DIR";
		}else{
      var param_referrer = s.Util.getQueryParam("cmpid", document.referrer)||s.Util.getQueryParam("cid", document.referrer);
      if(param_referrer!=""&&!/event1/.test(s.cookieRead("PrevPageEvent"))){
      	result = param_referrer;
      }else{
        var lists = _satellite.getVar("Referrer_Attribution_Source");
          for(var list in lists){
            for(var source in lists[list]){
              host = lists[list][source].split("|")[0];
                if(new RegExp(host,"g").test(document.referrer)){
                  switch(list){
                    case "0" : 
                      result = "SEO__STD__"+host;
                      break;

                    case "1" : 
                      result = "SOC__STD__"+host;
                      break;

                    case "2" :
                      result = "INT__STD__"+host;
                      break;
                  }
                  found = true;
                  break;
                }
           }
          }
          if(!found){
            result = "REF__STD__"+document.referrer.split("/")[2]; 
          }
      }
    }
  }
	return result;
}

function prioTrafficSource(realSource){
 	var prio = realSource; 
  var i_p,i_l_p;
  var prefix_prio = prio.split("__")[0];
  var last_prio = s.Util.cookieRead("55_lastPrioSource");
  var prefix_last_prio = last_prio.split("__")[0];
  var canaux = [ "AFF|SEM|DIS|RET|EPA|EMA", "SEO|SOC" , "REF" , "DIR|INT"];
  
  for(var i in canaux){
    if(prefix_prio.match(canaux[i])){
      i_p = i;
    }
    if(prefix_last_prio.match(canaux[i])){
			i_l_p = i;
    }
  }
  
  if(i_p-i_l_p> 0){
		prio = last_prio;
  }else{
    if(prio !== ""){
      flag_source_prio = true;
      var date = new Date();
      date.setMonth(date.getMonth()+1)
      s.Util.cookieWrite("55_lastPrioSource",prio,date);
    }
  }
  
  return prio;
}
