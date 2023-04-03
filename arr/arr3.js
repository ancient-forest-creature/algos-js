//Accepts an array, removes any negative values in place, and returns the same array without the negative values.
removeNegs = arr => {
    nextIdx = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            arr[nextIdx] = arr[i];
            nextIdx++;
        }
    }
    arr.length = nextIdx;
    return arr;
}

console.log(removeNegs([-3,5,-4,16,9,-12,-1,6,7,-2]));

//Return the second to last element in a given array. If there isn't one, return null.
nextToLast = arr => {
    if(arr.length > 1){
        return arr[arr.length -2];
    }
    else { return null; }
}

console.log(nextToLast([1,2,3,4,5,6,7,8,'nine',10]));
console.log(nextToLast([9]));

//Returns the second largest value in array
largeAdjacent = arr => {
    let first = arr[0];
    let second = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > first){
            first = arr[i];
            //console.log(`first is: ${first}`)
        }
        if(arr[i] < first && arr[i] > second){
            second = arr[i];
        }
    }
    return second;
}

console.log(largeAdjacent([1,3,-4,55,8,18,9]));

//Given an array and an offset, return the value that is the offset away from the end. If the offset exceeds length, send back null
endPicker = (arr, offset) => {
    if(arr.length < offset){
        return null
    }
    else{
        return arr[arr.length - offset];
    }
}

console.log(endPicker([1,3,7,9,8,5,2,1], 3));
console.log(endPicker([1,2,3], 4));

//return an array of ascending, non-matching values greater than zero. 
ascend = arr => {
    currentHighest = 0;
    hold = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0 && arr[i] > currentHighest){
            //console.log(arr[i]);
            hold[hold.length] = arr[i];
            currentHighest = arr[i];
        }
    }
    return hold;
}

console.log(ascend([-1,0,1,3,3,3,2,5,7,4,10,11,3]));

//Credit card validator using Luhn formula
validateCC = arr =>{
    let last = arr[arr.length -1];
    let sum = 0;
    arr.length = arr.length -1;
    for(let i = arr.length -1; i > 0; i -=2){
        arr[i] = arr[i] * 2;
        if(arr[i] > 9){
            arr[i] = arr[i] -9;
        }
    }
    for(let j = 0; j < arr.length; j++){
        sum = sum + arr[j];
    }
    sum = sum + last;
    if(sum % 10 === 0){
        return true;
    }
    else{ return false; }
}

console.log(validateCC([5,2,2,8,2]));