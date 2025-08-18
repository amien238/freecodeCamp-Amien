const express = require('express');
const helmet = require('helmet');

const app = express();



app.use(helmet());
app.use(helmet.hidePoweredBy());
// app.use(helmet.frameguard({ action: 'deny' }));
// app.use(helmet.xssFilter({}));
// app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());

// app.use(helmet.hsts({
//   maxAge: 31536000, // 1 year in seconds
//   includeSubDomains: true, // Apply to all subdomains
//   preload: true // Allow preloading of HSTS

// }));
// app.use(helmet.referrerPolicy({ policy: 'no-referrer' }));
// app.use(helmet.contentSecurityPolicy({
//   directives: {
//     defaultSrc: ["'self'"],
//     scriptSrc: ["'self'", "'unsafe-inline'"],
//     styleSrc: ["'self'", "'unsafe-inline'"],
//     imgSrc: ["'self'", "data:"],
//     connectSrc: ["'self'"],
//     fontSrc: ["'self'"],
//     objectSrc: ["'none'"],
//     frameAncestors: ["'none'"]
//   }
// }));
// app.use(helmet.dnsPrefetchControl({ allow: false }));
// app.use(helmet.expectCt({
//   maxAge: 30, // 30 seconds
//   enforce: true,
//   reportUri: '/report-ct'
// }));
// app.use(helmet.permittedCrossDomainPolicies({ permittedPolicies: 'none' }));
// app.use(helmet.crossOriginOpenerPolicy({ policy: 'same-origin' }));
// app.use(helmet.crossOriginEmbedderPolicy({ policy: 'require-corp' }));
// app.use(helmet.crossOriginResourcePolicy({ policy: 'same-origin' }));
// app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' })); // Example of custom hidePoweredBy
// app.use(helmet.noCache()); // Disable caching
// app.use(helmet.ieNoOpen()); // Prevent IE from opening untrusted content


































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