const { GoogleGenerativeAI } = require("@google/generative-ai");


const createMsg = async (newMessage, res) => {
    
    console.log(`newmessage -> ${newMessage}`)
    const respuestaGemini = await geminiAPI(newMessage);
    console.log(`respuesta GEMINI ${respuestaGemini}`)
    // res.send(`enviando peticion a GEMINI ${newMessage}`)
    return newMessage
}

async function geminiAPI(params) {
    const genAI = new GoogleGenerativeAI("AIzaSyAcYcGPtxzQPx_KfNic06QRXBjIfYouTRE");
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const prompt = 'holaaaa, como estas?';
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}

module.exports = {
    createMsg
}