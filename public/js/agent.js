/**
 * Copyright 2018, Google, LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

//const projectId = process.env.GCLOUD_PROJECT;
const util = require('util');

module.exports = async function (query, agentEvent) {
	// [START dialogflow_detect_intent_with_texttospeech_response]
	// Imports the Dialogflow client library
	const dialogflow = require('dialogflow').v2beta1;

	// Instantiate a DialogFlow client.
	const sessionClient = new dialogflow.SessionsClient();

	const projectId = 'guide-cetelem';
	const sessionId = '1234';
	const languageCode = 'fr-FR';

	// Define session path
	const sessionPath = sessionClient.sessionPath(projectId, sessionId);

	var req;
	if(agentEvent == undefined){
		console.log("undefined");
		// The audio query request
		req= {
			session: sessionPath,
			queryInput: {
				text: {
					text: query,
					languageCode: languageCode,
				},
			},
		};
	}else{
		// detect event
		req= {
			session: sessionPath,
			queryInput: {
				"event": {
					name: query,
					languageCode: languageCode,
				},
			},
		};
	}
		const request = req;

	var responses = await sessionClient.detectIntent(request);
	//Convert outputAudio format!
	responses[0].outputAudio = responses[0].outputAudio.toString('base64');
	return responses;
	//  // [END dialogflow_detect_intent_with_texttospeech_response]
}
