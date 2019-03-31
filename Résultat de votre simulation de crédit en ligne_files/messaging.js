/**
 * Module for sending/receiving messages from/to other applications.
 */
/*global define*/
define(['pagebus'], function (PageBus) {

	'use strict';

	var messaging = {};
	
	/**
	 * Registers a callback to be called when receiving messages on the given topic
	 * @param {String} topic The name of the queue
	 * @param {function} callback The callback function receiving messages. The callback takes a message object as parameter.
	 */
	messaging.subscribeTopic = function (topic, callback) {
		if(window.top.PageBus){
			window.top.PageBus.subscribe(topic, this, function (subj, msg) {
			callback(msg);
			});
		}else{
			window.PageBus.subscribe(topic, this, function (subj, msg) {
			callback(msg);
			});
		}
		
	};

	/**
	 * Publishes the given message on the given topic. Every callback registered to this topic will be notified.
	 * You should not assume that every subscribers has consumed the message when this method returns.
	 * @param {String} topic The topic to publish on
	 * @param {Object} message The message to send.
	 */
	messaging.publishTopic = function (topic, message) {
		if(window.top.PageBus){
			window.top.PageBus.publish(topic, message);
		}else{
			window.PageBus.publish(topic, message);
		}
		
	};
	
	/**
	 * Query a given topic. Return an array containing the topic messages
	 * @param {String} topic The topic to query on
	 * @return {Array} topic messages.
	 */
	messaging.queryTopic = function (topic) {
		if(window.top.PageBus){
				var pageBusObjects = window.top.PageBus.query(topic);
			}else{
				var pageBusObjects = window.PageBus.query(topic);
			}
	   
	    var messages = [];
	    for (var i = 0; i < pageBusObjects.length; i++) {
	        messages.push(pageBusObjects[i].value);
	    }
		return messages;
	};
	
	/**
     * Store a data into  a given topic.
     * @param {String} topic The topic to store in
     * @return {Object} data to be stored.
     */
    messaging.storeTopic = function (topic, data) {
        //Before using store, the topic needs to be cached. Otherwise an exception will be thrown by PageBus
        if(window.top.PageBus){
        	 window.top.PageBus.subscribe(topic, function (topic, message, data) { return; }, null, {
            PageBus: {
                cache: true
            }
        });
        window.top.PageBus.store(topic, data);
    }else{
      
       window.PageBus.subscribe(topic, function (topic, message, data) { return; }, null, {
            PageBus: {
                cache: true
            }
        });
        window.PageBus.store(topic, data);
    }
       
    };


	Object.freeze(messaging);

	return messaging;

});
