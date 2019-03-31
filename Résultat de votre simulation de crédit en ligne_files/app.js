/*Utils*/
try{


var wcmHelper = {};
var loadedFlag=false;
var mobileThreshold = 640;
//if(navigator.userAgent.toLowerCase().indexOf("iphone") != -1){
  //mobileThreshold = 640;
//}
var tabletThreshold = 768;
var largeTabletThreshold = 1024;

var viewport = function() {
    return { width: window.innerWidth, height: window.innerHeight };
};
var getScreenWidth = function() {

   
  try{
     if (!isNaN(window.orientation)) {
        if (window.orientation == 90 || window.orientation == -90){
          return viewport().width;
        } 
        return viewport().width;
    }
    return viewport().width;
  }catch(e){
    ////console.log(e);
  }


};


  $(function() {
       if (getScreenWidth() > mobileThreshold) {
            $('.lazy').lazy({
            // called before an elements gets handled
            beforeLoad: function(element) {
                var imageSrc = element.data('src');
                //console.log('image "' + imageSrc + '" is about to be loaded');
            },
            
            // called after an element was successfully handled
            afterLoad: function(element) {
                var imageSrc = element.data('src');
                //console.log('image "' + imageSrc + '" was loaded successfully');
            },
            
            // called whenever an element could not be handled
            onError: function(element) {
                var imageSrc = element.data('src');
                //console.log('image "' + imageSrc + '" could not be loaded');
            },
            
            // called once all elements was handled
            onFinishedAll: function() {
                //console.log('finished loading all images');
            }
        });
       }else{
          $(".lazy").each(function () {
          if($(this).css('background-image') == 'none'){
            //$(this).attr("data-src","")
            var value_data_src=$(this).attr("data-src");
            $(this).removeAttr("data-src");    
             $(this).attr("data-src-lazy",value_data_src);       

          }
       });
          
       }
       
        

        //$('.lazy').lazy();
  });
(function($) {

    /**
     * Open a popin
     * 
     * @param popinId {String} 
     */
    var openPopin = function openPopin(popinId) {
        $("#trigger-" + popinId).trigger("click");
    };

    var closePopin = function closePopin(popinId) {
        $("#" + popinId).find(".close").trigger("click");
    }

    wcmHelper.popin = {
        open: openPopin,
        close: closePopin
    };
   $(".list").click(function(event){
          $(".panel-cntr").addClass("hide");
         $(event.target).parent().next().removeClass("hide");
  });
  $(".list").click(function(event){
          $(".panel-cntr").addClass("hide");
         $(event.target).parent().next().removeClass("hide");
  });
   $(".panel-cntr .close").click(function(event){
          $(".panel-cntr").addClass("hide");
  });
 //if(window.location.pathname=="/fr/credit/souscription-credit"){
   // 
 //}  











  
} (jQuery));

 $('.homeTelephoneNumber').on('keydown input', function(e){
	//console.log("homeTelephoneNumber");
    var inputLength = jQuery(this).val().length;

    if(inputLength >= 10) {
		//console.log("inputLength : ");
        e.preventDefault();
        return false
    }
})

var _orientationChangeTimeout;

var debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
var stopLoaderCallback = function(IAContainerId) {
    $('#' + IAContainerId).addClass('iaInit');
};
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays *24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
	var path = "path=/";
    document.cookie = cname + "=" + cvalue + "; " + expires+ "; " +path;
}
function setCookieMinutes(cname,cvalue,cminutes){
    var d = new Date();
    d.setTime(d.getTime() +  (cminutes*60*1000));
    var expires = "expires=" + d;
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function setMonthCookie(cname,cvalue,exmonths){
  var cdate= new Date();
  cdate.setMonth(cdate.getMonth()+exmonths);
  var expires = "expires=" + cdate.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function dataAppend(data){
return "<div data-value='" + data.value + "'data-code= '" + data.code + "'data-cdd='" + data.cdd + "'data-id='" + data.id + "'data-produit='" + data.produit + "'data-type='" + data.type + "'>" + data.text + "</div>";
}



function dataChangeEvents(obj){
	var idPanel,code,produit,type,typeOfProject;
	idPanel = 'panel-1';
  if(obj.code=="919a"){
    code="919";
  }else{
    code = obj.code;
  }
	produit = obj.produit;
	type = obj.cdd;
	typeOfProject = obj.name;
	updateIaPanel(idPanel,code,produit,type,typeOfProject);
}


function parseURL(url) {
    var a=document.createElement('a');
    a.href=url;
    return a.hostname;
}

var containsAny=function(referrerSitestr, referrerSites){
  for (var intValue = 0; intValue != referrerSites.length; intValue++) {
       var substring = referrerSites[intValue];
       if (referrerSitestr.indexOf(substring) != - 1) {
         return "true";
       }
    }
    return "false"; 
}
var Cofinoga=function(){
  var query = (window.location.search || '?').substr(1),map   = {};
  query.replace(/([^&=]+)=?([^&]*)(?:&+|$)/g, function(match, key, value) {(map[key] = map[key] || []).push(value);});
  
  var coValue = map.co? (map.co).toString(): undefined;
  if(coValue){coValue=decodeURI(coValue);}
  var default_orgin="LDEFO";
  var default_seo="LSEO1";
  var deviceType = sfAxes2;
  var deviceCode;
      switch(deviceType){
        case "MOBILE": deviceCode ="M";
        break;
        case "TAB": deviceCode ="T";
        break;
        case "PC": deviceCode ="D";
        break;
        default: deviceCode ="D";
      }
  //default_orgin+=deviceCode;
  //default_seo+=deviceCode;

  if(typeof coValue !== "undefined"){
    var emulValue = map.emul? (map.emul).toString(): undefined ;
    if(typeof emulValue !== "undefined"){
      setCookie("code_origine",coValue,30);
      /*if(!sessionStorage.getItem("code_origine")){
        sessionStorage.setItem("code_origine",coValue);
      }*/
    }else {
      
      /*if(!sessionStorage.getItem("code_origine")){
        sessionStorage.setItem("code_origine",coValue+deviceCode);
      }*/
      setCookie("code_origine",coValue+deviceCode,30);
    }
  } else {
      var cookieValue = getCookie("code_origine");
      if(((cookieValue.indexOf(default_orgin) >= 0) || (cookieValue.indexOf(default_seo) >= 0) || (cookieValue==""))){
        var referrerSite = document.referrer;
        if(referrerSite){
          var referrerSite = parseURL(document.referrer);
          var referreSiteList = ["google", "yahoo", "bing","voila","frask.com"];
          var referrerResult =  containsAny(referrerSite,referreSiteList);
          if(referrerResult == "true"){
            /*if(!sessionStorage.getItem("code_origine")){
              sessionStorage.setItem("code_origine",default_seo+deviceCode);
            }*/
            setCookie("code_origine",default_seo+deviceCode,30);
          }else {
            /*if(!sessionStorage.getItem("code_origine")){
              sessionStorage.setItem("code_origine",default_orgin+deviceCode);
            }*/
            if(!(referrerSite=="cetelem"))
            setCookie("code_origine",default_orgin+deviceCode,30);
          }
        } else {
          /*if(!sessionStorage.getItem("code_origine")){
            sessionStorage.setItem("code_origine",default_orgin+deviceCode);
          }*/
          setCookie("code_origine",default_orgin+deviceCode,30);
        }
      } 
       
  }
}


Cofinoga();

var $window = $(window);
var eventType = window.onorientationchange ? 'onorientationchange' : 'debouncedresize';

var isIE = window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
/**/

/* Call this manager for noUiSlider to work with points and steps */
var noUiSliderManager = function(sliderId) {
    var $slider = $(sliderId),
        $points = $slider.find('.point'),
        $steps = $slider.siblings('.stepContainer').find('.step');
    this.init = function() {
        this.refreshSlider();
        this.initEvents();
        this.init = function() { };
    };

    noUiSliderManager.prototype.refreshSlider = function() {
        for (var i = 0, j = $points.length; i < j; i++) {
            $($points[i]).removeClass('active');
            $($points[i]).removeClass('selected active');
            if (parseInt($($points[i]).data('point')) == parseInt($slider.val())) {
                $($points[i]).addClass('selected');
            }
            if (parseInt($($points[i]).data('point')) < parseInt($slider.val())) {
                $($points[i]).addClass('active');
            }
        }
        for (var i = 0, j = $steps.length; i < j; i++) {
            $($steps[i]).removeClass('selected');
            if (parseInt($($steps[i]).data('point')) == parseInt($slider.val())) {
                $($steps[i]).addClass('selected');
            }
        }
    };

    noUiSliderManager.prototype.initEvents = function() {
        $slider.on({
            set: this.refreshSlider
        });
        $points.click(function() {
            $slider.val(parseInt($(this).data('point')));
        });
        $steps.click(function() {
            $slider.val(parseInt($(this).data('point')));
        });
        $('.commutable').click(function() {
            var clicked = $(this);
            clicked.parents(".sliderContainer").find('.commutable').removeClass('active');
            clicked.addClass('active');
        });
    };

    this.init();
};


// Small implementation of Observable inspired by RXjS thanks Jafar Husain

function Observable(forEach) {
  this._forEach = forEach;
}

Observable.fromEvent = function (dom, eventName) {
  return new Observable(function forEach(observer) {
    var handler = function handler(e) {
      return observer.onNext(e);
    };
    if(dom) dom.addEventListener(eventName, handler);

    return {
      dispose: function dispose() {
      if(dom) dom.removeEventListener(eventName, handler);
      }
    };
  });
};

Observable.prototype.forEach = function (observerOrOnNext, onError, onCompleted) {
  if (typeof observerOrOnNext === "function") {
    return this._forEach({
      onNext: observerOrOnNext,
      onError: onError || function () {},
      onCompleted: onCompleted || function () {}
    });
  } else {
    return this._forEach(observerOrOnNext);
  }
};

Observable.prototype.map = function (projectionFunction) {
  var source = this;
  return new Observable(function forEach(observer) {
    return source.forEach(function onNext(value) {
      observer.onNext(projectionFunction(value));
    }, function onError(error) {
      observer.onError(error);
    }, function onCompleted() {
      observer.onCompleted();
    });
  });
};

Observable.prototype.filter = function (testFunction) {
  var source = this;
  return new Observable(function forEach(observer) {
    return source.forEach(function onNext(value) {
      if (testFunction(value)) {
        observer.onNext(value);
      }
    }, function onError(error) {
      observer.onError(error);
    }, function onCompleted() {
      observer.onCompleted();
    });
  });
};

// End Observable 
  var offset = 300,
  offset_opacity = 1200,
  scroll_top_duration = 700,
  $back_to_top = $('.to-top-cntr');

  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('cd-fade-out');
    }
  });


  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });


// Copyright 2012-2014 (c) Peter Širka <petersirka@gmail.com>

