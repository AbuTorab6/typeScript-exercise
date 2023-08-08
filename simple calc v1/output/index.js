"use strict";
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);
const res = a + b;
if (isNaN(a) || isNaN(b)) {
    console.log("ERROR: One of the parameters is not a number");
}
else {
    console.log("A:" + a);
    console.log("B:" + b);
    console.log("Total:" + res);
}
console.log(process.argv);
