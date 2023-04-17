//импортируем из файла list-tree.js, как указано в условии задачи
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

  // Метод добавления значения в дерево
  add(data) {
    const newNode = new Node(data); // Создание нового узла с переданным значением

    // Если корень дерева пуст, делаем новый узел корнем
    if (this._root === null) {
      this._root = newNode;
      return;
    }

    // Поиск места для вставки нового узла
    let currentNode = this._root;
    let parentNode = null;

    // Перебор узлов до тех пор, пока не найдем пустое место для вставки
    while (currentNode !== null) {
      parentNode = currentNode;
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    // Вставка нового узла в найденное место
    if (data < parentNode.data) {
      parentNode.left = newNode;
    } else {
      parentNode.right = newNode;
    }
  }

  // Метод проверки наличия значения в дереве
  has(data) {
    return this.find(data) !== null;
  }

  // Вспомогательный метод поиска узла по значению
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

  // Метод поиска узла по значению
  find(data) {
    return this._findNode(this._root, data);
  }

  // Вспомогательный метод поиска узла с минимальным значением
  _findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // Вспомогательный метод удаления узла по значению
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
      // Удаление узла без дочерних узлов
      if (node.left === null && node.right === null) {
        return null;
      }

      // Удаление узла с одним дочерним узлом
      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left
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