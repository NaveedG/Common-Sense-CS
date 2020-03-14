// Write a function that prints to the terminal "HELLO" 10 times - but don’t use a loop! Use a recursive function instead.

function hello(num) {
  console.log('HELLO')
  if (num === 1)
    return num
  else
    hello(num - 1)
}

hello(10)