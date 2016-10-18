var request = require('request')
var exec = require('child_process').exec

module.exports = function(robot) {
  robot.hear(/ping (.*)$/, function(msg) {
    var host = msg.match[1]
    exec('ping ' + host, function(err, stdout, stderr) {
      console.log(stdout);
      msg.reply(stdout);
    })
  })
}