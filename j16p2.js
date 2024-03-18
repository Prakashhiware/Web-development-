// console.log("callback hell");

// callback hell
// function getcheese(callback) {
//     setTimeout(() => {
//       const cheese = "🧈";
//       console.log("here is my chease" + cheese);
//       callback(cheese);
//     }, 2000);
//   }

//   function makebread(cheese, callback) {
//     const bread = "🥮" + cheese;
//     setTimeout(() => {
//       console.log("here is my bread" + bread);
//       callback(bread);
//     }, 2000);
//   }

//   function getpizza(bread, callback) {
//     const pizza = "🍕" + bread;
//     setTimeout(() => {
//       console.log("here is my pizza" + pizza);
//       // callback()
//     }, 2000);
//   }
//   getcheese((cheese) => {
//     console.log("i got cheese" + cheese);
//     makebread(cheese, (bread) => {
//       console.log("i got bread" + bread);
//       getpizza(bread);
//     });
//   });

//callback hell
// function getink(mixback) {
//     setTimeout(() => {
// const ink=" 🟦 blue "
//         console.log("here is my ink " + ink)
// mixback(ink)

//     },2000)
// }

// function getrefil(ink,mixback) {
//     setTimeout(() => {
//         const refil =  " 🧪 "+ink;
//         console.log("here is my refil" + refil)
//         mixback(refil)

//     }, 2000)
// }
// function getburner(refil) {
//     setTimeout(() => {
//         const burn = " 🔥 " + refil;
//         console.log("here is my burner"+burn)

//     }, 2000);

// }

// getink((ink) => {
//     getrefil(ink, (refil) => {

//         getburner(refil)
//     });
// })

//promise resolve  or reject   syntax   let promise1 = new Promise((resolve,reject) => {})
//111111111111
// function getapi(api1) {
//     return promise1 = new Promise((resolve,reject) => {

//             setTimeout(() => {
//                 console.log("here is api has been"+api1)
//                 reject("some error by me")
//             }, 4000);

//     })
// }
// getapi(" ⌚ clock")
// console.log(promise1);

//2222222
// console.log("promise then catch")
// function getapi(api1) {
//   setTimeout(() => {
//       console.log("here is api has been" + api1);
//       // resolve("success by me")//not working bcuz outside of promises
//   }, 4000);
// }

// let promise1 = new Promise((resolve, reject) => {
//     console.log(getapi("🌵"));
//     resolve("success by me")
// });

//33333333333

// const getpromise = () => {
//   return new Promise((resolve,reject ) =>{
//     console.log("here is my promise")
//     // resolve(" 🥇 yes suceess")
//     reject("sorry network issue 💻")
//   })
// }

// const setpromise = getpromise()
// setpromise.then((reso) => {
//   console.log("then of promise"+reso)
// })
// setpromise.catch((err) => {
//   console.log("catch of promise error"+err)
// })

// 444444

// console.log("promise chain");

// const promise4 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data 1");
//       resolve("suceess1");
//     }, 3000);
//   });
// };

// const promise5 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data 2");
//       resolve("suceess2");
//     }, 3000);
//   });
// };

// promise4().then((res) => {
//   console.log(res);
//   promise5().then((res) => {
//     console.log(res);
//   });
// });

////55555

// const promise6 = (a,b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//      const c= a + b;
//       console.log("data 1 "+c+" 🎯");
//       resolve("suceess1 ");
//     }, 3000);
//   });
// };
// const promise7 = (q,c) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const d = "hello " + q;
//       console.log("data 2 "+d+" 🎯");
//       resolve("suceess2 ");
//     }, 3000);
//   });
// };

/// two method for this declaration
//#1
// promise6(10,10).then((are) => {
//   console.log(are);
//   promise7("coders").then((are) => {
//     console.log(are);
// })
// })
//#2
// promise6(6, 4).then((res) => {
//   console.log(res)
//   return promise7(" coders ");
// }).then((ee) => {
//   console.log(ee);
//   return promise7(" prakash ")
// }).then((ss) => {
//   console.log("last "+ss)
//   return promise6(3,7)
// })

console.log("async function");

/// 11111

// const getwheather = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("here is wheather");
//       resolve(200 + " also call 200 mean suceess");
//     }, 3000);
//   });
// };

// async function mywheather() {
//   await getwheather();
//   console.log("async funtion");
// }

////222222


function delhiweather() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log("delhi weather")
      resolve("suceess full")
    }, 5000);
  })


}
function puneweather() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log("pune weather")
      resolve("suceess full")
    }, 5000);
  })
}

async function weather() {

  console.log("feaching dehli weather")
  await delhiweather().then((es) => {
    console.log(es)
  });
  console.log("feaching pune weather")
  await puneweather().then((es) => {
    console.log(es)
    console.log("complete");
  });

}
let run = weather();
console.log(run)  