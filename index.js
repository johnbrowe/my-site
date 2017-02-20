// Load enviroment variables
var dotenv = require('dotenv');
dotenv.load();
var env = process.env.ENV;
var newrelic = process.env.NEWRELIC;
var notes_path = process.env.NOTES_PATH;

if(newrelic == true){
    var nr = require('newrelic');
}

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
    if(env === "local"){
        res.sendFile(path.normalize(__dirname + '/test_json/notes.json'))
    } else {
        console.log(__dirname);
        console.log(notes_path);
        res.sendFile(path.normalize(__dirname + '/' + notes_path + '/notes.json'))
    }
});

app.listen(port);
console.log("Listening on port " + port);