const obj = {
  message: '文本消息',
  _age: 16
}

Object.defineProperty(obj, '_age', {
  configurable: true,
  enumerable: false,
  writable: true,
  value: 18
})

Object.defineProperty(obj, 'age', {
  configurable: true,
  enumerable: true,
  // 获取属性时会执行,默认为undefined
  get() {
    return obj._age
    // 下划线“_”开头的方法或变量一般作为私有的，只允许对象内部访问
  },
  // set设置属性时执行,默认为undefined
  set(val) {
    obj._age = val
    console.log('年龄被修改了')
  }
  // 使用get和set时不能与value属性和writable属性同时使用，
  // 该对象的描述被称为属性操作描述符
})

obj.age = 11
console.log(obj.age)
