require('dotenv').config()
const http = require("http")
const readline = require("readline");
const axios = require("axios");

//const
const PORT = process.env.PORT
const GEMINI_KEY = process.env.GEMINI_API

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function chat(){
    rl.question("Tú", async (mensaje) => {
        try {
            body = {
                "contents": [{
                  "parts":[{"text": mensaje}]
                }]
            }
            const response = await axios.post(GEMINI_KEY, body)
        } catch (error) {
            
        }

        chat();
        
    })
}

function requestController() {
    chat();
    
}

const server = http.createServer(requestController)

server.listen(PORT)