function bindings_create(e, n, t) { var i = this; if ("undefined" == typeof e || null === e) return $.extend({}, i.data("model")); var a = i.data("model"); if (i.data("isChange", !1), "undefined" != typeof a) return "function" == typeof e ? (a = e(a), a && i.data("model", a)) : i.data("model", e), bindings_refresh.call(i, t), i.trigger("model-update", [e, t]), i; if ("undefined" != typeof n) { if ("/" === n.substring(0, 1)) return i.trigger("template-download-begin", [n]), $.get(n, {}, function(e) { i.trigger("template-download-end", [n, e]), bindings_create.call(i, i.data("model"), e) }), void 0; -1 !== n.indexOf(">") && -1 !== n.indexOf("<") ? i.html(n) : n = $(n).html() } return i.data("default", $.extend(!0, {}, e)), i.data("model", e), i.on("change", "input[data-model]", function(e) { bindings_internal_change.call(this, e, i, i.data("model"), t) }), i.on("change", "textarea[data-model],select[data-model]", function(e) { bindings_internal_change.call(this, e, i, i.data("model"), t) }), bindings_refresh.call(i, t), bindings_delay(function() { i.trigger("model-create", [e, t]) }), bindings_rebind.call(i) } function bindings_internal_change(e, n, t, i) { var a = $(this), r = a.attr("data-model"), d = a.attr("type"), o = a.val(); /(MSIE\ [0-8]\.\d+)/.test(navigator.userAgent) || e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), "checkbox" === d && (o = this.checked); var l = a.attr("data-prepare"), s = $.bindings.prepare.call(a, r, o, l, t, i); "undefined" == typeof s && (s = $.bindings._prepare.call(a, r, o, l, t, i)); var u = $.bindings._validation.call(a, r, s, t, i); if ($.bindings.watch.call(a, u, r, s, t, i), u) { if (bindings_setvalue.call(a, t, r, s, i), "checkbox" !== d && "radio" !== d) switch (this.tagName.toLowerCase()) { case "input": case "textarea": this.value = $.bindings.format.call(a, r, s, a.attr("data-format"), n.data("model"), i) } else this.checked = o; bindings_rebind.call(n, i), n.data("isChange", !0), bindings_delay(function() { n.trigger("model-change", [r, s, t, i, a]), n.trigger("model-update", [t, r, i]) }) } } function bindings_json(e, n, t) { var i = this, a = $(e), r = a.get(0).tagName.toLowerCase(); switch (r) { case "input": case "select": case "textarea": return bindings_create.call(i, $.parseJSON(a.val().replace(/\n/g, "\\n")), n, t), void 0 }return bindings_create.call(i, $.parseJSON(a.html().replace(/\n/g, "\\n")), n, t), i } function bindings_download(e, n, t, i) { var a = this; if ("object" == typeof n) { t = n, n = t } t || (t = {}), t.type || (t.type = "GET"), t.dataType || (t.dataType = "json"); var r = e + JSON.stringify(t); return jquerybindings_cache[r] ? void 0 : (a.trigger("model-download-begin", [e]), t.success = function(t) { a.trigger("model-download-end", [e, t, i]), delete jquerybindings_cache[r], bindings_create.call(a, t, n, i) }, t.error = function(n, t) { a.trigger("model-download-end", [e, i]), delete jquerybindings_cache[r], a.trigger("model-download-error", [t, e, i]) }, $.ajax(e, t), a) } function bindings_destroy() { var e = this, n = e.attr("data-name"); return e.removeData("model"), e.removeData("default"), e.removeData("isChange"), e.find("input[data-model],textarea[data-model],select[data-model]").unbind("change"), e.trigger("model-destroy", [n]), e } function bindings_default() { var e = this, n = e.data("default"), t = e.attr("data-name"); return e.data("model", $.extend({}, n)), e.data("isChange", !1), bindings_refresh.call(e, t), bindings_delay(function() { e.trigger("model-default", [n, t]) }), e } function bindings_validate(e) { var n = this, t = n.data("model"), i = []; return bindings_reflection(t, function(t, a) { var r = $.bindings._validation(t, a, e); "undefined" == typeof r || null === r || r || i.push({ path: t, value: a, element: n.find('input[data-model="' + t + '"],textarea[data-model="' + t + '"],select[data-model="' + t + '"]') }) }), n.trigger("validate", [i, e]), n.trigger("validation", [i, e]), n.trigger("model-validate", [i, e]), n.trigger("model-validation", [i, e]), n } function bindings_set(e, n, t) { var i = this, a = i.data("model"); if ("undefined" == typeof a) return i; "function" == typeof n && (n = n(bindings_getvalue(a, e, t))); var r = $.bindings._validation(e, n, a, t); return $.bindings.watch.call($('input[data-model="' + e + '"],textarea[data-model="' + e + '"],select[data-model="' + e + '"]'), r, e, n, a, t), r ? (bindings_setvalue(a, e, n, t) && bindings_refresh.call(i, t), i.data("isChange", !0), i.trigger("model-update", [a, e, t]), i) : i } function bindings_get(e, n) { var t = this, i = t.data("model"); return "undefined" != typeof i ? bindings_getvalue(i, e, n) : void 0 } function bindings_rebind_force(e) { var n = this, t = n.data("model"); return "undefined" == typeof t ? n : (n.find("[data-model]").each(function() { var n = this.tagName.toLowerCase(); if ("input" !== n && "select" !== n && "textarea" !== n) { var i = $(this), a = i.attr("data-model"), r = i.attr("data-custom"), d = bindings_getvalue(t, a); if ("undefined" != typeof r) return $.bindings.custom.call(i, a, d, r || "", t, e), void 0; var o = (i.attr("data-encode"), $.bindings.format.call(i, a, d, i.attr("data-format"), t, e)); "undefined" == typeof o && (o = ""), "string" != typeof o && (o = o instanceof Array ? o.join(", ") : null === o ? "" : o.toString()), i.html(o) } }), n) } function bindings_rebind(e) { var n = this, t = n.data("model"); if ("undefined" == typeof t) return n; var i = n.data("timeout_rebind") || null; null !== i && clearTimeout(i); var i = setTimeout(function() { bindings_rebind_force.call(n, e) }, 100); return n.data("timeout_rebind", i), n } function bindings_refresh(e) { var n = this, t = n.data("model"); if ("undefined" == typeof t) return n; var i = n.data("timeout_refresh") || null; null !== i && clearTimeout(i); var i = setTimeout(function() { bindings_refresh_force.call(n, e) }, 100); return n.data("timeout_refresh", i), n } function bindings_refresh_force(e) { var n = this, t = n.data("model"); return "undefined" == typeof t && (t = {}, n.data("model", t)), n.find("[data-model]").each(function() { var i = $(this), a = i.attr("data-model") || "", r = !1; switch (this.tagName.toLowerCase()) { case "input": case "textarea": case "select": r = !0 }var d = bindings_getvalue(t, a, e), o = i.attr("data-format"), l = i.attr("data-custom"); if ("undefined" == typeof d && (d = i.attr("data-default")), "undefined" != typeof l) return $.bindings.custom.call(i, a, d, l || "", t, e), void 0; var s = $.bindings.format.call(n, a, d, o, t, e); if (r) { var u = i.attr("type"); if ("checkbox" === u) this.checked = d === !0 || 1 === d || "true" === d; else if ("radio" === u) { if (this.value != d) return; this.checked = !0 } else i.val(s) } else { var c = i.attr("data-encode"), f = "undefined" != typeof c && "false" === c; "undefined" == typeof s && (s = ""), "string" != typeof s && (s = s instanceof Array ? s.join(", ") : null === s ? "" : s.toString()), i.html(f ? s : s.encode()) } }), n } function bindings_send(e, n, t, i) { var a = this, r = a.data("model"); if (!r) return a; var a = this; if ($.isPlainObject(e)) { var d = n; n = e, e = d } e = e || window.location.pathname, n || (n = {}), n.type || (n.type = "POST"), n.dataType || (n.dataType = "json"); var o = e + JSON.stringify(n); return jquerybindings_cache[o] ? void 0 : (a.trigger("model-send-begin", [e, r, t]), n.contentType = "application/json", n.data = JSON.stringify(r), n.success = function(n) { a.trigger("model-send-end", [e, r, t]), delete jquerybindings_cache[o], a.trigger("send", [n, r, t]), a.trigger("model-send", [n, r, t]), i && i(null, n) }, n.error = function(n, d) { a.trigger("model-send-end", [e, r, t]), delete jquerybindings_cache[o], a.trigger("model-send-error", [d, e, r, t]), i && i(d, null) }, $.ajax(e, n), a) } function bindings_setvalue(e, n, t) { n = n.split("."); for (var i = n.length, a = e, r = 0; i - 1 > r; r++)if (a = bindings_findpipe(a, n[r]), "undefined" == typeof a) return !1; return a = bindings_findpipe(a, n[i - 1], t), !0 } function bindings_findpipe(e, n, t) { var i, a = n.lastIndexOf("["), r = -1; if (-1 !== a) { if (r = parseInt(n.substring(a + 1).replace(/\]\[/g, "")), isNaN(r)) return; n = n.substring(0, a), i = e[n][r] } else i = e[n]; return "undefined" != typeof i ? "undefined" == typeof t ? i : (-1 !== r ? (e[n][r] = t, i = e[n][r]) : (e[n] = t, i = e[n]), i) : void 0 } function bindings_getvalue(e, n) { n = n.split("."); for (var t = (n.length, e), i = 0; i < n.length; i++)if (t = bindings_findpipe(t, n[i]), "undefined" == typeof t) return; return t } function bindings_reflection(e, n, t) { t = t || ""; for (var i in e) if ("string" == typeof i) { var a = t + ("" !== t ? "." : "") + i, r = typeof e[i]; "function" !== r && (n(a, e[i], i), "object" === r && bindings_reflection(e[i], n, a)) } } function bindings_delay(e) { setTimeout(function() { e() }, 120) } var jquerybindings_cache = {}; $.bindings = {}, $.fn.bindings = function(e) { var n = this; "undefined" == typeof e && (e = "model"); var t = n.attr("data-name"); switch (e) { case "create": return function(e, i) { return bindings_create.call(n, e, i, t) }; case "json": return function(e, i) { return bindings_json.call(n, e, i, t) }; case "download": return function(e, i, a) { return bindings_download.call(n, e, i, a, t) }; case "change": return function(e) { return "boolean" != typeof e ? n.data("isChange") || !1 : n.data("isChange", e) }; case "refresh": return bindings_refresh.call(n, t), void 0; case "destroy": return bindings_destroy.call(n, t), void 0; case "default": return bindings_default.call(n, t), void 0; case "validate": case "validation": return bindings_validate.call(n, t); case "set": return function(e, i) { return bindings_set.call(n, e, i, t) }; case "get": return function(e) { return bindings_get.call(n, e, t) }; case "update": return function(e) { return bindings_create.call(n, e, t) }; case "model": return bindings_create.call(n, null, null, t); case "send": return function(e, i, a) { if ("function" == typeof i) { a = i, i = a } return bindings_send.call(n, e, i, t, a) } }return n }, $.bindings.prepare = function() { }, $.bindings._prepare = function(e, n, t, i) { if ("string" != typeof n) return n; if (bindings_getvalue(i, e) instanceof Array) { for (var a = n.split(","), r = a.length, d = [], o = 0; r > o; o++) { var l = $.trim(a[o]); l.length > 0 && d.push(l) } return d } return n.isNumber() ? "0" === n[0] && n.length > 1 ? n : (n = n.replace(",", "."), -1 === n.indexOf(".") ? parseInt(n) : parseFloat(n)) : n }, $.bindings.format = function(e, n) { return n instanceof Array ? n.join(", ") : n }, $.bindings.custom = function() { }, $.bindings.watch = function() { }, $.bindings.validation = function() { return !0 }, $.bindings._validation = function(e, n, t, i) { var a = $.bindings.validation(e, n, t, i); return ("undefined" == typeof a || null === a) && (a = !0), a === !0 }, String.prototype.isNumber || (String.prototype.isNumber = function(e) { var n = this, t = n.length; if (0 === t) return !1; e = e || !0; for (var i = 0; t > i; i++) { var a = n.charCodeAt(i); if (!e || 44 !== a && 46 !== a) { if (48 > a || a > 57) return !1 } else e = !1 } return !0 }), String.prototype.encode || (String.prototype.encode = function() { return this.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") });




function template_parse(template) { var self = this; var indexBeg = 0; var indexer = 0; var index = 0; var builder = []; var property = []; var keys = {}; var tmp = template.match(/(@)?\{[^}\n]*\}/g); if (tmp === null) tmp = []; var length = tmp.length; for (var i = 0; i < length; i++) { var format = ""; var name = tmp[i]; var isEncode = true; indexEnd = template.indexOf(name, indexBeg); var b = template.substring(indexBeg, indexEnd); builder.push(b); indexBeg = indexEnd + name.length; index = name.indexOf("|"); if (index !== -1) { format = name.substring(index + 1, name.length - 1).trim().replace(/&nbsp;/g, " "); name = name.substring(1, index); var pluralize = template_parse_pluralize(format); if (pluralize.length === 0) { if (format.indexOf("#") === -1) { var condition = template_parse_condition(format); if (condition.length === 0) { var count = parseInt(format, 10); if (isNaN(count)) count = 0; if (count === 0) { format = ".format('" + format + "')" } else format = ".max(" + (count + 3) + ",'...')" } else format = ".condition(" + condition + ")" } else format = ".format('" + format + "')" } else format = pluralize } else name = name.substring(1, name.length - 1); if (name[0] === "!") { name = name.substring(1); isEncode = false } name = name.trim(); if (isEncode) format += ".toString().encode()"; var controller = ""; var key = name + format; indexer = keys[key]; if (typeof indexer === "undefined") { property.push(name.trim()); indexer = property.length - 1; keys[key] = indexer } builder.push("prop[" + indexer + "]" + format) } if (indexBeg !== template.length) builder.push(template.substring(indexBeg)); var fn = []; var length = builder.length; for (var i = 0; i < length; i++) { var str = builder[i]; if (i % 2 !== 0) { if (str.length > 0) fn.push(str) } else fn.push("'" + str.replace(/\'/g, "\\'").replace(/\n/g, "\\n") + "'") } return { generator: new Function("prop", "return " + fn.join("+").replace(/\n|\r|\t/g, "")), property: property } } function template_eval(generator, model, indexer) { var params = []; var length = generator.property.length; for (var i = 0; i < length; i++) { var property = generator.property[i]; var val; if (property !== "") { if (property.indexOf(".") !== -1) { var arr = property.split("."); var length2 = arr.length; if (length2 === 2) val = model[arr[0]][arr[1]]; else if (length2 === 3) val = model[arr[0]][arr[1]][arr[2]]; else if (length2 === 4) val = model[arr[0]][arr[1]][arr[2]][arr[3]]; else if (length2 === 5) val = model[arr[0]][arr[1]][arr[2]][arr[3]][arr[4]]; else if (length2 === 6) val = model[arr[0]][arr[1]][arr[2]][arr[3]][arr[4]][arr[5]]; else if (length2 === 7) val = model[arr[0]][arr[1]][arr[2]][arr[3]][arr[4]][arr[5]][arr[6]] } else if (property === "#") val = indexer; else val = model[property] } else val = model; if (typeof val === "function") val = val(i); if (typeof val === "undefined" || val === null) val = ""; params.push(val) } return generator.generator.call(null, params) } function template_parse_pluralize(value) { value = value.trim(); var condition = value.substring(0, 1); if (condition !== '"' && condition !== "'") return ""; var index = value.indexOf(condition, 1); if (index === -1) return ""; var a = value.substring(1, index).replace(/\'/g, "\\'"); var b = ""; var c = ""; var d = ""; var beg = value.indexOf(condition, index + 1); if (beg === -1) return ""; index = value.indexOf(condition, beg + 1); b = value.substring(beg + 1, index).replace(/\'/g, "\\'"); c = ""; beg = value.indexOf(condition, index + 1); if (beg === -1) return ""; index = value.indexOf(condition, beg + 1); c = value.substring(beg + 1, index).replace(/\'/g, "\\'"); beg = value.indexOf(condition, index + 1); if (beg === -1) return -1; index = value.indexOf(condition, beg + 1); d = value.substring(beg + 1, index).replace(/\'/g, "\\'"); return ".pluralize('{0}','{1}','{2}','{3}')".format(a, b, c, d) } function template_parse_condition(value) { value = value.trim(); var condition = value[0]; if (condition !== '"' && condition !== "'") return ""; var index = value.indexOf(condition, 1); if (index === -1) return ""; var a = value.substring(1, index).replace(/\'/g, "\\'"); index = value.indexOf(condition, index + 2); if (index === -1) return "'{0}'".format(a); return "'{0}','{1}'".format(a, value.substring(index + 1, value.length - 1).replace(/\'/g, "\\'")) } String.prototype.max = function(length, chars) { var str = this; chars = chars || "..."; return str.length > length ? str.substring(0, length - chars.length) + chars : str }; if (!String.prototype.encode) { String.prototype.encode = function() { return this.replace(/\&/g, "&amp;").replace(/\>/g, "&gt;").replace(/\</g, "&lt;").replace(/\"/g, "&quot;") } } if (!String.prototype.decode) { String.prototype.decode = function() { return this.replace(/&gt;/g, ">").replace(/\&lt;/g, "<").replace(/\&quot;/g, '"').replace(/&amp;/g, "&") } } if (!Date.prototype.format) { Date.prototype.format = function(format) { var self = this; var h = self.getHours(); var m = self.getMinutes().toString(); var s = self.getSeconds().toString(); var M = (self.getMonth() + 1).toString(); var yyyy = self.getFullYear().toString(); var d = self.getDate().toString(); var a = "AM"; var H = h.toString(); if (h >= 12) { h -= 12; a = "PM" } if (h === 0) h = 12; h = h.toString(); var hh = h.padLeft(2, "0"); var HH = H.padLeft(2, "0"); var mm = m.padLeft(2, "0"); var ss = s.padLeft(2, "0"); var MM = M.padLeft(2, "0"); var dd = d.padLeft(2, "0"); var yy = yyyy.substring(2); return format.replace(/yyyy/g, yyyy).replace(/yy/g, yy).replace(/MM/g, MM).replace(/M/g, M).replace(/dd/g, dd).replace(/d/g, d).replace(/HH/g, HH).replace(/H/g, H).replace(/hh/g, hh).replace(/h/g, h).replace(/mm/g, mm).replace(/m/g, m).replace(/ss/g, ss).replace(/s/g, ss).replace(/a/g, a) } } if (!String.prototype.trim) { String.prototype.trim = function() { return this.replace(/^[\s]+|[\s]+$/g, "") } } if (!Number.prototype.format) { Number.prototype.format = function(format) { var index = 0; var num = this.toString(); var beg = 0; var end = 0; var max = 0; var output = ""; var length = 0; if (typeof format === "string") { var d = false; length = format.length; for (var i = 0; i < length; i++) { var c = format.substring(i, i + 1); if (c === "#") { if (d) end++; else beg++ } if (c === ".") d = true } var strBeg = num; var strEnd = ""; index = num.indexOf("."); if (index !== -1) { strBeg = num.substring(0, index); strEnd = num.substring(index + 1) } if (strBeg.length > beg) { max = strBeg.length - beg; var tmp = ""; for (var i = 0; i < max; i++)tmp += "#"; format = tmp + format } if (strBeg.length < beg) strBeg = strBeg.padLeft(beg, " "); if (strEnd.length < end) strEnd = strEnd.padRight(end, "0"); if (strEnd.length > end) strEnd = strEnd.substring(0, end); d = false; index = 0; var skip = true; length = format.length; for (var i = 0; i < length; i++) { var c = format.substring(i, i + 1); if (c !== "#") { if (skip) continue; if (c === ".") { d = true; index = 0 } output += c; continue } var value = d ? strEnd.substring(index, index + 1) : strBeg.substring(index, index + 1); if (skip) skip = [",", " "].indexOf(value) !== -1; if (!skip) output += value; index++ } return output } output = "### ### ###"; beg = num.indexOf("."); max = format || 0; if (max === 0 && beg !== -1) max = num.length - (beg + 1); if (max > 0) { output += "."; for (var i = 0; i < max; i++)output += "#" } return this.format(output) } } if (!Number.prototype.pluralize) { Number.prototype.pluralize = function(zero, one, few, other) { var num = this; var value = ""; if (num == 0) value = zero || ""; else if (num == 1) value = one || ""; else if (num > 1 && num < 5) value = few || ""; else value = other; var beg = value.indexOf("#"); var end = value.lastIndexOf("#"); if (beg === -1) return value; var format = value.substring(beg, end + 1); return num.format(format) + value.replace(format, "") } } if (!String.prototype.padLeft) { String.prototype.padLeft = function(max, c) { var self = this; return Array(Math.max(0, max - self.length + 1)).join(c || "0") + self } } if (!String.prototype.padRight) { String.prototype.padRight = function(max, c) { var self = this; return self + Array(Math.max(0, max - self.length + 1)).join(c || "0") } } String.prototype.template = function(model) { var generator = template_parse(this); if (!(model instanceof Array)) return template_eval(generator, model, 0); var builder = ""; var length = model.length; for (var i = 0; i < length; i++)builder += template_eval(generator, model[i], i); return builder }; if (!String.prototype.format) { String.prototype.format = function() { var formatted = this; var length = arguments.length; for (var i = 0; i < length; i++) { var regexp = new RegExp("\\{" + i + "\\}", "gi"); formatted = formatted.replace(regexp, arguments[i]) } return formatted } } $.fn.template = function(model, template, append) { var self = this; if (typeof template === "boolean") { var tmp = append; append = template; template = append } if (typeof model === "string" && typeof template === "undefined") { var tmp = template; template = model; model = tmp } template = template || ""; var id = template; if (template.length > 0) { if (template.indexOf("{") === -1) template = $(template).html() } var isArray = model instanceof Array; var length = isArray ? model.length : 0; self.each(function() { var self = this; var el = $(self); var obj = el.data("generator"); var isTable = self.nodeName.toLowerCase() === "table"; if (typeof obj === "undefined") { if (template.length === 0) { template = el.attr("data-template"); if (typeof template === "undefined" || template.length === 0) { if (isTable) template = el.find("tr")[0].outerHTML; else template = el.html() } } obj = template_parse(template); el.data("generator", obj) } if (typeof model === "undefined" || model === null) { if (isTable) el.find("tr").remove(); else el.html(""); return } if (!isArray) { if (append) { el.append(template_eval(obj, model, 0)); return } if (!isTable) { el.html(template_eval(obj, model, 0)); return } el.find("tr").remove(); el.append(template_eval(obj, model, 0)); return } var builder = ""; for (var i = 0; i < length; i++)builder += template_eval(obj, model[i], i); if (append === true) { el.append(builder); return } if (!isTable) { el.html(builder); return } el.find("tr").remove(); el.append(builder) }); return self }; if (!Array.prototype.indexOf) { Array.prototype.indexOf = function(value, index) { var self = this; var length = self.length; for (var i = index; i < length; i++)if (self[i] === value) return i; return -1 } } Number.prototype.condition = function(ifTrue, ifFalse) { return (this % 2 === 0 ? ifTrue : ifFalse) || "" }; Boolean.prototype.condition = function(ifTrue, ifFalse) { return (this == true ? ifTrue : ifFalse) || "" };

/**
 * stacktable.js
 * Author & copyright (c) 2012: John Polacek
 * CardTable by: Justin McNally (2015)
 * Dual MIT & GPL license
 *
 * Page: http://johnpolacek.github.com/stacktable.js
 * Repo: https://github.com/johnpolacek/stacktable.js/
 *
 * jQuery plugin for stacking tables on small screens
 *
 */
; (function($) {

    $.fn.stackcolumns = function(options) {
        var $tables = this,
            defaults = { id: 'stacktable small-only', hideOriginal: true },
            settings = $.extend({}, defaults, options);

        for (var i = 0, j = $tables.length; i < j; i++) {
            $table = $($tables[i]);
            var num_cols = $table.find('tr').eq(0).find('td,th').length; //first table <tr> must not contain colspans, or add sum(colspan-1) here.
            if (num_cols < 3) //stackcolumns has no effect on tables with less than 3 columns
                return;

            var $stackcolumns = $('<table class="' + settings.id + '"></table>');
            if (typeof settings.myClass !== 'undefined') $stackcolumns.addClass(settings.myClass);
            $table.addClass('stacktable large-only');
            var tb = $('<tbody></tbody>');
            var col_i = 1; //col index starts at 0 -> start copy at second column.

            while (col_i < num_cols) {
                $table.find('tr').each(function(index, value) {
                    var tem = $('<tr></tr>'); // todo opt. copy styles of $this; todo check if parent is thead or tfoot to handle accordingly
                    if (index === 0) tem.addClass("st-head-row st-head-row-main");
                    first = $(this).find('td,th').eq(0).clone().addClass("st-key");
                    var target = col_i;
                    // if colspan apply, recompute target for second cell.
                    if ($(this).find("*[colspan]").length) {
                        var i = 0;
                        $(this).find('td,th').each(function(index, value) {
                            var cs = $(this).attr("colspan");
                            if (cs) {
                                cs = parseInt(cs, 10);
                                target -= cs - 1;
                                if ((i + cs) > (col_i)) //out of current bounds
                                    target += i + cs - col_i - 1;
                                i += cs;
                            }
                            else
                                i++;

                            if (i > col_i)
                                return false; //target is set; break.
                        });
                    }
                    second = $(this).find('td,th').eq(target).clone().addClass("st-val").removeAttr("colspan");
                    if (index === 0) tem.append(second.attr("colspan", "2"));
                    else tem.append(first, second);
                    tb.append(tem);
                });
                ++col_i;
            }

            $stackcolumns.append($(tb));
            $table.before($stackcolumns);
            if (!(settings.hideOriginal)) {
                $table.show();
            }
        }

        return $tables;
    };

} (jQuery));

/*
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work?
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */
(function($) {

    var $event = $.event,
        $special,
        resizeTimeout;

    $special = $event.special.debouncedresize = {
        setup: function() {
            $(this).on("resize", $special.handler);
        },
        teardown: function() {
            $(this).off("resize", $special.handler);
        },
        handler: function(event, execAsap) {
            // Save the context
            var context = this,
                args = arguments,
                dispatch = function() {
                    // set correct event type
                    event.type = "debouncedresize";
                    $event.dispatch.apply(context, args);
                };

            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }

            execAsap ?
                dispatch() :
                resizeTimeout = setTimeout(dispatch, $special.threshold);
        },
        threshold: 150
    };

})(jQuery);


/**
Imgzr v.0.3.1
*/
/* JPG: Comment */
/*(function($) {
    var version = '0.3.1',
        defaults = {
            resolutions: {
                small: { min: 0, max: 640 },
                medium: { min: 641, max: 768 },
                large: { min: 769, max: 10000 }
            }
        },
        doTheMagic = function(element, settings) {
            for (var i in settings.resolutions) {
                if (settings.resolutions.hasOwnProperty(i)) {
                    if (settings.resolutions[i].min <= settings.screenWidth && settings.screenWidth <= settings.resolutions[i].max) {
                        var $images = $(element).find('img');
                        for (var index = 0, j = $images.length; index < j; index++) {
                            if ($($images[index]).attr('src') != $($images[index]).data(i)) {
                                $($images[index]).attr('src', $($images[index]).data(i));
                            }
                        }
                        return;
                    }
                }
            }
        };
    $.fn.imgzr = function(options) {
        var self = this;
        var settings = $.extend({}, defaults, options);
        $window
            .bind(eventType, function(event) {
                settings.screenWidth = getScreenWidth();
                doTheMagic(self, settings);
            });
        return self;
    };
})(jQuery);*/
/* JPG: Comment */

/**
equalHeightLarge v.0.0.1
*/
(function($) {
    var version = '0.0.1',
        defaults = {
            resolution: mobileThreshold,
            visibility: "visible"
        },
        doTheMagic = function(element, settings) {
            var $currEl = $(element);
            if (settings.resolution < settings.screenWidth) {
                var $tallest = 0;
                for (var i = 0, j = $currEl.length; i < j; i++) {
                    $($currEl[i]).css('height', 'auto');
                    if (settings.visibility == "hidden") {
                        $($currEl[i]).css('visibility', "hidden");
                    }
                }
                for (var i = 0, j = $currEl.length; i < j; i++) {
                    var $elHeight = $($currEl[i]).height();

                    if ($elHeight < 0) $elHeight = 0;
                    if ($elHeight > $tallest) {
                        $tallest = $elHeight;
                    }
                }
                for (var i = 0, j = $currEl.length; i < j; i++) {
                    $($currEl[i]).height($tallest);
                    if (settings.visibility == "hidden") {
                        $($currEl[i]).css('visibility', "visible");
                    }
                }
                return;
            } else {
                for (var i = 0, j = $currEl.length; i < j; i++) {
                    $($currEl[i]).css('height', '');
                    if (settings.visibility == "hidden") {
                        $($currEl[i]).css('visibility', "");
                    }
                }
                return;
            }
        };
    $.fn.equalHeightLarge = function(options) {
        var self = this;
        var settings = $.extend({}, defaults, options);
        $window
            .bind(eventType, function(event) {
               //if(settings.screenWidth != getScreenWidth()){
                   settings.screenWidth = getScreenWidth();
                   doTheMagic(self, settings);
                //}  
            }).trigger(eventType);
        return self;
    };
})(jQuery);

/*Navigation Manager*/
var NavigationManager = function() {
    var self = this,
        $mainContainer = $('#mainContainer'),
        $navContainer = $('.navContainer'),
        $headerContainer = $('#headerContainer'),
        $navElements = $('.nav > li'),
        $subNavElements = $('.subNav > li'),
        $connectionContainer = $('.connectionContainer'),
        $connectionElements = $('.connection > li'),
        $clientNav = $('.clientNav'),
        $subClientNav = $('.subClientNav'),
        $subConnectionElements = $('.subConnection > li'),
        $prevStatus = 'unknown';;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
        /*start with equalHeight to compute good sizes*/
        //$('.navContainer, .nav, .connectionContainer, .connection, .clientNav, .disconnect, .disconnect >a, .accesClient > div').equalHeightLarge();
    };

    NavigationManager.prototype.openNav = function() {
        $mainContainer.addClass('overlay');
        $navContainer.addClass('active');
        $headerContainer.css('position', 'relative');
        $mainContainer.css('padding-top', '0px');
        $window.scrollTop(0);
    };

    NavigationManager.prototype.closeNav = function() {
        $navContainer.removeClass('active open');
        $headerContainer.css('position', 'fixed');
        $mainContainer.css('padding-top', $headerContainer.height() + 'px');
        for (var i = 0, j = $navElements.length; i < j; i++) {
            $($navElements[i]).removeClass('active');
        }
        for (var i = 0, j = $subNavElements.length; i < j; i++) {
            $($subNavElements[i]).removeClass('active');
        }
        $mainContainer.removeClass('overlay');
    };

    NavigationManager.prototype.toggleNav = function() {
        self.closeConnection();
        self.closeSubClientNav();
        //RightNavManager.prototype.mobileCloseRightNav();
        //ContactsManager.prototype.mobileCloseContacts();
        if ($navContainer.hasClass('active') || $navContainer.hasClass('open')) self.closeNav();
        else self.openNav();
    };

    NavigationManager.prototype.toggleSubNavigation = function() {
        var $linkClicked = $(this);
        self.closeConnection();
        self.closeSubClientNav();
        RightNavManager.prototype.mobileCloseRightNav();
        ContactsManager.prototype.mobileCloseContacts();
        var activeItem = $('.nav > li.active');
        self.closeSubNavigation();
        if(getScreenWidth()==431 || getScreenWidth()==432 ||  getScreenWidth()==600){
          mobileThreshold=getScreenWidth()==431;
        }
        if ($linkClicked.data('subnav') != undefined && !activeItem.is($linkClicked) && !($linkClicked.data('subnav') == "search" && getScreenWidth() <= mobileThreshold)) {
            $navContainer.addClass('open');
            $headerContainer.css('position', 'relative');
            $mainContainer.css('padding-top', '0px');
            $linkClicked.addClass('active');
            $subNavElements.filter('.' + $linkClicked.data('subnav')).addClass('active');
            $mainContainer.addClass('overlay');
            $window.scrollTop(0);
        }
    };

    NavigationManager.prototype.closeSubNavigation = function() {
        for (var i = 0, j = $navElements.length; i < j; i++) {
            $($navElements[i]).removeClass('active');
        }
        for (var i = 0, j = $subNavElements.length; i < j; i++) {
            $($subNavElements[i]).removeClass('active');
        }
        $navContainer.removeClass('open');

        if (!$navContainer.hasClass('active')) $mainContainer.removeClass('overlay');
    };

    NavigationManager.prototype.openConnection = function() {

        $mainContainer.addClass('overlay');
        $connectionContainer.addClass('active');
        $headerContainer.css('position', 'relative');
        $mainContainer.css('padding-top', '0px');
        if(!(($(".subConnection li.accesClient").hasClass("active")) || ($(".subConnection li.virementExpress").hasClass("active"))))
        $window.scrollTop(0);
    };

    NavigationManager.prototype.closeConnection = function() {
        $connectionContainer.removeClass('active open');
        $connectionElements.removeClass('active');
        $clientNav.removeClass('open').find('>li').removeClass('active');
        $subClientNav.removeClass('active');
        $subConnectionElements.removeClass('active');
        $headerContainer.css('position', 'fixed');
        $mainContainer.css('padding-top', $headerContainer.height() + 'px');
        $mainContainer.removeClass('overlay');
    };

    NavigationManager.prototype.toggleConnection = function() {
        self.closeNav();
        //RightNavManager.prototype.mobileCloseRightNav();
        //ContactsManager.prototype.mobileCloseContacts();
        if ($connectionContainer.hasClass('active') || $connectionContainer.hasClass('open')) self.closeConnection();
        else self.openConnection();
    };

    NavigationManager.prototype.loadSubConnectionIA = function(panel) {
        var $subConnectionPanel = panel;
        /*if (!$subConnectionPanel.hasClass('iaInit')) {*/
            if ($subConnectionPanel.hasClass("virementExpress")) {
                try {
                    activeIaVirementExpress($subConnectionPanel.attr("id"), stopLoaderCallback);
                    $(".requestForFunding_ia").css({height:"490px"})
                } catch (e) { console.error("Function 'activeIaVirementExpress' Not implemented yet : " + e); }
            }
            if ($subConnectionPanel.hasClass("accesClient")) {
                try {
                    activeIaAccesClient($subConnectionPanel.attr("id"), stopLoaderCallback);
                    //$(".fullAuthentication_ia").css({height:"590px"})
                } catch (e) { console.error("Function 'activeIaAccesClient' Not implemented yet : " + e); }
            }
        /*}*/
    };

    NavigationManager.prototype.toggleSubConnection = function() {
        var $linkClicked = $(this);
        self.closeNav();
        RightNavManager.prototype.mobileCloseRightNav();
        ContactsManager.prototype.mobileCloseContacts();
        var activeItem = $('.connection > li.active');
		
        self.closeSubConnection();
        if ($linkClicked.data('subconnection') != undefined && !activeItem.is($linkClicked)) {
            $connectionContainer.addClass('open');
            $headerContainer.css('position', 'relative');
            $mainContainer.css('padding-top', '0px');
            $linkClicked.addClass('active');
            $subConnectionElements.filter('.' + $linkClicked.data('subconnection')).addClass('active');
            self.loadSubConnectionIA($subConnectionElements.filter('.' + $linkClicked.data('subconnection')));
			if(!($linkClicked.hasClass("accesClient") ) || ($linkClicked.hasClass("accesClient") && $linkClicked.children('a').attr("href") === undefined) ){ 
				$mainContainer.addClass('overlay');
			}
            /*$mainContainer.addClass('overlay');*/
            $window.scrollTop(0);
        }
    };

    NavigationManager.prototype.closeSubConnection = function() {
        $connectionElements.removeClass('active');
        $subConnectionElements.removeClass('active');
        $connectionContainer.removeClass('open');
        if (!$connectionContainer.hasClass('active')) $mainContainer.removeClass('overlay');
    };

    NavigationManager.prototype.toggleSubClientNav = function() {
        self.closeNav();
        RightNavManager.prototype.mobileCloseRightNav();
        ContactsManager.prototype.mobileCloseContacts();
        if (!$subClientNav.hasClass('active')) {
            $clientNav.addClass('open');
            $(this).addClass('active');
            $subClientNav.addClass('active');
            $window.trigger(eventType);
        } else {
            self.closeSubClientNav();
        }
    };

    NavigationManager.prototype.closeSubClientNav = function() {
        if ($subClientNav.hasClass('active')) {
            $clientNav.removeClass('open');
            $clientNav.find('li.active').removeClass('active');
            $subClientNav.removeClass('active');
            $window.trigger(eventType);
        }
    };

    NavigationManager.prototype.resizeStuff = function() {
        var settings = {},
            doTheMagic = function(settings) {
                if (settings.mobileMaxWidth >= settings.screenWidth) {
                    //$subNavElements.find('.formSearchContainer').prependTo($navContainer);
                    if ($navContainer.hasClass('open')) {
                        if ($subNavElements.filter('.active').hasClass('search')) self.closeSubNavigation();
                        else if ($prevStatus != 'mobile') self.openNav();
                    }
                    if ($navContainer.hasClass('active')) {
                        $mainContainer.addClass('overlay');
                        $headerContainer.css('position', 'relative');
                        $mainContainer.css('padding-top', '0px');
                    }

                    if ($connectionContainer.hasClass('open')) self.openConnection();
                    if ($connectionContainer.hasClass('active')) $mainContainer.addClass('overlay');

                    if (!$('.connectionContainer .subClientNav').length) $subClientNav.appendTo('.connectionContainer');
                    if ($clientNav.find('.accesClient').hasClass('active')) {
                        $subClientNav.addClass('active');
                        $headerContainer.css('position', 'relative');
                        $mainContainer.css('padding-top', '0px');
                    }
                    $prevStatus = 'mobile';
                } else {
                    $navContainer.find('.formSearchContainer').appendTo($subNavElements.filter('.search'));
                    if ($navContainer.hasClass('active') && !$navContainer.hasClass('open')) {
                        $mainContainer.removeClass('overlay');
                        $headerContainer.css('position', 'fixed');
                        $mainContainer.css('padding-top', $headerContainer.height() + 'px');
                    }
                    if ($connectionContainer.hasClass('active') && !$connectionContainer.hasClass('open')) $mainContainer.removeClass('overlay');

                    if (!$('.mainNav + .subClientNav').length) {
                        $subClientNav.insertAfter('.mainNav');
                        if ($clientNav.find('.accesClient').hasClass('active')) {
                            $subClientNav.removeClass('active');
                        }
                    }
                    if ($clientNav.find('.accesClient').hasClass('active')) {
                        $headerContainer.css('position', 'fixed');
                        $mainContainer.css('padding-top', $headerContainer.height() + 'px');
                    }
                    $prevStatus = 'wide';
                }
                if ($headerContainer.css('position') == 'relative') $mainContainer.css('padding-top', '0px');
                else $mainContainer.css('padding-top', $headerContainer.height() + 'px');

            };
        settings.mobileMaxWidth = mobileThreshold;
        settings.screenWidth = getScreenWidth();
        doTheMagic(settings);

        $window
            .bind(eventType, function(event) {
                settings.screenWidth = getScreenWidth();
                doTheMagic(settings);
            });
    };

    NavigationManager.prototype.scrollStuff = function() {
        var saverScroll = function() {
            if ($window.scrollTop() >= (saverPosition - 100)) {
                var pushSaver = ($window.scrollTop() - saverPosition) + 250;
                $('#saveButton').css('top', pushSaver);
            } else {
                $('#saveButton').css('top', saverTop);
            }
        };

        if ($('#saveButton').length > 0) {
            var saverPosition = $('#saveButton').offset().top;
            var saverTop = $('#saveButton').css('top');
            saverScroll();
            $window.scroll(saverScroll);
        }
    };

    NavigationManager.prototype.initEvents = function() {

        var closeSubNavBtn = $('<a></a>').addClass('close').click(self.toggleSubNavigation);
        $subNavElements.append(closeSubNavBtn);

        var closeSubConnectionBtn = $('<a></a>').addClass('close').click(self.toggleSubConnection);
        $subConnectionElements.append(closeSubConnectionBtn);

        var iaLoaderSubConnection = $('<div></div>').addClass('iaLoader');
        $subConnectionElements.append(iaLoaderSubConnection);

        $('.mobileNav').click(this.toggleNav);
        $('.mobileConnection').click(this.toggleConnection);

        $navElements.click(this.toggleSubNavigation);
        $connectionElements.click(this.toggleSubConnection);


        // TODO Refactor
        $clientNav.find('.accesClient').click(this.toggleSubClientNav);

        this.resizeStuff();
        this.scrollStuff();
		/* JPG: Comment */

		/* var logoConfig = {
            resolutions: {
                small: { min: 0, max: 640 },
                medium: { min: 641, max: 768 },
                large: { min: 769, max: 10000 }
            }
        }
        $('#headerContainer .mainNav .logo').imgzr(logoConfig);*/
		/* JPG: Comment */

        if ($('#headerContainer .legalLabel').length > 0) {
            $(window).scroll(function() {
                if ($window.scrollTop() > $('.legalLabel').outerHeight()) {
                    $('#headerContainer .legalLabel').hide('normal', function() {
                        $window.trigger(eventType);
                    });
                } else if ($window.scrollTop() == 0) {
                    $('#headerContainer .legalLabel').show('normal', function() {
                        $window.trigger(eventType);
                    });
                }
            });
        }

    };

    this.init();
};

/*RightNav Manager*/
var RightNavManager = function() {
    var self = this,
        $mainContainer = $('#mainContainer'),
        $headerContainer = $('#headerContainer'),
        $rightNav = $('.rightNav'),
        $rightContainer = $('#rightContainer'),
        $rightNavContainer = $('#rightNavContainer'),
        $leftContainer = $('#leftContainer'),
        $footerContainer = $('#footerContainer');
		if(typeof sfIaParam != "undefined"){
			if(("target.ia.frpfsimulationpe_simulationGeneric.modifier" == sfIaParam.topic) && ("simulationBoxCR" == sfIaParam.Json.originIA) && ("REV" == sfIaParam.Json.URL_productCode)){
				$('[data-panel="panel-1"]').removeClass("stayOpen");
				$('[data-panel="panel-2"]').addClass("stayOpen");
			}
		}    this.init = function() {
        $rightContainer.find('.panel form').each(function(index, element) {
            $(this).append($('<div></div>').addClass('iaLoader'));
        });
         $('.disconnect').on('click', function(){
             var ua = window.navigator.userAgent;
              var msie = ua.indexOf("MSIE ");
                window.location.href=$(".disconnect a").attr("href");

           }); 
       
        
        //enable cookie layer
       
        $(".sliderContainer").on("click",function(){
          if($($(".sliderContainer input")[0]).attr("disabled")){
            $("#creditProjectSelectorContent").css({display:"block"});
        }
        });
        $(".wcmDate").text($("#idDate").text());


       /** if(!getCookie("_55CC")){

            $.ajax({
         url: "/rsc/contrib/html/cetelem/Cookies.html"
            }).done(function(data) {

            $("#sf-master").append(data); 
            $(".connect-cookies-text").html($("#wcmCookieContent P").html());
            if(history.length>2){
                if(!getCookie("_55CC")){
                 setMonthCookie("_55CC",true,13);
                 $(".connect-cookies-client").addClass("hide");
                }
           }else{
            $(".connect-cookies-client").removeClass("hide");
           }
            $('.cookies-fermer').on('click', function(){
              setMonthCookie("_55CC",true,13);
            $(".connect-cookies-client").addClass("hide");
           }); 
          });



        } **/
          
          
          
          /** window.onscroll = function(ev) {
             if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
              if(!getCookie("_55CC")){
              setMonthCookie("_55CC",true,13);
              $(".connect-cookies-client").addClass("hide");
            }
            }
}; **/
        this.initEvents();
        this.init = function() { };

        if ($rightNav.hasClass('stayOpen')) {
            var $stayOpenBtn = $rightNav.find('.stayOpen');
            $stayOpenBtn.addClass('active');
            if (getScreenWidth() > mobileThreshold) {
                $('#' + $stayOpenBtn.data('panel')).addClass('active');
                self.iaSimulationManager($stayOpenBtn);
                $rightContainer.addClass('open').addClass('animate');
                if (!Modernizr.csstransitions) $rightContainer.trigger('transitionend');
            }
        }
    };


    RightNavManager.prototype.iaSimulationManager = function(btn) {
        var openPanel = $('#' + btn.data('panel'));
        if (!openPanel.hasClass('iaInit')) {
            try {
                activeIaPanel(btn.data('panel'), stopLoaderCallback);
            } catch (e) { console.error("Function 'activeIaPanel' Not implemented yet : " + e); }

            if (openPanel.find('.projectSelectorContainer').length) {
                //console.log('init IA projectSelector of panel ID : ' + btn.data('panel'));
                var projectSelectorId = openPanel.find('.projectSelectorBtn').data('projectselectorcontent');
                if (!$("#" + projectSelectorId).hasClass('init')) new ProjectSelectorManager(projectSelectorId);
            } else if (openPanel.find('.switch').length) {
                //console.log('init IA switch of panel ID : ' + btn.data('panel'));
            } else {
                //console.log('init IA alone of panel ID : ' + btn.data('panel'));
            }
        }
    };

    RightNavManager.prototype.openRightNav = function(btn) {
        btn.addClass('active askOpen');
        $rightContainer.find('.panel').removeClass('active');
        $('#' + btn.data('panel')).addClass('active');
        self.iaSimulationManager(btn);
        $rightContainer.addClass('open').addClass('animate');
        if (!Modernizr.csstransitions) $rightContainer.trigger('transitionend');
        if (!(getScreenWidth() > mobileThreshold)) {
        //$("#rightNavContainer").hide();
        $(".contactBtn").hide();
        }
    };

    RightNavManager.prototype.closeRightNav = function() {
        var $panelBtns = $rightNav.find('a[data-panel]');
        $panelBtns.removeClass('active askOpen');
        $rightContainer.removeClass('open').addClass('animate');
        if (!Modernizr.csstransitions) $rightContainer.trigger('transitionend'); 
        //$("#rightNavContainer").show();
        $(".contactBtn").show();
        if ($rightNav.find('.stayOpen').length && getScreenWidth() <= mobileThreshold) {
            $rightNav.find('.stayOpen').addClass('active');
        }
    };

    RightNavManager.prototype.toggleRightNav = function(event) {
        event.preventDefault();
        var isCurrent = $('#' + $(this).data('panel')).hasClass('active');

        self.closeRightNav();

        if (!isCurrent || ($rightNav.hasClass('stayOpen') && getScreenWidth() > largeTabletThreshold)) {
            self.openRightNav($(this));
            preselectMenu( $(this).data('panel'));
        }
    };

    RightNavManager.prototype.scrollStuff = function() {

        var positionRightNav = function() {
            if (getScreenWidth() <= mobileThreshold) {
                /* MOBILE */
                if ($prevStatus != 'mobile') {
                    $prevStatus = 'mobile';
                    nextSimulationButton();
                    $leftContainer.removeClass('simuOpen');
                    if (!$rightNav.find('.askOpen').length) {
                        $rightContainer.removeClass('open').addClass('animate');
                        if (!Modernizr.csstransitions) $('#rightContainer').trigger('transitionend');
                        $rightNav.find('.stayOpen').addClass('active');
                    }
                }

                $rightNav.find('.title + ul').css({
                    bottom: $footerContainer.height() + 'px'
                })
                    .find('>li >a').css({
                        height:  'auto'//($window.height() - $headerContainer.height() - $footerContainer.height()) / 2 + "px"
                    });
                $rightContainer.find('.panel').css({
                    top: $headerContainer.height() + "px",
					/* JPG: Comment */
                   /* height: $window.height() - $headerContainer.height() - $footerContainer.height() + "px"  */
					/* JPG: Comment */
                });

            } else {
                if ($prevStatus != 'tablet' && $prevStatus != 'desktop') {
                    $prevStatus = 'tablet';
                     $('.rightNav .title').removeClass('active');
                      $('.rightNav .title + ul').removeClass('active');
                      $mainContainer.removeClass('overlay');
                      $mainContainer.show();
                    $rightNav.find('.title + ul').css({
                        bottom: 'auto'
                    })
                        .find('>li >a').css({
                            height: 'auto'
                        });
                    $rightContainer.find('.panel').css({
                        top: "auto"
                    });
                    if (!$mainContainer.is(':visible')) {
                        $mainContainer.show();
                        $rightNav.find('.title').removeClass('active').find('+ ul').removeClass('active');
                        $window.trigger(eventType);
                    }
                }
                if ($rightNavContainer && $rightNavContainer[0]) {
                    $rightNav.css({
                        /*TODO trouver alternative pour safari*/
                        width: $rightNavContainer[0].getBoundingClientRect().width + "px"
                    });
                }

                $rightContainer.find('.panel').css({
                    height: $window.height() - $headerContainer.height() - $footerContainer.height() + "px",
                    width: $rightContainer.width() + "px"
                });

                if (getScreenWidth() <= largeTabletThreshold) {
                    /* TABLET */
                    
                    if($prevStatus!="tablet"){
                      $prevStatus = 'tablet';
                      nextSimulationButton();
                    }
                    if ($rightNav.hasClass('stayOpen') && $('#' + $rightNav.find('.stayOpen:not(.askOpen)').data('panel')).hasClass('active')) {
                        $leftContainer.addClass('simuOpen');
                    }
                    if ($('#rightNavThreshold').length) {
                        if ($window.scrollTop() > ($('#rightNavThreshold').offset().top - parseInt($mainContainer.css('padding-top'), 10))) {
                            $leftContainer.removeClass('simuOpen');
                            if ($('#' + $rightNav.find('.stayOpen:not(.askOpen)').data('panel')).hasClass('active')) {
                                self.closeRightNav();
                            }
                        } else {
                            $leftContainer.addClass('simuOpen');
                        }
                    }
                } else if (getScreenWidth()>largeTabletThreshold) {

                    /*DESKTOP*/
                      
                    if ($prevStatus != 'desktop') {
                        $prevStatus = 'desktop';
                        nextSimulationButton();
                        if($rightNav.hasClass('stayOpen')){
                        $leftContainer.addClass('simuOpen');
                        $rightContainer.addClass('open animate');
                        if (!Modernizr.csstransitions) $rightContainer.trigger('transitionend');

                        if ($rightNav.find('.askOpen').length) {
                            var $askOpenBtn = $rightNav.find('.askOpen').addClass('active');
                            $('#' + $askOpenBtn.data('panel')).addClass('active');
                        } else {
                            var $stayOpen = $rightNav.find('.stayOpen').addClass('active');
                            $('#' + $stayOpen.data('panel')).addClass('active');
                            var $stayOpenBtn = $rightNav.find('.stayOpen');
                             self.iaSimulationManager($stayOpenBtn);
                        }
                        }
                        
                    }
                }
            }

            $('#leftContainer').css('height', $('#leftContainer').height()+'px');
        };

        var $prevStatus = 'unknown';
        positionRightNav();
        $window
            .bind('scroll', debounce(positionRightNav, 150))
            .bind(eventType, function(event) {
                positionRightNav();
            });
    };

    RightNavManager.prototype.mobileCloseRightNav = function() {
        if ($('.rightNav .title').hasClass('active') && getScreenWidth() <= mobileThreshold) {
            self.closeRightNav();
            $('.rightNav .title').removeClass('active');
            $('.rightNav .title + ul').removeClass('active');
            $("#globalContainer").removeAttr("style");
            $("html").removeAttr("style");
            $("body").removeAttr("style");
            $mainContainer.show();
            $mainContainer.removeClass('overlay');
            $('#headerContainer .legalLabel').show('normal', function() {
                 $window.trigger(eventType);
            });
        }
    };

    RightNavManager.prototype.mobileOpenRightNav = function() {
        NavigationManager.prototype.closeSubClientNav();
        NavigationManager.prototype.closeSubConnection();
        NavigationManager.prototype.closeConnection();
        NavigationManager.prototype.closeSubNavigation();
        NavigationManager.prototype.closeNav();
        ContactsManager.prototype.mobileCloseContacts();
        $('.rightNav .title').addClass('active');
        $('.rightNav .title + ul').addClass('active');
        //$mainContainer.hide();
        $mainContainer.addClass('overlay');
         $("#globalContainer").css({position:"fixed",overflow:"hidden"});
          $('#headerContainer .legalLabel').hide('normal', function() {
            $window.trigger(eventType);
         });
    };

    RightNavManager.prototype.mobileToggleRightNav = function() {
        if ($('.rightNav .title + ul').hasClass('active')) {
            self.mobileCloseRightNav();
        } else {
            self.mobileOpenRightNav();
        }
    };


    RightNavManager.prototype.initEvents = function() {
        var closeRightNavBtn = $('<a>Autres simulateurs</a>').addClass('close emphasize').click(self.closeRightNav);
        $('#rightContainer .panel').prepend(closeRightNavBtn);
        $('a[data-panel]').on('click', self.toggleRightNav);
		 /* JPG: Comment */ /* Added If Condition */
		//if (getScreenWidth() > mobileThreshold) { 

			$('#rightContainer').on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
				function(e) {
					$('#rightContainer').removeClass('animate');
					if (!$(this).hasClass('open')) {
						$('#rightContainer .panel').removeClass('active');
					}
					$window.trigger(eventType);
				});
		//}

		/* JPG: Comment */
        $footerContainer.on('click', '.rightNav .title', self.mobileToggleRightNav);

        self.scrollStuff();
    };

    this.init();
};

/*Contacts Manager*/
var ContactsManager = function() {
    var self = this,
        $headerContainer = $('#headerContainer'),
        $mainContainer = $('#mainContainer');
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    ContactsManager.prototype.mobileCloseContacts = function() {
        if ($('.contactBtn .mobileBtn').hasClass('active')) {
            $('.contactBtn .mobileBtn').removeClass('active');
            $('.contactBtn .mobileBtn + ul, .phoneNumber, .socialBtn').removeClass('active');
            $mainContainer.removeClass('overlay');
            $mainContainer.show();
            $window.trigger(eventType);
            $('#headerContainer .legalLabel').show('normal', function() {
            $window.trigger(eventType);
         });
        }
    };

    ContactsManager.prototype.mobileOpenContacts = function() {
        NavigationManager.prototype.closeSubClientNav();
        NavigationManager.prototype.closeSubConnection();
        NavigationManager.prototype.closeConnection();
        NavigationManager.prototype.closeSubNavigation();
        NavigationManager.prototype.closeNav();
        RightNavManager.prototype.mobileCloseRightNav();
        $('.contactBtn .mobileBtn').addClass('active');
        $('.contactBtn .mobileBtn + ul, .phoneNumber, .socialBtn').addClass('active');
         $mainContainer.addClass('overlay');
         $('#headerContainer .legalLabel').hide('normal', function() {
            $window.trigger(eventType);
         });
        $window.trigger(eventType);
    };

    ContactsManager.prototype.mobileToggleContacts = function() {
        if ($('.contactBtn .mobileBtn + ul').hasClass('active')) {
            self.mobileCloseContacts();
        } else {
            self.mobileOpenContacts();
        }
    };

    ContactsManager.prototype.scrollStuff = function() {
    
        var positionContacts = function() {
          $(".wcmDate").text($("#idDate").text());
        
            if (getScreenWidth() <= mobileThreshold) {
                /* MOBILE */
                if($(" .subscribeCetelemSimResult .nextSimulation").length){nextSimulationButton();}
                $('.contactBtn .mobileBtn + ul').css({
                    bottom: $headerContainer.outerHeight()+20 + 'px',
                    height:"auto"
                });
                $('.phoneNumber').css({
                    bottom: $headerContainer.outerHeight() + $('.contactBtn .mobileBtn + ul').outerHeight() +20+ 'px',
                    height:"auto"
                });
                $('.socialBtn').css({
                    bottom: $headerContainer.outerHeight() + $('.contactBtn .mobileBtn + ul').outerHeight()+20 + $('.phoneNumber').outerHeight() + 'px',
                    height:"auto"
                });

            } else {
                $('.contactBtn .mobileBtn + ul, .phoneNumber, .socialBtn').css({
                    bottom: ''
                });
                self.mobileCloseContacts();
            }
        };

        positionContacts();
        $window
            .scroll(positionContacts)
            .bind(eventType, function(event) {
                positionContacts();
            });
    };

    ContactsManager.prototype.initEvents = function() {
        $('#footerContainer').on('click', '.footer .mobileBtn', self.mobileToggleContacts);
        self.scrollStuff();
    };

    this.init();
};

/*ResetBtn Manager*/
var ResetBtnManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    ResetBtnManager.prototype.reset = function() {
        $('#' + $(this).data("resetid")).val('');
    };

    ResetBtnManager.prototype.initEvents = function() {
        $('.resetBtn').click(self.reset);
    };

    this.init();
};

/*ResetRadio Manager*/
var ResetRadioManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    ResetRadioManager.prototype.reset = function() {
        $('[name="' + $(this).data("reset") + '"]').prop('checked', false).change();
    };

    ResetRadioManager.prototype.initEvents = function() {
        $('.resetRadio').click(self.reset);
    };

    this.init();
};

