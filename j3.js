console.log("Loops and functions in javscripts");
//for loop

// for (let a=0; a < 10; a++){
//     console.log("table" +a);
// }

function sum(f, g, d = 10) {
  // here d=10 is default value of d that can change what you waannt
  return f + g + d;
}
function spread(thing) {
  let count = 1;
  while (count < 11) {
    console.log(" i love " + thing + ":)");
    count++;
  }
}
//object using for in
let hell = {
  bmw: "m3",
  mercedese: "amg",
  nissan: "gtr",
  minecraft: "creeper",
};

for (const key in hell) {
  console.log("keys is   " + key + "and object is  " + hell[key]);
}
console.log(hell);

let games = {
  minecraft: "java editon",
  freefire: 2019,
  gta: 2017,
  "subway sufer": 2015,
};
for (let count in games) {
  console.log("  keys  " + count.length + "  value  " + games[count]);
}

//problem 4
// let check = 0;
// let cn = 45;
// while (check != cn) {
// }

spread("money");
console.log(sum(3, 4));
console.log(sum(13, 14));
console.log(sum(3, 4, 0));
console.log(sum(3, 4, 20));

function wishes(name) {
  console.log("Happy birthday too you " + name);
}

wishes("prakash");

//arrow's function
const fun1 = (can) => {
  console.log("i am a arrow function" + can);
};
fun1(" hello");
// using arrow function to solve mean value
const means = (mm1, mm2, mm3, mm4) => {
  return (mm1 + mm2 + mm3 + mm4) / 4;
};

console.log(means(4, 5, 3, 5, 4));

let text;
let favDrink = prompt("What's your favorite cocktail drink?");
switch(favDrink) {
  case "Coca-Cola":
    text = "Excellent choice! Coca-Cola is good for your soul.";
    break;
  case "Pepsi":
    text = "Pepsi is my favorite too!";
    break;
  case "Sprite":
    text = "Really? Are you sure the Sprite is your favorite?";
    break;
  default:
    text = "I have never heard of that one!";
}
