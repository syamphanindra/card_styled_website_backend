var express = require('express');
var path = require('path');
var fs=require('fs');
var app = express();
var router=express.Router();
var bodyParser=require('body-parser');
const spotifyRoutes = require('./api/routes/spotify_router');
app.use(bodyParser.json());

app.use('/api/spotify',spotifyRoutes);





var server = app.listen(3001, function () {
    var port = server.address().port;
    console.log("Example app listening at port %s", port);
});
