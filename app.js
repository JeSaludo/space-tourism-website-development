const express = require("express");
const bodyParser = require("body-parser");

const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req,res)=>{
    res.redirect("/home");

})

app.get("/home", (req,res)=>{
    res.render('index', {bgImg: "/images/home/background-home-desktop.jpg"});
})


app.get("/destination-:topic", (req,res) =>{
    fs.readFile(__dirname + "/data.json", (err, data) => {
        if (err) throw err;
        var tempData = JSON.parse(data);
        
        var destinationList = ["moon", "mars", "europa", "titan"];
        let i = destinationList.indexOf(req.params.topic);
       
        res.render('destination', {bgImg: "/images/destination/background-destination-desktop.jpg", 
        destImg: tempData.destinations[i].images.png,
        name: tempData.destinations[i].name,
        description: tempData.destinations[i].description,
        distance: tempData.destinations[i].distance,
        travel: tempData.destinations[i].travel
        });
        
    });
   
})


app.listen(3000, function(){
    console.log("Server started in port 3000");
})

