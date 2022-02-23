const debounce = (fn, delay, immed = false) => {
  let timer = null // 记录定时器
  let isExecute = false // 记录是否立即执行过
  function _debounce(...arg) {
    timer && clearTimeout(timer)
    if (immed && !isExecute) {
      fn.call(this, ...arg)
      isExecute = true
    } else {
      timer = setTimeout(() => {
        // fn.apply(this, arg)
        fn.call(this, ...arg)

        // 重置状态
        isExecute = false
        timer = null
      }, delay)
    }
  }

  // 取消方法
  _debounce.cancel = () => {
    timer && clearInterval(timer)
  }
  return _debounce
}