/*Tooltip Manager*/
var TooltipManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    TooltipManager.prototype.initTooltip = function(el) {
        var currentTooltip = $(el);
        var classes = 'qtip-light tooltip' + (currentTooltip.hasClass('alertTooltipBtn') ? ' alerteModal' : '');
        classes += (currentTooltip.hasClass('credit') ? ' credit' : '');
        classes += (currentTooltip.hasClass('creditRenouvelable') ? ' creditRenouvelable' : '');
        classes += (currentTooltip.hasClass('epargne') ? ' epargne' : '');
        classes += (currentTooltip.hasClass('assurance') ? ' assurance' : '');
        classes += (currentTooltip.hasClass('projets') ? ' projets' : '');
        var isSlicked = currentTooltip.parents('.slick-slider').length > 0;
        currentTooltip.qtip({
            content: {
                text: isSlicked ? $('#' + currentTooltip.data('tooltip')).clone() : $('#' + currentTooltip.data('tooltip'))
            },
            position: {
                my: currentTooltip.data('orientation'),
                at: currentTooltip.data('position'),
                target: currentTooltip.data('target') ? $(currentTooltip.data('target')) : currentTooltip,
                viewport: $window,
                adjust: {
                    method: 'shift shift',
                }
            },
            show: currentTooltip.data('stay') ? 'click' : 'mouseenter',
            hide: currentTooltip.data('stay') ? 'click' : {
                fixed: true,
                delay: 250
            },
            style: {
                classes: classes,
                width: 300,
                tip: {
                    width: 15,
                    height: 15
                }
            },
            events: {
                render: function(event, api) {
                    $('.close', api.elements.content).click(function(e) {
                        api.hide(e);
                    });
                }
            }
        });
    };

    TooltipManager.prototype.initEvents = function() {
        for (var i = 0, j = $('.hasTooltip').length; i < j; i++) {
          if(!$('.infosPerso').length)
            self.initTooltip($($('.hasTooltip')[i]));
        }
        $('.slick-slider').on('beforeChange init', function(event, slick) {
            var $slickSlides = slick.$slides;
            for (var i = 0, j = $slickSlides.length; i < j; i++) {
                var $ssTooltips = $($slickSlides[i]).find('.hasTooltip');
                for (var k = 0, l = $ssTooltips.length; k < l; k++) {
                    try {
                        $($ssTooltips[i]).removeClass('on');
                        $('.qtip #' + $($ssTooltips[i]).data('tooltip')).parents('.qtip').remove();
                    } catch (e) { }
                    self.initTooltip($($ssTooltips[i]));
                }
            }
        });
    };

    this.init();
};

