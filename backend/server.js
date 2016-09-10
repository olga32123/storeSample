var config = require('./config.json');


var express = require('express');
var app = express();

app.use(express.static('../frontend/dist'));

app.use(require('cookie-parser')());
app.use(require('cookie-session')({
    secret: config.secret
}));

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/api/products', function(req, res){
	var products = [
		{ title: 'product1', id: 1 },
		{ title: 'product2', id: 2 },
	];
	res.json(products);
})

	// html5 history api
	


	var server = app.listen(7000, function () {
  		var host = server.address().address;
  		var port = server.address().port;

  		console.log('Example app listening at http://%s:%s', host, port);
	});
