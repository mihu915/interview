const arr = new Array(5)
let index = 0
const handleSetArray = () => {
  const rand = Math.floor(Math.random() * 31 + 2)
  const isExist = arr.find(item => {
    return item === rand
  })
  if (!isExist) {
    arr[index] = rand
    index++
    if (index === arr.length) return
  }
  handleSetArray()
}
handleSetArray()
console.log(arr)
