// 'a'.charCodeAt()
// a-z 的ascll码为 97 - 122
const getLetterArr = () => {
  let letterAscll = 97
  let letterArr = []
  for (letterAscll; letterAscll <= 122; letterAscll++) {
    letterArr.push(String.fromCharCode(letterAscll))
  }
  return letterArr
}

const arr = getLetterArr()
console.log(arr)
