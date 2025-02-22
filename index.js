require('dotenv').config()
const http = require("http")
const readline = require("readline");
const axios = require("axios");
const app = require("express")();

//const
const PORT = process.env.PORT
const GEMINI_API_URL = process.env.GEMINI_API_URL
const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const GEMINI_ENDPOINT = str(GEMINI_API_URL).concat(GEMINI_API_KEY);

// app.use(express.json()); // Middleware para parsear JSON

app.post(GEMINI_ENDPOINT, async (req, res) => {
    try {
        const { prompt } = req.body; // Recibir el prompt del cliente

        if (!prompt) {
            return res.status(400).json({ error: "El campo 'prompt' es requerido" });
        }

        const response = await axios.post(API_URL, {
            contents: [{ parts: [{ text: prompt }] }]
        }, {
            headers: { "Content-Type": "application/json" }
        });

        res.json(response.data); // Enviar respuesta de la API de Gemini
    } catch (error) {
        res.status(500).json({ error: error.response ? error.response.data : error.message }); ///a
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`);
});

