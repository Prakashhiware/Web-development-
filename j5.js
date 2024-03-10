console.log("just array  things");

// let arr = [3.23, 24, 6, 3, 2, 5];
// for (key in arr) {
//     console.log(arr[key])
// }
// console.log(arr);
// console.log(typeof arr);
// console.log(arr,typeof arr);
// console.log(arr.length);
// console.log(arr.toString())
// console.log(arr.join(" and "))

let good = [1, 2, 3, 4, 5, 6];
console.log(good.join(" and "));
console.log("here our push pop shift unshift");
console.log(good.pop()); //remove last letter
console.log(good.shift()); //remove first letter
console.log(good.unshift("prakash")); //add first letter
console.log(good.push("hiware")); //add last letter
console.log(good.join(" and "));

let d = [5, 8, 6, 4, 6, 3];
delete d[4];
console.log(d);

let a1 = [1, 2, 3, 4, 5];
let a2 = [5, 6, 7, 8, 9];
let a3 = [10, 11, 12, 13, 14];
a1.concat(a2, a3);
console.log(a1.concat(a2, a3));
console.log(a1);
console.log(d.sort());

console.log(a3.splice(1, 3));
//include 11 and goes on 3 items

console.log(a2.slice(1, 3));
console.log(a2.reverse());

// const gaddi={
//     "honda":"civic",
//     "ktm":"Crossbow",
//     "buggati":"chiron"
// }
// console.log(gaddi);
// for (const chabi in gaddi) {
//    console.log(gaddi[chabi])
// }

//for loop
let thousand = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i; i < 10; i++) {
  const alpha = thousand[i];
  console.log(alpha);
}
