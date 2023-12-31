let a = 24;
// a="Hello";//error will be shown

let captain: string = "Monkey.D.Luffy";
let bounty: Number = 3000000000;

// Now but if we want that we can put any type of value use any
let id: any = 22;
id = "22";

// Another way of declaration.
let nameOfViceCaptain = <string>"Roronoa Zoro";

// Creating Union Variable-like if we want to put two type of variable together like Queen Elizabeth 2..can use multiple datatype together.

let surname: string | number;
surname = "222";
surname = 1223;

// In case of function
const loopCaptainName = function (n: number, name: string) {
  for (let index = 0; index < n; index++) {
    console.log(name);
  }
};

loopCaptainName(4, captain);

const giveAnswerToCaptain = function (name: string): string {
  return "Aye Aye Captain " + name;
};

console.log(giveAnswerToCaptain(captain));
