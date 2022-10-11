class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //2nd level
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let currnet = this.head;
    let newTail = currnet;
    while (currnet.next) {
      newTail = currnet;
      currnet = currnet.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currnet;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;

    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }

    return oldHead;
  }

  unShift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  get(num) {
    if (num < 0 || num >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== num) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

const list = new SinglyLinkedList();
// console.log(list);

list.push("hi");
//console.log(list);
list.push("Ahmed");
//console.log(list);
list.push("Saad");
//list.pop();
list.unShift("frist");
list.unShift("2nd");

console.log(list);
console.log(list.get(3));
