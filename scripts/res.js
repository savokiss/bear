  var http = require('http')

  http.get({
    hostname: 'www.radida.com',
    port: 80,
    path: '/pacs/res.json',
    agent: false // create a new agent just for this one request
  }, function(res) {
    console.log(res);
  });