class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    // add value to tree
    add(value) {
        if(this.root) {
            var runner = this.root;
            while(runner) {
                if(value>runner.value) {
                    if(runner.right){
                        runner = runner.right;
                    } else {
                        runner.right = new Node(value);
                        return this
                    }
                } else {
                    if(runner.left){
                        runner = runner.left;
                    } else {
                        runner.left = new Node(value);
                        return this
                    }
                }
            }
        }
        this.root = new Node(value);
        return this
    }
        // compares the two main subtrees and says if they are balanced or not (in this case, that means within 1)
        isBalanced() {
            if (this.root === null) {
                return `this tree is balanced because it doesn't even have a root`;
            }
            let leftSide = heightHelp(this.root.left)
            let rightSide = heightHelp(this.root.right)
            function heightHelp(runner) {
                if(!runner) {
                    return 0;
                }
                return 1 + heightHelp(runner.left) + heightHelp(runner.right)
            }
            if(leftSide === rightSide || leftSide + 1 === rightSide || leftSide - 1 === rightSide) {
                return "The subtrees are within the range to be considered balanced"
            }
            else { return "The subtrees are not balanced"}
        }
        // print out the contents of the tree to verify you are doing things correctly
        xRay() {
            if (this.root === null) {
                return `this tree doesn't have a root`;
            }
            let leftSide = xrayHelp(this.root.left)
            let rightSide = xrayHelp(this.root.right)
            function xrayHelp(runner) {
                if(!runner) {
                    return 0;
                }
                return 1 + xrayHelp(runner.left) + xrayHelp(runner.right)
            }
        }
}

// takes an ascending ordered array and returns a balanced BST from it
function arrayToBST(arr) {
    mid = Math.floor(arr.length / 2);
    console.log(mid);
    tree = new BST;
    tree.add(arr[mid])
    for(i = 0; i < arr.length; i++){
        if(i != mid -1) {
            tree.add(arr[i])
        }
    }
    return tree;
}

// testing arrayToBST
hold = [1,2,3,4,5,6,7,8,9];
// hold = [1,2,3,4,5,6,7,8,9,10];
test = arrayToBST(hold);
console.log(test.isBalanced())

// closest common ancestor - find the closest common ancestor in a tree for two given values.
function cCA(BST, x, y) {

}