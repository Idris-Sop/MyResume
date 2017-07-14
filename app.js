var express = require('express')
const cheerio = require('cheerio')
var app = express()
 
var PORT = 5000;
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
// app.listen(PORT)

var middleware = {
	requireAuthentication : function(req, res, next) {
		 console.log('private route hit!');
		 next();
	},
	logger: function(req, res, next) {
		// console.log('Request: ' + req.method + ' ' + req.originalUrl);
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
}

console.log(__dirname);
app.use(express.static(__dirname));
app.listen(PORT, function() {
	console.log('Express server started on port ' + PORT + '!');
});

$ = cheerio.load('index.html'),
     fs = require('fs');
 fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    } else {
        $ = cheerio.load(html.toString());
		// console.log(html.toString());
        console.log($('#contact').attr('nameInputText'));   
    }
});