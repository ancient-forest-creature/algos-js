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
    // find if a value is in a tree
    contains(value) {
        var runner = this.root;
        while (runner) {
            if (value == runner.value) {
                return true;
            }
            if (value < runner.value) {
                if (!runner.left) {
                    return false;
                }
                runner = runner.left;
            } else {
                if (!runner.right) {
                    return false;
                }
                runner = runner.right;
            }
        }
        return false;
    }
    // find the smallest value in a tree
    min() {
        var runner = this.root;
        var min = this.root.value;
        while(runner.left) {
            if(runner.left.value < min) {
                min = runner.left.value;
            }
            runner = runner.left;
        }
        return min
    }
    // find the largest value in a tree
    max() {
        var runner = this.root;
        var max = this.root.value;
        while(runner.right) {
            if(runner.right.value > max) {
                max = runner.right.value;
            }
            runner = runner.right;
        }
        return max
    }
    // find the number of nodes in a tree
    size() {
        if (this.root === null) {
            return 0;
        }
        function sizeHelp(runner) {
            if (!runner) {
                return 0;
            }
            return 1 + sizeHelp(runner.left) + sizeHelp(runner.right);
        }
        return sizeHelp(this.root);
    }
    // see if the tree is empty of values
    isEmpty() {
        if(this.root) {
            return false
        }
        return true
    }
    // gives the height of the tallest subtree, or says if they are equal 
    height() {
        if (this.root === null) {
            return 0;
        }
        let leftSide = heightHelp(this.root.left)
        let rightSide = heightHelp(this.root.right)
        function heightHelp(runner) {
            if(!runner) {
                return 0;
            }
            return 1 + heightHelp(runner.left) + heightHelp(runner.right)
        }
        if(leftSide > rightSide) {
            return `left subtree contians ${leftSide} nodes`
        }
        else if(rightSide > leftSide) {
            return `right subtree contains ${rightSide} nodes`
        }
        else { return `They both contain ${leftSide} nodes`}
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
}
// creating a new BST
tree = new BST();

// adding some nodes
tree.add(10).add(20).add(5).add(7).add(21).add(2).add(9).add(17).add(6).add(4)

// searching for value
console.log(`contains 17? ${tree.contains(17)}`)
// searching for value that doesn't exist in the tree
console.log(`contains 'hello'? ${tree.contains('hello')}`)

// testing min
console.log(`min val: ${tree.min()}`)
// testing max
console.log(`max val: ${tree.max()}`)

// testing size
console.log(`tree contians ${tree.size()} nodes`)

//testing isEmpty
console.log(tree.isEmpty())
emptyTree = new BST();
console.log(emptyTree.isEmpty())

// printing our tree
console.log(tree);

// tree height
console.log(tree.height())

// new tree to test height cases
tree0 = new BST();
tree0.add(10).add(5).add(15).add(7).add(17)
console.log(tree0.height())

// testing more height cases
tree1 = new BST();
tree1.add(10).add(20).add(30).add(40)
console.log(tree1.height())

// testing if the trees are balanced
console.log(tree.isBalanced())
console.log(tree0.isBalanced())

// another tree to test balance 
tree2 = new BST();
tree2.add(10).add(11).add(9).add(7)
console.log(tree2.isBalanced())