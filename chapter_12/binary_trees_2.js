// Write a function that returns the sum of all the keys in a binary tree.

class Node {
  constructor(data) {
    this.data = data
    this.right = null
    this.left = null
  }

  insertNode = data => {
    if (data > this.data)
      if (this.right)
        this.right.insertNode(data)
      else
        this.right = new Node(data)
    else
      if (this.left)
        this.left.insertNode(data)
      else
        this.left = new Node(data)
  }

  // recursive sum of all keys function
  findSum = () => {
    let total = this.data
    if (this.right)
      total += this.right.findSum()
    if (this.left)
      total += this.left.findSum()
    return total
  } 
}

let root = new Node(5)
root.insertNode(7)
root.insertNode(1)
root.insertNode(9)
root.insertNode(3)
console.log(root.findSum()) // 25