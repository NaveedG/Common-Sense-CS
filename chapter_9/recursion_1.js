// Write a function that prints to the terminal "HELLO" 10 times - but don’t use a loop! Use a recursive function instead.

printHello = num => {
  console.log('HELLO')
  if (num === 1)
    return
  else
    printHello(num - 1)
}

printHello(10)