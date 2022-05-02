const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

//class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }
class BinarySearchTree {
  constructor() {
    this.rootTree = null
  }

  root() {
    return this.rootTree
  }

  add(data) {
    return this.rootTree = addIn(this.rootTree, data)

    function addIn(node, data) {
      if (node === null) {
        return new Node(data)
      }
      if (node.data > data) {
        node.left = addIn(node.left, data)
      } else {
        node.right = addIn(node.right, data)
      }

      return node
    }
  }

  has(data) {
    return searchIn(this.rootTree, data)

    function searchIn(node, data) {
      if (node === null) {
        return false
      }
      if (node.data === data) {
        return true
      }
      if (node.data > data) {
        return searchIn(node.left, data)
      } else {
        return searchIn(node.right, data)
      }
    }
  }

  find(data) {
    return findIn(this.rootTree, data)

    function findIn(node, data) {
      if (node === null) {
        return null
      } 
      if (node.data === data) {
        return node
      }
      if (node.data > data) {
        return findIn(node.left, data)
      } else if (node.data < data) {
        return findIn(node.right, data)
      }
    }
  }

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data)

    function removeNode(node, data) {
      if (node === null) {
        return null
      }
      if (node.data > data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if (node.left === null && node.right === null) {
          return null
        } else if (node.left === null) {
          node = node.right
          return node
        } else if (node.right === null) {
          node = node.left
          return node
        } else {
          let minRight = node.right
          while (minRight.left) {
            minRight = minRight.left
          }
          node.data = minRight.data
          node.right = removeNode(node.right, minRight.data)
          return node
        }
      }
    }
  }

  min() {
    if (this.rootTree === null) {
      return undefined
    }

    let node = this.rootTree
    while (node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    if (this.rootTree === null) {
      return undefined
    }

    let node = this.rootTree
    while (node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};