const messageService = require("../services/messageService")
const util = require("util");

const createNewMsg = async (req, res) => {
    const {body} = req.body;
    console.log(util.inspect(req, { depth: null, colors: true }));
    console.log(`mensaje del usuario: ${body.text}`)

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