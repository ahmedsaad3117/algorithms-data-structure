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

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, value) {
    const foundedNode = this.get(index);

    if (index) {
      foundedNode.val = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unShift(value);
    const newNode = new Node(value);

    const foundedNode = this.get(index - 1);
    newNode.next = foundedNode.next;
    foundedNode.next = newNode;
    this.length++;
    return true;
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
// list.unShift("frist");
// list.unShift("2nd");
//console.log(list.set(1, "khald"));
console.log(list.insert(1, "khald"));
console.log(list.get(1));

console.log(list);
