/**
 * Utility module to facilitate the retrieval of 4-axes
 */

define(function() {
	'use strict';

	var axes = {};

	var personAxes = {
			'language': '',
			'territory': '',
			'audience': '',
			'distributionChannel': ''
	};

	var latestCookieValue = null;

	axes.language = function(){
		return axes.cookieValue('language');
	};

	axes.territory = function(){
		return axes.cookieValue('territory');
	};

	axes.audience = function(){
		return axes.cookieValue('audience');
	};

	axes.distributionChannel = function(){
		return axes.cookieValue('distributionChannel');
	};

	axes.cookieValue = function(valueName){
		var qName = "axes=";
		var docCooks = document.cookie;

		if (docCooks != latestCookieValue && docCooks.indexOf(qName) >= 0){
			var ca = docCooks.split(';');
			var axesCookie = null;

			for (var i = 0;i < ca.length;i++) {
				var c = ca[i].trim();
				if (c.indexOf(qName) >= 0){
					axesCookie = decodeURIComponent(c.substring(qName.length, c.length)+'');
					break;
				}
			}

			if (axesCookie !== null && axesCookie.indexOf('|') >= 0){
				var axesArray = axesCookie.split('|');
				if (axesArray.length >= 4){
					personAxes.language = axesArray[0];
					personAxes.distributionChannel = axesArray[1];
					personAxes.territory = axesArray[2];
					personAxes.audience = axesArray[3];
				}
			}
			latestCookieValue = docCooks;
		}
		return personAxes[valueName];
	};

	Object.freeze(axes);

	return axes;
});