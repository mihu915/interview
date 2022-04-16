const detectionOperation = (time = 3000, callback) => {
  let timer
  // 开始计时
  const startTimer = () => {
    timer = setTimeout(() => {
      // 计时结束，回调
      callback && callback()
    }, time)
  }

  // 重置计时
  const reTimer = () => {
    console.log('重置')
    clearTimeout(timer)
    startTimer()
  }

  document.addEventListener('mousemove', reTimer)
  document.addEventListener('mousedown', reTimer)
  document.addEventListener('keydown', reTimer)
}

detectionOperation(3000, () => {
  console.log('退出登录')
})
