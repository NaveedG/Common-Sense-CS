// In your favorite programming language, use a stack to implement an algorithm that reverses a string.

function reverseString(string) {
  const stringArray = string.split('')
  const reverseArray = []

  // stack implementation (last in, first out)
  for (var i = 0; i < string.length; i++) {
    lastChar = stringArray.pop()
    reverseArray.push(lastChar)
  }

  return reverseArray.join('')
}

console.log(reverseString('hello')) // olleh