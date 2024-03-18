console.log(" alert and prompt console all and some chapter 6")

obj = { name: "prakash", age: 19, todaydate: "7 - 3 - 24" }
console.log(obj)
console.table(obj)

for (const ele in obj)
{
    console.log(ele)
}
// console.log(obj.age)
console.assert(obj.age !== 19)
console.error(" hii i am error nice to meet you 'that visible in console of chrome'")
console.info(obj)


console.time("start")
for (let i = 0; i < 1; i++) {

console.log("khamoshiya kahi jo andhera yahi ")
console.log("bekar hai baat karne ko ")
}  
// console.timeEnd();

alert("enter the number")
let a = prompt("hello world")
Number.parseInt(a)
let zoo= confirm("are you sure to write on page")
if(zoo){
document.write(a);
}
else {
    document.write("please allow me to display")
}


