const http = require('http');
const app = require('./app')
const server = http.createServer(app);
require('dotenv').config()
const PORT = process.env.PORT || 8000;

server.listen(PORT, ()=>{
    console.log("Listning on Port :", PORT)
})