const isPalindromeString = str => {
  if (typeof str !== 'string') return

  const newStr = str.split('').reverse().join('')
  console.log(newStr)

  return newStr === str
}

console.log(isPalindromeString('一二二二a一'))
