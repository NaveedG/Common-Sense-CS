// Write a recursive function that reverses a string.

reverseString = string => {
  if (string === '')
    return string
  else
    return reverseString(string.slice(1)) + string[0]
}

console.log(reverseString('hello')) // olleh