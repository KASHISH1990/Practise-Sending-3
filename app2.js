const http = require("http");

const server = http.createServer((req,res)=>{

    console.log("Hello");
    console.log("Tested");
})

server.listen(3001);