/*Modal Manager*/
var ModalManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    ModalManager.prototype.initEvents = function() {
        for (var i = 0, j = $('.hasModal').length; i < j; i++) {
            var currentModal = $($('.hasModal')[i]);
            var width = currentModal.data('modalwidth');
			var top = currentModal.data('modaltop');
             var my= currentModal.data('my');
		     var at = currentModal.data('at');
			var anima = currentModal.data('modalanimate');
            var classeWidthCustom = '';
            if (width == undefined || width == '') {
                width = 300;
                classeWidthCustom = '';
            } else {
                classeWidthCustom = 'qtip-width-custom'; // permet de surcharger le max-width 300 de base de qtip
            }
			if(top !== undefined || top !== '' && sfAxes2 === 'MOBILE'){
				classeWidthCustom = classeWidthCustom +' qtip-top-custom';
			}


            if(my == undefined || my==""){
		my = "top center";
		}
          if(at == undefined || at==""){
		at = "top center";
		}
            var myqtip = currentModal.qtip({
                content: {
                    text: $('#' + currentModal.data('modal'))
                },
                position: {
                    my: my,
                    at: at,
                    target: $window,
                    viewport: $window,
                    adjust: {
                        scroll: false,
                        y: 100
					},
					effect: function(api, pos, viewport) {
						// "this" refers to the tooltip
						$(this).animate(pos, {
							duration: 600,
							easing: 'linear',
							queue: false
						});
                    }
                },
                show: {
                    event: 'click',
                    modal: {
                        on: true,
                        blur: false,
                        escape: false
						},
					 effect: function() {
						$(this).slideDown(500);
                    }
                },
                hide: false,
                style: {
                    classes: 'qtip-light modal ' + classeWidthCustom,
                    width: width,
                    tip: false
                },
                events: {
                    render: function(event, api) {
                        $('.close', api.elements.content).click(function(e) {
                            api.hide(e);
                        });
                        $(document).on('click','.closeImg',function(e){
							 $('#sf-master').removeClass('hide');
                           api.destroy();
                        });
            $(document).on('click','.popCloseBtn',function(e){
                           api.destroy();
                        });
						$(document).on('click','.closePopUp',function(e){
						   $('#sf-master').removeClass('hide');
						   api.destroy();
                        });
                       $(document).on("click",".demandeCreditModal .cancelBtn",function(e){
                           api.destroy();
                        });
					$(document).on("click",".demandeCreditModal .closePopUp",function(e){
						   $('#sf-master').removeClass('hide');
						   api.destroy();
                        });
                        window.PageBus.subscribe("target.ia.frpfcommunicationpe_insurance.close", null, function (topic, msg, data){
                           api.destroy();
                        });
                    }
                    
                }
            });
            var opendefault = currentModal.data('modaldefault');
            if (opendefault != undefined && opendefault == 'open') {
                currentModal.click();
            }
        }
    };

    this.init();
};

/*ProjectSelector Manager*/
var ProjectSelectorManager = function(projectSelectorId) {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    ProjectSelectorManager.prototype.clickOutside = function() {
        $(document).click(function(e) {
            if ($('.projectSelector').is(':visible')
                && $(e.target).parents('.projectSelectorContainer, .filter').length == 0
                && !$(e.target).is('.projectSelectorContainer, .filter')) {
               // $('.projectSelector').hide();
            }
        });
    };

    ProjectSelectorManager.prototype.initialize = function(projectSelectorId) {
        var projectSelector = $('#' + projectSelectorId);
        var projectSelectorBtn = $('[data-projectselectorcontent="' + projectSelector.attr('id') + '"]');
        var projectSelectorContainer = projectSelector.parents('.projectSelectorContainer');
        projectSelectorBtn.find('.filter').remove();
        projectSelectorBtn.find('.title').show();
        projectSelectorBtn.find('.specify').hide();
        projectSelector.find('.status, .step').removeClass('active').hide();
        projectSelector.find('.step-0').addClass('active').show();
        projectSelector.find('.status .filter').remove();
        projectSelectorContainer.siblings('.customCheckboxContainer').addClass('hide');
        projectSelectorContainer.addClass('inactive');
        var preselectData = String(projectSelectorContainer.data('preselect'));
        if (typeof preselectData !== 'undefined' && preselectData.length > 0) {
            var clickRecursively = function(codeOrSub) {
                var preselectElement = projectSelector.find('[data-sub="' + codeOrSub + '"], [data-code="' + codeOrSub + '"]');
                if (typeof preselectElement !== 'undefined') {
                    if (preselectElement.parents('.step').length && !preselectElement.parents('.step').hasClass('step-0')) {
                        clickRecursively(preselectElement.parents('.step').attr('id'));
                    }
                    preselectElement.prop("tagName") == "A" ? preselectElement.click() : preselectElement.parent().click();
                }
            };
            clickRecursively(preselectData);
        }
    };

    ProjectSelectorManager.prototype.reinit = function(projectSelectorId, dataPreselect) {
        var projectSelector = $('#' + projectSelectorId);
        var projectSelectorContainer = projectSelector.parents('.projectSelectorContainer');
        projectSelectorContainer.data('preselect', dataPreselect);
        self.initialize(projectSelectorId);
    };

    ProjectSelectorManager.prototype.gotoDataSub = function(link) {
        var projectSelector = link.parents('.projectSelector');
        projectSelector.find('.step.active').removeClass('active').hide();
        $('#' + link.data('sub')).addClass('active').show();
        projectSelector.find('.status').addClass('active').show();
    };

    ProjectSelectorManager.prototype.gotoDataUp = function() {
        var projectSelector = $(this).parents('.projectSelector');
        var projectSelectorContainer = projectSelector.parents('.projectSelectorContainer');

        projectSelectorContainer.addClass('inactive');
        projectSelector.find('.status .filter:last').remove();

        var parentId = projectSelector.find('.step.active').data('parent');
        projectSelector.find('.step.active').removeClass('active').hide();
        $('#' + parentId).addClass('active').show();
        projectSelector.find('.filter[data-step="' + parentId + '"]').remove();
        if ($('#' + parentId).hasClass('step-0')) {
            projectSelector.find('.status').hide();
            projectSelector.find('.status .filter:last').remove();
        }
        self.getFilters(projectSelector);
        
        // VAN
        var panelIDContainer = $('.panel.active');
        var panelID = panelIDContainer.attr('id');
        var projectSelectorContainer = panelIDContainer.find('.projectSelectorContainer');
        if(projectSelector.hasClass("Epartner")){
			panelID = "panel-1";
		}
        try {
            updateIaPanel(panelID, "", "", "");
        } catch (e) { console.error("Function 'updateIaPanel' Not implemented yet : " + e); }
        
        $window.trigger(eventType);
    };

    ProjectSelectorManager.prototype.getSelectedProperty = function(mySpan) {
        var projectSelector = mySpan.parents('.projectSelector');
        var stepId = projectSelector.find('.step.active').attr('id');
        var filter = $('<div class="filter"></div>').attr('data-step', stepId);
        mySpan.clone().appendTo(filter);
        projectSelector.find('.status .filter[data-step="' + stepId + '"]').remove();
        projectSelector.find('.status').append(filter);
    };

    ProjectSelectorManager.prototype.getFilters = function(projectSelector) {
        var projectSelectorBtn = $('[data-projectselectorcontent="' + projectSelector.attr('id') + '"]');
        projectSelectorBtn.find('.title').hide();
        projectSelectorBtn.find('.filter').remove();
        var psFilters = projectSelector.find('.filter');
        for (var i = 0, j = psFilters.length; i < j; i++) {
            var selectedFilter = $(psFilters[i]).clone();
            selectedFilter.insertBefore(projectSelectorBtn.find('.specify'));
        }
        if (!projectSelectorBtn.find('.filter').length) {
            projectSelectorBtn.find('.title').show();
            projectSelectorBtn.find('.specify').hide();
        }
        else {
            projectSelectorBtn.find('.specify').show();
        }
    };

    ProjectSelectorManager.prototype.linkClicked = function() {
        var link = $(this);
        var projectSelector = link.parents('.projectSelector');
        var projectSelectorContainer = link.parents('.projectSelectorContainer');
        var panelID = projectSelectorContainer.parents('.panel').attr('id');
        self.getSelectedProperty(link.find('span'));
        self.getFilters(projectSelector);
        
        if (link.data('sub')) {
            self.gotoDataSub(link);
            projectSelectorContainer.addClass('inactive');    
        } else {
            projectSelectorContainer.removeClass('inactive');
            projectSelector.hide();
            projectSelectorContainer.find('.projectSelectorBtn .specify').hide();
            projectSelectorContainer.siblings('.customCheckboxContainer').addClass('hide');
            if (link.find('span[data-cdd]').data('cdd') == "1") {
                projectSelectorContainer.siblings('.customCheckboxContainer').removeClass('hide');
                self.callIA(link.children('span'), 'CDI', panelID);
            } else {
                self.callIA(link.children('span'), false, panelID);
            }

        }
        $window.trigger(eventType);
    };

    ProjectSelectorManager.prototype.toggleProjectSelector = function() {
        $('#' + $(this).data('projectselectorcontent')).toggle();
    };

    ProjectSelectorManager.prototype.callIA = function(projet, choiceCdd, panelID,el) {
        var type = choiceCdd ? choiceCdd : 'null';
        var code = projet.data('code');
        var produit = projet.data('produit');
        var codeOrSub =projet.parent().parent().parent().parent().attr("id");
		var projectType="";
		var projectType="";
		if($('#EpartnerProjectSelectorContent').length){
			projectType=$("#EpartnerProjectSelectorContent li").find('[data-sub="' + codeOrSub + '"], [data-code="' + codeOrSub + '"]').text() + " - "+ projet.text();
		} else {
			projectType=$("#creditProjectSelectorMain li").find('[data-sub="' + codeOrSub + '"], [data-code="' + codeOrSub + '"]').text() + " - "+ projet.text();
		}
        projectType=self.accentsTidy(projectType);
        if(projet.data('cdd')){
          $(".customCheckboxContainer").addClass("hide");
          if(projet.data('cdd')=="2"){
            updateIaPanel(panelID, code, produit, "CDI",projectType);
          }else{
            updateIaPanel(panelID, code, produit, "CDD",projectType);
          }
           
        }else{
          
          $(".customCheckboxContainer").removeClass("hide");
          if($(el).is(":checked")){
            updateIaPanel(panelID, code, produit, "CDD",projectType);
          }else{
            updateIaPanel(panelID, code, produit, "CDI",projectType);
          }
           
        }
//        try {
//            
//            updateIaPanel(panelID, code, produit, type);
//        } catch (e) {
//          console.error("Function 'updateIaPanel' Not implemented yet : " + e); }
//        }

    };

    ProjectSelectorManager.prototype.callIACdd = function(el) {
        var choiceCdd = $(el).is(":checked") ? 'CDD' : 'CDI';
        var projet = $(el).parents('.customCheckboxContainer').siblings('.projectSelectorContainer').find('a .filter').last().find('span');
        var panelID = $(el).parents('.panel').attr('id');
        self.callIA(projet, choiceCdd, panelID,el);
    };
    ProjectSelectorManager.prototype.accentsTidy = function(s){
        var r=s.toLowerCase();
        //r = r.replace(new RegExp(/\s/g),"");
        r = r.replace(new RegExp(/[àáâãäå]/g),"a");
        r = r.replace(new RegExp(/æ/g),"ae");
        r = r.replace(new RegExp(/ç/g),"c");
        r = r.replace(new RegExp(/[èéêë]/g),"e");
        r = r.replace(new RegExp(/[ìíîï]/g),"i");
        r = r.replace(new RegExp(/ñ/g),"n");                
        r = r.replace(new RegExp(/[òóôõö]/g),"o");
        r = r.replace(new RegExp(/œ/g),"oe");
        r = r.replace(new RegExp(/[ùúûü]/g),"u");
        r = r.replace(new RegExp(/[ýÿ]/g),"y");
        //r = r.replace(new RegExp(/\W/g),"");
         return r;
    };

    ProjectSelectorManager.prototype.initEvents = function() {
        var projectSelector = $('#' + projectSelectorId).addClass('init');
        var projectSelectorBtn = projectSelector.siblings('.projectSelectorBtn');
        projectSelectorBtn.click(self.toggleProjectSelector);
       projectSelector.find('.step a').click(self.linkClicked);
		/*projectSelector.find('.step a').on('touchstart click',function(){
          self.linkClicked();
        });*/

        projectSelector.find('.status .back').click(self.gotoDataUp);
        projectSelector.parent('.projectSelectorContainer').siblings(".customCheckboxContainer").find("input[name='check-cdd']").change(function(event) {
            self.callIACdd(event.target);
        });
        self.initialize(projectSelectorId);
        self.clickOutside();
    };

    this.init();
};

/* EditorManager */
var EditorManager = function() {
    var $headerContainer = $('#headerContainer');
    $('.form-box').each(function() {
        var current = $(this).attr('id').substring(5),
            editForm = $(this),
            currentStep = editForm.hasClass('open') ? 1 : 0,
            stepNumber = editForm.find('.step').length,
            init = function() {
                if (!$(this).hasClass('disabled')) {
                    $('.edit').addClass('disabled');
                    $('.form-box').addClass('hide');
                    editForm.find('.step').addClass('hide');
                    currentStep = 1;
                    editForm.find('#' + current + '-step' + currentStep).removeClass('hide');
                    editForm.removeClass('hide');
                    scrollToStep();
                    $window.trigger(eventType);
                }
            },
            nextStep = function() {
                editForm.find('#' + current + '-step' + currentStep).addClass('hide');
                currentStep += 1;
                editForm.find('#' + current + '-step' + currentStep).removeClass('hide');
                scrollToStep();
                $window.trigger(eventType);
            },
            prevStep = function() {
                editForm.find('#' + current + '-step' + currentStep).addClass('hide');
                if (currentStep - 1 >= 1 && currentStep - 1 <= stepNumber)
                    currentStep -= 1;
                editForm.find('#' + current + '-step' + currentStep).removeClass('hide');
                scrollToStep();
                $window.trigger(eventType);
            },
            hideForm = function() {
                $('.edit').removeClass('disabled');
                editForm.find('#' + current + '-step' + currentStep).addClass('hide');
                editForm.find('#' + current + '-step1').removeClass('hide');
                editForm.addClass('hide');
                currentStep = 0;
                scrollToStep();
                $window.trigger(eventType);
            },
            scrollToStep = function() {
                $('html, body').animate({
                    scrollTop: editForm.offset().top - $headerContainer.height() - 70
                }, 700);
            },
            hideOrNext = function() {
                currentStep >= stepNumber ? hideForm() : nextStep();
            };

        $('.edit[data-edit="' + current + '"]').click(init);

        editForm.find('.cancel').click(hideForm);

        editForm.find('.return').click(prevStep);

        editForm.find('.next').click(hideOrNext);
    });
};

var OpenLineTable = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    OpenLineTable.prototype.initEvents = function() {
        $('.expandDetails').each(function() {
            var current = $(this);
            $('.openLine[data-open="' + current.attr('id') + '"]').click(function() {
                $(current).toggleClass('hide');
                // if current .expandDetails isn't in a qtip, we resize the window
                if (!current.parents('.qtip').length) $window.trigger(eventType);
            });

        });
    };

    this.init();
};

/* Password secure display numpav on focus */
var PasswordSecure = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    PasswordSecure.prototype.initEvents = function() {
        $('.passwordEdit').each(function() {
            var password = $(this).find('input');
            var secure = $(this).find('.securedKeyboard');
            password.focus(function() {
                $('.securedKeyboard').addClass("hide");
                secure.removeClass("hide");
            });
        });
    };

    this.init();
};

