class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

// const node = new Node(10);
// node.next = new Node(11);
// node.prev = new Node(9);
// node.next.next = new Node(12);
// console.log(node);

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value);

        if(!this.head) {
            this.head = node;
            this.tail = node;
            this.length++;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            
        }
        this.length++;

        return this;
    }

    pop() {
        if(!this.head){
            return null;
        }
        let popedNode = this.tail;
        if(this.length == 1) {
            this.head = null;
            this.tail = null;
        }else {
            this.tail = popedNode.prev;
            this.tail.next = null;
            popedNode.prev = null;
        }

        this.length--;

        return popedNode;
    }

    shift() {
        if(!this.head) {
            return null;
        }

        let oldHead = this.head;

        if(this.length == 1) {
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            oldHead.next = null;
            this.head.prev = null
        }

        this.length--;
        return oldHead;
    }

    unShift(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    showList() {
        let arr = [];
        let currNode = this.head;

        while(currNode) {
            arr.push(currNode.value);
            currNode = currNode.next;
        }

        return arr;
    }
}


const list = new DoublyLinkedList();

console.log(list.unShift(4));
console.log(list.unShift(6));
console.log(list.push(14));
console.log(list.shift());
console.log(list.showList());
// list.push(10)
// list.push(12)

// console.log(list.shift());
// console.log(list.pop());
// console.log(list.pop());

console.log(list);