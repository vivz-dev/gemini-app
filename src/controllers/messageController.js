const messageService = require("../services/messageService")
const whatsappService = require("../services/whatsappService")
const metaService = require("../services/metaService")
const util = require("util");
const tokens = require("../utils/tokens")

const createNewMsg = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: "El cuerpo de la solicitud es inválido. Body not found" });
    }
    const {text, user_id, username} = req.body;
    if (!text) {
        return res.status(400).json({ error: "El cuerpo de la solicitud es inválido. Text not found." });
    }
    console.log(`${text} - ${user_id} - ${username}`)
    try {
        const messageSent = await messageService.createMsg(text, res)
        res.send(messageSent);
        // res.status(200).json({ message: "todo bien" });
    } catch (error) {
        console.log(error)
    }
}

// http://localhost:3000/api/v1/ws
const sendWhatsappMessage = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: "El cuerpo de la solicitud es inválido. Body not found" });
    }
    const {text, user_id, username} = req.body;
    if (!text) {
        return res.status(400).json({ error: "El cuerpo de la solicitud es inválido. Text not found." });
    }
    console.log(`${text} - ${user_id} - ${username}`)
    try {
        const messageSent = await whatsappService.sendMessage(text)
        res.send(messageSent);
        // res.status(200).json({ message: "todo bien" });
    } catch (error) {
        console.log(error)
    }
}

const webhookListener = async (req, res) =>{
    const message = req.body.entry?.[0]?.changes[0]?.value?.messages?.[0];
    switch (message?.type) {
        case "text":
            const business_phone_number_id = req.body.entry?.[0].changes?.[0].value?.metadata?.phone_number_id;
            const reply = await metaService.sendMetaMessage(message, business_phone_number_id)
            break;
        default:
            break;
    }

    res.sendStatus(200);
}

const webHookReceiver = async (req, res) => {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];
    if (mode === "subscribe" && token === tokens.WEBHOOK_VERIFY_TOKEN) {
        // respond with 200 OK and challenge token from the request
        res.status(200).send(challenge);
        console.log("Webhook verified successfully!");
    } else {
        // respond with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);
    }
}

module.exports = {
    createNewMsg,
    sendWhatsappMessage,
    webhookListener,
    webHookReceiver
}