define([], function() {
    'use strict';

    var isIOS = !!window.iOSBridge,
        isAndroid = !!window.AndroidBridge,
        nativeBridge;

    if (isIOS) nativeBridge = window.iOSBridge;
    else if (isAndroid) nativeBridge = window.AndroidBridge;

    // MobileBridge
    function Bridge() {}
    Bridge.prototype.isIOS = isIOS;
    Bridge.prototype.isAndroid = isAndroid;
    Bridge.prototype.isMobile = isIOS || isAndroid;
    Bridge.prototype.isDesktop = !isIOS && !isAndroid;

    // AndroidBridge
    function AndroidBridge() {}
    AndroidBridge.prototype = new Bridge();
    AndroidBridge.prototype.getBaseUrl = function() {
        return nativeBridge.getAjaxBaseUrl();
    };
    AndroidBridge.prototype.getCSRFToken = function() {
        return nativeBridge.getCSRFToken();
    };

    // IOSBridge
    function IOSBridge() {}
    IOSBridge.prototype = new Bridge();
    IOSBridge.prototype.getBaseUrl = function() {
        return nativeBridge.getBaseURL();
    };
    IOSBridge.prototype.getCSRFToken = function() {
        return nativeBridge.getCSRFToken();
    };

    if (isIOS) return new IOSBridge();
    else if (isAndroid) return new AndroidBridge();
    else return new Bridge();
});
