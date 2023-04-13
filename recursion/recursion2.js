//fibonacci sequence using recursion. I went with adding storing the answers to reduce the cost. 
fib = (number, storage) => {
    console.log(`Enter func number = ${number}, storage=${storage}`);
    storage = storage || {};
    console.dir(storage);

    console.log(`storage[${number}] = ${storage[number]}`);

    if (storage[number]){
        console.log('storage[number] if hit');    
        return storage[number];
    } 
    if (number <= 1){
        console.log('number <=1 hit');
        return 1;
    } 
    return storage[number] = fib(number -1, storage) + fib(number-2, storage);
}

console.log(fib(7));
