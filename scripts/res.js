var request = require('request')

module.exports = function(robot) {
  robot.hear(/res$/, function(msg) {
    return request('http://www.radida.com/pacs/res.json', function(err, res, body) {
      var version = JSON.parse(body).version;
      msg.reply(`res version is $version`);
    })
  })

  robot.hear(/res_cloud$/, function(msg) {
    return request('http://www.radida.com/pacs_cloud/res.json', function(err, res, body) {
      var version = JSON.parse(body).version;
      msg.reply(`res_cloud version is $version`);
    })
  })
}