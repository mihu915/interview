function Dep() {
  this.subs = []
}

Dep.prototype = {
  addSub(sub) {
    this.subs.push(sub)
  },
  notify() {
    this.subs.forEach(sub => sub.update())
  }
}

function Watcher(vm, exp, fn) {
  this.fn = fn
  this.vm = vm
  this.exp = exp
  Dep.target = this
  let arr = exp.split('.')
  let val = vm
  arr.forEach(key => {
    // 取值
    val = val[key] // 获取到this.a.b，默认就会调用get方法
  })
  Dep.target = null
}

Watcher.prototype.update = function () {
  let arr = this.exp.split('.')
  let val = this.vm
  arr.forEach(key => {
    val = val[key]
  })
  this.fn(val)
}
