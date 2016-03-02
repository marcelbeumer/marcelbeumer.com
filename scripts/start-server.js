#!/usr/bin/env node
require('babel-register');

const settings = require('../settings/server');
const server = require('../src/server').default;
const reload = require('../src/server').reload;
const port = settings.port;

server.listen(port, () => {
  console.log(`Server started on port ${port}`); // eslint-disable-line no-console
});

setInterval(function() {
  var d1 = new Date();
  reload();
  var d2 = new Date();
  console.log(`${d2 - d1}ms`);
}, 5000);
