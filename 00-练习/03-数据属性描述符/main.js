const obj = {}

Object.defineProperty(obj, 'name', {
  configurable: true, // 是否可删除或修改特性，属性描述符默认为false，对象定义属性默认为true
  enumerable: true, // 是否可枚举，属性描述符默认为false，对象定义属性默认为true
  writable: false, // 是否可修改属性值，属性描述符默认为false，对象定义属性默认为true
  value: 'mihu' // 属性值， 读取时会返回该值， 修改时，会对其修改，默认为undefined
})

console.log(obj)
