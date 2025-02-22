const geminiService = require("./geminiService")

const createMsg = async (newMessage, res) => {
    const respuestaGemini = await geminiService.geminiAPI(newMessage);
    return respuestaGemini
}

module.exports = {
    createMsg
}