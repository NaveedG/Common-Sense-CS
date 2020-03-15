// Write a recursive function that accepts an array of numbers and returns the sum.

function returnSum(arr) {
  if (arr.length === 1)
    return arr[0]
  else
    return arr[0] + returnSum(arr.slice(1))
}

console.log(returnSum([1, 2, 3])) // 6