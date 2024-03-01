
const express = require("express");

const app = express();
const http = require("http").Server(app);
//const server = http.createServer();
app.use(express.static(__dirname + "/"));
app.use(express.json());
app.get("/", (req,res) => {
    res.statusCode = "200";
    res.json({Greeting : "Hello World"});
});
app.post("/username",(req,res) => {
    console.log(req.body);
    res.statusCode = "200";
    res.json({ recieved : true });
    

});

http.listen(3000);