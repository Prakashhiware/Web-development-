console.log("string and array");
let name1 = "harry"
console.log(name1.toUpperCase());
let name2 = 'PRAKASH'
console.log(name2.toLowerCase());
let name3=`karan`
console.log(name3);
let name4 = "Chhakuli"
console.log(name4.length);
console.log("inside of backtic, what ever thing can add");
console.log(name4[0]);
//template to easy
//to store variable
console.log(`i am ${name2} , now learning javascript  from ${name1} "string can inside of backtics use "  `);

let z = ` ${name3} `;//directly not possible to add interpolation
console.log(z);
//escape squence character
let escape1 = `behind`
let escape2 = "because       the      music"
let escape3= " so hard to find"
console.log(`${escape1} ${escape2}`);
console.log();
console.log(escape1 + "\n" + escape2 + "\r" + "h")

// more 
console.log(escape2.charAt(1)+"charat");
console.log(escape2.indexOf("the")+"indexof");
console.log(escape2.replace("music", "ganna"));
console.log(escape2.repeat(3));
console.log(escape1.slice(2, 5));

console.log(escape1.concat(escape3, " my heart sterio beats for you "))
if (escape1.endsWith("nd")) {
    console.log("yes")
} else {
    console.log("no")
}
console.log();
if (escape1.startsWith("be")) {
    console.log("yes")
} else {
    console.log("no")
}
// console.log(escape2.charAt(1));
//best use of slice

let sla = escape3.slice("so hard to ".length)//only number require
console.log(sla);


