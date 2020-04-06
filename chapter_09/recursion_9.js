// Write a recursive function that accepts two numbers and calculates one by the power of the other. For example, if the numbers were 2 and 5, it would calculate 25. 
// Do not use any built-in power operations provided by your computer language.

findPower = (x, y) => {
  if (x === 1)
    return y
  else
    return y * findPower(x - 1, y)
}

console.log(findPower(1, 5)) // 5
console.log(findPower(2, 5)) // 25
console.log(findPower(3, 5)) // 125