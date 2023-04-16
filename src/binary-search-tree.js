const { NotImplementedError } = require('../extensions/index.js');
// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null; // инициализация корня дерева
  }

  // возвращение корня дерева
  root() {
    return this.rootNode;
  }

  // добавление уза с данными в дерево
  add(data) {
    const newNode = new Node(data); // создание нового узла

    if (!this.rootNode) {
      this.rootNode = newNode; // если корня нет, устанавливаем новый узел в качестве корня
      return;
    }

    let currentNode = this.rootNode;
    while (currentNode) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode; // добавляем узел слева, если слева нет узла
          break;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode; // добавляем узел справа, если справа нет узла
          break;
        }
        currentNode = currentNode.right;
      }
    }
  }

  // проверяем, есть ли узел с данными в дереве
  has(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (data === currentNode.data) {
        return true; // возвращаем true, если узел с данными найден
      }
      currentNode = data < currentNode.data ? currentNode.left : currentNode.right;
    }
    return false;
  }

  // находим узел с данными, если он существует в дереве
  find(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode; // возвращаем узел, если он найден
      }
      currentNode = data < currentNode.data ? currentNode.left : currentNode.right;
    }
    return null; // возвращаем null, если узел не найден
  }

  // удаляем узел с данными из дерева
  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  // рекурсивная функция для удаления узла
  removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      let minRight = node.right;
      while (minRight.left) {
        minRight = minRight.left;
      }
      node.data = minRight.data;

      node.right = this.removeNode(node.right, minRight.data);