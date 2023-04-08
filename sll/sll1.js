//This could be broken up into more files, rather an just dumping everything here, but I didn't feel like doing that. 

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
            runner === this.head ?result = runner.data
            :result += `,${runner.data}`;
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
    length() {
        let runner = this.head;
        let res = 0;
        while(runner !== null){
            res++;
            runner = runner.next;
        }
        return res;
    }
    //For max, min, and avg, I choose to work just with numbers. It would have been a lot more simple to just make it assume numbers, but this was more interesting to me in the moment. I don't like the redundancy in the code however, and think there is probably a better way to do it. 
    max() {
        let runner = this.head;
        let high = null;
        while(runner !== null){
            if(typeof(runner.data) === "number"){
                if(high === null){
                    high = runner.data;
                }
                else {
                    if(high < runner.data){
                        high = runner.data;
                    }
                }
                runner = runner.next;
            }
            else{runner = runner.next;}
        }
        return high
    }
    min() {
        let runner = this.head;
        let low = null;
        while(runner !== null){
            if(typeof(runner.data) === "number"){
                if(low === null){
                    low = runner.data;
                }
                else {
                    if(low > runner.data){
                        low = runner.data;
                    }
                }
                runner = runner.next;
            }
            else{runner = runner.next;}
        }
        return low
    }
    avg() {
        let runner = this.head;
        let sum = 0;
        let count = 0;
        while(runner !== null){
            if(typeof(runner.data) === "number"){
                sum += runner.data;
                count++
                runner = runner.next;
            }
            else{runner = runner.next;}
        }
        return sum/count;
    }
    last() {
        let runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        return runner.data;
    }
    cabooseBeGone() {
        let runner = this.head;
        while(runner.next.next){
            runner = runner.next;   
        }
        runner.next = null;
        return this.display();
    }
    addABoose(val){
        let runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        runner.next = new Node(val);
        return this.display();
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
node3.next = node4 = new Node("Howdy!");
console.log(sll.display());
console.log(sll.sum());
console.log(sll.length());
console.log(sll_empty.length());
node4.next = node5 = new Node(-4);
console.log(sll.max());
console.log(sll.min());
console.log(sll.avg());
console.log(sll.last());
console.log(sll.cabooseBeGone());
console.log(sll.addABoose(-7));
