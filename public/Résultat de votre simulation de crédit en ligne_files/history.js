/**
 * Module to support History / Back-button narrowed to application instances.
 * The principle is :
 *   - Each IA instance has its own id during all the page life-cycle.
 *   - To be clear : two instances of the same application MUST have different id
 *   - Each application instance register a callback method along with its id.
 *   - Each application pushes its new state along with its id.
 *   - When the back button is pressed, callbacks are triggered with their respective states
 */
/*global window, console, define*/
define(function (History) {
    'use strict';

    var history = {};

    // Maps identifier to callback method
    var callbacks = {};
    // Maps identifier to initial state
    var initialStates = {};

    // Listen to the back button
    window.onpopstate = function (event) {
        var stateToRestore = !event ? window.history.state : event.state;
        var callbackId, callbackState;
        for (callbackId in callbacks) {
            if (callbacks.hasOwnProperty(callbackId)) {
                var callback = callbacks[callbackId];
                if (callback) {
                    callbackState = undefined;
                    // check if we have a recorded state for this callback
                    if (stateToRestore) {
                        callbackState = stateToRestore[callbackId];
                    }
                    // if not, try the initial states
                    if (callbackState === undefined) {
                        callbackState = initialStates[callbackId];
                    }
                    // do the callback if we found something
                    if (callbackState !== undefined) {
                        callback(callbackState);
                    }
                }
            }
        }
    };

    /**
     *  Pushes a state on the history stack. This state is aimed at being processed by the provided callback
     *  when history will be popped.
     *  @param {String} callbackId The callback identifier.
     *  @param {Object} state The state to push on the history stack.
     *  @param {String} [title] The title to bind to this state.
     */
    history.push = function (callbackId, state, title) {

        var fullPageState = window.history.state;
        if (!fullPageState) {
            fullPageState = {};
        }
        fullPageState[callbackId] = state;
        if (window.history.pushState) {
            window.history.pushState(fullPageState, "Last state of element id " + callbackId);
        }
    };

    /**
     * Registers a callback function that will be invoked with popped state as parameter.
     * @param {String} callbackId A identifier for the callback.
     * @param {Function} callback Callback to be called passing popped state as parameter.
     * @param {Object} initialState The initial state that will be used to reset the application.
     *        Omitting this parameter will prevent callbacks for initial states.
     */
    history.register = function (callbackId, callback, initialState) {
        callbacks[callbackId] = callback;
        if (initialState !== undefined) {
            initialStates[callbackId] = initialState;
        }

        return callbackId;
    };

    /**
     * Unregisters the callback function that has been registered along the application instance id parameter.
     * If no such callback has been registered, nothing happen.
     * @param {String} callbackId The unique identifier for the passed application instance.
     */
    history.unregister = function unregister(callbackId) {
        callbacks[callbackId] = null;
    };

    // Make history immutable !!!
    Object.freeze(history);

    return history;

});
