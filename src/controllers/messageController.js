const messageService = require("../services/messageService")

const createNewMsg = (req, res) => {
    const {body} = req;

    // const newMessage = {
    //     text: body.text
    // }
    try {
        const messageSent = messageService.createMsg(body, res)
        res.send({ status: "OK", message: messageSent });
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = {
    createNewMsg
}