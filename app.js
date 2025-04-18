const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
    

    const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=fd1c4c1245602771f578a769d4a82a22"
    https.get(url,function(response){
        console.log(response);

        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
            res.write("<p> The weather is currently " + weatherDescription  + " <p/>");
            res.write(" <h1> The Temperature in London is " + temp +  "  degree celcius. <h1/>");
            res.write("<img src = " + imageUrl + ">");
            res.send();

        })
    })
    
})



app.listen(3000, function(){
    console.log("server is running on port 3000");
})