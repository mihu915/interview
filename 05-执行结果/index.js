var arr = []
for (var i = 0; i < 6; i++) {
  arr.push(function () {
    return i
  })
}

arr.forEach(function (func) {
  console.log(func()) // 666666
})
