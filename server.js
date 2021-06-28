const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
app.use(compression());

// Serve static files....
app.use(express.static(__dirname + '/dist/personal-website'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/personal-website/index.html'));
});

// default PORT
app.listen(process.env.PORT || 80);
