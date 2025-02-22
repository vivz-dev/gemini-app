const createMsg = (newMessage) => {
    res.send(`enviando peticion a GEMINI ${newMessage}`)
}

module.exports = {
    createMsg
}