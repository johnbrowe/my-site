var express = require('express');
var path = require('path');
var app  = express();
var port = 3000;
var html_dir = './public/';

app.use(express.static(path.join(__dirname, 'public')));

/**
 * Serve static files
 */

// routes to serve the static HTML files
app.get('/index', function(req, res) {
    res.sendfile(html_dir + 'index.html');
});

app.get('/notes',function(req,res){
    res.sendFile(path.normalize(__dirname + '/json/notes.json'))
});

app.listen(port);
console.log("Listening on port " + port);