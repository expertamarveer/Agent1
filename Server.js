'use strict';

require("appdynamics").profile({
  controllerHostName: 'siemensil.saas.appdynamics.com',
  controllerPort: 443,
  controllerSslEnabled: true,  // Set to true if controllerPort is SSL
  accountName: 'siemensil',
  accountAccessKey: '2ili1qt6b0eu', //required
  applicationName: 'agent',
  tierName: 'yairagent',
  nodeName: 'yairagent'
 });
const express = require('express');


// Constants
//const PORT = 8080;
//const HOST = '192.168.0.177';
const PORT = 8282;
//const HOST = '0.0.0.0';
const HOST = '127.0.0.1';
// App
const app = express();
app.get('/', (req, res) => {
  res.send('My World');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);