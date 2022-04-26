class Observe {
  constructor(data = {}) {
    for (let key in data) {
      let val = data[key]
      let dep = new Dep()
      observe(val)
      Object.defineProperty(data, key, {
        configurable: true,
        enumerable: true,
        get() {
          Dep.target && dep.addSub(Dep.target)
          return val
        },
        set(newVal) {
          val = newVal
          observe(newVal)
          dep.notify()
        }
      })
    }
  }
}

const observe = data => {
  if (!data || typeof data !== 'object') return
  return new Observe(data)
}
