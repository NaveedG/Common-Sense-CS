// Write a function that conducts depth-first search on a graph.

class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  addChild = data => {
    this.children.push(new Node(data))
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
 }