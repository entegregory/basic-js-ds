const { Node } = require('../extensions/list-tree.js');
// Импортируем класс Node из файла list-tree.js
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

      // Удаление узла с двумя дочерними узлами
      // Находим узел с минимальным значением в правом поддереве
      const minNode = this._findMinNode(node.right);
      // Присваиваем значение найденного узла текущему узлу
      node.data = minNode.data;

      // Удаляем найденный узел с минимальным значением из правого поддерева
      node.right = this._removeNode(node.right, minNode.data);
      // Возвращаем текущий узел с обновленным значением
      return node;
    }
    // Метод удаления узла по заданному значению
    remove(data) {
      // Обновляем корень дерева после удаления узла с заданным значением
      this._root = this._removeNode(this._root, data);
    }

    // Метод для нахождения минимального значения в дереве
    min() {
      // Если корень дерева пуст, возвращаем null
      if (this._root === null) {
        return null;
      }

      // Инициализируем текущий узел корнем дерева
      let currentNode = this._root;
      // Проходим по левым узлам дерева, пока не дойдем до самого левого узла
      while (currentNode.left !== null) {
        currentNode = currentNode.left;
      }

      // Возвращаем значение самого левого узла (минимальное значение)
      return currentNode.data;
    }

    // Метод для нахождения максимального значения в дереве
    max() {
      // Если корень дерева пуст, возвращаем null
      if (this._root === null) {
        return null;
      }

      // Инициализируем текущий узел корнем дерева
      let currentNode = this._root;
      // Проходим по правым узлам дерева, пока не дойдем до самого правого узла
      while (currentNode.right !== null) {
        currentNode = currentNode.right;
      }

      // Возвращаем значение самого правого узла (максимальное значение)
      return currentNode.data;
    }
  }

// Экспортируем класс BinarySearchTree для использования в других файлах
module.exports = {
  BinarySearchTree
};