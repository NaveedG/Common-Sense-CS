// Write a recursive function that reverses a string.

function reverseString(string) {
  if (string === '')
    return string
  else
    return reverseString(string.substr(1)) + string.charAt(0)
}

console.log(reverseString('hello')) // olleh