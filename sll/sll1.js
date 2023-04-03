class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        let new_node = new Node(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    findValue(val) {
        let runner=this.head;
        let result = "no";
        while(runner !== null){
            if (runner.data == val) {
                result = "yes";
            }
            runner = runner.next;
        }
        return result;
    }
    display() {
        let runner=this.head;
        let result = "";
        while(runner !== null){
            result += runner.data
            runner = runner.next;
        }
        return result;
    }
    sum() {
        let runner = this.head;
        let res = 0;
        while(runner !== null){
            if(typeof(runner.data) !== "string"){
                res += runner.data;
            }
            runner = runner.next;
        }
        return res;
    }
}

let sll = new LinkedList();
let sll_empty = new LinkedList();

let node1 = new Node(4);
let node2 = new Node(5);
let node3 = new Node(6);

sll.head = node1;

node1.next = node2;
node2.next = node3;

console.log(sll);
console.log(sll.display());
console.log(sll_empty.display());
console.log(sll.findValue(9));
console.log(sll.findValue(6));
console.log(sll.addFront(9));
console.log(sll.display());
console.log(sll.findValue(9));
node3.next = new Node(" Howdy! ");
console.log(sll.display());
console.log(sll.sum());