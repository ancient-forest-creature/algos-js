x = 2;
y=3;

const plus1 = x => x + 1;

const square = x => x*x;

console.log(plus1(y));
console.log(square(plus1(y)));

// set an number and string and swap them
myNum = 42;
myName = "Nathan";

[myNum, myName] = [myName, myNum]

console.log(`num is ${myNum}`)
console.log(`name is ${myName}`)

//print from -52 to 1066 using for loop /w added ifs to make the terminal less cluttered
for(let x = -52; x < 1067; x++)
{
    if(x == -52)
    {
        console.log("Starting at -52");
    }
    else if (x == 1066){
        console.log("Ending at 1066");
    }
    else {
        continue;
    }
}

//print positive message a given number of times
beCheerful = x => {
    for(let i = 0; i < x; i++)
    {
        console.log(`You can do it! ${i + 1}`)
    }
}

beCheerful(1); //verified using 98 per example, but didn't want to see it 98 times every time terminal.

//using a for loop, print multiples of 3 in the range skipping -3 and -6
// for(let x = 3; x >= -300; x--)
// {
//     if(x % 3 === 0)
//     {
//         if(x === -3 || x === -6)
//         {
//             console.log("nope")
//         }
//         else
//         {
//             console.log(x)
//         }
//     }
//     else
//     {continue}
// }

//print integers using while loop
// x = 2000
// while(x <= 5280){
//     console.log(x);
//     x++
// }


//print birthday message if two numbers match month and day
bDay = (a, b) => {
    if(a === 9 && b === 9)
    {
        console.log("How did you know?")
    }
    else{
        console.log("just another day...")
    }
}

bDay(12,31);
bDay(9,9);

//Calculate if given year is a leap year
isLeap = year => {
    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        console.log(`${year} is a leap year`)
    } 
    else {
        console.log(`${year} is not a leap year`)
    }
}

isLeap(1981);
isLeap(2024);

//print all integers that are a multiple of 5 in the given set, and how many the total count of how many were counted
cnt = 0;
for(let x = 512; x <= 4096; x++)
{
    if(x % 5 == 0){
        // console.log(x)
        cnt++
    }
    else{
        continue
    }
}
console.log(cnt)

//print multiples of 6 using while loop
x = 6;
while(x <= 12) //orinally 60000
{
    if(x % 6 == 0)
    {
        console.log(x)
    }
    x++
}

//print all integers in range. If divisible by 5, print "Coding", if divisable also by 10, print "Coding Dojo"
for(let x = 1; x <=10; x++) //originally 100
{
    if(x % 5 == 0 && x % 10 == 0)
    {
        console.log("Coding Dojo")
    }
    else if (x % 5 == 0)
    {
        console.log("Coding")
    }
    else {console.log(x)}
}

//add all odd integers in range
cnt = 0;
for(let x = -300000; x <= 300000; x++)
{
    if(x % 2  != 0)
    {cnt += x}
}
console.log(cnt)


