//Takes an array and a number. Cuts off values from the front of the array and keeps only the number input on the end of the array and returns the array. 

prac1 = (arr, cut) => {
    return arr = arr.slice(arr.length -cut, arr.length)
};

arr1 = [8,51,2,45,35,79,97,5654,7,5,24698,5,1];
console.log(prac1(arr1,5));
console.log('--------------');

//predicts what disaster will happen today. I recoginise there is a more elegant way to do this, but I was tired. 
prac2 = () => {
    hold = Math.floor(Math.random() * 100) + 1;
    if(hold <= 10 ){
        disaster = "Volcano";
    }
    else if(hold >= 11 && hold <= 25){
        disaster = "Tsunami";
    }
    else if(hold >= 26 && hold <= 45){
        disaster = "Earthquake";
    }
    else if(hold >= 46 && hold <= 70){
        disaster = "Blizzard";
    }
    else {disaster="Meteor"}

    console.log(`The disaster of today is: ${disaster}`)
};

prac2();
console.log('--------------');

//Same as above, only the possiblites are calculated for each seprately
prac3 = () => {
    disaster=[["Volcano", 10],["Tsunami", 15], ["Earthquake", 20], ["Blizzard", 25], ["Meteor", 30]]
    today = []
    for(x = 0; x < disaster.length; x++){
        if(Math.floor(Math.random() * 100) + 1 <= disaster[x][1]){
            today.push(disaster[x][0])
        }
    }
    if(today.length == 0){
        console.log("Nothing bad happened today!");
    }
    else {
        for(x = 0; x < today.length; x++){
            console.log(`A ${today[x]} happened today :(`)
        }
    }
};

prac3();
console.log('--------------');

// Add .01, increasing by .01 every time (.02, .03...) for 98 times and print the result.
prac4 = () => {
    hold = 101;
    for(x = 1; x < 99; x++){
        hold = hold + (.01 * x);
    }
    console.log(`result is: ${hold}`);
}

prac4();
console.log('--------------');

//Takes a 0-100 integer and delivers a grade based on standard grading. Added + & - for top and bottom 2% of each grade, except no A+.
//I feel like there should be a much more elegant way to do this. Espcially the + and -.
prac5 = (percent) => { 

    if(percent > 89){
        grade ="A";
        if(percent < 93){
            grade = grade + "-";
        } 
    }
    else if(percent > 79){
        grade ="B"
        if(percent > 87){
            grade = grade + "+";
        }
        if(percent < 83){
            grade = grade + "-"; 
        } 
    }
    else if(percent > 69){
        grade ="C"
        if(percent > 77){
            grade = grade + "+";
        }
        if(percent < 73){
            grade = grade + "-"; 
        } 
    }
    else if(percent > 59){
        grade ="D"
        if(percent > 67){
            grade = grade + "+";
        }
        if(percent < 63){
            grade = grade + "-" ;
        } 
    }
    else {
        grade = "F";
    }
    console.log(`Score: ${percent}. Grade: ${grade}`);
}

prac5(89);
prac5(91);
prac5(75);
prac5(42);