// Write a recursive function that accepts two numbers (a numerator and denominator), and returns the remainder if you divide the numerator by the denominator. 
// The catch: Do not use the modulo operator!

findRemainder = (x, y) => {
  if (x < y)
    return x
  else
    return findRemainder(x - y, y)
}

console.log(findRemainder(9, 3)) // 0
console.log(findRemainder(9, 5)) // 4
console.log(findRemainder(9, 8)) // 1