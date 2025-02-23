const { geminiService, geminiAPI } = require("./geminiService")
const tokens = require("../utils/tokens")

const sendMessage = async (newMessage, res) => {
    // const respuestaGemini = await geminiService.readPDF(newMessage);
    const IAResponse = await geminiAPI(newMessage)

    mensaje = {
        "messaging_product": "whatsapp",
        "to": "593958898730",
        "type": "text",
        "text": { "body": IAResponse,}
    }

    const respuesta = await fetch(tokens.META_URL, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${tokens.META_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(mensaje),
    });
    
    const resultado = await respuesta.json();
    console.log(JSON.stringify(resultado));
    return "TODO OK"
}

module.exports = {
    sendMessage
}