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