/*global define*/
/**
 * AMD driver for the framework which exposes all provided libraries
 */
define(["./sf/appcontext",
    "./sf/csrf",
    "./sf/errlog",
    "./sf/fluid",
    "./sf/form",
    "./sf/history",
    "./sf/messaging",
    "./sf/wcm",
    "./sf/axes",
    "./sf/mobile-bridge"
],
    function (appcontext, csrf, errlog, fluid, form, history, messaging, wcm, axes, mobileBridge) {
        'use strict';
        var sfroot = {};

        sfroot.getApplicationContext = appcontext;
        sfroot.errlog = errlog;
        sfroot.fluid = fluid;
        sfroot.protectForm = form;
        sfroot.history = history;
        sfroot.messaging = messaging;
        sfroot.wcm = wcm;
        sfroot.axes = axes;
        sfroot.mobileBridge = mobileBridge;
        sfroot.csrf= csrf;
        return sfroot;
});
