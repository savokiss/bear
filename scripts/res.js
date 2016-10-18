var request = require('request')

module.exports = function(robot) {
  robot.respond(/res$/, function(msg) {
    return request('http://www.radida.com/pacs/res.json', function(err, res, body) {
      console.log(body);
      msg.send(JSON.parse(body));
    })
  })

  robot.respond(/res_cloud$/, function(msg) {
    return request('http://www.radida.com/pacs_cloud/res.json', function(err, res, body) {
      console.log(body)
      msg.send(JSON.parse(body));
    })
  })
}