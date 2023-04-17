const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  // Конструктор класса
  constructor() {
    this._root = null; // Инициализация корня дерева как пустого значения
  }

  // Возвращает корень дерева
  root() {
    return this._root;
  }

  // Добавление нового узла с данными в дерево
  add(data) {
    const newNode = new Node(data); // Создаем новый узел с данными

    // Если корень дерева пуст, делаем новый узел корнем дерева
    if (this._root === null) {
      this._root = newNode;
      return;
    }

    let currentNode = this._root; // Устанавливаем текущий узел в корень дерева
    let parentNode = null; // Инициализация родительского узла как пустого значения

    // Проходим по дереву, пока не найдем пустой узел для нового узла
    while (currentNode !== null) {
      parentNode = currentNode;
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    // Добавляем новый узел в дерево в соответствии с его данными
    if (data < parentNode.data) {
      parentNode.left = newNode;
    } else {
      parentNode.right = newNode;
    }
  }

  // Проверка наличия узла с определенными данными в дереве
  has(data) {
    return this.find(data) !== null;
  }

  // Вспомогательный метод для поиска узла с определенными данными, начиная с заданного узла
  _findNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      return node;
    }

    if (data < node.data) {
      return this._findNode(node.left, data);
    } else {
      return this._findNode(node.right, data);
    }
  }

  // Поиск узла с определенными данными в дереве
  find(data) {
    return this._findNode(this._root, data);
  }

  // Вспомогательный метод для поиска узла с минимальным значением, начиная с заданного узла
  _findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // Вспомогательный метод для удаления узла с определенными данными, начиная с заданного узла
  _removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      const minNode = this._findMinNode(node.right);
      node.data = minNode.data;

      node.right = this._removeNode(node.right, minNode.data);
      return node;
    }
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  min() {
    if (this._root === null) {
      return null;
    }

    let currentNode = this._root;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (this._root === null) {
      return null;
    }

    let currentNode = this._root;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};