/* Switch Buttons Manager */
/*var SwitchButtonsManager = function() {
  $('.switchContent').each(function(){
    $(this).find('> li').hide();
  });
  $('.switch').each(function(){
    $('#' + $(this).find('> li.active').find('a').data('switch')).show();
    $(this).find('a').click(function(){
      $(this).parents('.switch').find('li').removeClass('active');
      $(this).parent('li').addClass('active');
      $('#' + $(this).data('switch')).parents('.switchContent').find('> li').hide();
      $('#' + $(this).data('switch')).show();
    });
  });
};*/

var SwitchButtonsManager = function() {
    $('.switchContent').each(function() {
        $(this).find('> li').hide();
    });
    $('.switch').each(function() {
        $('#' + $(this).find('> li.active').find('a').data('switch')).show();
        $(this).find('a').click(function() {
            $(this).parents('.switch').find('li').removeClass('active');
            $(this).parent('li').addClass('active');

            updateIASwitch($('.panel.active').attr("id"), $(this).data('param'));

            //$('#' + $(this).data('switch')).parents('.switchContent').find('> li').hide();
            //$('#' + $(this).data('switch')).show();
        });
    });
};


/* Radio switch Manager */
var RadioSwitchManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    RadioSwitchManager.prototype.hidePanels = function(el) {
        var panels = $('[name="' + el.attr('name') + '"]');
        for (var i = 0, j = panels.length; i < j; i++) {
            $("#" + $(panels[i]).attr('value')).hide();
        }
    };

    RadioSwitchManager.prototype.changePanel = function(el) {
        self.hidePanels(el);
        if (el.is(':checked')) $("#" + el.val()).show();
        $window.trigger(eventType);
    };

    RadioSwitchManager.prototype.initEvents = function() {
        $('.radioSwitch').each(function() {
            $(this).change(function() {
                self.changePanel($(this));
            });
            self.hidePanels($(this));
        });
        $('.radioSwitch').each(function() {
            if ($(this).hasClass('active')) $(this).removeClass('active').click();
        });
    };

    this.init();
};

/* Radio switch Manager */
/* pour les modifs d'affichage des boutons oui non a la question "vous a aide" sur les pages FAQ */
var RadioSwitchHasHelpManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    RadioSwitchHasHelpManager.prototype.initEvents = function() {
        $('[data-hashelp]').each(function() {
            var $yesBtn = $(this).find('[data-hashelpbtn=yes]');
            var $noBtn = $(this).find('[data-hashelpbtn=no]');
            var $question = $(this).find('[data-hashelpquestion]');
            var $form = $(this).find('[data-hashelpform]');
            var $formsubmit = $(this).find('[data-hashelpformsubmit]');
            var $done = $(this).find('[data-hashelpdone]');

            $form.hide();
            $done.hide();

            $yesBtn.change(function() {
                if ($(this).is(':checked')) {
                    $done.show();
                    $form.hide();
                    $question.hide();
                }
            });
            $noBtn.change(function() {
                if ($(this).is(':checked')) {
                    $form.show();
                }
            });
            $formsubmit.click(function() {
                $form.hide();
                $done.show();
                $question.hide();
            });
        });
    };

    this.init();
};

/* Check dependant fields Manager */
/* exemple resultat et souscription credit immo */
var CheckDependantFieldsManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    CheckDependantFieldsManager.prototype.hidePanels = function(el) {
        el.parent(".customCheckboxContainer").css('opacity', '0.5');
        $('#' + el.data("dependantfields")).css('opacity', '0.5');
    };

    CheckDependantFieldsManager.prototype.changePanel = function(el) {
        self.hidePanels(el);
        if (el.is(':checked')) {
            $("#" + el.data("dependantfields")).css('opacity', '1');
            el.parent(".customCheckboxContainer").css('opacity', '1');
        }
    };

    CheckDependantFieldsManager.prototype.initEvents = function() {
        $('.checkDependantFields').each(function() {
            $(this).change(function() {
                self.changePanel($(this));
            });
            self.hidePanels($(this));
        });
    };

    this.init();
};

/* Switch Situation */
var SwitchSituation = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    SwitchSituation.prototype.initEvents = function() {
        $('#newSituation').change(function() {
            /*
            display the 2nd part of form only if 1st part is full filled
            */
            $('#situation-step1-2').removeClass('hide');
            var currentValue = $(this).find(' > option:selected').attr('value');
            var marieJustifList = [
                { value: 'acte_de_mariage', text: 'acte de mariage' },
                { value: 'livret_de_famille', text: 'livret de famille' },
                { value: 'piece_d_identite', text: 'pi&#232;ce d\'identit&eacute; r&eacute;cente actualis&eacute;e' }
            ];
            var divorceJustifList = [
                { value: 'acte_audience', text: 'acte de l\'audience' },
                { value: 'decision_tribunal', text: 'd&eacute;cision du tribunal' },
                { value: 'livret_de_famille', text: 'livret de famille' }
            ];
            var changementJustifList = [
                { value: 'acte_juridique', text: 'acte juridique' }
            ];

            if (currentValue) {
                /* display justificatory list */
                $('#' + currentValue).removeClass('hide').siblings('.list').addClass('hide');
                /* update select list */
                currentList = currentValue + "JustifList";
                justificatifList.selectize.clearOptions();
                justificatifList.selectize.addOption(eval(currentList));
            }
        });
    };

    this.init();
};


/* Switch Situation */
var SelectizeForm = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };


    SelectizeForm.prototype.initEvents = function() {
      $('#main-pro').each(function() {

          
            $("#main-pro option").each(function(){
               
                if($(this).data("id")=="REVV"){

                      var json={};
                    json.code=$(this).data("code");
                    //json.cdd=$(this).data("cdd");
                    json.id=$(this).data("id");
                    json.produit=$(this).data("produit");
                    //json.value=$(this).data("value");
                    //json.type=$(this).data("type");
                    json.name=$(this).data("name");
                    $(this).attr("data-data",JSON.stringify(json));
                }else{
                   var json={};
                    json.code=$(this).data("code");
                  $(this).attr("data-data",JSON.stringify(json));
                }

                
            });
            $(this).selectize({
                placeholder: 'Sélectionner un projet',
              render: {
                option: function (data, escape) {
                  if(data.id=="REVV"){
                      return dataAppend(data);
                  }else{
                    return "<div data-value='" + data.value + "'placeholder='" +'select' +"'>" + data.text + "</div>";
                  }
                     

               }
               
              },
              onChange:function(obj){
                if(obj==="REVV"){
                   var content = this.options[obj];
                   dataChangeEvents(content);    
                }
                  
               }

            });
        }); 

         /* $('select#REVV').each(function() {
            $("#REVV option").each(function(){
                 var jsonrev={};
                jsonrev.code=$(this).data("code");
                jsonrev.cdd=$(this).data("cdd");
                jsonrev.id=$(this).data("id");
                jsonrev.produit=$(this).data("produit");
                jsonrev.value=$(this).data("value");
                jsonrev.type=$(this).data("type");
                jsonrev.name=$(this).data("name");
                $(this).attr("data-data",JSON.stringify(jsonrev));
            });
            $(this).selectize({     
            	//placeholder: 'Précisez votre projet',
            	render: {
            		option: function (data, escape) {
                	return dataAppend(data);
            		}
            	},
            	onChange:function(obj){
               	  var content = this.options[obj];
                    if(content) dataChangeEvents(content);		
                 }

            });
        });*/

         $('select#TD').each(function() {
            $("#TD option").each(function(i,obj){
                var jsontd={};
                jsontd.code=$(this).data("code");
                jsontd.cdd=$(this).data("cdd"); 
                jsontd.id=$(this).data("id");
                jsontd.produit=$(this).data("produit");
                jsontd.value=$(this).data("value");
                jsontd.type=$(this).data("type");
                jsontd.name=$(this).data("name");
                $(this).attr("data-data",JSON.stringify(jsontd));
            });
            $(this).selectize({
             placeholder: 'Précisez votre projet',
             render: {
                option: function (data, escape) {
                	return dataAppend(data);
                }
              },
              onChange:function(obj){
            	  var content = this.options[obj];
                  if(content) dataChangeEvents(content);		
               }

            });
        });
        
        
          $('select#VM').each(function() {
            $("#VM option").each(function(){
                var jsonvm={};
                jsonvm.code=$(this).data("code");
                jsonvm.cdd=$(this).data("cdd");
                jsonvm.id=$(this).data("id");
                jsonvm.produit=$(this).data("produit");
                jsonvm.value=$(this).data("value");
                jsonvm.type=$(this).data("type");
                jsonvm.name=$(this).data("name");
                $(this).attr("data-data",JSON.stringify(jsonvm));
            });
            $(this).selectize({
             placeholder: 'Précisez votre projet',
	      render: {
                option: function (data, escape) {
                	return dataAppend(data);
               }
              },
              onChange:function(obj){
            	  var content = this.options[obj];
                  if(content) dataChangeEvents(content);		
               }

            });
        });
           $('select#VL').each(function() {
            $("#VL option").each(function(){
                var jsonvl={};
                jsonvl.code=$(this).data("code");
                jsonvl.cdd=$(this).data("cdd");
                jsonvl.id=$(this).data("id");
                jsonvl.produit=$(this).data("produit");
                jsonvl.value=$(this).data("value");
                jsonvl.type=$(this).data("type");
                jsonvl.name=$(this).data("name");
                $(this).attr("data-data",JSON.stringify(jsonvl));
            });
            $(this).selectize({
		            placeholder: 'Précisez votre projet',
              render: {
                option: function (data, escape) {
                	return dataAppend(data);
               }
              },
              onChange:function(obj){
            	  var content = this.options[obj];
                  if(content) dataChangeEvents(content);		
               }

            });
        });
            $('select#PD').each(function() {
            $("#PD option").each(function(){
                var jsonpd={};
                jsonpd.code=$(this).data("code");
                jsonpd.cdd=$(this).data("cdd");
                jsonpd.id=$(this).data("id");
                jsonpd.produit=$(this).data("produit");
                jsonpd.value=$(this).data("value");
                jsonpd.type=$(this).data("type");
                jsonpd.name=$(this).data("name");
		$(this).attr("data-data",JSON.stringify(jsonpd));
            });
            $(this).selectize({
               placeholder: 'Précisez votre projet',
            	render: {
                option: function (data, escape) {
                	return dataAppend(data);
               }
              },
              onChange:function(obj){
            	  var content = this.options[obj];
                  if(content) dataChangeEvents(content);		
               }
            });
        });
            $('select#RC').each(function() {
            $("#RC option").each(function(){
                var jsonrc={};
                jsonrc.code=$(this).data("code");
                jsonrc.cdd=$(this).data("cdd");
                jsonrc.id=$(this).data("id");
                jsonrc.produit=$(this).data("produit");
                jsonrc.value=$(this).data("value");
                jsonrc.type=$(this).data("type");
                jsonrc.name=$(this).data("name");
		$(this).attr("data-data",JSON.stringify(jsonrc));
            });
            $(this).selectize({
              placeholder: 'Précisez votre projet',
            	render: {
                option: function (data, escape) {
                	return dataAppend(data);
               }
              },
              onChange:function(obj){
            	  var content = this.options[obj];
                  if(content) dataChangeEvents(content);		
               }
            });
        });

       $('.selectize-input input').attr("readonly", "true");
        $('.Epartner .selectize-input input').on('focus', function(e) { 
				e.preventDefault();
				$(this).blur();
         }); 
    };

    this.init();
};


/* Layout Manager */
var LayoutManager = function() {
    var self = this,
        $headerContainer = $('#headerContainer'),
        $leftContainer = $('#leftContainer'),
        $rightContainer = $('#rightContainer'),
        $rightNavContainer = $('#rightNavContainer'),
        $rightNavContainerNew=$('.rightNavContainerNew .rightNav'),
        $rightNavN=$('.rightNavContainerNew '),
        $footerContainer = $('#footerContainer'),
        $footer = $footerContainer.find('.footer'),
        $minHeightContainers = $('#mainContainer>div:first-child, #rightNavContainer, #rightContainer, #leftContainer'), $mainContainer = $('#mainContainer');
        $(".le-mag-nav-mobile").on("click",function(e){
          if($(".le-mag-nav-mobile-cntr").is(":visible")){
            $(".le-mag-nav-mobile-cntr").hide();
            $(".le-mag-nav-mobile").removeClass("open");
          }else{
            $(".le-mag-nav-mobile-cntr").show();
            $(".le-mag-nav-mobile").addClass("open");
          }
          

        })
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    LayoutManager.prototype.resizeStuff = function() {
        var doTheMagic = function() {
            $('.wcmslick.slick-slider').wcmslick('setPosition');
			
			
					
            if (getScreenWidth() > mobileThreshold) {
                $("html").removeAttr("style");
                $("body").removeAttr("style");
                var minHeight = $window.height() - $headerContainer.outerHeight() - $footerContainer.outerHeight();
                $minHeightContainers.css('min-height', minHeight + 'px');
                //$rightNavContainer.css('height', minHeight + 'px'); 
                $("#globalContainer").removeAttr("style");
                $("#rightNavContainer").show();
                  $(".contactBtn").show();
                if (!$("#mainContainer #rightContainer").length) {
                    $leftContainer
                        .after($rightNavContainer)
                        .after($rightContainer);
                }
                if(!$("#detail-article-container").siblings().length){
                  $($(".detail-article-container")[0]).after($(".dynamic-container"));
                }
				$(".lazy").each(function () {
					  var value_data_src=$(this).attr("data-src-lazy");
					  $(this).removeAttr("data-src-lazy");    
					   $(this).attr("data-src",value_data_src);       
				});
				$('.lazy').lazy();
			 
				/* JPG: Adding */
				self.slickPlay();
				/* JPG: */
			 
            } else {

                $(".lazy").each(function () {
                    if($(this).css('background-image') == 'none') {
						var value_data_src=$(this).attr("data-src");
                        $(this).removeAttr("data-src");    
                        $(this).attr("data-src-lazy",value_data_src);

					}
                });
                $minHeightContainers.css('min-height', '');
                $rightNavContainer.css('height', 'auto');
                if(!sessionStorage.getItem("homepage")){
                   if(window.location.pathname==$(".logo").attr("href") || window.location.pathname=="/fr/accueil" ||  window.location.pathname=="/sites/cetelem/mobile_acceuil.page"){
					/* JPG: Comment */
                  //if (loadedFlag){
                  /*   //RightNavManager.prototype.mobileOpenRightNav();
                      $('.rightNav .title').addClass('active');
                      $('.rightNav .title + ul').addClass('active');
                      $mainContainer.addClass('overlay');
                      //new RightNavManager();
                    $('[data-panel="panel-1"]').click(); 
                 
                   $("html").css({"overflow":"hidden","position":"relative","height":"100%"});
                   $("body").css({"overflow":"hidden","position":"relative","height":"100%"});*/
				   
					/* JPG: Adding */
					self.manageLoader();
					/* JPG: */
				   
                    loadedFlag=false;
                    sessionStorage.setItem("homepage","true");
                    setCookieMinutes("homepage","true",30);
                  //}
                    
					}
                }
                else if(!getCookie("homepage")){
                    if(window.location.pathname==$(".logo").attr("href") ||  window.location.pathname=="/fr/accueil" ||  window.location.pathname=="/sites/cetelem/mobile_acceuil.page"){
				    /* JPG: Comment */
                  //if(loadedFlag){
                   /*  //RightNavManager.prototype.mobileOpenRightNav();
                      $('.rightNav .title').addClass('active');
                      $('.rightNav .title + ul').addClass('active');
                      $mainContainer.addClass('overlay');
                     //new RightNavManager();
                    $('[data-panel="panel-1"]').click(); 
                 
                   $("html").css({"overflow":"hidden","position":"relative","height":"100%"});
                   $("body").css({"overflow":"hidden","position":"relative","height":"100%"});*/
				   
						/* JPG: Adding */
						self.manageLoader();
						/* JPG: */
					
						loadedFlag=false;
						setCookieMinutes("homepage","true",30);
               
                  //}
                    
					} 
                }
				else if(typeof sfIaParam != "undefined"){
					if("target.ia.frpfsimulationpe_simulationGeneric.modifier" == sfIaParam.topic){
						self.manageLoader();
						loadedFlag=false;
					}
				}
               
                if (!$("#footerContainer #rightContainer").length) {
                    $rightNavContainer.appendTo($footer[0]);
                    $rightContainer.prependTo($footer[0]);
					 /* JPG: Comment */
                   /*  if($(".resultBlock_ia").length || $(".subscribeCetelemController_ia").length){
                      $("#rightNavContainer").addClass("hide-mobile-only");
                    }*/
					 /* JPG: Comment */

                    loadedFlag=true;
                }						
                if(!$("#related-articles-mobile .dynamic-container").length){
                  $(".dynamic-container").appendTo($("#related-articles-mobile"));
                }


            }
        };
        doTheMagic();
        $window
            .bind(eventType, function(event) {
                doTheMagic();
            });

    };
	
	/* JPG: Adding two prototype functions: manegeLoader and slickPlay */
	LayoutManager.prototype.manageLoader = function() {
        //document.addEventListener("DOMContentLoaded", function(event) {

		/*
			var deviceHeight = $(window).height();

			$(".loader-wrapper .iaLoader").css("height", deviceHeight);
		*/
		
		//require(["app"],function(app){
			//if ((getScreenWidth() <= mobileThreshold)) {

			var modifierSim;
			var newCRSimul;
			if(typeof sfIaParam != "undefined"){
				if("target.ia.frpfsimulationpe_simulationGeneric.modifier" == sfIaParam.topic){
					modifierSim = true;
				}
			}
			  if (( getCookie('homepage') != "true" ) || (modifierSim == true)) {
				var t = $("#panel-1");
				if(typeof sfIaParam != "undefined"){
					if(("target.ia.frpfsimulationpe_simulationGeneric.modifier" == sfIaParam.topic) && ("simulationBoxCR" == sfIaParam.Json.originIA) && ("REV" == sfIaParam.Json.URL_productCode)){
						t = $("#panel-2");
						newCRSimul =true;
					}
				}
				t.css("left", "0");
				t.addClass("active");
				
				if (!t.hasClass("iaInit")) {
					try {
						if ( newCRSimul == true ) {
							activeIaPanel("panel-2", stopLoaderCallback);
						} else {
							activeIaPanel("panel-1", stopLoaderCallback);
						}
					} catch (e) {
						console.error("Function 'activeIaPanel' Not implemented yet : " + e)
					}
					if (t.find(".projectSelectorContainer").length) {
						var i = t.find(".projectSelectorBtn").data("projectselectorcontent");
						$("#" + i).hasClass("init") || new ProjectSelectorManager(i)
					} else {
						t.find(".switch").length;
					}
					
				}

				$("#globalContainer").css({
					position: "fixed",
					overflow: "hidden"
				});

				$("#rightContainer").addClass("open");
				$(".rightNav .title").addClass("active");
			  } else {
				$(".loader-wrapper").hide();
			  }


			//} else {
						
			//}

		//});

		PageBus.subscribe("ia.sf.loaded", "", function(topic, msg, data) {

			if(msg.ModuleName == 'simulationGeneric') {
				setTimeout('$(".loader-wrapper").hide()',500);
				//$("#panel-1").css("top","120px").css("height", deviceHeight);
			}

		});

		//});
    };
	
	LayoutManager.prototype.slickPlay = function() {
        if ( typeof slick_1452257534275 != "undefined" ) slick_1452257534275.wcmslick('slickPlay');
		if ( typeof slick_1452257534276 != "undefined" ) slick_1452257534276.wcmslick('slickPlay');
		if ( typeof slick_1452257534278 != "undefined" ) slick_1452257534278.wcmslick('slickPlay');
    };
	/* JPG: */

    LayoutManager.prototype.initEvents = function() {
        // $minHeightContainers.equalHeightLarge({visibility : "hidden"});
        $('.contentFooter > .columns').equalHeightLarge();
        self.resizeStuff();
    };

    this.init();
};

var RightContainerManager = function() {
    var self = this,
        $rightContainer = $('#rightContainer'),
        $headerContainer = $('#headerContainer');
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    RightContainerManager.prototype.setRightContainerPosition = function() {
        var doTheMagic = function() {
            if (getScreenWidth() > mobileThreshold) {
                $rightContainer.find('.panel').css('position', '');
                // if(isIE && $rightContainer.hasClass('open') && !$rightContainer.hasClass('animate')) {
                //   $rightContainer.css('top', 'auto');
                //   $rightContainer.find('.panel.active').css('position', 'fixed');
                // } else {
                //   $rightContainer.css('top', $window.scrollTop() + $headerContainer.height());
                // }
            } else {
                // $rightContainer.css('top', 'auto');
                $rightContainer.find('.panel').css('position', 'fixed');
            }
        };
        doTheMagic();
        $window
            .bind(eventType, function(event) {
                doTheMagic();
            })
            .scroll(doTheMagic);
    };

    RightContainerManager.prototype.initEvents = function() {
        self.setRightContainerPosition();
    };

    this.init();
}

/* Footer Manager */
var FooterManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    FooterManager.prototype.scrollStuff = function() {
        var $footer = $("#footerContainer"),
            $main = $("#mainContainer"),
            positionFooter = function() {
                $main.css({
                    paddingBottom: $footer.height()
                });
            };

        positionFooter();

        $window
            .bind(eventType, positionFooter)
            .scroll(positionFooter);
    };

    FooterManager.prototype.initEvents = function() {
        this.scrollStuff();
    };

    this.init();
};


