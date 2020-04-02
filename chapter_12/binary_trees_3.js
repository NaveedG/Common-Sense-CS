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

  findMax = (arr = [this.data]) => {
    if (this.right) {
      arr.push(this.right.data)
      this.right.findMax(arr)
    }

    if (this.left) {
      arr.push(this.left.data)
      this.left.findMax(arr)
    }

    return Math.max(...arr)
  }
}