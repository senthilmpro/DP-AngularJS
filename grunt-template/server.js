var express = require('express'),
	app = new express();

app.use(express.static(__dirname +'/dist'));

var PORT_NUMBER = 3344;

app.listen(PORT_NUMBER);
console.log("Application started at PORT : "+ PORT_NUMBER)