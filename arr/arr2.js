//Reverse a numerical array order of values in-place. 
function revArray(arr){
    for(let i=0; i < arr.length / 2; i++){
        let hold = arr[i];
        arr[i] = arr[arr.length -1 -i];
        arr[arr.length -1 -i] = hold;
    }
    return arr;
}

console.log(revArray([1,2,3,4,5]));

//Take an array and offset. Shift the arrays values to the right by the offset. Added shifting to the left for negative values. 
function rotate(arr, offset) {
    let moveThisMuch;
    if (offset > 0) {
        moveThisMuch = offset % arr.length;
    } else {
        moveThisMuch = Math.abs(offset) % arr.length;
    }
    if (offset > 0) {
        for (let i = 0; i < moveThisMuch; i++) {
            let hold = arr[arr.length - 1];
            for (let j = arr.length - 2; j >= 0; j--) {
                arr[j+1] = arr[j];
            }
            arr[0] = hold; 
        }
    } else {
        for (let i = 0; i < moveThisMuch; i++) {
            let hold = arr[0];
            for (var j = 1; j < arr.length; j++) {
                arr[j-1] = arr[j];
            }
            arr[arr.length - 1] = hold; 
        }
    }
    return arr;
}

console.log(rotate([9,8,7,6,5,4,3,2,1],4));
console.log(rotate([9,8,7,6,5,4,3,2,1],-3));

//Given an array, and min and max values, filter out any numbers outside min and max. Do this in place, and return the original array
filterRange = (arr, minVal, maxVal) => {

    let nextIndex = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] >= minVal && arr[i] <= maxVal){
            arr[nextIndex] = arr[i];
            nextIndex++;
        }
    }
    arr.length = nextIndex;
    return arr;
}

console.log(filterRange([-1,2,5,7,215,10,-4,1,25,666], 0, 25));

//Replicate javascripts concat() function. Take two arrays and join them together.
concatArrs = (arr1, arr2) => {
    newArr = [];
    addArr(newArr, arr1);
    addArr(newArr, arr2);
    return newArr;
}

//Helper function to reduce redundancy
addArr = (arrAdd, arrFrom) => {
    idx = arrAdd.length
    for(i = 0; i < arrFrom.length; i++){
        arrAdd[idx] = arrFrom[i];
        idx++;
    }
}

console.log(concatArrs([1,2,3],[4,5,6]));