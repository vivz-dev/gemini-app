const { GoogleGenerativeAI } = require("@google/generative-ai");

async function geminiAPI(newMessage) {
    const genAI = new GoogleGenerativeAI("AIzaSyAcYcGPtxzQPx_KfNic06QRXBjIfYouTRE");
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: "Eres un asistente que habla español. Ayuda al usuario en lo que requiera. Usa lenguaje amigable y pocos emojis.",
    });
    const result = await model.generateContent(newMessage);
    return result.response.text()
}
//≈ß
module.exports = {
    geminiAPI
}