/*
  Singly Linked List
  [node] -> [node] -> [node] -> [node] -> null
    |                              |
  head                            tail
*/

class SinglyLinkedList {
  constructor() {
    this._length = 0;
    this.head = null;
    this.tail = null;
    console.log("SinglyLinkedList: length: ", this._length);
  }

  /* add element to the tail O(1)*/
  add(data) {
    const node = new Node(data, null);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      this._length += 1;

      return this.head.data;
    }

    this.tail.next = node;
    this.tail = node;
    this._length += 1;

    return node.data;
  }

  /* add element to the head O(1)*/
  addFirst(data) {
    const node = new Node(data, this.head);
    if (!this.head) {
      this.tail = node;
    }
    this.head = node;
    this._length += 1;

    return node.data;
  }

  /* peek the first element O(1) */
  peekFirst() {
    if (!this.head) {
      throw new Error("The list is empty!");
    }

    return this.head.data;
  }

  /* peek the last element O(1) */
  peekLast() {
    if (!this.tail) {
      throw new Error("The list is empty!");
    }

    return this.tail.data;
  }

  /* remove the first element O(1) */
  removeFirst() {
    if (!this.head) {
      throw new Error("The list is empty!");
    }

    const removed = this.head;

    if (this._length === 1) {
      this.tail = null;
      this.head = null;
      this._length -= 1;

      return removed;
    }

    this.head = this.head.next;
    this._length -= 1;

    return removed;
  }

  /* remove the last element O(n) */
  removeLast() {
    if (!this.tail) {
      throw new Error("The list is empty!");
    }

    const removed = this.tail;

    if (this._length === 1) {
      this.tail = null;
      this.header = null;
      this._length -= 1;

      return removed;
    }

    let currentNode = this.head;
    let tailCandidate = this.head;

    while (currentNode.next) {
      tailCandidate = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = tailCandidate;
    this.tail.next = null;
    this._length -= 1;

    return removed;
  }

  size() {
    return this._length;
  }
}

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

module.exports.SinglyLinkedList = SinglyLinkedList;

console.log("LinkedList");
