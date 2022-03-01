// 返回true即为原生，返回false即为非原生
const checkNativeObject = obj => {
  const result = obj.toString().indexOf('native code')
  return result >= 0
}

const info = new Object()

console.log(checkNativeObject(info))
