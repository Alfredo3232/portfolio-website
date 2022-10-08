import express from 'express';
import { Server } from 'http';

const PORT = process.env.PORT || 5000;
let app = express();

let server = Server(app);

app.use(express.static('client'));

server.listen(PORT, function () {
  console.log(`Server running at PORT: ${PORT}`);
});