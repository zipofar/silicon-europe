const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/legalentity', function(req, res) {
  fs.readFile('./store/legalentity.json', 'utf8', (err, data) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.parse(data));
  })
});
app.listen(9000);
