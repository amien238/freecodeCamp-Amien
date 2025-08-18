const express = require('express');
const helmet = require('helmet');

const app = express();








module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});



app.use(helmet.frameguard({ action: 'deny' })); // Ngăn chặn clickjacking bằng cách không cho phép trang web được nhúng trong iframe


app.get('/', (req, res) => {
  res.send('Hello, security!');
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});


