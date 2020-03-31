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

  countNodes = (total = 1) => {
    if (this.right)
      total += this.right.countNodes()
    if (this.left)
      total += this.left.countNodes()
    return total
  }
}