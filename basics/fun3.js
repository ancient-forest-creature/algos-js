//Function changes all positive numbers to the string pos.
arr0 = [-3,5,0,-4,7];

prac0 = arr => {
    for(let x = 0; x < arr.length; x++){
        if(arr[x] > 0){
            arr[x] = "pos"
        }
    }
}

prac0(arr0);
console.log(arr0);

//For a given array, prints the lowest number and returns the highest.
arr1 = [22,10,2,45,5,3,-231,7,82,-9,6,2,42,5,-6,4,8,321,7]

prac1 = arr => {
    let high = low = arr[0];
   for(let x = 0; x < arr.length; x++){
        if(arr[x] > high){
            high = arr[x];
        }
        if(arr[x] < low){
            low = arr[x];
        }
    }
    console.log(`Low is: ${low}`);
    // console.log(`High is: ${high}`);
    return high;
}

console.log(`High is: ${prac1(arr1)}`)

console.log('--------------')

//prints the second to last number in array, and returns the first odd value.
prac2 = arr => {
    console.log(arr[arr.length -2]);
    for(let x = 0; x < arr.length; x++){
        if(arr[x] % 2 != 0){
            return arr[x]
        }
    }
    return "no odd numbers found"
}

console.log(`prac2 results: ${prac2(arr1)}`)

console.log('--------------')

//takes an array and returns a new array with all the values doubled.
prac3 = arr => {
    let hold = [];
    for(x = 0; x < arr.length; x++){
        hold.push(arr[x] * 2)
    }
    return hold
}

console.log(prac3(arr1))
console.log('--------------')

//counts the number of positive values in a given array, and changes the last value to be the count of positive values
prac4 = arr => {
    count = 0;
    for(x=0; x < arr.length; x++){
        if(arr[x] > 0){
            count++
        }
    }
    arr[arr.length-1] = count
    return arr
}

console.log(prac4(arr1))
console.log('--------------')

//walks array and prints message if there are 3 concurrent even or odd values.
prac5 = arr => {
    oddCount = 0;
    concecutive = 0
    for(x = 0; x < arr.length; x++){
        if(arr[x] % 2 != 0 && oddCount >= 3 && concecutive >= 2){
            console.log("Even more so!");
            console.log(arr[x])
            oddCount=0
            concecutive=0
        }
        else if (arr[x] % 2 != 0 && oddCount >= 3){
            console.log("That's odd!");
            console.log(arr[x])
            oddCount=1;
            concecutive++;
        }
        else if (arr[x] % 2 != 0){
            console.log(arr[x])
            oddCount++
        }
        else {
            console.log('----reset----')
            oddCount=0;
            concecutive=0;
        }
    }
}

arr2 = [1,3,5,7,5,9,11,13,5,77,6,8,8,5,3,7,3,6,]
prac5(arr2)
console.log('--------------')

//given an array, add 1 to odd values, log all values, return the array.
prac6 = arr => {
    for(x = 0; x < arr.length; x++){
        if(arr[x] % 2 != 0){
            arr[x] = (arr[x] + 1);
        }
        console.log(arr[x]);
    }
    return arr;
}

console.log(prac6(arr2))
console.log('--------------')

//Given an array of strings, replace each string with a number, the length of the string at the previous array index, and return the array. I choose to mean the last string length would be the first in the index.

parc7 = arr => {
    first_index = arr[0].length
    for(x = 0; x < arr.length; x++){
        if(x===0){
            continue;
        }
        if(x === arr.length -1){
            arr[x-1] = arr[x].length;
            arr[x] = first_index;
        } 
        else {
            arr[x-1] = arr[x].length;
        }
    }
    return arr;
}

arr3 = ["test", "I don't know", "Blarg", "Blood for the blood god", "Rabbit"]
console.log(parc7(arr3))
console.log('--------------')

//For given array, return a new array adding 7 to each value but excluding the first.
parc8 = arr => {
    hold = []
    for(x = 1; x < arr.length; x++){
        hold.push(arr[x] + 7)
    }
    return hold
}

console.log(parc8(arr2))
console.log('--------------')

//function to reverse values, in place. 
prac9 = arr => {
    return arr.reverse(); //yes, I know. 
}

console.log(prac9(arr2))
console.log('--------------')

//take an array and return new array with any positive value made negitive.
prac10 = arr => {
    hold = []
    for(x = 0; x < arr.length; x++){
        arr[x] > 0 ? hold.push(-arr[x]) : hold.push(arr[x])
    }
    return hold
}

arr4 = [1,99,6,-4,0]
console.log(prac10(arr4))
console.log('--------------')

//swap every other indexed value moving to the center of an array.
prac11 = arr => {
    len = arr.length
    mid = Math.floor(len/2)
    bit = 1
    for (let i = 0; i < mid; i++) {
        if(bit > 0){
            let old = arr[i];
            arr[i] = arr[len - 1 - i];
            arr[len - 1 - i] = old;
        }
        bit = -bit
      }
    return arr;
}

arr5 = [1,2,3,4,5,6]
console.log(prac11(arr5))
console.log('--------------')

//Takes an array and a number. Multiplies every value in the array by that number, and returns the array with the new values. 
prac12 = (arr, num) => {
    for(x = 0; x < arr.length; x++){
        arr[x] = arr[x] * num;
    }
    return arr
}

console.log(prac12(arr5, 3))
console.log('--------------')