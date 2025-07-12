const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    res.send("Hii, I'm root");
});

app.listen(8080, () =>{
    console.log("server is listening to port 8080");
});