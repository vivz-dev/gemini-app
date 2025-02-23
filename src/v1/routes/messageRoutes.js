const express = require("express");
const router = express.Router();
const messageController = require("../../controllers/messageController")

router
    // .post('/',messageController.createNewMsg)
    // .post('/ws/',messageController.sendWhatsappMessage)
    .post('/webhook', messageController.webhookListener)
    .get('/webhook', messageController.webHookReceiver)

module.exports = router;
