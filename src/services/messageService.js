const geminiService = require("./geminiService")

const createMsg = async (newMessage, res) => {
    const respuestaGemini = await geminiService.readPDF(newMessage);
    return respuestaGemini
}

module.exports = {
    createMsg
}