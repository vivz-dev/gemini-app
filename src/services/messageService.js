const createMsg = (newMessage) => {
    res.send(`enviando peticion a GEMINI ${newMessage}`)
    return newMessage
}

module.exports = {
    createMsg
}