type pirateName = string | number; //creating custom datatypes..
let pirate: pirateName = "Trafalgar.D.Law";

type sayCaptainName = (name: string) => string;
const captainName: sayCaptainName = (name) => {
  return "Name of the captain is-:" + name;
};
// declaring arrays
const arr: number[] = [12, 24, 36, 48];
const arr2: string[] = ["luffy", "zoro", "nami"];

const arr3: Array<string> = ["law", "bepo "];
const arr4: Array<boolean> = new Array(20);
const arr5: Array<string | number> = [1, "Hello", 2, "Lukaku"];

arr2.forEach((i) => {
  console.log(i.charAt(0));
});

// Using tuple i.e like a fixed array
const arr6: [number, number, string] = [22, 33, "Shanks"];
