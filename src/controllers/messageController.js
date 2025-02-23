const messageService = require("../services/messageService")
const whatsappService = require("../services/whatsappService")
const util = require("util");

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

module.exports = {
    createNewMsg,
    sendWhatsappMessage
}