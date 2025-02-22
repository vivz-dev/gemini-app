const messageService = require("../services/messageService")
const util = require("util");

const createNewMsg = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: "El cuerpo de la solicitud es inválido. Body not found" });
    }
    const {text} = req.body;
    if (!text) {
        return res.status(400).json({ error: "El cuerpo de la solicitud es inválido. Text not found." });
    }
    console.log(`texto: ${text}`)
    try {
        const messageSent = await messageService.createMsg(text, res)
        res.send(messageSent);
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = {
    createNewMsg
}