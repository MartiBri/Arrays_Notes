//Declaring an empty array

let arr = [];

//Declare and add elements (initializing the array)
let names = ["John", "George", "Susan", "Alejandro"];

let runIt = function(){

    //outputs the whole array
    alert(names);

    //output ONE element from the array at the index provided
    alert(names[1]);

    //Used variables to grab an element and combine it with a string/other variables
    let thisGuy = names[3];
    let message = " is a good name.";
    alert(thisGuy + message);


};
//this function demonstrates the methods available to the array

let doTheThings = function(){

    //ADDING FUNCTIONS

    //ADDS to the END
    //alert(arr);
    arr.push("Mickey");
    alert(arr + " the number of elements is: " + arr.length);
    arr.push(" Donald", " Goofy", " Minnie", " Daisy", " Pluto");
    alert(arr + " the number of elements is: " + arr.length);

    // ELEMENTS VIA PROMPT
    //alert("Please name the 7 dwarfs");
    // As long as I is less than 7 it'll run the loop
    //for(let i = o; i<7; i++){
    //  let answer = prompt("Please name the 7 dwarfs");
    // arr.push(answer);
    //alert(arr + " The number of element is " + arr.length);
    //  let answer = prompt("Enter your age");
    //arr.push(answer);
    // answer = prompt("pick either true or false");
    //  arr.push(answer);
    //  alert(arr);


    let number = 4;
    let answer = true;

    arr.push(number,answer);
    alert(arr);
};

let doTheUnshift = function(a,b,c){

        //adding function
        // alert(names[2]);

    //adds to the beginning
    names.unshift("Jerry");

    //alert(names);
    // alert(names[2]);
    names.unshift(a);
    names.unshift(b);
    names.unshift(c);
    // alert(" first three unshifts " + names);
        names.unshift(a,b,c);
        //alert (" next unshifts " + names);
    //clear out array
    arr = [];
    arr.push(a,c);
    arr.unshift(b);
    //alert(arr);

};

let doTheSplice = function(){
    doTheUnshift("Gual darmit","thingy","HankyPanky");
    //alert(names);
    //alert(arr);
    // Method 1 remove one add one
        names.splice(3,"Tom");
        arr.splice(3,"Doug");
        //alert(names);
    // remove any elements
    names.splice(3,4,"Mike","Harry","Kevin");
    // alert(names);
    // removes
     // alert(arr)
    arr.splice(1,2);
    //alert(arr);

};

let doThePopShift = function(){
    doTheSplice();
    //removes from the end
    alert(names);
    let lastName = names.pop();
    alert(lastName);
    alert(names);
    names.push(lastName);
    alert(names);
    // removes from beginning
    let firstName = names.shift();
    alert(firstName);
    alert(names);
};