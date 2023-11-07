// Stack and Stucture implementation

class Stack {
    constructor() {
        this.arr = [];
    }
    // push 

    push(value) {
        this.arr.push(value);
        return this.arr;
    }

    // pop
    pop() {
        return this.arr.pop();
    }

    // look up

    lookUp() {
        return this.arr[this.arr.length -1];
    }
}

let stack = new Stack();

console.log(stack.push(2));
console.log(stack.push(4));
console.log(stack.push(3));
console.log(stack.lookUp());
console.log(stack.pop());


// object implementation

class AnotherStack {
    constructor() {
        this.database = {};
        this.count = 0;
    }

    push(value) {
        this.count++;
        this.database[this.count] = value;
        return this.database;
    }

    pop() {
        let del = this.database[this.count];
        delete this.database[this.count];
        this.count--;
        return del;

    }

    peek() {
        return this.database[this.count];
    }
}

let stuckOne = new AnotherStack();

console.log(stuckOne);
console.log(stuckOne.push(10));
console.log(stuckOne.push(12));
console.log(stuckOne.pop());
console.log(stuckOne.peek());

// let obj = {
//     "1": 15,
//     "2": 20
// }
