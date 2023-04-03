
let x =[1,2,3];
let y = 0;
let z = [2,5,7,9,3,14,23,42,99];

//Add given value to the front of a given array
function pushFront(arr, val){
    let hold = [];
    
    hold[0] = val
    for(i=1; i <= arr.length; i++){
        hold[i] = arr[i-1];
    }
    return hold;
}

console.log(pushFront(x,y));

//Remove the first value in a given array
function popFront(arr){
    let hold = arr[0];
    for(let i=1; i < arr.length; i++){
        arr[i-1] = arr[i];
        if(i > 10){ break };
    }
    arr.pop();
    console.log(arr);
    return hold;
}

console.log(popFront(z));

//Insert a given value at a given location in the given array
function insertAt(arr,idx,val){
    let hold = [];
    for(let i = arr.length; i > -1; i--){
        if(i > idx) {
            hold[i] = arr[i-1];
        } else if(i === idx){
            hold[i] = val;
        } else {
            hold[i] = arr[i];
        }
        console.log(i);
    }
    return hold;
}

console.log(insertAt(z,2,7))

//Remove the value in a given array at the given location
function removeAt(arr,idx){
    let rtn = arr[idx];
    for(let i = 0; i < arr.length -1; i++){
        if(i < idx) {
            arr[i] = arr[i];
        } else{
            arr[i] = arr[i+1]
        }
    }
    arr.pop();
    console.log(arr);
    return rtn;
}

console.log(removeAt(z,5))

//Swap positions of successive pairs of values in a given array. Don't change the final value if the array is of an ood length.
function swapPairs(arr){
    for(let i=0; i < arr.length -1; i += 2){
        let hold = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = hold;
    }
    return arr;
}

console.log(swapPairs(z));

//Removed duplicates from a sorted array while avoiding using push
removeDupes = (arr) => {
    hold = [];
    hold[0] = arr[0];
    for(i = 1; i < arr.length; i++){
        if(arr[i -1] == arr[i]){
            continue;
        }
        hold[hold.length] = arr[i];
    }
    return hold;
}

console.log(removeDupes([-2,-2,3.14,5,5,10]));
console.log(removeDupes([9,19,19,19,19,19,29]));

//Move the lowest value in an array to the 0 index position. Don't otherwise change the order in any way.
minToFront = (arr) => {
    min = arr[0];
    idx = 0;
    for(i = 1; i <= arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            idx = i;
        }
    }

    for(x =  idx; x > 0; x--){
        hold = arr[x];
        arr[x] = arr[x -1];
        arr[x -1] = hold;
    }
    return arr;
}

console.log(minToFront([4,2,1,3,5]));