//for loop

let thousand = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < 9; i++) {
    element= thousand[i]
  console.log(element)  ;
}
// for in 
hundred= [8,2,4,7,3,8,4]
for (const key in hundred) {
 {
        const element = hundred[key];
        console.log(key)
    }
}
//for of
let ten = [2, 4, 7, 4, 3, 6];
for (const gian of ten) {
    console.log(gian)
}
console.log()
for (const iterator of ten) {
    console.log(iterator)
}

// foreach
// array.forEach(element => {
    
// });

// let child = [];
// for (let z = 0; z < ten.length; z++) {
//     const element = ten[z];
// child.unshift(element**2)
//     console.log("z" + child)
    
// }

//map
// const child = ten.map((apan) =>
// {
//     return apan ** 2;
// })

// console.log(child)

// //filter
// function greaterthan3( great3) {
//     if (great3 > 3) {
//         return true;
//     } return false;
// }
// const odd = ( numbee) => {
//     return numbee%2!== 0;
// }
// console.log(ten.filter(odd))

// console.log(ten.filter((gta) => {
//     if (gta % 2 == 0) {
//         return true
//     }
//     return false;
// }))




// const array = [1, 2, 3, 4, 5];

// array.forEach(function(element, index, arr) {
//   console.log(`Element at index ${index}: ${element}`);
// });


for (const bartan of ten) {
    const element = ten;
    console.log(element)
}
const sum = ten.reduce((first, second) =>

{
    return first + second;
})
console.log(sum)


 

// ten.forEach(function (element, index, arr) {
//     console.log(index,element, arr);
// })

// const array4 = [1, 2, 3, 4, 5];

// array4.forEach(function(element ,index) {
//   console.log( element,index);
// });


// filter
const filter3 = thousand.filter((hell) => {
   let  no =hell+1;
return no;
})
console.log(filter3);
// const filter2 = thousand.filter(numa(hell))
// function num1(numa) {

//     return numa ** 2;
// }
// console.log(num1(2))
// console.log(fillter2);