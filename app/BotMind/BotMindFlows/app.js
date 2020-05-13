//---------------------------------------------------------------------------------------------------------
const dialogflow = require('dialogflow');
const uuid = require('uuid');

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */

// A unique identifier for the given session
const sessionId = uuid.v4();
const projectId = 'prueba-sljsfs';

// Create a new session
const sessionClient = new dialogflow.SessionsClient({
  keyFilename: 'Prueba-62bdd537b77e.json',
});
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

let responses;
let result;
/* bot recibe fulfillmentText pero no recibe nada */
let bot;

async function runSample() {
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: 'Tirame datos',
        // The language used by the client (en-US)
        languageCode: 'es-US',
      },
    },
  };
  // Send request and log result
  responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log('No intent matched.');
  }
  /* no lo cambia */
  bot = JSON.stringify(result.fulfillmentText);
  recibo(bot);
  return bot;
}

runSample();

function recibo(mensajeBot) {
  console.log(mensajeBot);
}
//---------------------------------------------------------------------------------------------------------
