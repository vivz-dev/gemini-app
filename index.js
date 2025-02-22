require('dotenv').config()
const http = require("http")
const readline = require("readline");
const axios = require("axios");
const app = require("express")();

//const
const PORT = process.env.PORT


app.listen(
    PORT,
    () => console.log(`its alive in ${PORT}`)
)