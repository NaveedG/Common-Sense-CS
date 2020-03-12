// Write a recursive function that prints out all even numbers from 2 until 100.

function printNumbers(num) {
  console.log(num)
  if (num < 100)
    printNumbers(num + 2)
  else
    return
}

printNumbers(2)