module.exports = function(robot) {
  robot.hear(/base64encode (.*)$/, function(msg) {
    var data = msg.match[1]
    var json = JSON.stringify(data)
    msg.reply(btoa(unescape(encodeURIComponent(json))))
  })

  robot.hear(/base64decode (.*)$/, function(msg) {
    var data = msg.match[1]
    var obj = decodeURLComponent(escape(atob(data)))
    msg.reply(obj)
  })
}