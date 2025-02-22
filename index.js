require('dotenv').config()
const http = require("http")

function requestController(){
    console.log("Hola mundo")
}

const server = http.createServer(requestController)

server.listen(process.env.PORT, function () {
    console.log("App corriendo en ", process.env.PORT)
    
})

