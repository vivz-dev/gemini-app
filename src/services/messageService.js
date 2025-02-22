const { GoogleGenerativeAI } = require("@google/generative-ai");

const createMsg = async (newMessage, res) => {
    const respuestaGemini = await geminiAPI(newMessage);
    console.log(`respuesta GEMINI ${respuestaGemini}`)
    return respuestaGemini
}

async function geminiAPI(newMessage) {
    const genAI = new GoogleGenerativeAI("AIzaSyAcYcGPtxzQPx_KfNic06QRXBjIfYouTRE");
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(newMessage);
    return result.response.text()
}

module.exports = {
    createMsg
}