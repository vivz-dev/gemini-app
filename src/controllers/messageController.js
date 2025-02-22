const messageService = require("../services/messageService")
const util = require("util");

const createNewMsg = async (req, res) => {
    if (!body || !body.text) {
        return res.status(400).json({ error: "El cuerpo de la solicitud es inválido" });
    }
    
    const {text} = req.body;
    console.log(`texto: ${text}`)

    // const newMessage = {
    //     text: body.text
    // }
    try {
        const messageSent = await messageService.createMsg(body, res)
        res.send({ status: "OK", message: messageSent });
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = {
    createNewMsg
}