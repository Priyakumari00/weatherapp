const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
    

    const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=fd1c4c1245602771f578a769d4a82a22"
    https.get(url,function(response){
        console.log(response);
    })

    res.send("server is up and running");
})



app.listen(3000, function(){
    console.log("server is running on port 3000");
})