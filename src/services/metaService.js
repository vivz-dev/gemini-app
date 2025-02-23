const tokens = require("../utils/tokens")
const gemini = require("../services/geminiService")

const sendMetaMessage = async (message, business_phone_number_id, res) =>{
    META_ACTUAL_URL = `https://graph.facebook.com/${tokens.GRAPH_VERSION}/${business_phone_number_id}/messages`

    const AIresponse = await gemini.geminiAPI(message.text.body)
    const respuesta = await fetch(
        META_ACTUAL_URL,
        {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${tokens.META_TOKEN}`,
        },
        data: {
            messaging_product: "whatsapp",
            to: message.from,
            text: { body: AIresponse },
            context: {
                message_id: message.id, // shows the message as a reply to the original user message
            },
            }
        }
    );

    const readMsg = await fetch(
        META_ACTUAL_URL,
        {
            method: "POST",
            headers:{
                "Authorization": `Bearer ${tokens.META_TOKEN}`
            },
            data: {
                messaging_product: "whatsapp",
                status: "read",
                message_id: message.id,
            }
        }
    )
}

const receiveMetaMessage = async() =>{

}

module.exports = {
    sendMetaMessage
}