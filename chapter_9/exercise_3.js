// Fibonacci numbers are numbers that follow this pattern: 1, 1, 2, 3, 5, 8, 13, 21, 34, ... that is, each number is the sum of the two immediate numbers that precede it. 
// Write a recursive function that prints out the list of fibonacci numbers up to 987.

printFibonacci = arr => {
  console.log(arr[arr.length - 1])
  if (arr[arr.length - 1] >= 987)
    return
  else
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    printFibonacci(arr)
}

printFibonacci([0, 1])