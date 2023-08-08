const argv: any[] = process.argv;

let myArr: any[] = argv.slice(2, argv.length);

let newArr: number[] = myArr.map((item) => {
  return parseFloat(item);
});

let sum: number = 0;
let errorNum: string = "";
let flag: number = 0;

newArr.forEach((p1, p2) => {
  if (isNaN(p1) == true) {
    errorNum = myArr[p2];
    flag = 1;
  } else {
    sum = sum + p1;
  }
});

if (flag == 1) {
  console.log(`ERROR: The value ${errorNum}, is not a number`);
  console.log("Numbers entered:", myArr);
  console.log("TOTAL : 0");
} else {
  console.log("Numbers entered:", newArr);
  console.log("TOTAL:", sum);
}
