const debounce = (fn, delay) => {
  let timer = null
  return function (...arg) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      // fn.apply(this, arg)
      fn.call(this, ...arg)
    }, delay)
  }
}
