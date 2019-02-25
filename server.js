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

app.get('/legal_entities', function(req, res) {
  fs.readFile('./store/legalentity.json', 'utf8', (err, data) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.parse(data));
  })
});

app.get('/legal_entities/:id/pharmacies', function(req, res) {
  const { id } = req.params;
  fs.readFile('./store/pharmacy.json', 'utf8', (err, data) => {
    const json = JSON.parse(data).filter(e => e.legalEntityID == id);
    res.header("Content-Type",'application/json');
    res.send(json);
  })
});

app.listen(9000);
