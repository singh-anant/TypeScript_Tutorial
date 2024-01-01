type functionType = (n: number, m: number, l?: number) => number;
// here l is a optional
const fun: functionType = (n, m, l) => {
  if (typeof l === "undefined") return n * m;
  else return n * m * n;
};

console.log(fun(20, 30));

// Using rest operator
const fun2 = (...m: number[]) => {
  return m;
};

console.log(fun2(20, 30, 40, 50, 60));

// Using function with object....

const getData = (product: {
  name: string;
  stock: number;
  price: number;
}): void => {
  console.log(product);
};

// when we use throw keyword it returns never...
const errorHandler = (): never => {
  throw new Error();
};
