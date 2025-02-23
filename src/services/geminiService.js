const { GoogleGenerativeAI } = require("@google/generative-ai");
const { Buffer } = require("buffer");
const fs = require("fs");
const path = require("path");
const tokens = require("../utils/tokens")

const genAI = new GoogleGenerativeAI(tokens.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Eres un asistente que habla español. Ayuda al usuario en lo que requiera. Usa lenguaje amigable y pocos emojis.",
});


async function geminiAPI(newMessage) {
    const result = await model.generateContent(newMessage);
    console.log(result.response)
    return result.response.text()
}

async function readPDF(newMessage) {
    const filePath = path.resolve(__dirname, "Viviana_Vera_CV_Resume_ENG.pdf");
    const result = await model.generateContent([{
        inlineData: {
            data: Buffer.from(fs.readFileSync(filePath)).toString("base64"),
            mimeType: "application/pdf"
        }
    },
    newMessage
])

return result.response.text();
}

module.exports = {
    geminiAPI,
    readPDF
}