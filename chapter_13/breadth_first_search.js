// Write a method that uses breadth-first search to search for a node within a graph.

class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  addChild = data => {
    this.children.push(new Node(data))
  }

  // breadth first search via root node of a graph
  breadthFirstSearch = value => {
    let stack = [this]

    while (stack.length) {
      let currentVertex = stack.shift()

      if (currentVertex.data === value)
        return true
      else
        stack.push(...currentVertex.children)
    }

    return false
  }
 }