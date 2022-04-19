const textEl = document.querySelector('#text')
const sendBtnEl = document.querySelector('#send-btn')
const frameListEl = document.querySelector('.frame-list')

const wsChat = new WebSocket('ws://192.168.10.79:4111')

sendBtnEl.addEventListener('click', () => {
  sendWsChat(textEl.value)
  textEl.value = ''
})

wsChat.addEventListener('message', e => {
  console.log(e.data)
  createFrameEl(e.data)
})

wsChat.addEventListener('close', e => {
  console.log('服务器连接中断')
})

wsChat.onopen = e => {
  console.log('已连接至服务器')
}

// 创建消息框元素
const createFrameEl = message => {
  const spanEl = document.createElement('div')
  spanEl.innerHTML = message
  frameListEl.appendChild(spanEl)
}
// 发送消息
const sendWsChat = message => {
  wsChat.send(message)
}
