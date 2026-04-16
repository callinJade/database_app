var express = require('express');
var mongoose = require('mongoose');
var app = express();
const port = 3000;


async function main() {
    await mongoose.connect('mongodb://root:example@mongo:27017');
}

main().then(function() {
    console.log("Mongoose connected!");
}).catch(err => console.log(err));

var countryModel = require("./models/country");
//const path = require('path');

app.set("view engine", "ejs");
//app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));

app.get("/", function(req, res) {
    res.render("pages/index");
});

app.get("/query", function(req, res){
    res.render("pages/query");
});

app.get("/upload", function(req, res){
    res.render("pages/upload");
});

app.get("/list", function(req,res) {
    countryModel.listAllcountries().then(function(countries){
        res.render("pages/list", {countries:countries});
    }).catch(function(error){ 
        res.error("Something went wrong!" + error );
    });
    
})


app.post('/country', function(req, res){
    console.log("Country: " + JSON.stringify(req.body.country));
    var newEntry = new countryModel(req.body); 
    newEntry.save().then(function(){
        res.send("Added to database!");
    }).catch(function(err){
        res.status(500).send("Failed to add to database!");
    });
});

app.get('/countries', async (req, res) => {
    const results = await countryModel.find({ 
        country_name: { $regex: req.query.name, $options: 'i' } 
    });
    res.json(results);
});


app.listen(port, '0.0.0.0', function() {
    console.log("App listening on port " + port + " !");
  });
