const { geminiService, geminiAPI } = require("./geminiService")

META_URL = "https://graph.facebook.com/v22.0/546997201839007/messages"
META_TOKEN = "EAAYLhmdQMA4BOxSZBOJaJZCyRWKNSIaXKIlx2g5fqu4KSqyIYg0zHod7zIo3KKtR6ZCRJUr57pzZCBdVcQ5OXncYJPpAMuL1tY6FeUxlkZBQv7vaXGoZBpbjtOZBE7DI9Tj5yhBz0x2azj2dzt1OZBWoPeLFnWeqdAtPvhnYUCqX0bDFY7RmxPNvFZCPQP7gWzz1zY4XpzxicIUZA2n96gz7CvvdQ51v0ZD"

const sendMessage = async (newMessage, res) => {
    // const respuestaGemini = await geminiService.readPDF(newMessage);
    const IAResponse = await geminiAPI(newMessage)

    mensaje = {
        "messaging_product": "whatsapp",
        "to": "593958898730",
        "type": "text",
        "text": { "body": IAResponse,}
    }

    const respuesta = await fetch(META_URL, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${META_TOKEN}`,
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