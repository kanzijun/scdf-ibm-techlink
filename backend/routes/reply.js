var express = require("express");
var router = express.Router();

const MessagingResponse = require("twilio").twiml.MessagingResponse;
const { message } = require("../utils/watson");

router.post("/", async function (req, res) {
  try {
    console.log(req.body.Body);
    const twiml = new MessagingResponse();
    let result = await message(req.body.Body);
    let text_response = result.output.generic[0].text;

    twiml.message(text_response);
    res.writeHead(200, { "Content-Type": "text/xml" });

    res.end(twiml.toString());
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

module.exports = router;
