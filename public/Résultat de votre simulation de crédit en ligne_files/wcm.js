/**
 * Module proposing an API for interfacing applications and WCM.
 */

/*global define*/
define(['pagebus', 'jquery'], function (PageBus, $) {
	'use strict';

	var wcm = {};

	/**
	 * Applications publish on this topic to notify WCM an error.
	 */
	wcm.ERROR_TOPIC = 'wcm.sf.displayError';

	/**
	 * Notifies WCM that an error happened.
	 * @param {Object} error Information about error.
	 * @param {String} [error.code]    Functional code for the error.
	 * @param {String} [error.message] Human readable message.
	 * @param {String} [error.traceId] Technical code coming from the server to identify the request.
	 * @param {String} [error.xLogId]  Technical code coming from the server to identify the user session.
	 */
	wcm.notifyError = function (error) {
		PageBus.publish(wcm.ERROR_TOPIC, error);
	};

	/**
	 * Load a WCM html fragment into a given selector.
	 * @param {String} jQuery selector string where the fragment will be included.
	 * @param {String} WCM root url.
	 * @param {Object} WCM Axes object.
	 * @param {Object} WCM content type (optional). It can be "/sites/sample/share/clickimage.page"
	 * @param {Object} WCM content asset (optional). It can be "templatedata/marketing-contents/click-image/data/demos/wcm-ClickImage.xml"
	 * @param {Object} WCM iframe (optional). It can be true or false.
	 */
	wcm.load = function (wcmContentSelector, wcmRootUrl, axes, wcmContentType, wcmContentAsset, wcmIframe) {
		var wcmContent = $(wcmContentSelector);
		
		if (wcmContentType === undefined) {
			wcmContentType = wcmContent.data('wcmcontentType');
			if (wcmContentType === undefined || wcmContentType === null) {	
				throw new Error("WCM content type could not be determined.");
			}
		}
		
		if (wcmContentAsset === undefined) {
			wcmContentAsset = wcmContent.data('wcmcontentAsset');
			if (wcmContentAsset === undefined || wcmContentAsset === null) {	
				throw new Error("WCM content asset could not be determined.");
			}
		}
		
		if (wcmIframe === undefined) {
			wcmIframe = wcmContent.data('wcmcontentIframe');
		}

		var wcmUrl = wcmRootUrl + wcmContentType + 
		"?axes1=" + axes.language() + 
		"&axes2=" + axes.distributionChannel() + 
		"&axes3=" + axes.territory() + 
		"&axes4=" + axes.audience() + 
		"&asset=" + wcmContentAsset;
		
		if (wcmIframe) {
			wcmContent.html("<iframe seamless='seamless' scrolling='no' style='width:100%; height: 100%;'></iframe>");
			$("iframe", wcmContent).attr("src", wcmUrl);
		}
		else {
			var urlParser = document.createElement('a');
			urlParser.href = wcmUrl;
			var host = urlParser.protocol + "//" + urlParser.host;
			
			$.ajax({
				type:"GET",
				url: wcmUrl,
				csrf: false, 
				success: function(data){
					data = data.replace(/(\/rsc\/|\/sites\/)/g, host + "$1");
					var fragment = $(data).filter(function(i, e) {
						return e.nodeType == 1 && e.id == 'sf-master';
					});
					wcmContent.html(fragment);
				}   
			}).fail(function( jqXHR, textStatus, errorThrown ) {
				throw new Error("WCM content load error " + textStatus + " " + errorThrown + " for  " + wcmUrl);
			});
		}
	};

	// Make wcm immutable
	Object.freeze(wcm);

	return wcm;
});
