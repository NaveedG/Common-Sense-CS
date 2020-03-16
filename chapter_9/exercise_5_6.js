// Write a recursive function that reverses a string.

function reverseString(string) {
  if (string === '')
    return string
  else
    return reverseString(string.slice(1, string.length)) + string[0]
}

console.log(reverseString('hello')) // olleh