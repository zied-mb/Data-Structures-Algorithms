// Array Data Stricture
//    1 

function sumOfDistinctElements(arr1, arr2) {
    const combined = arr1.concat(arr2);

    const elementCount = {};

    combined.forEach(num => {
        elementCount[num] = (elementCount[num] || 0) + 1;
    });

    let distinctSum = 0;
    for (const num in elementCount) {
        if (elementCount[num] === 1) {
            distinctSum += parseInt(num);
        }
    }

    return distinctSum;
}

const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

const result = sumOfDistinctElements(set1, set2);
console.log("Sum of distinct elements:", result);



//   2


function dot_product(v1, v2) {
    if (v1.length !== v2.length) {
        throw new Error("Vectors must have the same length.");
    }

    const ps = v1.reduce((sum, current, index) => sum + current * v2[index], 0);

    const isOrthogonal = ps === 0;

    console.log("Dot Product (ps):", ps);
    console.log(`The vectors are ${isOrthogonal ? "orthogonal" : "not orthogonal"}.`);

    return { dotProduct: ps, isOrthogonal };
}


//     Linked List Data Structure


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function deleteNodeAtPosition(head, position) {
    if (head === null || position < 0) {
        return null;
    }

    if (position === 0) {
        const newHead = head.next;
        head = null;
        return newHead;
    }

    let current = head;
    let previous = null;
    let count = 0;

    while (current !== null && count < position) {
        previous = current;
        current = current.next;
        count++;
    }

    if (current === null) {
        console.log("Position is out of range");
        return head;
    }

    previous.next = current.next;
    current = null;

    return head;
}

function printList(head) {
    let current = head;
    let result = '';
    while (current !== null) {
        result += current.data + ' -> ';
        current = current.next;
    }
    console.log(result ? result.slice(0, -4) : 'Empty list');
}



// Stack Data Structure


class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    getItems() {
        return this.items;
    }
}

function reverseString(str) {
    const stack = new Stack();

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    const reversedArray = stack.getItems().reverse();
    return reversedArray.join('');
}

