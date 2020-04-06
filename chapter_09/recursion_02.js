// Write a recursive function that prints out all even numbers from 2 until 100.

printNumbers = num => {
  console.log(num)
  if (num >= 100)
    return
  else
    printNumbers(num + 2)
}

printNumbers(2)