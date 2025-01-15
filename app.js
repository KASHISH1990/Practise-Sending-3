const http = require("http");


const server = http.createServer((req,res)=>{
    
    try{
    res.send("Take It!");
    }
    catch(error)
    {
        console.log(error);
    }

    console.log("Hello");
    console.log("Ok! G");
    console.log("Thik G!");
    console.log("G! G1");
    console.log("Checking!!1");

});

server.listen(3000);