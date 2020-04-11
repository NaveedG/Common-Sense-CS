// Write a function that conducts depth-first search on a graph.

class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  addChild = data => {
    this.children.push(new Node(data))
  }

  // depth first search on the root node of a graph
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

let root = new Node(5)
root.addChild(7)
root.addChild(19)
console.log(root.depthFirstSearch(3)) // false
console.log(root.depthFirstSearch(5)) // true
console.log(root.depthFirstSearch(7)) // true
console.log(root.depthFirstSearch(19)) // true