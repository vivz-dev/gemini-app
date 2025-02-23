const tokens = require("../utils/tokens")
const gemini = require("../services/geminiService")

const sendMetaMessage = async (message, business_phone_number_id, res) =>{
    META_ACTUAL_URL = `https://graph.facebook.com/${tokens.GRAPH_VERSION}/${business_phone_number_id}/messages`

    const AIresponse = await gemini.geminiAPI(message.text.body)

    console.log(AIresponse)
    await fetch(
        META_ACTUAL_URL,
        {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${tokens.META_TOKEN}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            messaging_product: "whatsapp",
            to: message.from,
            type: "text",
            text: { body: "Echo: " + message.text.body },
            context: {
                message_id: message.id, // shows the message as a reply to the original user message
            },
        })
        }
    );

    await fetch(
        META_ACTUAL_URL,
        {
            method: "POST",
            headers:{
                "Authorization": `Bearer ${tokens.META_TOKEN}`
            },
            body: JSON.stringify({
                messaging_product: "whatsapp",
                status: "read",
                message_id: message.id,
            })
        }
    )
}

const receiveMetaMessage = async() =>{

}

module.exports = {
    sendMetaMessage
}