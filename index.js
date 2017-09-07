var express = require('express'),
    path = require('path');
var app = express();
var server = http.createServer(app);

app.use(express.static(__dirname + '/app'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/app/index.html')
})

server.listen(process.env.PORT || 8081);

