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

module.exports = async function (query) {
  // [START dialogflow_detect_intent_with_texttospeech_response]
  // Imports the Dialogflow client library
  const dialogflow = require('dialogflow');

  // Instantiate a DialogFlow client.
  const sessionClient = new dialogflow.SessionsClient();

  const projectId = 'guide-cetelem';
  const sessionId = '1234';
  const languageCode = 'fr-FR';
//  const outputFile = `path for audio output file, e.g. ./resources/myOutput.wav`;

  // Define session path
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);
//	const fs = require('fs');
//	const outputFile = './public/js/sound.wav';

  // The audio query request
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: languageCode,
      },
    },
    outputAudioConfig: {
      audioEncoding: `OUTPUT_AUDIO_ENCODING_LINEAR_16`,
//		 sampleRateHertz: 1,
    },
  };

  // Send request and log result
//  const responses = await sessionClient.detectIntent(request);
//	res = responses[0];
//	return JSON.stringify(res);
//  console.log('Detected intent');
//
//  const result = responses[0].queryResult;
//  console.log(`  Query: ${result.queryText}`);
//  console.log(`  Response: ${result.fulfillmentText}`);
//  if (result.intent) {
//    console.log(`  Intent: ${result.intent.displayName}`);
//  } else {
//    console.log(`  No intent matched.`);
//  }
//
	var responses = await sessionClient.detectIntent(request);

  const audioFile = responses[0].outputAudio;
	console.log(audioFile.toString('base64'));
	responses[0].outputAudio = audioFile.toString('base64');
//  await util.promisify(fs.writeFile)(outputFile, audioFile, 'binary');
//  console.log(`Audio content written to file: ${outputFile}`);
  return responses;
//  // [END dialogflow_detect_intent_with_texttospeech_response]
}
