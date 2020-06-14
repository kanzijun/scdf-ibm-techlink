var express = require("express");
var router = express.Router();

const { TWILIO_CREDS } = require("../credentials");
const { createSession, message } = require("../utils/watson");

const client = require("twilio")(
  TWILIO_CREDS.accountSid,
  TWILIO_CREDS.authToken
);

router.get("/", async function (req, res, next) {
  try {
    let result = await createSession();
    let message_response = await message("Hello");

    const text = message_response.output.generic[0].text;

    await client.messages.create({
      body: text,
      from: TWILIO_CREDS.trialNumber,
      to: TWILIO_CREDS.toNumber,
    });

    res.json({ ...result, ...message_response });
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

module.exports = router;
