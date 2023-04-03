//function that accepts a number as input and ruturns an array from the given number to zero
cntDwn = x => {
    arr = [];
    for(x; x >= 0; x--){
        arr.push(x)
    }
    return arr
}

test = cntDwn(9)
console.log(test)

//funtion recives two numbers. print the first, return the second. I added to check if it's an array and of a specific length.
dur = x => {
    console.log(typeof(x));
    if(x.constructor != Array || x.length != 2){
        console.log("test")
        return "please input only two item arrays"
    }
    else {
        console.log(x[0]);
        return x[1];
    }
}

//function that returns the first value in an array plus the array's length.
x = 'nib'
n = [3,9]
b = false
l = [1,4,56,48,9,59,'log',false]

console.log(`${v = dur(n)} returned`);

foo = x => {
    return x[0] + x.length
}

console.log(foo(l))

console.log('--------------')

//Function takes an array and prints any values that are greater than the second value of the array. Returns the number of values that matched the test.
arr = [1,3,5,7,9,13]

fon = arr => {
    i = 0
    for(let x = 0; x <= arr.length - 1; x++){
        if(arr[x] > arr[1]){
            console.log(arr[x]);
            i++
        }
    }
    return i
}
console.log(fon(arr))

console.log('--------------')

//Function takes an array and prints any values that are greater than the second value of the array. Returns the number of values that matched the test. Verifes that is an array, and that there are at least two items in the array.
arr0 = [9]
arr1 = [1,2,45,5,8,7,7,8,9,6,2,4,5,6,4,8,7,6]

prac0 = arr => {
    hold = []
    count = 0
    if(arr.constructor != Array || arr.length < 2){
        return "This function only accepts arrays with 2 or more items"
    }
    else{
        for(let x = 0; x <= arr.length - 1; x++){
            if(arr[x] > arr[1]){
                hold.push(arr[x]);
                count++
            }
        }
        console.log(`count is: ${count}`);
        return hold
    }
}

console.log(prac0(arr))

console.log('--------------')

//returns an array the length of the first input, using the second input as the array value. Prints Jinx if the numbers match.
prac1 = (v1, v2) => {
    hold = []
    for(let x = 0; x <= v1 - 1; x++){
        hold.push(v2)
    }
    if(v1 == v2){
        console.log('Jinx!')
    }
    return hold
}

console.log(prac1(3,6))

console.log('--------------')

//checks if recieves an array, if so, checks the length against the first value in the array and prints the assoicated message.
arr2 = [1]
prac2 = arr => {
    if(arr.constructor != Array){
        return "This function only accepts arrays!"
    }
    else{
        if(arr[0] > arr.length){
            console.log("Too Big");
        }
        else if(arr[0] < arr.length){
            console.log("Too Small");
        }
        else {console.log("Just right!")}
    }
}

prac2(arr2)

console.log('--------------')

// convert between Fahrenheit and Celsius
fToC = temp => {
    return (temp - 32)*5/9
}

cToF = temp => {
    return (temp * 9/5) + 32
}

console.log(`C = ${fToC(43)}`)
console.log(`F = ${cToF(6)}`)