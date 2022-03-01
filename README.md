## 面试题及手写工具函数

描述：序号对应目录名称

1. **用递归算法实现，数组长度为 5 且元素的随机数在 2-32 间不重复的值**：（这是一道大题目，把考点拆成了 4 个小项；需要侯选人用递归算法实现（限制 15 行代码以内实现；限制时间 10 分钟内完成）：  
   a) 生成一个长度为 5 的空数组 arr。  
   b) 生成一个（2－32）之间的随机整数 rand。  
   c) 把随机数 rand 插入到数组 arr 内，如果数组 arr 内已存在与 rand 相同的数字，则重新生成随机数 rand 并插入到 arr 内[需要使用递归实现，不能使用 for/while 等循环]  
   d) 最终输出一个长度为 5，且内容不重复的数组 arr）

2. **手写防抖**

3. **手写节流**

4. **`[,,,,,]`** 的长度是多少？

5. **下面程序执行结果为？:**

```js
var arr = []
for (var i = 0; i < 6; i++) {
  arr.push(function () {
    return i
  })
}

arr.forEach(function (func) {
  console.log(func())
})
```

6. **使用 js 写一个方法生成从 a-z 的数组。**

7. **使用 js 写个方法区分原生与非原生的对象。**
