// Write a function that returns the maximum value of all the keys in a binary tree. 
// Assume all values are nonnegative; return nil if the tree is empty.

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

  // recursive maximum value finder function
  findMax = (arr = []) => {
    if (this.data) { arr.push(this.data) }
    if (this.right) { this.right.findMax(arr) }
    if (this.left) { this.left.findMax(arr) }

    if (arr.length > 0)
      return Math.max(...arr)
    else
      return null
  }
}

let root = new Node(5)
root.insertNode(7)
root.insertNode(1)
root.insertNode(9)
root.insertNode(3)
console.log(root.findMax()) // 9