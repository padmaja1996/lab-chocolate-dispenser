var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color, count){
    if(count>0){
        for(let number=0;number<count;number++){
            chocolates.unshift(color)
        }
    }
    else{
        return 'Number cannot be zero/negative'; 
     }
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number){
    let newArray=[];
    if (number > chocolates.length)
    return "Insufficient chocolates in the dispenser";
     if (number < 0) {
        return 'Number cannot be zero/negative';}
    for (let num = 0; num < number; num++) {
        newArray[num]=chocolates.shift(); 
    }
    return newArray;

}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number){
    var dispenserArray = [];
    if (number > chocolates.length)
        return 'Insufficient chocolates in the dispenser';
    else if (number <=0) {
        return 'Number cannot be zero/negative';
    } 
    else {
        for (let num = 0; num < number; num++) {
            dispenserArray[num] = chocolates.pop();
        }

        return dispenserArray;
        
    }
}






//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, number, color) {
    var c = 0;
    var array = [];
    if (number > chocolates.length)
        return 'Insufficient chocolates in the dispenser';
    else if (number > 0) {

        for (let num = chocolates.length-1; num >= 0; num--) {
            if (color == chocolates[num])
            {
                array[c++] = chocolates.pop();
            }
            if (c == number) {
                break;
            }
        }
        return array;
    } else {
        return 'Number cannot be zero/negative';
    }

}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
    var count = [];
    var color = ["green", "silver", "blue", "crimson", "purple", "red", "pink"]
    for (let i = 0; i< color.length; i++) {
        var c= 0;
        for(let j = 0; j< chocolates.length; j++) {
            if (color[i] == chocolates[j])
            c++;
        }
        count[i] = c;
    }
    return count.filter(Number);
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates,count) {
    let val = chocolates.reduce(function (b, a) {
        if (a in b) {
            b[a]++;
        } else {
            b[a] = 1;
        }
        return b;
    }, {});
    let sarray = chocolates.sort((a, b) => {
        if (val[b] > val[a]) {
            return 1;
        }
        if (val[b] < val[a]) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
    });
    chocolates = sarray;

}

   // console.log(chocolates);
    


//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, count, color, finalColor) {
    if(color==finalColor)
    {
        return "Can't replace the same chocolates";
    }
   else if(count>0)
   {
       for(let i=0;i<chocolates.length;i++)
       {
           if(chocolates[i]==color){
           chocolates[i]=finalColor
       }
    }
    return chocolates;
} else {
    return 'Number cannot be zero/negative';
}
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
    if (color == finalColor)
        return "Can't replace the same chocolates";
    else{
        for(let i=0;i<chocolates.length;i++){
            if (chocolates[i] === color)
                chocolates[i] = finalColor;
        }
           
    }
    var c=0;
    chocolates.forEach(element => {
        if (element == finalColor)
        c++;
    });
    return [c, chocolates];
}    

    




//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