/* EqualHeightUntil Manager */
var EqualHeightUntilManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    EqualHeightUntilManager.prototype.equalizeThat = function() {
        var equalHeightSelector = ">.columns";
        if (typeof $(this).data("equalheightselector") !== 'undefined' && $(this).data("equalheightselector").length > 0) equalHeightSelector = $(this).data("equalheightselector");
        $(this).find(equalHeightSelector + ':not(.ignoreEqualHeight)').equalHeightLarge({
            resolution: $(this).data('equalheightuntil') ? $(this).data('equalheightuntil') : mobileThreshold
        });
    };

    EqualHeightUntilManager.prototype.initEvents = function() {
        $('[data-equalheightuntil]').each(this.equalizeThat);
    };

    this.init();
};
/* for S51 Story */
var EqualHeightPertPersonalManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    EqualHeightPertPersonalManager.prototype.equalizeThat = function() {
        var equalHeightSelector = ".columns";
        if (typeof $(this).data("equalheightselector") !== 'undefined' && $(this).data("equalheightselector").length > 0) equalHeightSelector = $(this).data("equalheightselector");
        $(this).find(equalHeightSelector + ':not(.ignoreEqualHeight)').equalHeightLarge({
            resolution: $(this).data('equalheightuntil') ? $(this).data('equalheightuntil') : mobileThreshold
        });
    };

    EqualHeightPertPersonalManager.prototype.initEvents = function() {
        $('[data-equalheightuntil]').each(this.equalizeThat);
    };

    this.init();
};

/* ProgressBar Manager */
var ProgressBarManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    ProgressBarManager.prototype.initEvents = function() {
        $(".progressBar").each(function() {
            $(this).noUiSlider({
                start: $(this).data('value'),
                range: {
                    'min': $(this).data('start'),
                    'max': $(this).data('end')
                },
                format: wNumb({
                    decimals: 0
                })
            });
            if (!$(this).data('link')) {
                var self = $(this);
                $(this).Link('lower').to('-inline-<div class="progressBarTooltip"></div>', function(value) {
                    var postfix = self.data('postfix') ? self.data('postfix') : '';
                    $(this).html('<span>' + value + postfix + '</span>');
                });
            } else {
                $(this).Link('lower').to($('#' + $(this).data('link')), null, wNumb({
                    postfix: $(this).data('postfix'),
                    decimals: $(this).data('decimals')
                }));
            }
        });
    };

    this.init();
};

/* TableRWD Manager */
var TableRWDManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    TableRWDManager.prototype.initEvents = function() {
        var doTheMagic = function() {
          if(!$(".loyaltyPointsHistory_ia").length){
             if (getScreenWidth() < tabletThreshold) {
                $(".tableRWD").each(function() {
                    if (!$(this).hasClass('rwd')) {
                        var currentTable = $(this);
                        var slides = new Object();
                        var tableSlicked = $("<div></div>").addClass("tableSlicked");
                        $(this).find('tbody tr[data-title]').each(function() {
                            if (typeof slides[$(this).data('title')] === 'undefined') slides[$(this).data('title')] = new Array();
                            slides[$(this).data('title')].push($(this));
                        });
                        $.each(slides, function(index, element) {
                            var slide = $("<div></div>");
                            $(element).each(function() {
                                slide.append($(this));
                            });
                            tableSlicked.append(slide);
                        });
                        $(this).before(tableSlicked);
                        $(this).addClass('rwd');
                        tableSlicked.wcmslick({
                            adaptiveHeight: true,
                            dots: true,
                        });
                        var slickFooter = $('<tr class="slickFooter"></tr>')
                            .append($("<td></td>")
                                .append(tableSlicked.find('.slick-prev'))
                                .append(tableSlicked.find('.slick-next'))
                                .append(tableSlicked.find('.slick-dots'))
                            );
                        currentTable.find('tfoot').append(slickFooter);
                    }
                    $('.tableSlicked').wcmslick('setPosition');
                });
            } else {
                $(".tableRWD").each(function() {
                    if ($(this).hasClass('rwd')) {
                        var currentTable = $(this);
                        var slides = new Object();
                        var tableSlicked = $(this).siblings('.tableSlicked');
                        tableSlicked.wcmslick('unslick');
                        tableSlicked.find('tr').each(function() {
                            if (typeof slides[$(this).data('title')] === 'undefined') slides[$(this).data('title')] = new Array();
                            slides[$(this).data('title')].push($(this));
                        });
                        $.each(slides, function(index, element) {
                            element.reverse();
                            $(element).each(function() {
                                var currentTr = $(this);
                                if ($('tbody.suiviDemande').length == 0) {
                                    currentTable.find('tbody tr th').each(function() {
                                        if (currentTr.data('title') == $(this).html()) $(this).parent().after(currentTr);
                                    });
                                } else {
                                    $('tbody').append(currentTr);
                                }

                            });
                        });
                        tableSlicked.remove();
                        currentTable.find('.wcmslickFooter').remove()
                        $(this).removeClass('rwd');
                    }
                });
            }
          }
           
        };

        $window
            .bind(eventType, function(event) {
                doTheMagic();
            })
            .trigger(eventType);
    };

    this.init();
};


/* TableColumnRWD Manager */
var TableColumnRWDManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    TableColumnRWDManager.prototype.initEvents = function() {
        $('.stacktable.large-only').each(function() {
            $(this).stackcolumns({ myClass: 'stacktable small-only' });
        });
    };

    this.init();
};

/* LeftNav Manager */
var LeftNavManager = function() {
    var self = this,
        $headerContainer = $('#headerContainer');
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    LeftNavManager.prototype.scrollToSection = function(e) {
        e.preventDefault();
        $('.leftNav li').removeClass('active');
        $(this).parent().addClass('active');
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - $headerContainer.height()
        }, 700);
    };

    LeftNavManager.prototype.initEvents = function() {
        $('.leftNav li a').click(this.scrollToSection);
    };

    this.init();
};

/* EqualBoxes Manager */
var EqualBoxesManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    EqualBoxesManager.prototype.initEvents = function() {
        var $equalBoxes = $('.equalBoxes');
        for (var i = 0, j = $equalBoxes.length; i < j; i++) {
            var currentBox = $($equalBoxes[i]);
            currentBox.find('.equalBox.compte .head').equalHeightLarge();
            currentBox.find('.equalBox.compte .content').equalHeightLarge();
            currentBox.find('.equalBox.compte .foot').equalHeightLarge();
            currentBox.find('.equalBox.decouvrir .head').equalHeightLarge();
            currentBox.find('.equalBox.decouvrir .content').equalHeightLarge();
            currentBox.find('.equalBox.decouvrir .foot').equalHeightLarge();
            currentBox.find('.equalBox.sauvegarde .head').equalHeightLarge();
            currentBox.find('.equalBox.sauvegarde .content').equalHeightLarge();
            currentBox.find('.equalBox.sauvegarde .foot').equalHeightLarge();
            currentBox.find('.equalBox').equalHeightLarge();
        }
    };

    this.init();
};

/* TableStaticHead Manager */
var TableStaticHeadManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    TableStaticHeadManager.prototype.initEvents = function() {
        $('.tableStaticHead').each(function() {
            var current = $(this);
            current.find('.header > div').each(function(index) {
                var concatCells = $(this);
                current.find('.content .col').each(function() {
                    concatCells = concatCells.add($($(this).find('> div')[index]));
                });
                concatCells.equalHeightLarge({ resolution: 0 });
            });
            var doTheMagic = function() {
                if (current.find('.slick-slider .slick-dots').length > 0) current.find('.buttonContainer').append(current.find('.slick-prev, .slick-next, .slick-dots'));
            };
            $window
                .bind(eventType, function(event) {
                    doTheMagic();
                })
                .trigger(eventType);
        });
        $('#toggleFirstContent').on('click', function() {
            $('.tableStaticHead.ajustedProposition .content .col:first-child .beforeTitle').toggle();
        });
        $('#toggleSecondContent').on('click', function() {
            $('.tableStaticHead.ajustedProposition .content .col:nth-child(2) .beforeTitle').toggle();
        });
    };

    this.init();
};

/* CheckBtn Manager */
var CheckBtnManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    CheckBtnManager.prototype.reset = function(chkBtn) {
        var $checkBtn = $(chkBtn);
        if ($checkBtn.hasClass('checked')) {
            var tempLabel = $checkBtn.text();
            $checkBtn.html('<span>' + $checkBtn.data('checked') + '</span>');
            $checkBtn.data('checked', tempLabel);
            $checkBtn.removeClass('checked');
        }
    };

    CheckBtnManager.prototype.toggleBtn = function() {
        var $checkBtn = $(this);
        var $tempLabel = $(this).text();
        $checkBtn.html('<span>' + $checkBtn.data('checked') + '</span>');
        $checkBtn.data('checked', $tempLabel);
        if (!$checkBtn.hasClass('checked')) {
            var $checkBtns = $checkBtn.parents('.tableStaticHead').find('.checkBtn');
            for (var i = 0, j = $checkBtns.length; i < j; i++) {
                self.reset($checkBtns[i]);
            }
            $checkBtn.addClass('checked');
        } else {
            $(this).removeClass('checked');
        }
    };

    CheckBtnManager.prototype.initEvents = function() {
        $('.checkBtn').click(self.toggleBtn);
    };

    this.init();
};

/* DataTabs Manager */
/* permet de refresh les equalHeight quand on switch de tabs */
var DataTabsManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    DataTabsManager.prototype.initEvents = function() {
        $('[data-tab] .tab-title > a').click(function() {
            $window.trigger(eventType);
        });
    };

    this.init();
};

/* EqualButtons Manager */
var EqualButtonsManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    EqualButtonsManager.prototype.initEvents = function() {
        $('.equalButtons .button').equalHeightLarge();
    };

    this.init();
};


/* EqualProductZone Manager */
var EqualProductZoneManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    EqualProductZoneManager.prototype.initEvents = function() {
        $('.productZone').equalHeightLarge();
    };

    this.init();
};

/* DatePicker Manager */
var DatePickerManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    DatePickerManager.prototype.initEvents = function() {
        $('.datepickerBtn').each(function() {
            $(this).fdatepicker({
                language: 'fr',
                format: 'dd/mm/yyyy',
                weekStart: 1,
                classDatePicker: $(this).data('classdatepicker')
            });
        });
    };

    this.init();
};


/* Accordion switch */
var AccordionSwitch = function() {
    var self = this;
    $arrayMarkers = [];
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    AccordionSwitch.prototype.initEvents = function() {
        $('[data-formsection]').each(function() {
            var sectionButton = $(this);
            var accordionButton = $("a[href=#" + sectionButton.data("formsection") + "]");

            sectionButton.click(function() {
                if (sectionButton.hasClass('passed')) {
                    // simulation click accordion
                    accordionButton.click();
                    // reset des passed / active a partir de l'etape cliquee
                    sectionButton.find("~ .passed").removeClass("passed");
                    sectionButton.find("~ .active").removeClass("active");

                    //sectionButton.parents(".bulletProgressContainer").find(".bullet").removeClass("active");
                    // modif etape cliquee
                    sectionButton.addClass("active").removeClass("passed");
                }
            });

        });
    };

    this.init();
};

/**
 * Simple decision tree parser and traversal.
 * @author njmcode
 * @param data - object {
 *     initial: [], (list of choice IDs for the root node)
 *     choices: {}  (keyed object of all possible choices)
 * }
**/
var DecisionTree = function(data) {

    this.initial = data.initial;
    this.initialQuestion = data.initialQuestion;
    this.choices = data.choices;

    /* Return an array of choice objects for the root of the tree */
    this.getInitial = function() {

        if (!this.initial) throw 'DecisionTree: no initial choice(s) specified';
        return this.getChoices(this.initial);

    };

    /* Get full choice data by specific id */
    this.getChoice = function(id) {
        if (!(id in this.choices)) return false;
        if (!('id' in this.choices[id])) this.choices[id].id = id;
        return this.choices[id];

    };

    /* As above, but passing an array of choice IDs */
    this.getChoices = function(idList) {
        if (!idList) return [];
        var list = [];
        for (var i = 0, ln = idList.length; i < ln; i++) {
            var childChoice = this.getChoice(idList[i]);
            list.push(childChoice);
        }
        return list;

    };

    /* Get an array of choice data for a parent id */
    this.getChildren = function(parentId) {

        if (!(parentId in this.choices)) return false;
        if (!('children' in this.choices[parentId])) return false;

        var childIds = this.choices[parentId].children;
        return this.getChoices(childIds);

    };

    /* Get the 'result' prop for an id */
    this.getResult = function(id) {
        var result;
        if (!(id in this.choices)) return false;
        if (('result' in this.choices[id])) result = this.choices[id].result;
        return result;
    }

    /* Get the 'question' prop for an id */
    this.getQuestion = function(id) {
        var parent = this.getParents(id).pop();
        if (!parent) {
            return false;
        } else {
            return parent.nextQuestion;
        }
    }

    /* Get an array of choice data for the parent(s) of an id */
    this.getParents = function(id) {

        var parents = [];
        var node = this.getChoice(id);

        while (node.parent) {
            node = this.getChoice(node.parent);
            parents.unshift(node);
        }

        return parents;

    };

    /* Get the 'name' prop for the parent of an id */
    this.getParentName = function(id) {
        var parent = this.getParents(id).pop();
        if (!parent) {
            return false;
        } else {
            return parent.name;
        }
    };

    /* Init - insert ids into choice objects, check dups, associate parents, etc */
    this.init = function() {

        var idList = [];
        for (var k in this.choices) {

            var choice = this.getChoice(k);
            choice.id = k;

            var children = this.getChildren(k);
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                child.parent = k;
            }

        }

    };

    this.init();

};

var decisionTreeContent = function() {
	    var content = {
        initial: ['professionnel', 'prive', 'pro-prive'],
        initialQuestion: "Votre v&eacute;hicule sera &agrave; usage",
        choices: {

            // TOP LEVEL

            'professionnel': {
                name: 'Professionnel',
                children: ['pro-lower30', 'upper30'],
                nextQuestion: "Il s'agit d'un v&eacute;hicule"
            },

            'prive': {
                name: 'Priv&eacute;',
                children: ['lower30', 'upper30'],
                nextQuestion: "Il s'agit d'un v&eacute;hicule"
            },

            'pro-prive': {
                name: 'Les 2 (professionnel &amp; priv&eacute;)',
                children: ['pro-lower30', 'upper30'],
                nextQuestion: "Il s'agit d'un v&eacute;hicule"
            },

            // PRO & PRO-PRIVE

            'pro-lower30': {
                name: 'Neuf ou occasion &lt; 30 mois',
                children: ['pro-leasing', 'pro-credit', 'pro-noChoice'],
                nextQuestion: "&#202;tes vous int&eacute;ress&eacute; par"
            },

            // PRIVE

            'lower30': {
                name: 'Neuf ou occasion &lt; 30 mois',
                children: ['leasing', 'credit', 'noChoice'],
                nextQuestion: "&#202;tes vous int&eacute;ress&eacute; par"
            },

            'upper30': {
                name: 'occasion &gt 30 mois',
                result: 'cofiproCredit'
            },

            // PRO LEASING
            'pro-leasing': {
                name: 'leasing',
                result: 'cofiproBail'
            },

            // PRO CREDIT
            'pro-credit': {
                name: 'cr&eacute;dit',
                result: 'cofiproCredit'
            },

            // PRO NO CHOICE
            'pro-noChoice': {
                name: 'ne sais pas',
                children: ['immo-yes', 'immo-no'],
                nextQuestion: "Souhaitez vous que le v&eacute;hicule apparaisse dans votre bilan comme bien immobilier ?"
            },

            // LEASING
            'leasing': {
                name: 'leasing',
                children: ['leasing-oui', 'leasing-non'],
                nextQuestion: "Gardez-vous votre v&eacute;hicule moins de quatre ans ?",
            },

            'leasing-oui': {
                name: 'Oui',
                children: ['leasing-oui-oui', 'leasing-oui-non'],
                nextQuestion: "Souhaitez-vous vous lib&eacute;rer de la revente du v&eacute;hicule ?",
            },

            'leasing-oui-oui': {
                name: 'Oui',
                result: 'SwitchGo'
            },

            'leasing-oui-non': {
                name: 'Non',
                result: 'dinamo'
            },

            'leasing-non': {
                name: 'Non',
                result: 'dinamo'
            },

            // CREDIT
            'credit': {
                name: 'cr&eacute;dit',
                children: ['credit-oui', 'credit-non'],
                nextQuestion: "Gardez-vous votre v&eacute;hicule moins de quatre ans ?",
            },

            'credit-oui': {
                name: 'Oui',
                children: ['credit-oui-oui', 'credit-oui-non'],
                nextQuestion: "Souhaitez-vous vous lib&eacute;rer de la revente du v&eacute;hicule ?",
            },

            'credit-oui-oui': {
                name: 'Oui',
                result: 'comodo'
            },

            'credit-oui-non': {
                name: 'Non',
                result: 'modulo'
            },

            'credit-non': {
                name: 'Non',
                result: 'modulo'
            },

            // NO CHOICE
            'noChoice': {
                name: 'ne sais pas',
                children: ['lower4years', 'upper4years'],
                nextQuestion: "Gardez vous votre v&eacute;hicule - de 4 ans ?"
            },

            // IMMO YES
            'immo-yes': {
                name: 'oui',
                result: 'cofiproCredit'
            },
            // IMMO NO
            'immo-no': {
                name: 'non',
                result: 'cofiproBail'
            },

            // LOWER 4 YEARS
            'lower4years': {
                name: 'oui',
                children: ['noSelfResell', 'selfResell'],
                nextQuestion: "Souhaitez vous vous lib&eacute;rer de la revente du v&eacute;hicule&nbsp;?"
            },

            // UPPER 4 YEARS
            'upper4years': {
                name: 'non',
                children: ['isf', 'noIsf'],
                nextQuestion: "Payez-vous l'ISF ?"
            },

            // NO SELF RESELL
            'noSelfResell': {
                name: 'oui',
                children: ['lower4-isf', 'noIsf'],
                nextQuestion: "Payez-vous l'ISF ?"
            },

            // SELF RESELL
            'selfResell': {
                name: 'non',
                result: 'comodo'
            },

            // ISF
            'isf': {
                name: 'oui',
                result: 'dinamo'
            },
            // NO ISF
            'noIsf': {
                name: 'non',
                result: 'modulo'
            },
            // LOWER 4 ISF
            'lower4-isf': {
                name: 'oui',
                result: 'SwitchGo'
            }

        }
    };
	return content;
    
}

var decisionTreeContentAuto = function() {
	var content = {
        initial: ['VN', 'VO', 'NSP'],
        initialQuestion: "Votre projet concerne",
        choices: {

            // TOP LEVEL

            'VN': {
                name: 'Véhicule neuf',
                children: ['before5ANS', 'after5ANS'],
                nextQuestion: "Combien de temps pensez-vous conserver ce nouveau véhicule ?"
            },

            'VO': {
                name: 'Véhicule d’occasion',
                result: 'resultAutoPP'
            },

            'NSP': {
                name: 'Ne sais pas',
                children: ['before5ANS', 'after5ANS'],
                nextQuestion: "Combien de temps pensez-vous conserver ce nouveau véhicule ?"
            },

            'before5ANS': {
                name: '- 5 ANS',
                children: ['before-5-yrs-yes', 'before-5-yrs-no'],
                nextQuestion: "Le fait d'être propriétaire de votre véhicule est-il important pour vous ?"
            },
			'after5ANS': {
                name: '+ 5 ANS',
                result: 'resultAutoPP'
            },
			'before-5-yrs-yes': {
                name: 'OUI',
                children: ['be-owner', 'become-owner'],
                nextQuestion: "Que préférez-vous ?"
            },
            'before-5-yrs-no': {
                name: 'EGAL',
                children: ['be-owner', 'become-owner', 'rent-only'],
                nextQuestion: "Que préférez-vous ?"
            },
			'be-owner': {
                name: 'Être propriétaire et m\'occuper de tout : achat, revente, entretien... ',
				result: 'resultAutoPP'
            },
            'become-owner': {
                name: 'Louer la voiture de mon choix, avec les services de mon choix, et pouvoir en devenir propriétaire ',
				result: 'resultAutoLOA'
            },
			'rent-only': {
                name: 'Louer la voiture de mon choix, incluant une gamme élargie de services, et la restituer à lissue de la location',
				result: 'resultAutoLLD'
            }

        }
    };
	return content;
}

/* TableSwitch Manager */
var DecisionTreeManager = function() {
   var data;
	if ($('#aide-decision-json').length > 0) {
		data = decisionTreeContent();
	} else if($('#auto-decision-json').length > 0){
		data = decisionTreeContentAuto();
	}
	var tree = new DecisionTree(data);
    var $list = $('#choices');
    var $result = $('#result');

    var current_id = null;

    var renderList = function(items) {
        var question = tree.getQuestion(items[0].id);
        var name;

        if (!$result.hasClass('hide')) $result.addClass('hide');
        if (!question) {
            question = tree.initialQuestion;
        }
        question = $('<div/>').html(question).text();

        var choicesList = '<li class="darkGreyBox spacedTop hide"><div class="row collapse"><span class="questionTitle"><strong>' + question + '</strong></span><span class="medium-right">';
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            name = $('<div/>').html(item.name).text();
            choicesList += '<a href="#" data-choice="' + item.id + '"class="button radius small responsive-button">' + name + '</a>';
        }
        choicesList += '</span></li>';
        $(choicesList).appendTo($list).fadeIn('slow');
        $window.trigger(eventType);
        checkIfInView($list.find('li:last-child'));
    };

    var renderResult = function(resultId) {
        $result.find('#' + resultId).removeClass('hide').siblings(':not(.hide)').addClass('hide');
        $result.removeClass('hide');
        $window.trigger(eventType);
        checkIfInView($('#' + resultId));
    }

    var _doInitial = function() {
        var initData = tree.getInitial();
        current_id = null;
        renderList(initData);
        $window.trigger(eventType);
    };

    var checkIfInView = function(element) {
        var offset = element.offset().top - $window.scrollTop();
        var footerHeight = $('#footerContainer').height();
        var headerHeight = $('#headerContainer').height();
        if ((offset + element.height()) > (window.innerHeight - footerHeight)) {
            $('html,body').animate({ scrollTop: element.offset().top - headerHeight }, 1000);
            return false;
        }
        return true;
    };

    $(document).on('click', '#choices a', function(e) {
        e.preventDefault();
        var choiceId = $(this).data('choice');
        clickedElPosition = $(this).parents('li').index() + 1;
        listLength = $('#choices li').length;

        $(this).addClass('active').siblings().removeClass('active');

        if (listLength > clickedElPosition) {
            $list.find('li:nth-child(n + ' + (clickedElPosition + 1) + ')').remove();
        }

        var kids = tree.getChildren(choiceId);
        if (kids) {
            current_id = choiceId;
            renderList(kids);
        }
        else {
            var result = tree.getResult(choiceId);
            renderResult(result);
        }
    });

    _doInitial();

};


