const createMsg = (newMessage) => {
    res.send(`enviando peticion a GEMINI ${newMessage.text}`)
}

module.exports = {
    createMsg
}