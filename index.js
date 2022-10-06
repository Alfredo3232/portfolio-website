var express = require('express');
var http = require('http');

const PORT = process.env.PORT || 5000;
let app = express();

let server = http.Server(app);

app.use(express.static('client'));

server.listen(PORT, function () {
  console.log(`Server running at PORT: ${PORT}`);
});