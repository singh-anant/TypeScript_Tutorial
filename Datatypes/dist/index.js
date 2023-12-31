"use strict";
let a = 24;
// a="Hello";//error will be shown
let captain = "Monkey.D.Luffy";
let bounty = 3000000000;
// Now but if we want that we can put any type of value use any
let id = 22;
id = "22";
// Another way of declaration.
let nameOfViceCaptain = "Roronoa Zoro";
// Creating Union Variable-like if we want to put two type of variable together like Queen Elizabeth 2..can use multiple datatype together.
let surname;
surname = "222";
surname = 1223;
// In case of function
const loopCaptainName = function (n, name) {
    for (let index = 0; index < n; index++) {
        console.log(name);
    }
};
loopCaptainName(4, captain);
const giveAnswerToCaptain = function (name) {
    return "Aye Aye Captain " + name;
};
console.log(giveAnswerToCaptain(captain));
