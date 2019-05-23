/**
 * Module proposing an API to retrieve the application context (set by WCM).
 */

/*global define */
define(['jquery', './mobile-bridge'], function ($, mobileBridge) {
	'use strict';

    function ensureTrailingSlash(val) {
        return !/.*\/$/.test(val) ? val += '/' : val;
    }

    function removeStartingSlash(val) {
        return (/^\/.*/).test(val) ? val.substring(1) : val;
    }

	return function(selector) {

		// pull the context from a specific data- attribute set on the container
		// by WCM
		var contextRoot = $(selector).data('urlContext');

		if (contextRoot === undefined || contextRoot === null) {
			throw new Error("The application context could not be determined.");
		}

        if (mobileBridge.isDesktop) {
            return contextRoot;
        } else {
            return ensureTrailingSlash(mobileBridge.getBaseUrl()) + removeStartingSlash(contextRoot);
        }
	};
});
