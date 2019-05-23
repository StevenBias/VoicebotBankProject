// module for creating fluid containers

/*global window, define*/
define(['jquery'], function ($) {
	'use strict';

	var fluid = {};

	var defaultConfig = {
		// based on twitter bootstrap values
		breakpoints: [320, 480, 768, 940, 1210],
		breakpointClasses: ["tiny", "small", "medium", "large", "huge"]
	};

	// maps registered selectors to their configs
	var selectorMap = {};

	/**
	 Adapts an element's class based on its outer width and configured breakpoints.
	 When the width is larger than the largest breakpoint, no class will be added.
	 */
	function changeLayout(elem, config) {
		if (!config) {
			config = defaultConfig;
		}

		var $elem = $(elem);
		var ow = $elem.outerWidth();
		$elem.removeClass(config.breakpointClasses.join(" "));
		var i = 0;
		for (i = 0; i < config.breakpoints.length; i++) {
			var breakpoint = config.breakpoints[i];
			if (ow <= breakpoint) {
				$elem.addClass(config.breakpointClasses[i]);
				break;
			}
		}
	}

	/**
	 * Runs a manual update according to a given selector.
	 * @param {String} selector the selector
	 * @param {Object} [config] The config to use for this selector. Uses defaults if not provided.
	 * @return {Object} the fluid object
	 */
	fluid.update = function (selector, config) {
		$(selector).each(function () {
			changeLayout(this, config);
		});
		return fluid;
	};

	/**
	 * Runs a manual update for all registered selectors.
	 * @return {Object} the fluid object
	 */
	fluid.updateRegistered = function () {
		var selector;
		for (selector in selectorMap) {
			if (selectorMap.hasOwnProperty(selector)) {
				fluid.update(selector, selectorMap[selector]);
			}
		}
		return fluid;
	};

	/**
	 * Register a jQuery selector to enable automatic updates on window resize events.
	 * @param {String} selector
	 * @param {Object} [config] The config to use for this selector. Uses defaults if not provided.
	 * @return {Object} the fluid object
	 */
	fluid.register = function (selector, config) {
		selectorMap[selector] = config;
		return fluid;
	};

	$(window).resize(function () {
		fluid.updateRegistered();
	});

	// Make fluid immutable
	Object.freeze(fluid);

	return fluid;
});
