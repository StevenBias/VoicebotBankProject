/**
 * Cross site request forgery prevention:
 * We send both a cookie and a query parameter with the same random token.
 * The server should check that they are equal.
 *
 * NB: Makes use of JQuery ajaxPrefilter to automatically expose the mechanism
 */
/*global define */
define(['jquery', './mobile-bridge', 'module'], function ($, mobileBridge, module) {
    'use strict';

    var csrf = {},
        token,
        tokenName = encodeURIComponent('CSRF'),
        firstOfQueue = null,
        moduleInitialized = false;

    /**
     * Creates a random alphanumeric string of length 128
     * @return {String}
     */
    function generateRandomToken() {
        if (mobileBridge.isMobile){
            var mobileToken = getMobileToken();
            if (mobileToken !== null){
                // Sets the token in a cookie
                setCookie(mobileToken);

                return mobileToken;
            }
        }
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
            stringLength = 128,
            randomString = '',
            i;
        for (i = 0; i < stringLength; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomString += chars.substring(rnum, rnum + 1);
        }
        // Sets the token in a cookie
        setCookie(encodeURIComponent(randomString));
        return encodeURIComponent(randomString);
    }

    /**
     * Uses the mobile shell to generate a token. Returns null if
     * not run from within the shell.
     */
    function getMobileToken() {
        return mobileBridge.isMobile && (typeof mobileBridge.getCSRFToken === 'function') ? mobileBridge.getCSRFToken() : null;
    }

    /**
     * Saves a token as a csrf cookie with an expiry date
     * @param  {String} value alphanumeric token
     */
    function setCookie(value, expires) {
        window.document.cookie = tokenName + '=' + value + '; Path=/' +
            (module.config().secure !== false ? '; Secure' : '') +
            (expires !== undefined ? ';expires=Thu, 01 Jan 1970 00:00:00 UTC' : '')
            ;
    }

    /**
     * Overrides default jQuery behaviour to add the csrf cookie
     * and request parameter in the url automatically.
     * For an explanation of the parameters, see the jQuery docs
     */
    function setupAjaxPrefilter(){
        $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
            // if first Ajax of queue, the token is not yet generated, so ajaxStart function
            // will set the token when it will be available.
            // if second consecutive request, then the ajaxStart will already be called,
            // and the token would be already available, so set header right now.
            if (firstOfQueue === null){
                firstOfQueue = jqXHR;
            }else{
                jqXHR.setRequestHeader(tokenName, token);
            }

        });
    }

    function ajaxStart(){
        // Gets a token. Gives precedence to the mobile token.
        token = generateRandomToken();

        // token should already be available at this time, while for the first Ajax,
        // the prefilter will be call before "ajaxStart"
        if (firstOfQueue !== null){
            firstOfQueue.setRequestHeader(tokenName, token);
        }
    }

    function ajaxStop(){
        // clear the cookie
        setCookie('' /* empty CSRF value */, true /* expires now*/);
        token = null;
        firstOfQueue = null;
    }

    /**
     * Initialization function. Gets the token from either mobile or random
     * Sets the cookie.
     */
    function initialize() {
        if (moduleInitialized){
            return; // already initialized
        }
        // set the initialized
        moduleInitialized = true;

        $(document).ajaxStart(ajaxStart);
        $(document).ajaxStop(ajaxStop);
        setupAjaxPrefilter();
    }

    /**
     * Automatically add token to a form
     */
    csrf.addTokenOnSubmit = function(htmlElement) {
        var form = $(htmlElement);

        if (typeof form.prop('tagName') !== 'string' || 'FORM' !== form.prop('tagName').toUpperCase()) {
            throw 'Cannot add token on other elements than a form';
        }

        if (typeof form.attr('method') === 'string'  && form.attr('method').toLowerCase() === 'post') {
            token = generateRandomToken();

            var csrfHidden = $('<input>')
                .attr('type', 'hidden')
                .attr('name', tokenName)
                .attr('value', token);
            form.append(csrfHidden);
        }
    };

    csrf.isAjaxRequestOngoing = function(){
        return firstOfQueue !== null;
    };

    initialize();

    return csrf;
});
