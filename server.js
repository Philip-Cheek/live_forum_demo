var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(5000, function(){
	console.log('listening on port 5000')
});

