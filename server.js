var express = require('express');
var compression = require('compression');
var app = express();

//middleware
app.use(compression());

//set port
var port = process.env.PORT || 8080

app.use(express.static(__dirname));

//routes
app.get("/", function(req, res){
	res.render("index");
})

app.listen(port, function(){
	console.log("app running")
})