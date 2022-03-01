const numToPalindromeString = (newNum, oldNum) => {
  if (!oldNum) oldNum = newNum
  let nextNum = newNum - 1
  let result = nextNum + '' + oldNum + nextNum

  if (nextNum === 1) {
    return result
  } else {
    return numToPalindromeString(nextNum, result)
  }
}

console.log(numToPalindromeString(19))