/* TableSwitch Manager */
var TableSwitchManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    TableSwitchManager.prototype.initEvents = function() {
        function switchTable() {
            if (Modernizr.mq('only screen and (max-width: 40em)') === true) {
                $('.switcher').bind('click', function() {
                    if (!$(this).hasClass('active')) {
                        $(this).addClass('active').siblings('.switcher').removeClass('active');
                        var idTable = $(this).attr('data-tableid');
                        $('.switchContent').find('.tableSwitchable#' + idTable).removeClass('hide').siblings('.tableSwitchable').addClass('hide');
                    }
                });
            }
        }
        $window.bind(eventType, switchTable);
    };

    this.init();
};

/* Map Manager */
var MapManager = function() {
    var self = this;
    this.init = function() {
        var map, placesList, infowindow;
        $user = new google.maps.LatLng(48.8743994, 2.3227203);
        $infoWindows = [];
        $arrayMarkers = {};
        $currentMarker = null;

        this.initEvents();

        this.init = function() { };
    };

    MapManager.prototype.initEvents = function() {
        map = new google.maps.Map(document.getElementById('map-canvas'), {
            center: $user,
            zoom: 15
        });

        var request = {
            location: $user,
            radius: 500,
            types: ['atm']
        };

        placesList = document.getElementById('places');

        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, self.callback);
    };

    MapManager.prototype.callback = function(results, status, pagination) {
        if (status != google.maps.places.PlacesServiceStatus.OK) {
            return;
        } else {
            self.createMarkers(results);
            if (pagination.hasNextPage) {
                var moreButton = document.getElementById('more');

                moreButton.disabled = false;

                google.maps.event.addDomListenerOnce(moreButton, 'click',
                    function() {
                        moreButton.disabled = true;
                        pagination.nextPage();
                    });
            }
        }

        google.maps.event.addListenerOnce(map, 'idle', function() {
            $('#places li').on('click', function() {
                var markerId = $(this).data('markerid').replace("marker", "");
                $(this).addClass('active').siblings().removeClass('active');
                google.maps.event.trigger($arrayMarkers[markerId], 'click');
            });
        });
    };

    MapManager.prototype.calculateDistance = function(p1, p2) {
        var rad = function(x) {
            return x * Math.PI / 180;
        };
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = rad(p2.lat() - p1.lat());
        var dLong = rad(p2.lng() - p1.lng());
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) *
            Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        d = Math.round(d);
        return d; // returns the distance in meter
    };

    MapManager.prototype.clickEvent = function() {
        google.maps.event.addListenerOnce(map, 'idle', function() {
            $('#places li').on('click', function() {
                var markerId = $(this).data('markerid').replace("marker", "");
                $(this).addClass('active').siblings().removeClass('active');
                google.maps.event.trigger($arrayMarkers[markerId], 'click');
            });
        });
    };

    MapManager.prototype.createMarker = function(place) {

        $request = {
            placeId: place.place_id
        };

        function links(callback) {
            var currentPlace = place;
            function createLinks(place, status) {
                var number = $('#places li').length - 1;
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    distance = self.calculateDistance($user, $arrayMarkers[place.place_id].position);
                    $('#places li:last-child').before('<li data-markerid="marker' + place.place_id + '"><strong>' + place.name + '</strong><br><span class="addressMarker">' + place.formatted_address + '</span><br><span><strong>Distance : </strong>' + distance + ' m</span></li>');
                    callback();
                }
                else if (status == google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
                    setTimeout(function() {
                        self.createMarker(currentPlace);
                    }, 1000);
                }
            }
            $service.getDetails($request, createLinks);
        }
        links(self.clickEvent);
    };

    MapManager.prototype.createMarkers = function(places) {
        var bounds = new google.maps.LatLngBounds();

        for (var i = 0; place = places[i]; i++) {
            var marker = new google.maps.Marker({
                map: map,
                icon: '../../new-img/pictos/maps/marker.png',
                title: place.name,
                position: place.geometry.location
            });
            $request = {
                placeId: place.place_id
            };
            $service = new google.maps.places.PlacesService(map);

            function links() {
                var currentPlace = place;
                function createLinks(place, status) {
                    var number = $('#places li').length - 1;
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        distance = self.calculateDistance($user, $arrayMarkers[place.place_id].position);
                        $('#places li:last-child').before('<li data-markerid="marker' + place.place_id + '"><strong>' + place.name + '</strong><br><span class="addressMarker">' + place.formatted_address + '</span><br><span><strong>Distance : </strong>' + distance + ' m</span></li>');
                    }

                    else if (status == google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
                        setTimeout(function() {
                            self.createMarker(currentPlace);
                        }, 1000);
                    }
                }

                $service.getDetails($request, createLinks);
            }
            links();

            google.maps.event.addListener(marker, 'mouseover', function() {
                this.setIcon('../../new-img/pictos/maps/marker_active.png');
            });
            google.maps.event.addListener(marker, 'mouseout', function() {
                if ($currentMarker === null) {
                    this.setIcon('../../new-img/pictos/maps/marker.png');
                }
                else if ($currentMarker.title !== this.title) {
                    this.setIcon('../../new-img/pictos/maps/marker.png');
                }
            });

            $arrayMarkers[place.place_id] = marker;
            bounds.extend(place.geometry.location);
            self.addInfoWindow(marker, place);
        }

        map.fitBounds(bounds);
    };

    MapManager.prototype.addInfoWindow = function(marker, place) {

        var infowindow = new google.maps.InfoWindow();
        $infoWindows.push(infowindow);
        var service = new google.maps.places.PlacesService(map);
        var contentInfo = place.name;

        google.maps.event.addListener(marker, 'click', function() {
            for (var i = 0; i < $infoWindows.length; i++) {
                self.clearMarkers();
                $infoWindows[i].close();
            }

            this.setIcon('../../new-img/pictos/maps/marker_active.png');
            $currentMarker = this;
            infowindow.setContent(contentInfo);
            $('#places li[data-markerid="marker' + place.place_id + '"]').addClass('active').siblings().removeClass('active');
            infowindow.open(map, this);
        });
    };

    MapManager.prototype.clearMarkers = function() {
        for (var markerPlace in $arrayMarkers) {
            $arrayMarkers[markerPlace].setIcon('../../new-img/pictos/maps/marker.png');
        }
    };

    this.init();
};

/* ReadMore Manager */
var ReadMoreManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    ReadMoreManager.prototype.toggleContent = function(e) {
        e.preventDefault();
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html($(this).data('moretext'));
        } else {
            $(this).addClass("less");
            $(this).html($(this).data('lesstext'));
        }
        $(this).prev().toggle();
        $window.trigger(eventType);
        return false;
    }

    ReadMoreManager.prototype.initEvents = function() {
        $('.readMore').each(function(e) {
            $(this).find(".moreLink").click(self.toggleContent);

        });
    };

    this.init();
};

/* MobileAccordions Manager */
var MobileAccordionsManager = function() {
    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    MobileAccordionsManager.prototype.initEvents = function() {
        if (Modernizr.mq('only screen and (max-width: 40em)') === true) {
            $(".mobileAccordions .accordion-navigation").each(function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass("active")
                    $(this).parents(".mobileAccordions").find(".content").removeClass("active");
                }
            });
        } else {
            $(".mobileAccordions .accordion-navigation").each(function() {
                if (!$(this).hasClass('active')) {
                    $(this).addClass("active")
                    $(this).parents(".mobileAccordions").find(".content").addClass("active");
                }
            });
        }
		var hash= window.location.hash;
		if ( hash == '' || hash == '#' || hash == undefined ) return false;
		var targetPathID = $(hash);
		$(hash).addClass("active");
		var headerHeightScroll = $('.legalLabel').height()+160;
		targetPathID = targetPathID.length ? targetPathID : $('[name=' + hash.slice(1) +']');
		if (targetPathID.length) {
			$('html,body').stop().animate({
			  scrollTop: targetPathID.offset().top - headerHeightScroll
			}, 'linear');
		}
    };

    this.init();
};

/* ConnexionDejaClient Manager */
var ConnexionDejaClientManager = function() {
    var self = this,
        $btnAccesClient = $('.connectionContainer.logoff .connection .accesClient'),
        $headerContainer = $('#headerContainer');
    this.init = function() {
        if ($('.connexion-deja-client').length > 0 && getCookie("refusDejaClient") == "true") {
            $('.connexion-deja-client').remove();
            $window.trigger(eventType);
        }
        this.initEvents();
        this.init = function() { };
    };

    ConnexionDejaClientManager.prototype.close = function() {
        $(this).parents('.connexion-deja-client').remove();
        $window.trigger(eventType);

        setCookie("refusDejaClient", "true", 1);
    };

    ConnexionDejaClientManager.prototype.initEvents = function() {
        
        $('body').on("click", ".dejaClientButton",function() {
            $btnAccesClient.trigger("click");
             $window.scrollTop(1);
        })
        
        /*$('.dejaClientButton').click(function() {
            $btnAccesClient.trigger("click");
        });*/
        $('.connexion-deja-client .close').click(self.close);
    };

    this.init();
};

/* ScrollTo Manager */
var ScrollToManager = function() {
    var self = this,
        $headerContainer = $('#headerContainer');
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    ScrollToManager.prototype.scrollTo = function() {
        var id = $(this).data('scrollto');
        if ($(id).length > 0) {
            $('html, body').animate({
                scrollTop: $(id).offset().top - $headerContainer.height()-30
            }, 700);
        }
    };

    ScrollToManager.prototype.initEvents = function() {
        $("[data-scrollto]").each(function(index, element) {
            $(element).click(self.scrollTo);
        });
    };

    this.init();
};

/* Faq Manager */
var FaqManager = function() {
    var self = this;
    var baseUrl = 'http://cetelem.ibenta.com/xml/';
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };
  
    FaqManager.prototype.readState = function() {
    var url = document.location.href;
    if(url.indexOf('#cat') > -1) {
      var selector = url.replace(new RegExp('^.*(#cat\\d+).*$'), '$1');
      self.openCategory($('li'+selector));
    }
    if(url.indexOf('#subcat') > -1) {
      var selector = url.replace(new RegExp('^.*(#subcat\\d+).*$'), '$1');
      self.openSubcategory($('li'+selector));
    }
    if(url.indexOf('#faqSection') > -1) {
      var faqId = url.replace(new RegExp('^.*(#faqSection.*)$'), '$1');
      $('a[href='+faqId+']').click();
    }
  }
  
    FaqManager.prototype.openCategory = function(li) {
        $('ul.faqMenu>li').removeClass('active');
    var state = '#'+li.attr('id');
    var newURL = document.location.href.replace(new RegExp('#cat\\d+'), state);
    if(newURL.indexOf('#cat')>-1)
      history.replaceState(null, null, newURL);
    else
      history.pushState(state);
        li.addClass('active');

        $('dd.faqMenu>div.content').removeClass('active');
        $('dd.faqMenu.' + li.attr('id') + '>div.content').addClass('active');

        /* on selectionne la premiere sous-categorie */
        var children = li.find('ul.underNav li:first-child');
        if (children.length > 0) {
            self.openSubcategory(children);
        }
        else {
            $('dd.faqMenu.' + li.attr('id') + '>div.content>.whiteBox').addClass('active');
        }
    };
  
    FaqManager.prototype.openSubcategory = function(li) {
      var subcatId = li.attr('id');
    var catId = li.parent().parent().attr('id');
    var state = '#'+catId+'#'+subcatId;
    var newURL = document.location.href.replace(new RegExp('#cat\\d+#subcat\\d+'), state);
    if(newURL.indexOf('#cat')>-1 && newURL.indexOf('#subcat')>-1)
      history.replaceState(null, null, newURL);
    else
      history.pushState(state);
        $(".faqSearchResult:visible").hide();
        $('.faqMenu ul.underNav>li, .accordion-navigation.faqMenu').removeClass('active');
        li.addClass('active');
        $('.accordion-navigation.faqMenu.' + catId).addClass('active');
        $('.faqMenu.accordion-navigation .whiteBox').removeClass('active');
        $('.faqMenu.accordion-navigation .whiteBox.' + subcatId).addClass('active');
    };
  
    FaqManager.prototype.openSubsubcategory = function(a) {
    var accordion = $(a).parent();
    if(accordion.hasClass('active')) {
      accordion.removeClass('active');
      accordion.find('.content.faqReponse').removeClass('active');
    }
    else {
      accordion.click();
      accordion.addClass('active');
      accordion.find('.content.faqReponse').addClass('active');
    }   
  }
  
    FaqManager.prototype.openFAQ = function(a) {
      var faqId = a.attr('href');
    var regex = new RegExp('#faqSection-(cat\\d+)(subcat\\d).*');
    var catId = faqId.replace(regex, '$1');
    var subcatId = faqId.replace(regex, '$2');    
    history.pushState(null, null, '#'+catId+'#'+subcatId+faqId);
    };

    FaqManager.prototype.mobileOpenCategory = function(link) {
        $(".faqSearchResult:visible").hide();
        var parent = link.parent();
        if (!parent.hasClass('active')) {
            var category = $.grep(parent.attr('class').split(' '), function(v, i) {
                return v.indexOf('cat') === 0;
            }).join();
            var li = $('#' + category);
            $('ul.faqMenu>li').removeClass('active');
            li.addClass('active');
            $('.faqMenu ul.underNav>li').removeClass('active');
            $('.faqMenu.accordion-navigation.' + li.parent().parent().attr('id')).addClass('active');
            $('.faqMenu.accordion-navigation .whiteBox').addClass('active');
        }
    };
    
    FaqManager.prototype.toggleQuestion = function(reponse) {
        if (reponse.hasClass('active') && typeof reponse.siblings('.faqSection').data('logid') !== 'undefined') {
            var url = baseUrl + '?click=' + reponse.siblings('.faqSection').data('logid');
            var imgIbenta = $("<img />").addClass('imgIbenta').attr('src', url);
            reponse.before(imgIbenta);
        }
        if (reponse.hasClass('active')) {
            var longeurReponse = parseInt(reponse.text().length);
            var timeout = longeurReponse * 5;
            if (timeout > 9000) {
                timeout = 9000;
            }
            reponse.find(".summary").removeClass("backgrounded");
            setTimeout(function() {
                reponse.find(".summary").addClass("backgrounded");
                setTimeout(function() {
                    reponse.find(".summary").removeClass("backgrounded");
                    setTimeout(function() {
                        reponse.find(".summary").addClass("backgrounded");
                    }, 1000);
                }, 1000);
            }, timeout);

        }
    }

    FaqManager.prototype.sendRating = function(ratingBtn, msg) {
        if (typeof ratingBtn.data("rating") !== 'undefined') {
            var urlbase = baseUrl + '?rating=';
            var params = ratingBtn.data("rating");
            if (msg) {
                paramsArray = params.split('::');
                paramsArray[4] = msg;
                params = paramsArray.join('::');
            }
            var url = urlbase + params;
            var imgIbenta = $("<img />").addClass('imgIbenta').attr('src', url);
            ratingBtn.before(imgIbenta);
        }
    }

    FaqManager.prototype.rateBeforeRedirect = function(ratingBtn) {
        if (typeof ratingBtn.data("rating") !== 'undefined') {
            var url = baseUrl + '?rating=' + ratingBtn.data("rating");
            var imgIbenta = $("<img />").addClass('imgIbenta').attr('src', url);
            ratingBtn.before(imgIbenta);
        }
        if (typeof ratingBtn.data('href') !== 'undefined') {
            setTimeout(function() {
                window.location(ratingBtn.data('href'));
            }, 800);
        }
    };

    FaqManager.prototype.initEvents = function() {
        $('ul.faqMenu ul.underNav>li').click(function(event) {
            event.stopPropagation();
            self.openSubcategory($(this));
            $window.trigger(eventType);
        });
        $('ul.faqMenu>li').click(function() {
            event.preventDefault();
            self.openCategory($(this));
            $window.trigger(eventType);
        });
        $('dl dl dl a').click(function() {
            event.stopPropagation();
            self.openSubsubcategory($(this));
            $window.trigger(eventType);
        });
        $('.faqMenu.accordion-navigation .faqMobileSection').click(function() {
            self.mobileOpenCategory($(this));
            $window.trigger(eventType);
        });
        $('.faqMenu.accordion-navigation .faqSectionBig.formSection').parent().click(function() {
            self.openFAQ($(this).find('.faqSectionBig.formSection'));
            $window.trigger(eventType);
        });

        $('.seeAllResults').click(function(event) {
            event.preventDefault();
            $(this).hide();
            $(".faqSearchResult>dl>dd").addClass('open');
            $window.trigger(eventType);
        });

        /*STATS*/
        /*Ouverture reponse*/
        $('.faqReponse>.accordion').on('toggled', function(event, accordion) {
            self.toggleQuestion(accordion);
        });
        /*La reponse a aide*/
        $('[data-hashelpbtn="yes"]').click(function() {
            self.sendRating($(this), null);
            $(this).parent('.summary').removeClass("backgrounded");
        });
        /*La reponse a aide*/
        $('[data-hashelpbtn="no"]').click(function() {
            $(this).parent('.summary').removeClass("backgrounded");
        });
        /*La reponse n a pas aide*/
        $("[data-hashelpformsubmit]").click(function(event) {
            event.preventDefault();
            var form = $(this).parents('form');
            var msg = "motif=" + form.find('.selectMotif option:selected').val() + "-commentaire=" + form.find('.textareaMotif').val();
            self.sendRating($(this), msg);
        });
        /*Clic sur une page du site ou cross-sell*/
        $('.rateBeforeRedirect').click(function(event) {
            event.preventDefault();
            self.rateBeforeRedirect($(this));
        });

    self.readState();
    };

    this.init();
};

/* Stepped Carousel*/
var SteppedCarouselManager = function() {

    var self = this;
    this.init = function() {
        this.initEvents();
        this.init = function() { };
    };

    SteppedCarouselManager.prototype.gotoSlide = function() {
        var currSlick = $(this).parents(".steppedCarousel").find('.slick');
        currSlick.wcmslick('wcmslickGoTo', parseInt($(this).index(), 10));
    }

    SteppedCarouselManager.prototype.refreshStepStatus = function(carousel, slideIndex) {
        carousel.find('.steps li').each(function(index, element) {
            if (index < slideIndex) {
                $(element).addClass('passed').removeClass('active');
            } else if (index == slideIndex) {
                $(element).addClass('active').removeClass('passed');
            } else {
                $(element).removeClass('passed active');
            }
        });
    };

    SteppedCarouselManager.prototype.initEvents = function() {
        $('.steppedCarousel .steps li').on("click", self.gotoSlide);
        $('.steppedCarousel .slick').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            self.refreshStepStatus($(event.target).parents('.steppedCarousel'), nextSlide);
        });
        $('.steppedCarousel').each(function() {
            self.refreshStepStatus($(this), 0);
        });
    };

    var _SteppedCarouselManager = function _SteppedCarousselManager() {
        self.init();
    };

    setTimeout(_SteppedCarouselManager, 1000);
};

/*!
 * jQuery Once v2.0.2 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */

/**
 * Universal Module Definition
 *
 * jQuery Once has a dependency on jQuery, so we wrap the code with a UMD
 * pattern in order to allow loading jQuery and jQuery Once through a module
 * definition like CommonJS, AMD, or through a global object.
 *
 * @see {@link http://github.com/umdjs/umd}
 */
