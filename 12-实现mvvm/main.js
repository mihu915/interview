class Mvvm {
  constructor(options = {}) {
    this.$options = options
    let data = (this._data = this.$options.data)

    // 对数据做劫持
    observe(data)

    // 对数据做代理，暴露出属性
    for (let key in data) {
      Object.defineProperty(this, key, {
        configurable: true,
        enumerable: true,
        get() {
          // console.log(data)
          return data[key]
        },
        set(newVal) {
          data[key] = newVal
        }
      })
    }

    new Compile(options.el, this)
  }
}
