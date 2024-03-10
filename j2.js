console.log("here study condition statement and operator if, else ,ladder if ");
console.log(
  "tip if open terminal  write node then you can use as a calculater"
);
let age = 18;
if (age > 18) {
  console.log("you are mature so you can vote ");
} else {
  console.log("you cant vote");
}
const num1 = 10;
let num2 = 2;
let string1 = "2";

console.log(num1 + num2 + " addition");
console.log(num1 - num2 + " substaction");
console.log(num1 * num2 + " multiplication");
console.log(num1 / num2 + " division");
console.log(num1 ** num2 + " exponention");
console.log((num1 % num2) + "modulse");
console.log(++num2 + "increment");
console.log(--num2 + "decrement");

console.log("comparison operator");
// console.log;
console.log(num1 == num2);
console.log("check same value");
console.log(num1 != num2);
console.log(string1 == num2);
console.log('because compare value');

console.log(string1 === num2);
console.log("compare with type ")
console.log(string1 == string1);
console.log(num2 == num2);

let a = 10;
let b = 20;
if (a>b) {
  console.log("ohh its badluck try next time")
} else if(b>a) {
  console.log("congratulation you are correct");
  
} else {
  let z = 1;
  console.log("try again"+z+"times");
}
let q = 55;
let result= (q> 60) ? console.log("stage1") : (q>35)?console.log("stage2"):console.log("stage3");
