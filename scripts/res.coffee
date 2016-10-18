module.exports = (robot) ->
  robot.respond /res version/i, (msg) ->
    msg.http("http://www.radida.com/pacs/res.json")
      .get() (err, res, body) ->
        msg.send JSON.parse(body)

  robot.respond /res_cloud version/i, (msg) ->
    msg.http("http://www.radida.com/pacs/res_cloud.json")
      .get() (err, res, body) ->
        msg.send JSON.parse(body)