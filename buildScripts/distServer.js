import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3222;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
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
