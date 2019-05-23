/**
 * Module for trapping Javascript errors at window level and logging them server-side.
 * Just execute it to bind to the window.onerror.
 *
 * The url of the server can be configured by defining sf.errorlog.config({url:'...'})
 * Disabling the server communication can be done sf.errorlog.config({localMode:true})
 */
/*global define, window*/
define(['jquery'], function ($) {
    'use strict';

    var errlog = {},
        config = {
            localMode:false,
            preventDefault:false,
            maxMsgLength:1024,
            maxErrorQueue:1024, // maximum number of entries
            laps:1000, // One request max each seconds
            url:"rpc/logError"
        },
        previousErrorHandler = null,
        errorQueue = [],
        // This variable is used to configure only once the call to SendOutError().
        timerSet = false;

    function sendErr(params) {
        $.ajax({
            type:'POST',
            url:config.url,
            headers:{'Content-Type':'application/json'},
            data:JSON.stringify(params)
        });
    }

    function sendOutError() {
        timerSet = false;
        var errorsToSend = [];
        var size = errorQueue.length;
        for (var i=0; i < size; i++) {
            var error = errorQueue[i];
            var jsonError = {
                loc:error.loc,
                ln:error.line ? error.line.toString() : '',
                err:error.msg.substr(0, config.maxMsgLength)
            };
            errorsToSend[i] = jsonError;
        }
        // Cleaning the queue
        errorQueue = [];

        var params = {
            url: document.URL,
            errors: errorsToSend
        };
        sendErr(params);
    }
    
    errlog.queueError = function (msg, fileLoc, lineNo) {
        if (errorQueue.length > 0) {
            var lastError = errorQueue.pop();
            // Avoid duplicate errors
            if (lastError.msg !== msg || lastError.loc !== fileLoc || lastError.line !== lineNo) {
                errorQueue.push(lastError);
            }
        }
        if (errorQueue.length < config.maxErrorQueue) {
            errorQueue.push({msg:msg, loc:fileLoc, line:lineNo});
        }
    };

    /**
     * The error handler which gets wired to the window.onerror
     *
     * @param msg
     * @param fileLoc
     * @param lineNo
     * @return {Boolean} false means that the default handler
     */
    errlog.onerror = function (msg, fileLoc, lineNo) {
        errlog.queueError(msg, fileLoc, lineNo);
        if (typeof(previousErrorHandler) === "function") {
            // call any existing error handler
            previousErrorHandler(msg, fileLoc, lineNo);
        }
        
        if (!timerSet) {
            timerSet = true;
            window.setTimeout(sendOutError, config.laps);	
        }
        
        return config.localMode ? false : config.preventDefault;
    };
    
    /**
     * Change and get the configuration of the error log
     *
     * @param newConfig Object overwrite the configurable parameters.
     * @return the current config
     */
    errlog.config = function (newConfig) {
        if (newConfig !== undefined) {
            if (typeof(newConfig.url) !== 'undefined' &&
                ( newConfig.url === null || newConfig.url === '')) {
                throw new Error("url cannot be empty");
            }
            config = $.extend({}, config, newConfig);
        }
        return Object.create(config);
    };

    /**
     * Reset the errors queue
     */
    errlog.reset = function () {
        errorQueue = [];
    };
    
    // Wire the error handler to the window
    previousErrorHandler = window.onerror;
    window.onerror = errlog.onerror;

    Object.freeze(errlog);
    return errlog;
});
