// Define a function that takes two numbers and a callback function
// function add(x, y, callback) {
//     // Add the two numbers
//     const result = x + y;
//     // Call the callback function with the result
//     callback(result);
// }

// // Define a function to display the result
// function displayResult(result) {
//     // Log the result to the console
//     console.log("The result is:", result);
// }

// // Call the add function and pass 2 and 3 as numbers, and displayResult as the callback
// add(2, 3, displayResult);

// // function sum(a, b) {
// //     console.log(a + b);
// // }
// // function calculater(e,f ,callback) {
// //     callback(e,f)
// // }
// // calculater(1,2 ,sum)

// console.log("first")
// function even(k) {
//     if (k %2== 0) {
//         console.log("istrue even" )
//     } else {
//         console.log("isfalse even")
//     }
// }
// console.log("seconds")
// function odd(m, callbacks) {
//     if (m %2==! 0){
//         console.log("istrue odd")
//     }
//     else {
//         console.log("isfalse odd")
//     }
//     callbacks(m);

// }
// odd(2,even)
// console.log("three")
// console.log("four")

// function getdata(callback) {
//     setTimeout(() => {
//         console.log("Inside getdata function 2sec letter");
//         callback(); // No additional data is passed to the callback
//     }, 2000);
// }

// function sum() {
//     console.log("Inside sum function");
// }

// getdata(sum); // Pass 'sum' as a callback function

// function addition(a,b,callback) {
//     console.log("addition first went")
//     callback(a,b)
// }
// function substraction(a,b) {
//     console.log("substraction second reached",a-b)
// }
// addition(10,5,substraction)

// call back function and call back hell
// function getdata(data, getnextdata) {
//     setTimeout(()=> {
//         console.log("data", data)
//        getnextdata(data)
//    },2000)
// }

// getdata(1, () => {
//     getdata(2, () => {
//         getdata(3, () => {
//             getdata(4)
//         })
//     })
// })

//

function colors(callback) {
  setTimeout(() => {
    let hex = "1234567890abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    console.log("my color is " + color);
    callback(color);
  }, 2000);
}

function setBackground(color) {
  document.body.style.backgroundColor = color;
}

// colors(setBackground)

// function mi(nam,  phonekar) {
//     console.log("ksa ahe", nam);
//     phonekar(nam);

// }
// function tyla(naam) {
//   let string = "hello";
//   if (string === naam) {
//     console.log("thik ahe");
//   } else {
//     console.log("chal yeto");
//   }
// }

// mi("hello", tyla);

// // Main function
// function mainFunction  (callback)  {
// 	setTimeout(() => {
// 		callback([2, 3, 4]);
// 	}, 2000)
// }

// // Add function
// function  add (array) {
// 	let sum = 0;
// 	for(let i of array) {
// 		sum += i;
// 	}
// 	console.log(sum);
// }

// // Calling main function
// mainFunction(add);

// function main( callback) {
//     callback([4,5,6,7])
// }
// function sum(good) {
//     let add = 0;
//     for (const element of good) {
//         add += element;
//     }
//     console.log(add)
// }
// main(sum);

