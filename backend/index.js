var express = require('express');
var app = express();
var path = require("path");

//setting middleware
app.use(express.static('public')); //Serves resources from public folder

// app.get('/*', (req, res, next) => {
//     res.sendStatus(200);
//     res.sendFile(__dirname,'public');
// });
const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
];
 
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/public/'));
//     app.use(express.static('public'));
//   });

  app.get('*', (req, res) => {
    if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
      res.sendFile(path.resolve(`public/${req.url}`));
    } else {
      res.sendFile(path.resolve(path.join(__dirname + 'public/index.html')));
    }
  });

var server = app.listen(8080);

