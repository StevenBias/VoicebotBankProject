var express = require('express');
var router = express.Router();
//const {WebhookClient} = require('dialogflow-fulfillment');
//const {Card, Suggestion} = require('dialogflow-fulfillment');

/*process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements */

//exports.webhook = functions.https.onRequest((request, response) => {
  //const agent = new WebhookClient({ request, response });
  //console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  //console.log('Dialogflow Request body: ' + JSON.stringify(request.body));})


/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Paris Express' });
});*/

/* let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Definition', definition);
  // intentMap.set('<INTENT_NAME_HERE>', googleAssistantHandler);
  agent.handleRequest(intentMap); */

router.post('/', function(req, res){
  if(req.body.queryResult.intent.displayName=='Webhook test'){
    res.setHeader('Content-Type','application/json');
    res.send(JSON.stringify({
      //"speech":"Ca signifie blablabla",
      "fulfillmentText": "Ca signifie blablabla"}));
      console.log(req.body.queryResult.intent.displayName);

    }
    else if (req.body.queryResult.intent.displayName=='ModifierMensualite - yes - custom') {
      res.setHeader('Content-Type','application/json');
var amount = req.body.queryResult.parameters.number;
var mens = Math.round(16317/amount);
      res.send(JSON.stringify({
        "fulfillmentText": "Dans ce cas votre durée de remboursement sera de "+ mens + " mois"}));
        console.log(req.body.queryResult.intent.displayName);

    }
  }
)

module.exports = router;
