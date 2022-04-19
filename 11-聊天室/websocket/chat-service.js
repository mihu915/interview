const WebSocket = require('ws')
const WebSocketServer = WebSocket.Server
const wss = new WebSocketServer({
  port: 4111
})

wss.on('connection', ws => {
  console.log(`[Server] 已建立连接`)
  ws.on('message', message => {
    console.log(message.toString())
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send('消息：' + message)
      }
    })
    // ws.send('服务端已接收到消息', err => {
    //   if (err) {
    //     console.log(err)
    //   }
    // })
  })
})
