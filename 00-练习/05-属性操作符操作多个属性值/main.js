const obj = {
  message: '一条文本'
}

Object.defineProperties(obj, {
  _age: {
    writable: true,
    configurable: true,
    enumerable: false,
    value: 16
  },

  age: {
    configurable: true,
    enumerable: true,
    get() {
      return obj._age
    },
    set(val) {
      obj._age = val
    }
  }
})

obj.age = 18
console.log(obj)
console.log(obj.age)
console.log(obj.message)
