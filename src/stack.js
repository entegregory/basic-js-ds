const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    // Создаем массив для хранения элементов стека
    this.stackArray = [];
  }

  push(element) {
    // Добавляем элемент на вершину стека
    this.stackArray.push(element);
  }

  pop() {
    // Удаляем и возвращаем верхний элемент стека
    // Если стек пуст, вернется undefined
    return this.stackArray.pop();
  }

  peek() {
    // Возвращаем верхний элемент стека без его удаления
    // Если стек пуст, вернется undefined
    return this.stackArray[this.stackArray.length - 1];
  }
}

module.exports = {
  Stack
};





