//Remove spaces from a given string without using built-in methods
noSpace = str => {
    hold = '';
    for(i=0; i < str.length; i++){
        if(str[i] != ' '){
            hold = hold + str[i];
        }
    }
    return hold;
}

console.log(noSpace('Th is is a Te s t'));

//Given a string, pull any digits out of it and convert them as a unit to a number
getDigits = str =>{
    hold = '';
    for(i = 0; i < str.length; i++){
        if(isNaN(str[i]) === false){
            hold = hold + str[i];
        }
    }
    return Number(hold);
}

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

//Turn a string into an acronym.
acro = str =>{
    parts = str.split(" ");
    hold = "";
    for(i = 0; i < parts.length; i++){
        hold = hold + parts[i][0].toUpperCase();
    }
    return hold;
}

console.log(acro("This is a test - This is always a test."));

//Count the number of non-spaces in a given string.
nonCount = str => {
    count = 0;
    for(i = 0; i < str.length; i++){
        if(str[i] != " "){
            count++;
        }
    }
    return count;
}
console.log(nonCount("This is a test - This is always a test."));

//Take an array of strings and a number. Remove any strings that are shorter in length than the number.
removeSS = (arr, num) => {
    hold = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i].length < num){
            continue;
        }
        hold.push(arr[i]);
    }
    return hold;
}

console.log(removeSS(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))