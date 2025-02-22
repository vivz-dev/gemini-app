const messageService = require("../services/messageService")

const createNewMsg = (req, res) => {
    const {body} = req;

    const newMessage = {
        text: body.text
    }

    try {
        const messageSent = messageService.createMsg(newMessage)
        res.status(201).send({ status: "OK", data: messageSent });
    } catch (error) {
        
    }
    
}

module.exports = {
    createNewMsg
}