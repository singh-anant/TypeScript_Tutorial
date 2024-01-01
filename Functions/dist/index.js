"use strict";
// here l is a optional
const fun = (n, m, l) => {
    if (typeof l === "undefined")
        return n * m;
    else
        return n * m * n;
};
console.log(fun(20, 30));
// Using rest operator
const fun2 = (...m) => {
    return m;
};
console.log(fun2(20, 30, 40, 50, 60));
// Using function with object....
const getData = (product) => {
    console.log(product);
};
// when we use throw keyword it returns never...
const errorHandler = () => {
    throw new Error();
};
