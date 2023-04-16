const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    // Создаем пустой список для хранения элементов очереди
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    // Возвращаем связанный список, представляющий очередь
    return this.head;
  }

  enqueue(value) {
    // Создаем новый узел со значением value
    const newNode = new ListNode(value);

    if (!this.head) {
      // Если очередь пуста, новый узел становится и головой, и хвостом
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Иначе, добавляем новый узел в конец очереди и обновляем хвост
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    // Если очередь пуста, возвращаем undefined
    if (!this.head) {
      return undefined;
    }

    // Получаем значение из головы очереди
    const value = this.head.value;

    // Удаляем голову очереди, смещая указатель на следующий узел
    this.head = this.head.next;

    // Если очередь стала пустой, обновляем хвост
    if (!this.head) {
      this.tail = null;
    }

    // Возвращаем удаленное значение
    return value;
  }
}

module.exports = {
  Queue
};
