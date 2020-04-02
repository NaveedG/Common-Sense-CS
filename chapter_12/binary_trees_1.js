// Write a function that counts the number of items in a binary tree.

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

  // recursive node count function
  countNodes = (total = 1) => {
    if (this.right) { total += this.right.countNodes() }
    if (this.left) { total += this.left.countNodes() }
    return total
  }
}

let root = new Node(5)
root.insertNode(7)
root.insertNode(1)
root.insertNode(9)
root.insertNode(3)
console.log(root.countNodes()) // 5