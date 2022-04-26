class Compile {
  constructor(el, vm) {
    // 将el挂载到实例上方便调用
    vm.$el = document.querySelector(el)
    // 创建文档片段，文档片段存在于内存中，每次插入或更新节点不会引发回流
    let fragment = document.createDocumentFragment()
    while (vm.$el.firstChild) {
      fragment.appendChild(vm.$el.firstChild)
    }
    // 替换编译后的节点
    this.replace(fragment, vm)
    // 加入根组件
    vm.$el.appendChild(fragment)
  }

  replace(frag, vm) {
    Array.from(frag.childNodes).forEach(node => {
      let txt = node.textContent
      let reg = /\{\{(.*?)\}\}/g // 正则匹配{{}}
      if (node.nodeType === 3 && reg.test(txt)) {
        function replaceTxt() {
          node.textContent = txt.replace(reg, (matched, placeholder) => {
            // console.log(placeholder) // 匹配到的分组 如：song, album.name, singer...
            new Watcher(vm, placeholder, replaceTxt) // 监听变化，进行匹配替换内容
            return placeholder.split('.').reduce((val, key) => {
              return val[key]
            }, vm)
          })
        }
        replaceTxt()
      }
      if (node.childNodes && node.childNodes.length) {
        this.replace(node, vm)
      }

      if (node.nodeType === 1) {
        // 元素节点
        let nodeAttr = node.attributes // 获取dom上的所有属性,是个类数组
        console.log(nodeAttr)

        Array.from(nodeAttr).forEach(attr => {
          console.log(attr)
          let name = attr.name // v-model 键
          let exp = attr.value // inputValue 值
          if (name.includes('v-')) {
            node.value = vm[exp] // this.inputValue
          }
          // 监听变化
          new Watcher(vm, exp, function (newVal) {
            node.value = newVal // 当watcher触发时会自动将内容放进输入框中
          })

          node.addEventListener('input', e => {
            let newVal = e.target.value
            // 相当于给this.c赋了一个新值
            // 而值的改变会调用set，set中又会调用notify，notify中调用watcher的update方法实现了更新
            vm[exp] = newVal
          })
        })
      }
    })
  }
}
