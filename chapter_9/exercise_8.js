// Write a recursive binary search function.

binarySearch = (arr, value, firstElement = 0, lastElement = arr.length - 1) => {
  const midpoint = Math.round((firstElement + lastElement) / 2)
  const midValue = arr[midpoint]

  if (midValue === value)
    return true
  else if (midValue > value)
    return binarySearch(arr, value, firstElement, lastElement = midpoint - 1)
  else if (midValue < value)
    return binarySearch(arr, value, firstElement = midpoint + 1)

  return null
}
