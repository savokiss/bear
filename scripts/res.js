var request = require('request')

module.exports = function(robot) {
  robot.hear(/res$/, function(msg) {
    return request('http://www.radida.com/pacs/res.json', function(err, res, body) {
      console.log(body);
      msg.reply(body);
    })
  })

  robot.hear(/res_cloud$/, function(msg) {
    return request('http://www.radida.com/pacs_cloud/res.json', function(err, res, body) {
      console.log(body)
      msg.reply(body);
    })
  })
}