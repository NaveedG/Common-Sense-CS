// Write a method that deletes a node from a graph.

class Node {
  constructor(data) {
    this.data = data
    this.children = []
    this.parent = null
  }

  addChild = data => {
    const newNode = new Node(data)
    this.children.push(newNode)
    newNode.parent = this
  }

  depthFirstSearch = value => {
    let stack = [this]

    while (stack.length) {
      let currentVertex = stack.shift()

      if (currentVertex.data === value)
        return true
      else
        stack.unshift(...currentVertex.children)
    }

    return false
  }

  // node deletion function using depth first searching
  deleteNode = value => {
    let stack = [this]

    while (stack.length) {
      let currentVertex = stack.shift()

      if (currentVertex.data === value)
        currentVertex.parent.children = currentVertex.parent.children.filter(child => child.data !== value)
      else
        stack.unshift(...currentVertex.children)
    }

    return this
  }
}

let root = new Node(5)
root.addChild(3)
root.addChild(7)
root.children[1].addChild(19)

console.log(root.depthFirstSearch(19)) // true
root.deleteNode(19)
console.log(root.depthFirstSearch(19)) // false