/**
 *
 * @param {function} fn 执行函数
 * @param {number} interval 时间间隔
 * @param {object} options 选项
 * @returns {function} 新的执行函数
 */
const throttle = (
  fn,
  interval,
  options = {
    leading: true,
    trailing: false,
    resultCallback: null
  }
) => {
  const { leading, trailing, resultCallback } = options

  let lastTime = 0

  // leading 选项可控制函数是否在第一次时立即执行
  // 默认为执行
  // 不做处理时第一次会执行，是因为remainTime的值小于0，因为lastTime=0,所以计算结果一定是小于0的
  // 为了可控第一次是否立即执行，只需要控制lastTime的值即可
  // 使lastTime = nowTime 这样的话 nowTime - lastTime 就等于0了， remainTime就会等于interval，大于零就不会执行函数

  // trailing 选项可控制最后一次调用方法，若到达间隔时间点，是否执行
  let timer = null
  function _throttle(...arg) {
    return new Promise((resolve, reject) => {
      const nowTime = new Date().getTime()

      if (!leading && !lastTime) lastTime = nowTime

      const remainTime = interval - (nowTime - lastTime)

      if (remainTime <= 0) {
        if (timer) {
          clearInterval(timer)
          timer = null
        }

        const result = fn.apply(this, arg)

        lastTime = nowTime

        resultCallback && resultCallback(result)
        resolve(result)
      }

      if (!timer && remainTime > 0 && trailing) {
        timer = setTimeout(() => {
          lastTime = !leading ? 0 : new Date().getTime()
          timer = null
          const result = fn.apply(this, arg)
          resultCallback && resultCallback(result)
          resolve(result)
        }, remainTime)
      }
    })
  }

  _throttle.cancel = () => {
    timer && clearTimeout(timer)
  }
  return _throttle
}
