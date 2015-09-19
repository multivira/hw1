var express = require('express');
var bodyParser = require('body-parser');

var app = express();


var port = process.env.PORT || 8888;
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./dist'));


app.get('*', function(req, res) {
    res.sendFile("index.html", {"root": './dist'}); // load our public/index.html file
});

app.listen(port);
console.log('QDelft demo server now running on port: ' + port);




