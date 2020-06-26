'use strict';

const express = require('express');
const cors = require('cors');

// require and use "multer"...
const multer = require('multer');
const upload = multer();

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/api/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.get('/api/fileanalyse', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) => {
  const file = req.file;
  res.json({
    name: file.originalname,
    type: file.mimetype,
    size: file.size
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});