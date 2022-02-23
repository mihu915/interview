const debounce = (fn, delay, immed = false, resultCallback) => {
  let timer = null // 记录定时器
  let isExecute = false // 记录是否立即执行过
  function _debounce(...arg) {
    return new Promise((resolve, reject) => {
      timer && clearTimeout(timer)
      if (immed && !isExecute) {
        const result = fn.call(this, ...arg)
        resultCallback && resultCallback(result)
        resolve(result)
        isExecute = true
      } else {
        timer = setTimeout(() => {
          // fn.apply(this, arg)
          const result = fn.call(this, ...arg)
          resultCallback && resultCallback(result)
          resolve(result)

          // 重置状态
          isExecute = false
          timer = null
        }, delay)
      }
    })
  }

  // 取消方法
  _debounce.cancel = () => {
    timer && clearInterval(timer)
  }
  return _debounce
}
