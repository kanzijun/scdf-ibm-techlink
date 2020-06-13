var express = require("express");
var router = express.Router();

const TWILIO_CREDS = require("../credentials").TWILIO_CREDS;

const client = require("twilio")(
  TWILIO_CREDS.accountSid,
  TWILIO_CREDS.authToken
);

router.get("/", async function (req, res, next) {
  let message = await client.messages.create({
    body: "Test",
    from: TWILIO_CREDS.trialNumber,
    to: "+6581238021",
  });
  res.send(message.sid);
});

module.exports = router;