(function($) {
    "use strict";

    /**
     * Ensures that the given ID is valid, returning "once" if one is not given.
     *
     * @param {string} [id=once]
     *   A string representing the ID to check. Defaults to `"once"`.
     *
     * @returns The valid ID name.
     *
     * @throws Error when an ID is provided, but not a string.
     * @private
     */
    var checkId = function(id) {
        id = id || "once";
        if (typeof id !== "string") {
            throw new Error("The jQuery Once id parameter must be a string");
        }
        return id;
    };

    /**
     * Filter elements that have yet to be processed by the given data ID.
     *
     * @param {string} [id=once]
     *   The data ID used to determine whether the given elements have already
     *   been processed or not. Defaults to `"once"`.
     *
     * @returns jQuery collection of elements that have now run once by
     *   the given ID.
     *
     * @example
     * ``` javascript
     * // The following will change the color of each paragraph to red, just once
     * // for the "changecolor" key.
     * $('p').once('changecolor').css('color', 'red');
     *
     * // .once() will return a set of elements that yet to have the once ID
     * // associated with them. You can return to the original collection set by
     * // using .end().
     * $('p')
     *   .once("changecolorblue")
     *     .css("color", "blue")
     *   .end()
     *   .css("color", "red");
     *
     * // To execute a function on the once set, you can use jQuery's each().
     * $('div.calendar').once().each(function() {
     *   // Since there is no once ID provided here, the key will be "once".
     * });
     * ```
     *
     * @see removeOnce
     * @see findOnce
     * @this jQuery
     *
     * @global
     * @public
     */
    $.fn.once = function(id) {
        // Build the jQuery Once data name from the provided ID.
        var name = "jquery-once-" + checkId(id);

        // Find elements that don't have the jQuery Once data applied to them yet.
        return this.filter(function() {
            return $(this).data(name) !== true;
        }).data(name, true);
    };

    /**
     * Removes the once data from elements, based on the given ID.
     *
     * @param {string} [id=once]
     *   A string representing the name of the data ID which should be used when
     *   filtering the elements. This only filters elements that have already been
     *   processed by the once function. The ID should be the same ID that was
     *   originally passed to the once() function. Defaults to `"once"`.
     *
     * @returns jQuery collection of elements that were acted upon to remove their
     *    once data.
     *
     * @example
     * ``` javascript
     * // Remove once data with the "changecolor" ID. The result set is the
     * // elements that had their once data removed.
     * $('p').removeOnce("changecolor").css("color", "");
     *
     * // Any jQuery function can be performed on the result set.
     * $("div.calendar").removeOnce().each(function() {
     *   // Remove the calendar behavior.
     * });
     * ```
     *
     * @see once
     * @this jQuery
     *
     * @global
     * @public
     */
    $.fn.removeOnce = function(id) {
        // Filter through the elements to find the once'd elements.
        return this.findOnce(id).removeData("jquery-once-" + checkId(id));
    };

    /**
     * Filters elements that have already been processed once.
     *
     * @param {string} [id=once]
     *   A string representing the name of the data id which should be used when
     *   filtering the elements. This only filters elements that have already
     *   been processed by the once function. The id should be the same id that
     *   was originally passed to the once() function. Defaults to "once".
     *
     * @returns jQuery collection of elements that have been run once.
     *
     * @example
     * ``` javascript
     * // Find all elements that have been changecolor'ed once.
     * $('p').findOnce('changecolor').each(function() {
     *   // This function is called for all elements that has already once'd.
     * });
     *
     * // Find all elements that have been acted on with the default "once" key.
     * $('p').findOnce().each(function() {
     *   // This function is called for all elements that have been acted on with
     *   // a "once" action.
     * });
     * ```
     *
     * @see once
     * @this jQuery
     *
     * @global
     * @public
     */
    $.fn.findOnce = function(id) {
        // Filter the elements by which do have the data.
        var name = "jquery-once-" + checkId(id);

        return this.filter(function() {
            return $(this).data(name) === true;
        });
    };
} (jQuery));



$(document).foundation({
    accordion: {
        toggleable: true,
        callback: function(accordion) {
            if ($(accordion).find('.tableStaticHead').length > 0) {
                $(accordion).find('.tableStaticHead .carousel').wcmslick('setPosition');
            }
            $window.trigger(eventType);
        }
    }
});

$.fn.wcmToggle = function() {

    var bigMac = arguments[0];

    var c = $(this),
        tTriggers = c.find('> .toggle-trigger'),
        tContents = c.find(".toggle-content");

    var defaults = {
        allwaysOne: false,
        mobile: false,
        startIndex: ""
    }

    var o = c.data("wcmtoggleconfig");
    var options = $.extend(defaults, o);

    if (o && o.mobile) {
        tTriggers = c.find('.toggle-parent-trigger');
        tContents = c.find(".toggle-parent-content");
    } else {
        tTriggers = c.find('.toggle-trigger');
        tContents = c.find(".toggle-content");
    }

    var _toggleContent = function _toggleContent(triggerIndex, triggerElement, actionV, actionC) {
        $("[data-togglepanel='" + triggerIndex + "']")[actionV]();
        triggerElement[actionC + "Class"]("open");
    };


    var toggleContent = function toggleContent(triggerIndex, triggerElement) {
        return function() {
            if (!o.mobile || Modernizr.mq('only screen and (max-width: 40em)') === true) {
                if (triggerElement.hasClass("open")) {
                    _toggleContent(triggerIndex, triggerElement, "hide", "remove");
                } else {
                    _toggleContent(triggerIndex, triggerElement, "show", "add");
                }

                if (options.allwaysOne) {
                    tTriggers.each(function() {
                        var item = $(this);
                        if (item.data("toggle") !== triggerIndex) {
                            _toggleContent(item.data("toggle"), item, "hide", "remove");
                        }
                    });
                }
            }
        }
    };

    var triggerEvent = function triggerInit(index) {
        var trigger = $(this);
        var triggerIndex = trigger.data("toggle");
        
        trigger.on("click", toggleContent(triggerIndex, trigger));
        if(trigger.data("defaultopen")){
           trigger.trigger("click");
        }
        if(options.startIndex !== "" && options.startIndex === triggerIndex) {
           trigger.trigger("click"); 
        }
        return;
    };

    var triggerOff = function triggerInit(index) {
        var trigger = $(this);
        var triggerIndex = trigger.data("toggle");
        return;
    };

    var init = function() {
        tContents.hide();
        tTriggers.once().each(triggerEvent);
        return;
    };

    var destroy = function() {
        tContents.show();
        tTriggers.each(triggerOff);
        return;
    };

    if (o && o.mobile && (bigMac && bigMac.destroy)) {
        destroy();
    } else {
        init();
    }

    return c;
};

var toggleMobileInit = function() {
    if (Modernizr.mq('only screen and (max-width: 40em)') === true) {
        $('.wcmtogglemobile').wcmToggle({ "destroy": false });
    } else {
        $('.wcmtogglemobile').wcmToggle({ "destroy": true });
    }
};

$(window).on("resize", toggleMobileInit);
$('.wcmtoggle').wcmToggle();


$.fn.wcmActiveButtonByRadio = function wcmActiveButtonByRadio() {
    var factory = function() {
        var el = $(this),
            tagName = el.prop("tagName"),
            defaults = {},
            config = window.wcm[el.data("radiolistner")],
            options = $.extend(defaults, config),
            radioEls = $("[name='" + options.radioName + "']+label"),
            cb = function() { };

        var _ = {
            initByTagName: {
                event: {
                    click: {
                        preventDefault: function preventDefault(e) {
                            e.preventDefault();
                            return false;
                        }
                    }
                },
                "BUTTON": function(el) {
                    el.attr("disabled", "disabled");
                },
                "A": function(el) {
                    el.on("click", this.event.click.preventDefault);
                }
            },
            activeByTagName: {
                "ALL": function() {
                    if (options.cb) {
                        cb = options.cb;
                    }

                    el.removeClass("disabled").once().on("click", cb);
                },
                "BUTTON": function() {
                    el.removeAttr("disabled");
                    _.activeByTagName.ALL();
                },
                "A": function() {
                    el.off("click", _.initByTagName.event.click.preventDefault);
                    _.activeByTagName.ALL();
                }
            }
        };

        var init = function init(el) {
            _.initByTagName[tagName](el);
            el.addClass("disabled");
            radioEls.on("click", _.activeByTagName[tagName]);
        };

        init(el, radioEls);

        return el;
    };

    $(this).each(factory);
};


// Email validation
var isEmail = function isEmail(str) {
    var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$', 'i');
    return regEmail.test(str);
};


// wcmAjaxForm | dependecies : jQuery, jquery.bindings
(function($) {
    "use strict";

    $.fn.wcmAjaxForm = function wcmAjaxForm() {

        var modelInitialized = false;

        var displayErrorMessage = function displayError(field, options) {
            $('.' + field + '-errorMessage')
                .text(options.validator[field].msg)
                .toggleClass("hide");
        };

        var styleErrorInput = function styleErrorInput(fields, options) {
            fields.addClass(options.errorClass);
        }

        var validate = function validate(options) {
            var errorCount = $('.' + options.errorClass).length;
            var pristineCount = $('.' + "pristine").length;

            if ((errorCount && errorCount > 0) || (pristineCount && pristineCount > 0)) {

                styleErrorInput($("[data-mendatory='true'].pristine:not(." + options.errorClass + ")"), options);
                styleErrorInput($("[data-mendatory='true'].pristine:not(." + options.errorClass + ")").next(".selectize-control"), options);

                $.each($('.' + options.errorClass), function() {
                    var item = $(this);
                    var path = item.attr("name");

                    options.validator[path] && displayErrorMessage(path, options);
                });
                //console.log("not valid");
                return false;
            } else {
                //console.log("valid");
                return true;
            }
        };

        var hooks = {
            init: function beforeSend(el, options) {
                return function() {
                    console.info("init!");

                    var inputs = el.find('input:not(.selectize-input input), textarea, select');
                    $.each(inputs, function(i) {
                        var item = $(this);
                        if (item.data("mendatory") === true) {
                            //console.log(item);
                            inputs.addClass("pristine");
                        }
                    })

                    var myBind = el.bindings;
                    //Todo vider les champs si besoin
                    if (modelInitialized === false) {
                        el.bindings('create')(options.model);
                        modelInitialized = true;
                    } else {
                        el.bindings('update')(options.model);
                    }

                    $("div[id^='beforeSend']").show();
                    $("div[id^='afterSend']").hide();

                    $.bindings.validation = function(path, value) {
                        return options.validator[path].rule(value);
                    };

                    $.bindings.watch = function(isValid, path, value) {

                        if (this.attr("type") === "radio") {
                            $("[name='" + path + "']")
                                .removeClass("pristine");
                            $("[name='" + path + "']")
                                .toggleClass(options.errorClass, !isValid);
                        } else {
                            this.removeClass("pristine");
                            this.toggleClass(options.errorClass, !isValid);
                        }

                        $('.' + path + '-errorMessage')
                            .text(options.validator[path].msg)
                            .toggleClass("hide", isValid);
                    };

                    options.initCallback.call(null, null);
                }
            },
            sending: function sendingCallback(el, options) {

                var mapValidate = function mapValidate(field) {
                    styleErrorInput($("[name='" + field + "']"), options);
                    displayErrorMessage(field, options);
                };

                return function(e) {
                    console.info("sending!");
                    e.preventDefault();

                    //options.sendingCallback.call(null,null)

                    if (validate(options)) {
                        var data = {},
                            item;

                        for (item in options.model) {
                            data[item] = el.bindings('get')(item);
                        }

                        $.ajax({
                            method: "POST",
                            url: options.ajxurl,
                            data: data
                        })
                            .done(function(msg) {
                                switch (msg) {
                                    case "OK":
                                        hooks.afterSend(el, options)();
                                        break;
                                    // Temporary case maybe refactored
                                    case "NOK":
                                        // TODO Spec Needed
                                        //console.log("No inputs send");
                                        break;
                                    default:
                                        msg.map(mapValidate);
                                        break;
                                }
                            }).fail(function(jqXHR, textStatus) {
                                // Network issue
                                // TODO Afficher un message à l'utilisateur
                                //console.log("Erreur r&eacute;seau, status : " + textStatus);
                            });
                    }
                }
            },
            cancelling: function cancellingCallback(el, options) {
                return function() {
                    //console.info("cancelling!");
                    options.cancellingCallback.call(null, null);
                }
            },
            closing: function closingCallback(el, options) {
                return function() {
                    //console.info("closing!");
                    options.closingCallback.call(null, null);
                }
            },
            afterSend: function afterSend(el, options) {
                return function afterSend() {
                    //console.info("afterSend!");
                    options.afterSendCallback.call(null, null);
                    $("div[id^='afterSend']").show();
                    $("div[id^='beforeSend']").hide();
                    // peut-être supprimer certains &eacute;couteurs
                }
            }
        }

        var factory = function() {
            var el = $(this),
                elID = el.id,
                defaults = {
                    // Error class on each input.
                    errorClass: "error",
                    // Ajax url to send the data
                    ajxurl: "",
                    // CSS like selector 
                    cancelTrigger: "",
                    // CSS like selector
                    sendTrigger: "",
                    // CSS like selector
                    closeTrigger: "",
                    // CSS like selector
                    initTrigger: "",
                    /**  
                     * to add validation rule to required fields
                     * 
                     * stub : {
                     *     "inputKey" : {
                     *          "rule" : function rule(value) {
                     *              the condition here is the basic condition for the required field;
                     *              var boulean = value !== "";
                     *              return boulean;
                     *          }
                     *      }
                     * }
                    */
                    customValidator: {},
                    // TODO Remove this from the option can not be override by the config object.
                    validator: {},
                    // Hook to add behavior on the init step.
                    initCallback: function() { },
                    // Hook to add behavior on the cancelling step.
                    cancellingCallback: function() { },
                    // Hook to add behavior on the closing step.
                    closingCallback: function() { },
                    // Hook to add behavior on the after send step.
                    afterSendCallback: function() { },
                    // Initial state of the form fields
                    model: {}
                },
                // Config object
                config = window.wcm[el.data("wcmajaxform")],
                // Merge object config overhides the defaults object
                options = $.extend(defaults, config);

            var _validator = {};
            var _validatorMendatory = {
                "rule": function rule(value) {
                    return value !== "";
                },
                "msg": "Le champs est obligatoire"
            };
            var _validatorNotMandatory = {
                "rule": function rule(value) { }
            }


            for (var item in options.model) {
                var mendatory = $("[name='" + item + "']").attr("data-mendatory");

                // For some browsers, `attr` is undefined; for others, `attr` is false. Check for both.
                if (mendatory === "true") {
                    _validator[item] = _validatorMendatory;
                } else {
                    _validator[item] = _validatorNotMandatory;
                }
            }

            options.validator = $.extend(_validator, options.customValidator);

            el.on(elID + ":init", hooks.init(el, options));
            $(options.initTrigger).on("click", function() { el.trigger(elID + ":init"); });
            el.on(elID + ":afterSend", hooks.afterSend(el, options));
            $(options.sendTrigger).on("click", hooks.sending(el, options));

            if (options.cancelTrigger !== "") {
                $(options.cancelTrigger).on("click", hooks.cancelling(el, options));
            }
            if (options.closeTrigger) {
                $(options.closeTrigger).on("click", hooks.closing(el, options));
            }

            el.trigger(elID + ":init");
        };

        $(this).each(factory);
    }

} (jQuery));


(function($) {
    "use strict";

    $.fn.wcmProjectSelector = function wcmProjectSelector() {
        
        var factory = function factory() {
            var el = $(this);
            var projectId = el.data("projectselectorcontent") 
            
            new ProjectSelectorManager(projectId);
        }
        
        $(this).each(factory);
    }

} (jQuery));


(function($){
    "use strict";
    
    $.fn.wcmMC = function wcmMC() {
        var config = $(this).data("mcbox");
        
        var mensualiteCalculator = document.getElementById("mensualiteCalculator");
        var mensualiteCalculator$ = Observable.fromEvent(mensualiteCalculator, "keyup");
        var upMensualite = $("#upMensualite");
        var downMensualite = $("#downMensualite");
        var mensualiteError = $("#mensualiteError");
        var mensualiteResult = $("#mensualiteResult");
        
        var defaults = {
            "start": 50,
            "end": 2000,
            "percentBase": 30
        }
        
        var model = {} 
        var options = $.extend(defaults, config);
        
        model.percentBase = options.percentBase;
        
        var calculator = {
            percent : {
                up : function(a,b) {
                    return a + (a * b / 100);
                },
                down : function(a,b) {
                    return a - (a * b / 100);
                }
            }
        }
        
        var replaceText = function replaceText(model) {
            return function () {
                var item = $(this);
                item.text(model[item.data("text")]);
            };
        };
        
        var init = function init(model) {
            $("[data-text]").each(replaceText(model));
            
            mensualiteCalculator$.forEach(function (e) {
                var val = parseInt(e.currentTarget.value, 10);

                if(val >= options.start && val <= options.end) {
                    upMensualite.html(calculator.percent.up(val, options.percentBase));
                    downMensualite.html(calculator.percent.down(val, options.percentBase));
                    mensualiteError.attr("hidden",true);
                    mensualiteResult.attr("hidden",false);
                } else {
                    mensualiteError.html("Veuillez saisir un montant compris entre "+ options.start +" &euro; et "+ options.end +" &euro; <br/>");
                    mensualiteError.attr("hidden",false);
                    mensualiteResult.attr("hidden",true);
                }
            }); 
        }(model);
    }
    
}(jQuery));

var QueryString = function() {
    // This function is anonymous, is executed immediately and
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === 'undefined') {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
} ();


$(function() {
    if (QueryString.declinaison) {
        $('.generalLeftContent ,#mainContainer ,#headerContainer, #globalContainer').addClass(QueryString.declinaison);
    }
    /*Declarations order is important because of event queue*/

if((getCookie("homepage") || sessionStorage.getItem("homepage")) && (getScreenWidth() > mobileThreshold)){
    var $layoutManager = new LayoutManager();
    var $navigationManager = new NavigationManager();
    var $rightNavManager = new RightNavManager(); 
}else{
    var $rightNavManager = new RightNavManager();
    var $layoutManager = new LayoutManager();
    var $navigationManager = new NavigationManager(); 
}
   
   
    var $rightContainerManager = new RightContainerManager();
    var $footerManager = new FooterManager();

    var $connexionDejaClientManager = new ConnexionDejaClientManager();
    var $resetBtnManager = new ResetBtnManager();
    var $resetRadioManager = new ResetRadioManager();
    var $tooltipManager = new TooltipManager();
    var $modalManager = new ModalManager();


    var $switchButtonsManager = new SwitchButtonsManager();
  //  var $editorManager = new EditorManager();
    var $passwordSecure = new PasswordSecure();
    var $openLineTable = new OpenLineTable();
    var $radioSwitchManager = new RadioSwitchManager();
    var $radioSwitchHasHelpManager = new RadioSwitchHasHelpManager();
    var $checkDependantFieldsManager = new CheckDependantFieldsManager();
    var $switchSituation = new SwitchSituation();
    var $selectizeForm = new SelectizeForm();
    var $progressBarManager = new ProgressBarManager();
    var $tableRWDManager = new TableRWDManager();
    var $tableColumnRWDManager = new TableColumnRWDManager();
    var $tableStaticHeadManager = new TableStaticHeadManager();
    var $checkBtnManager = new CheckBtnManager();
    var $dataTabsManager = new DataTabsManager();
    var $datePickerManager = new DatePickerManager();
    // var $datePickerManager1 = new DatePickerManager();
    var $accordionSwitchManager = new AccordionSwitch();
    var $leftNavManager = new LeftNavManager();
    var $equalButtonsManager = new EqualButtonsManager();
    var $equalProductZoneManager = new EqualProductZoneManager();
    var $equalBoxesManager = new EqualBoxesManager();
    var $equalHeightUntilManager = new EqualHeightUntilManager();
    //var $equalHeightPertPersonalManager = new EqualHeightPertPersonalManager();
    var $contactsManager = new ContactsManager();
    var $tableSwitchManager = new TableSwitchManager();
    var $mobileAccordions = new MobileAccordionsManager();
    var $readMoreManager = new ReadMoreManager();
    var $scrollToManager = new ScrollToManager();
    var $faqManager = new FaqManager();
    //var $steppedCarouselManager = new SteppedCarouselManager();
    $("[data-radiolistner]").wcmActiveButtonByRadio();
    $("[data-wcmajaxform]").wcmAjaxForm();
    $("[data-pscl]").wcmProjectSelector();
    $("[data-mcbox]").wcmMC();
    

    if ($('#choices').length > 0 && $('#result').length > 0) {
        var $decisionTreeManager = new DecisionTreeManager();
    }

    if ($('#map-canvas').length > 0) {
        define(['async!https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDS3pWe5L7b63SMAv46V2TD87ks9i5JPXw'], function() {
            var $mapManager = new MapManager();
        });
    }

    $('input, textarea').placeholder();

    if ($('.multi_expand').length > 0) {
        $(document).foundation({
            accordion: {
                // allow multiple accordion panels to be active at the same time
                multi_expand: true
            }
        });
    }

    if ($('#infoChoixConfirm').length > 0) {
        $('#infoChoixConfirm').on('click', function(e) {
            e.preventDefault();
            $('#infoChoixConfirmBox').removeClass('hide');
            $window.resize();
        });
        $('#closeConfrimBox').on('click', function(e) {
            e.preventDefault();
            $('#infoChoixConfirmBox').addClass('hide');
            $window.resize();
        })
    }
	
	//Epartner Actions
	
	/*$('.selected').on("change",function(e){
		var idPanel,code,produit,type,typeOfProject;
		idPanel = 'panel-1';
		code = $(this).find(':selected').data("code");
		produit = $(this).find(':selected').data("produit");
		type = $(this).find(':selected').data("cdd");
		typeOfProject = $(this).find(':selected').data("value");
		updateIaPanel(idPanel,code,produit,type,typeOfProject);
		
	});*/

    if ($('[data-modal="infoChoixModal"]').length > 0) {
        $('[data-modal="infoChoixModal"]').on('click', function() {
            $window.resize();
        });
    }
    
    $('body').find('*').filter(function() {
    return $(this).parents('.ml').length==0 && !$(this).hasClass('ml') // not applicable for Legal Mentions
        && $(this).prop('tagName').toLowerCase()!='sup' // do not apply twice
        && $(this).clone().children().remove().end().text().match(/\(\d+\)/) // check that text (without children) is of type (Number);
  }).each(function() {
    var html = $(this).html();
    var regex = new RegExp('(\\(\\d+\\))(?!</sup>)', 'img');
    var newHtml = html.replace(regex, "<sup>$1</sup>");
    if (html != newHtml) {
      $(this).html(newHtml);
    }
  });


    $window.resize();

});
}catch(e){
  //console.log(e);
}