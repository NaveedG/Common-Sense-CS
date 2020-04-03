// The height of a tree is the maximum number of nodes on a path from the root to a leaf node. 
// Write a function that returns the height of a binary tree.

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

  // recursive tree height finder function
  findHeight = (rightTotal = 0, leftTotal = 0) => {
    if (this.right) { rightTotal += this.right.findHeight() }
    if (this.left) { leftTotal += this.left.findHeight() }

    if (rightTotal >= leftTotal)
      return rightTotal + 1
    else
      return leftTotal + 1
  }

}

let root = new Node(5)
root.insertNode(7)
root.insertNode(1)
root.insertNode(9)
root.insertNode(3)
root.insertNode(6)
root.insertNode(11)
console.log(root.findHeight()) // 4