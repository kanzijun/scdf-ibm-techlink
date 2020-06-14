const AssistantV2 = require("ibm-watson/assistant/v2");
const { IamAuthenticator } = require("ibm-watson/auth");

const {
  version,
  apiKey,
  url,
  assistantId,
} = require("../credentials").WATSON_ASSISTANT;

let sessionId = null;

const assistant = new AssistantV2({
  version: version,
  authenticator: new IamAuthenticator({
    apikey: apiKey,
  }),
  url: url,
});

async function createSession() {
  try {
    let response = await assistant.createSession({
      assistantId: assistantId,
    });
    sessionId = response.result.session_id;
    return response.result;
  } catch (err) {
    console.log(err);
  }
}

async function message(text) {
  try {
    let response = await assistant.message({
      assistantId,
      sessionId,
      input: {
        message_type: "text",
        text,
        options: {
          return_context: true,
        },
      },
    });
    return response.result;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createSession,
  message,
};
