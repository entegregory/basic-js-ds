const { NotImplementedError } = require('../extensions/index.js');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // Создаем фиктивный узел, который указывает на начало списка
  const dummy = new ListNode();
  dummy.next = l;

  let current = dummy; // Устанавливаем текущий узел на фиктивный узел

  // Идем по списку до тех пор, пока не достигнем конца
  while (current.next !== null) {
    // Если значение следующего узла равно k, удаляем его
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      // В противном случае переходим к следующему узлу
      current = current.next;
    }
  }

  // Возвращаем список без узлов, значение которых равно k
  return dummy.next;
}

module.exports = {
  removeKFromList
};
