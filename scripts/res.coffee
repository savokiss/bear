module.exports = (robot) ->
  robot.respond /test$/i, (msg) ->
    msg.send('test')

  robot.respond /res$/i, (msg) ->
    msg.http("http://www.radida.com/pacs/res.json")
      .header('Accept', 'application/json')
      .get() (err, res, body) ->
        if(err) return err
        res.send JSON.parse(body)

  robot.respond /res_cloud$/i, (msg) ->
    msg.http("http://www.radida.com/pacs/res_cloud.json")
      .header('Accept', 'application/json')
      .get() (err, res, body) ->
        if(err) return err
        res.send JSON.parse(body)