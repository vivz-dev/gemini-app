const messageService = require("../services/messageService")

const createNewMsg = async (req, res) => {
    const body = req;
    console.log(`body: ${body}`)

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