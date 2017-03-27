/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3222;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  // immitating a real db
  res.json([
    {"id": 1, "firstName": "Viktor", "lastName": "Voronov", "email": "vvv@gmail.com" },
    {"id": 2, "firstName": "Alex", "lastName": "Lehovich", "email": "LeLe222@gmail.com" },
    {"id": 3, "firstName": "John", "lastName": "Black", "email": "john_the_d@gmail.com" },
    ]);
})

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
