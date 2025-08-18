const express = require('express');
const helmet = require('helmet');
const api = require('./server.js');

const app = express();


app.use(helmet.hidePoweredBy()); //Nếu không sử dụng dòng code này, web sẽ hiển thị thông tin về Express.js trong tiêu đề HTTP. x-powered-by="Express"
app.use(helmet.frameguard({ action: 'deny' })); // Ngăn chặn clickjacking bằng cách không cho phép trang web được nhúng trong iframe


app.get('/', (req, res) => {
  res.send('Hello, security!');
});






module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});


